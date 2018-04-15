var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,

    user: "root",

    password: "root",
    database: "bamazon_db"
});

function validateInput(value) {
    var integer = Number.isInteger(parseFloat(value));
    var sign = Math.sign(value);
    if (integer && (sign === 1)) {
        return true;
    } else {
        return 'Please enter a whole non-zero number.';
    }
}

connection.connect(function (err) {
    if (err) throw err;
    managerPrompt();
});

function managerPrompt() {
    inquirer
        .prompt({
            name: "chose",
            type: "list",
            message: "List a set of menu options:",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product", "QUIT"]
        })
        .then(function (answer) {
            if (answer.chose === "View Products for Sale") {
                allProducts();
            }
            else if (answer.chose === "View Low Inventory") {
                lowInventory();
            }
            else if (answer.chose === "Add to Inventory") {
                addToInventory();
            }
            else if (answer.chose === "Add New Product") {
                addNewProduct();
            }
            else if (answer.chose.toUpperCase() === "QUIT") {
                connection.end();
            }
        });
}
function lowInventory() {
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        if(err) throw err;
        for (var i = 0; i < res.length; i++) {
            if (res[i].stock_quantity <= 5) {
                console.log("ID: " + res[i].item_id + ") Product: " + res[i].product_name + ",  Price: $" + res[i].price + ",  Stock_quantity: " + res[i].stock_quantity);
            }
        }
        
        console.log("---------------------------------------------------------------------\n");
        managerPrompt();
    });

}

function addToInventory() {
    Products();
    inquirer.prompt([
        {
            type: "input",
            name: "item_id",
            message: "Please enter the ID number of the product that you want to update",
            validate: validateInput,
            filter: Number
        },
        {
            type: "input",
            name: "quantity",
            message: "How many of this do you want to add?",
            validate: validateInput,
            filter: Number
        }
    ]).then(function (input) {

        var item = input.item_id;
        var quantity = input.quantity;

        var queryStr = 'SELECT * FROM products WHERE ?';

        connection.query(queryStr, { item_id: item }, function (err, data) {
            if (err) throw err;

            if (data.length === 0) {
                console.log('ERROR: Invalid Item ID. Please select a valid Item ID.');

            } else {
                var productData = data[0];

                var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity + quantity) + ' WHERE item_id = ' + item;

                connection.query(updateQueryStr, function (err, data) {
                    if (err) throw err;

                    console.log("Product: " + productData.product_name + " inventory updated to: ", productData.stock_quantity + quantity);
                    console.log("\n---------------------------------------------------------------------\n");
                    
                    managerPrompt();
                })
            }
        })
    })
}

function addNewProduct() {
    inquirer
        .prompt([
            {
                name: "product_name",
                type: "input",
                message: "What is the product you would like to Add?"
            },
            {
                name: "department_name",
                type: "input",
                message: "What category you like to place your product in?"
            },
            {
                name: "price",
                type: "input",
                message: "Product price:"
            },
            {
                name: "stock_quantity",
                type: "input",
                message: "Quantity:",
                validate: validateInput
            }
        ])
        .then(function (answer) {
            connection.query(
                "INSERT INTO products SET ?",
                {
                    product_name: answer.product_name,
                    department_name: answer.department_name,
                    price: answer.price,
                    stock_quantity: answer.stock_quantity
                },
                function (err) {
                    if (err) throw err;
                    console.log("New product was added successfully!");
                    managerPrompt() ;
                }
            );
        });
}

function allProducts() {
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + ") Product: " + res[i].product_name + ",  Price: $" + res[i].price + ",  Stock_quantity: " + res[i].stock_quantity);
        }
        console.log("---------------------------------------------------------------------\n");
        managerPrompt() ;
    });

}

function Products() {
    var query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + ") Product: " + res[i].product_name + ",  Price: $" + res[i].price + ",  Stock_quantity: " + res[i].stock_quantity);
        }
        console.log("---------------------------------------------------------------------\n");
      
    });

}



