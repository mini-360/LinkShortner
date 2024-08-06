import express from "express"

const staticRouter = express.Router()


staticRouter.get("/", (req, res) => {
    return res.render("home")
})




export default staticRouter