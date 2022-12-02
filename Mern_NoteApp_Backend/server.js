const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 4000
const Note = require('./models/Note')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Connect to mongoose
mongoose.connect('mongodb://localhost/reactNote', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('DB connected')).catch(err=> console.log(err))

//CREATE
app.post('/newNote', (req, res)=>{
    const title = req.body.title
    const note = req.body.note

    const newNote = new Note ({
        title, note
    })
    newNote.save((err, data) => {
        if(err){
            console.log(err)
        }
        res.send('OK')
    })
    console.log(newNote)
})
//READ

//UPDATE

//DELETE


app.listen(PORT, ()=>{console.log(`Server started at port ${PORT}`)} )