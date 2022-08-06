const products = [{
        id: 1,
        title: "React.js",
        category: "frontend",
        createdAt: "2021-10-31T15:02:00.411Z",
    },
    {
        id: 2,
        title: "Node.js",
        category: "backend",
        createdAt: "2021-10-31T15:03:23.556Z",
    },
    {
        id: 3,
        title: "Vue.js",
        category: "frontend",
        createdAt: "2021-11-01T10:47:26.889Z",
    },
];

const categories = [{
        id: 1,
        title: "frontend",
        description: "frontend of applications",
        createdAt: "2021-11-01T10:47:26.889Z",
    },
    {
        id: 2,
        title: "backend",
        description: "the backend of the applications",
        createdAt: "2021-10-01T10:47:26.889Z",
    },
];




export default class Storage {
    // add new category
    // save category
    // getAll category



    static getAllCategories() {
        // products,category=>localStorage=>
        const savedCategories = JSON.parse(localStorage.getItem("category")) || [];
        // sort نزولی
        const sortedCategories = savedCategories.sort((a, b) => {
            return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
        });
        return sortedCategories;
    }
    static saveCategory(categoryToSave) {
        const savedCategories = Storage.getAllCategories();
        const existedItem = savedCategories.find(c => c.id === categoryToSave.id);
        if (existedItem) {
            existedItem.title = categoryToSave.title;
            existedItem.description = categoryToSave.description;
        } else {
            categoryToSave.id = new Date().getTime();
            categoryToSave.createdAt = new Date().toString();
            savedCategories.push(categoryToSave);
        }
        localStorage.setItem("category", JSON.stringify(savedCategories));
    }
    static getAllProducts(sort = "newest") {
        const savedProducts = JSON.parse(localStorage.getItem("products")) || [];
        return savedProducts.sort((a, b) => {
            if (sort === "newest") {
                return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
            } else if (sort === "oldest") {
                return new Date(a.createdAt) < new Date(b.createdAt) ? -1 : 1;

            }
        });
    }
    static saveProduct(productToSave) {
        const savedProducts = Storage.getAllProducts();
        const existedItem = savedProducts.find(c => c.id === productToSave.id);
        if (existedItem) {
            // EDIT
            existedproductToSave.title;
            existedItem.quantity = productToSave.quantity;
            existedItem.category = productToSave.category;
        } else {
            // NEW
            productToSave.id = new Date().getTime();
            productToSave.createdAt = new Date().toString();
            savedProducts.push(productToSave);
        }
        localStorage.setItem("products", JSON.stringify(savedProducts));
    }
    static deleteProduct(id) {
        const saveProducts = Storage.getAllProducts();
        const filteredProducts = saveProducts.filter((p) => p.id !== parseInt(id))
        localStorage.setItem("products", JSON.stringify(filteredProducts));
    }
}