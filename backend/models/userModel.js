import {Schema, model}from "mongoose";

const schema = Schema({
    fullname: String,
    email: String,
    password: String
});

export default model('user', schema);