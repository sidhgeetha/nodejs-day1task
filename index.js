import express from 'express';

const app =express();
const PORT =4000;

app.get('/', (req,res)=>{

    res.status(200).json({message:"Hi team,welcome to guvi world"})

})



app.listen(PORT, ()=>{
    console.log(`app is running in the port ${PORT}`);

})