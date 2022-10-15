import fetch from "node-fetch";
import express from "express";

// const express = require("express");
import mongoose from "mongoose";
// const cors = require("cors");
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json())

mongoose.connect("mongodb+srv://yogesh:yogesh123@cluster0.bn8sdsa.mongodb.net/softsensorstore?retryWrites=true&w=majority")

const postSchema= new mongoose.Schema({
    id:{
        type:Number
    },
    title:{
        type:String
    },
    category:{
        type:String
    },
    image:{
        type:String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    }
});

const Post= mongoose.model('Post',postSchema)
// async function getPosts(){
//    const mypost= await fetch("https://fakestoreapi.com/products")
//    const response = await mypost.json()
// //    console.log(response)
// for(let i=0; i<response.length; i++){
//     const post=new Post({
//         id:response[i]["id"],
//         title:response[i]["title"],
//         category:response[i]["category"],
//         image:response[i]["image"],
//         price:response[i]["price"],
//         description:response[i]["description"],
//     })
//     post.save();
// }
// }



// getPosts()

app.get("/",async(req, res)=>{
    res.send ("page working")
})
app.get("/data",async(req, res)=>{
    const notes = await Post.find({})
    res.send(notes)

})

const PORT = process.env.PORT || 8080
app.listen(PORT, async() => {
    console.log("server _listening")
})
