import express from "express"; //cambiamos a notacion ESM
import router from "./router";
const app = express();

app.use("/api", router);

export default app;
