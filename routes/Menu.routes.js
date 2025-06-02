import { Router } from "express";
import * as menu from "../controllers/Menu.controller.js";

const menuRouter = Router();
menuRouter.get('/', menu.getAllMenuController);
menuRouter.get('/:id', menu.getIdMenuController);
menuRouter.post('/', menu.postMenuController);
menuRouter.put('/:id', menu.putMenuController);
menuRouter.delete('/:id', menu.deleteMenuController);

export default menuRouter;
