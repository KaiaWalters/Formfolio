const mongoose = require('mongoose')

const main = async () => {
    await mongoose.connect(process.env.MONGO_URI);
};

main().catch((err) => console.log(err));

export default main;
