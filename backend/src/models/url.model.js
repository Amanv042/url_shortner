import mongoose, { Schema } from "mongoose"

const urlSchema = new Schema(
	{
		redirectURL: {
			type: String,
			required: true,
		},
		shortId: {
			type: String,
			required: true,
			unique: true,
		},
		visitHistory: [{ timeStamp: { type: Number } }],
	},
	{
		timestamps: true,
	}
)

export default URL = mongoose.model("Url", urlSchema)
