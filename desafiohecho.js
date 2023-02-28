class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = { title, description, price, thumbnail, code, stock };
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find((product) => product.code === id);

        if (!product) {
            throw new Error("Not Found");
        }

        return product;
    }
}

const productManager = new ProductManager();
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
productManager.addProduct("Product 2", "Description 2", 20.99, "thumbnail2.jpg", "P002", 3);

try {
    const product = productManager.getProductById("abc123");
    console.log(product); 
} catch (error) {
    console.log(error.message);
}

try {
    const product = productManager.getProductById("P003");
    console.log(product);
} catch (error) {
    console.log(error.message);
}
