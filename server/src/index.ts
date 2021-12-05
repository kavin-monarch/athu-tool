import * as express from "express";
import * as cors from "cors";
import "reflect-metadata";
import {createConnection} from "typeorm";
import devAuthRoutes from "./routes/devAuthRoutes";

createConnection().then(async connection => {
    const app:express.Express = express();
    app.use(cors());
    app.use(express.json());

    app.use("/authV2",devAuthRoutes);

    app.listen(8080,"localhost",()=>{
        console.log("Server started at port 8080");
    })

}).catch(error => console.log(error));
