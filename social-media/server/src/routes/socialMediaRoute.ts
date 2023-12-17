import { Application } from "express";
import authRouter from "./auth";

const socialMediaApiRoutes = (app: Application) => {
    app.use("/api/v1/auth", authRouter);
};

export default socialMediaApiRoutes;
