import mongoose from "mongoose";
import Menu from "../models/Menu.models.js";

export const getAllMenuController = async (req, res) => {
    console.log('Obtiene todos los menús');
    try {
        const menu = await Menu.find({}, { __v: 0 });
        if (menu.length === 0) {
            return res.status(404).json({
                msg: 'No se han encontrado menús'
            });
        }

        return res.status(200).json({
            menu
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al mostrar los elementos'
        });
    }
}


export const getIdMenuController = async (req, res) => {
    console.log('Trayendo los elementos por id');
    const id = req.params.id;
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        const menu = await Menu.findById(id);
        if (!menu) {
            return res.status(404).json({
                msg: 'No se ha encontrado el menú'
            });
        }
        return res.status(200).json({
            menu
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener el menú'
        });
    }
}

export const postMenuController = async (req, res) => {
    console.log('Subiendo datos a la base de datos');
    const body = req.body;
    const menu = new Menu(body);

    try {
        const validationError = menu.validateSync();
        if (validationError) {
            const errorMessage = Object.values(validationError.errors).map(error => error.message);
            return res.status(400).json({
                msg: 'Error de validación',
                errors: errorMessage
            });
        }

        await menu.save();
        return res.status(201).json({
            msg: 'Menú creado correctamente',
            menu
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al crear el menú'
        });
    }
}

export const putMenuController = async (req, res) => {
    console.log('Actualizando el menú');
    const id = req.params.id;
    const body = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        const menu = await Menu.findByIdAndUpdate(id, body, { new: true });
        if (!menu) {
            return res.status(404).json({
                msg: 'No se ha encontrado el menú'
            });
        }

        return res.status(200).json({
            msg: 'Menú actualizado correctamente',
            menu
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al actualizar el menú'
        });
    }
}

export const deleteMenuController = async (req, res) => {
    console.log('Eliminando el menú');
    const id = req.params.id;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        const menu = await Menu.findByIdAndDelete(id);
        if (!menu) {
            return res.status(404).json({
                msg: 'No se ha encontrado el menú'
            });
        }

        return res.status(200).json({
            msg: 'Menú eliminado correctamente',
            menu
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al eliminar el menú'
        });
    }
}

