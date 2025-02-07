import { Router } from "express"

import {
	generateShortUrl,
	handleRedirect,
	handleAnalytics,
} from "../controllers/url.controller.js"

const router = Router()

router.route("/").post(generateShortUrl)
router.route("/:shortId").get(handleRedirect)
router.route("/analytics/:shortId").get(handleAnalytics)

export default router
