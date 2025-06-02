import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    ingredientes:{
        type: [String],
        required: true
    },
    instrucciones:{
        type: [String],
        required: true
    }
})


const Menu = mongoose.model('Menu', MenuSchema);
export default Menu;