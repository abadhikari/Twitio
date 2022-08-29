import express, { Request,Response,Application } from 'express';

const app:Application = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req:Request, res:Response):void => {
    res.send("Set up TwitService with Typescript.");
});

app.listen(PORT, ():void => {
    console.log(`Server running here: localhost:${PORT}`);
});