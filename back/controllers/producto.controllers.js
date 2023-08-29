import { getProductoModel } from "../models/producto.models.js";

export const getProducto = async (req, res ) => {

   
    res.json({
        success: true,  
        msg: 'mensaje', 
        data : getProductoModel()
    })
}