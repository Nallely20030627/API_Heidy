import { Router } from "express";
import ejemploRoutes from "./ejemplo.routes.js";
import menuRouter from "./Menu.routes.js";


const indexRouter = Router();

indexRouter.use('/ejemplo', ejemploRoutes);
indexRouter.use('/menu', menuRouter); 


export default indexRouter;