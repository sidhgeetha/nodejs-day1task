import express from 'express';
import fs from 'fs';
import {format} from 'date-fns';

const app =express();
const PORT =4000;

app.get('/', (req,res)=>{

    // res.status(200).json({message:"Hi team,welcome to guvi world"})
    res.status(200).send(`<div style="background-color:yellow;color:green"> <h1>Hi team,welcome to guvi world </h1> </div>`)

})




app.get("/write", (req, res) => {
  let today = format(new Date(), "dd-mm-yyyy-hh-mm-ss");
  console.log("Today:", today);

  const filePath = `TimeStamp/${today}.txt`;

  fs.writeFileSync(filePath, today, "utf8");

  res.status(200).send(`${today}`);
});

// Read file API
app.get("/read", (req, res) => {
  const files = fs.readdirSync("TimeStamp");
 
  const latestFile = files[files.length - 1];
  const filePath = `TimeStamp/${latestFile}`;
  let data = fs.readFileSync(filePath, "utf8");
  res.status(200).send(data);
});








app.listen(PORT, ()=>{
    console.log(`app is running in the port ${PORT}`);

})