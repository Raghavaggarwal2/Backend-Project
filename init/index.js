const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const { object } = require("joi");

const Mongo_Url = "mongodb://127.0.0.1:27017/wanderlust1"

main().then(() => {
    console.log("Connected to db");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect(Mongo_Url);
}

const initDB = async() => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: '66ed5ffce41e57c7ad4f5666'}));
    await Listing.insertMany(initData.data);
    console.log("Data was initialized");
};

initDB();