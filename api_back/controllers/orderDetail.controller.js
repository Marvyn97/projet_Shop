import OrderDetail from "../models/orderDetail.models.js";

export const getOrderDetail = async (req, res) => {
    const query = `SELECT * FROM order_detail
                    INNER JOIN orders ON orders.order_number = order_detail.order_number
                    INNER JOIN product ON product.id = order_detail.product_id`;
    try {
        await OrderDetail.getOrderDetail(query);
        res.json({
            status: 200,
            msg: "détail de la commande effectué"
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 404,
            msg: "problème au niveau du détail de la commande",
        })
    }
}

export const getOrderDetailById = async (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM order_detail
                    INNER JOIN orders ON orders.order_number = order_detail.order_number
                    INNER JOIN product ON product.id = order_detail.product_id WHERE order_number = ?`;
    try {
        await OrderDetail.getOrderdetailById(query, id);
        res.json({
            status: 200,
            msg: "détail des commande par id effectué"
        })
    } catch (error) {
        console.log(error);
        res.json({
            status: 200,
            msg: "problème"
        })
    }
}



