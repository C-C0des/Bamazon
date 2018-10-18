
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
    runStore();
});




// Function runStore !


function runStore(){
    connection.query('SELECT * FROM Products', function(err, res){
      if(err) throw err;
    
      console.log("Welcome to Bamzon");
      console.log("____________________________________________________");
      
      for(var i = 0; i<res.length;i++){   
        var items = 
        "____________________________________________________" + "\r\n" +
        "ItemID: " + res[i].item_id + "\r\n" +
        "Product: " + res[i].product_name + "\r\n" +
        "Department: " + res[i].department_name + "\r\n" +
        "Price: $" + res[i].price + "\r\n" +
        "Quantity: " + res[i].stock_quantity + "\r\n" +
        "____________________________________________________"
        console.log(items);}
       // console.log(' ');
        inquirer.prompt([
        {
          type: "input",
          name: "choice",
          message: "What would you would like to purchase?"
        }]).then(function(answer) {
            var correct = false;
            

        })

    })

}
          