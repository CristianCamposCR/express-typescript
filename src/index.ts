import express from "express"; //ESModules

import diaryRouter from './routes/diaries'
// const express = require('express') ---> commonjs
const app = express();
app.use(express.json()); //transforma el req.body en json

const PORT = 3000;
app.get("/ping", (_req, res) => {
  console.log("someone pinged here_____");
  res.send("pong");
});

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => console.log(`Server runnning on port ${PORT}`));
