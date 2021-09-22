const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get('/', (req, res)=>{
  res.send("App is working")
})


app.listen(process.env.PORT || 2000, ()=>{console.log(`Server is running on port ${process.env.PORT}`)})