
/*Goal: Create an Amazon-like storefront with NodeJS using MySQL and Inquirer packages. 
 App should:  take in orders from customers and deplete stock from a stores inventory*/


-- CHALLENGE 1: CUSTOMER VIEW --

/*
Create an Amazon like store front : Bamazon
To do this: Create Bamazon's Inventory: 
1. A MySQL Database called bamazon that holds for each item in the store: 
  * an item ID
  * the product name
  * the department name
  * the price
  * the stock quantity 
 */

-- STEP ONE -----------------------------------------------------------------------------
-- If a database names bamazon already exists, drop it -- 
DROP DATABASE IF EXISTS bamazon;
-- Next create the database --
CREATE DATABASE bamazon;
-- Use the database --
USE bamazon;


-- STEP TWO -----------------------------------------------------------------------------
/* Inside the bamazon database, create a table called products
   The products table should have each of the following columns:

     item_id (unique id for each product)
     product_name (Name of product)
     department_name
     price (cost to customer)
     stock_quantity (how much of the product is available in stores)
*/

--  Create table products in bamazon database... --
CREATE TABLE products (
	-- Unique id for each product --
    item_id INTEGER AUTO_INCREMENT NOT NULL,
    -- Name of product --
	product_name VARCHAR(45) NOT NULL,
    -- Department name --
	department_name VARCHAR(45) NOT NULL,
    -- The Product Cost to customer --
	price DECIMAL(10,2) NOT NULL,
    -- The Product Availabilty --
	stock_quantity INTEGER(10) NOT NULL,
    -- Make item_id the primary key --
	PRIMARY KEY (item_id)
);


-- STEP THREE -----------------------------------------------------------------------------
/* Populate this database (bamazon) with around 10 different products. Fill the product table with dummy data
 (i.e. Insert "mock" data rows into this database and table).

 ... filling the table with items from https://www.amazon.com/Best-Sellers/
 */

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nintendo Entertainment System", "Video Games", 129.99, 150), 
("SKII Essence Set", "Beauty", 125.99, 20),
("3D Sleep Mask", "Personal Care", 20.99, 15),
("Activated Charcoal Toothpaste", "Personal Care", 11.99, 60),
("Baby Groot", "Toys", 19.99, 5),
("The Writings of Machiavelli", "Books", 25.99, 30),
("Xerox Toner Cartrige", "Office Supplies", 35.95, 25),
("Callaway Golf Balls", "Sports", 49.99, 8),
("Clean Code", "Books", 51.95, 11),
("Raspberri Pi", "Electronics", 119.99, 10);



