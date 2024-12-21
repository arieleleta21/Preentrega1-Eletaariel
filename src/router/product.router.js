import Router from "express";
import ProductManager from "../productos/ProductsManager.js";

const ProductRouter = Router();

const productManager = new ProductManager("./src/files/Productos.json");
const readProducts = productManager.readProduct();


ProductRouter.get("/", async (req, res) => {
    let limit = parseInt(req.query.limit);
    if (!limit) return res.send(await readProducts);
    let allProducts = await readProducts;
    let productLimit = allProducts.slice(limit);
    res.send(productLimit);
});

ProductRouter.get("/:id", async (req, res) => {
    let id = parseInt(req.params.id);
    let allProducts = await readProducts;
    let ProductById = allProducts.find(product => `${product.id}` === `${id}`);
    res.send(ProductById);

});

ProductRouter.post("/", async (req, res) => {
    let newProduct = req.body;
    res.send(await productManager.addProduct(newProduct));
});

ProductRouter.put("/:id", async (req, res) => {
    let id = req.params.id;
    let updateProduct = req.body;
    res.send(await productManager.updateProduct(id, updateProduct));
});

ProductRouter.delete("/:id", async (req, res) => {
    let id = req.params.id;
    res.send(await productManager.deleteProduct(id));
});

export default ProductRouter