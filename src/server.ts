import express from "express";
import cors from "cors";
import router from "./routes/routes.js";

const app = express();

app
    .use(cors())
    .use(express.json())
    .use(router);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running in port ${port}`));
