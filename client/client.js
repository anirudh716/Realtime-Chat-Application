import express from "express";
import { dirname , join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static(join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, "public", "index.html"));
});

app.post('/submit', (req, res) => {
    res.sendFile(join(__dirname, "public", "chat.html"));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});