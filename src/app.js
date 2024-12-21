import express from 'express';
import ProductRouter from "./router/product.router.js";
import CartRouter from "./router/carts.router.js";


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use("/api/products", ProductRouter);
app.use("/api/carts", CartRouter);


const PORT = 8080;
const server = app.listen(PORT, () =>{
    console.log(`Express por Local Host ${server.address().port}`)
});
server.on("error", (error) => console.log(`Error del servidor ${error}`));








