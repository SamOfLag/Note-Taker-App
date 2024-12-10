import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async (): Promise<void> => {
    try {
       const connect = await mongoose.connect(process.env.MONGO_URI as string)
        console.log(colors.green.bold.underline(`MongoDB Connected: ${connect.connection.host}`))
    } catch (error) {
        console.log('MongoDB connection failed')
    }
}

export default connectDB