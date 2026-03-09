const express=require("express")
const app=express()

app.get('/api',(req,res)=>{
    res.send('Hello from Express Frameworks')
})
app.post('/create',(req,res)=>{
    const data = req.body
    res.send(data)
})
app.listen(3000,()=>{
    console.log('Server running on 3000')
})