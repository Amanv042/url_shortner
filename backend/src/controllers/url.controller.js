import { nanoid } from "nanoid"
import URL from "../models/url.model.js"

async function generateShortUrl(req, res) {
	const { redirectURL } = req.body

	try {
		const shortID = nanoid(10)
		if (!shortID) throw new Error("Something went wrong")
		const url = new URL({
			shortId: shortID,
			redirectURL,
			visitHistory: [],
		})

		await url.save()

		return res.status(201).json({
			status: "success",
			id: shortID,
		})
	} catch (error) {
		console.log(error)
	}
}

async function handleRedirect(req, res) {
	const { shortId } = req.params
	const entry = await URL.findOneAndUpdate(
		{ shortId },
		{
			$push: {
				visitHistory: {
					timeStamp: Date.now(),
				},
			},
		}
	)

	res.redirect(entry.redirectURL)
}

async function handleAnalytics(req, res) {
	const { shortId } = req.params
	const entry = await URL.findOne({ shortId })
	res.json({ data: entry, total_clicks: entry.visitHistory.length })
}

export { generateShortUrl, handleRedirect, handleAnalytics }
