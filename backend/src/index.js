import dotenv from "dotenv"
import connectDB from "./database/database_config.js"
import { app } from "./app.js"

dotenv.config()

connectDB()
	.then(() => {
		app.listen(process.env.PORT || 8000, () => {
			console.log(`Server is running on port ${process.env.PORT || 8000}`)
		})
	})
	.catch((error) => {
		console.log("ERROR NAME : ", error)
	})
