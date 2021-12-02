const express = require("express")
const app = express()
const mongoose = require("mongoose")
const mySchema = require("./mySchema")

const url = "mongodb+srv://admin-souvik:test123@cluster0.zr3n6.mongodb.net/Test?retryWrites=true&w=majority"
mongoose.connect(url).then(() => console.log("Connected to DB !"))

app.use(express.json())

app.post("/add-new-post", async (req, res) => {
    const BookName = req.body.bookname;
    const Name = req.body.nameofissuer;
    const DueDate = req.body.date;

    try {
        const newData = new mySchema(
            {
                bookname: BookName,
                nameofissuer: Name,
                date: DueDate
            }
        )
        const savedData = await newData.save()
    }
    catch (err) {
        req.json(err)
    }
})

app.use("/", (req, res) => {
    res.json(
        { "message": "Your express server is started !" }
    )
})

app.listen(3000, () => console.log("Express Started !"))