const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        console.log(
            `Mongo DB connected ${conn.connection.host} and Database state is ${mongoose.connection.readyState}`
                .cyan.underline.bold
        );
    } catch (err) {
        console.log(`Error: ${err.message}`.red);
        process.exit(1);
    }
};

module.exports = connectDB;
