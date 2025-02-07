import express from "express"
import cors from "cors"
const app = express()

// middleware
// cors middleware settings
app.use(cors())

// Express middleware to allow json configuration
app.use(express.json({ limit: "16kb" }))

app.use(express.urlencoded({ extended: true }))

// importing routes
import urlShortner from "./routes/url.routes.js"

// using them as middleware
app.use("/api/v1/url", urlShortner)

export { app }
