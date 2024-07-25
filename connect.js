import mongoose from "mongoose"


async function connectToMongoDB(url,options) {
    return mongoose.connect(url,options)
}

export default connectToMongoDB