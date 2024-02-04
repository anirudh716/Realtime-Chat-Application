import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
// import { dirname } from "path";
// import { fileURLToPath } from "url";

// const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.sendFile("E:/Projects/Realtime-Chat-Application/client/public/index.html");
});


app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});