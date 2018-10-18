
//Install and require the mysql npm package to make connection to mysql database.
var mysql = require ("mysql");
//Install and require the inquirer npm package to prompt user.
var inquirer = require ("inquirer");


//Create a mysql connection to the database bamazon_db.
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: 'bamazon'
});

// Initialize the mysql connection
connection.connect(function(err){
    if (err) throw err;
    console.log("connection successful");
    displayProduct();
});



// Functions
//Display items for user

function displayProduct(){

    connection.query('SELECT * FROM products', function(err, res){
        if(err) throw err;
      
        console.log("Welcome to Bamazon");
        console.log("____________________________________________________");
        
        for(var i = 0; i<res.length;i++){   
          var items = 
          "____________________________________________________" + "\r\n" +
          "ItemID: " + res[i].itemid + "\r\n" +
          "Product: " + res[i].productname + "\r\n" +
          "Department: " + res[i].departmentname + "\r\n" +
          "Price: $" + res[i].price + "\r\n" +
          "Quantity: " + res[i].stockquantity + "\r\n" +
          "____________________________________________________"
          console.log(items);
            }
         selectProduct(res);
        })      
}


/*

// Allow users to select items/products

 function selectProduct(res){
        inquirer.prompt([
        {
          type: "input",
          name: "choice",
          message: "What would you would like to purchase?"
        }]).then(function(answer) {
            var correct = false;
            for(var i = 0; i < res.length; i++){
                if (res[i].productname == answer.choice){
                    correct = true;
                    var product = answer.choice;
                    var id = i;

                    inquirer.prompt({
                        type: "input",
                        name:"quant",
                        message: "How many items would you like to purchase?",
                        validate: function (value){
                            if(isNaN(value) == false){
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }).then(function(answer){
                        if ((res[id].stockquantity-answer.quant)>0){
                            connection.query ("UPDATE products SET stockquantity =' " +  (res[id].stockquantity-
                                answer.quant)+ " ' WHERE productname = ' " + productname + " ' ", function(err, res2){
                                    console.log("Item purchased!");
                                    displayProduct();
                                })
                        } else {
                            console.log("Sorry, the item you wish to purchase is no longer available.");
                            selectProduct(res);
                        }
                    })
                }
          }
    })
}

*/
          