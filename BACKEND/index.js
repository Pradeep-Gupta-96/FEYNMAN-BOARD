const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express();
app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

//connection to db
mongoose.set('strictQuery', true)



//  defining Schema
const FEYNMANSchema = new mongoose.Schema({
    items: String,
    text: String
});

const FEYNMAN = mongoose.model('FEYNMAN', FEYNMANSchema);

// GET METHOD
app.get("/", (req, res) => {
    console.log("ok")

})

//POST METHOD
app.post("/", (req, res) => {
    console.log(req.body)
    const { items, text } = req.body
    const FEYNMANobj = new FEYNMAN({
        items,
        text
    })
    FEYNMANobj.save(err=>{
        if(err){
            console.log("err")
        }
    })
})

mongoose.connect("mongodb://localhost:27017/boardDB", () => {
    console.log("connected")
})
app.listen(8000, () => {
    console.log("backend created at port 8000")
})
