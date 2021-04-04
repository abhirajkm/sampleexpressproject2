var exp=require('express')

app=exp()
app.get('/',(x,y)=>{
    y.send("Hello Abhiraj")
})
app.get('/profile',(x,y)=>{
    y.send("Welcome to Profile Page")
})
app.listen(3000)