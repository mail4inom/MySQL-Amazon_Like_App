# MySQL-Amazon_Like_App

#Description
This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The application presents two interfaces: customer and manager.

#MySQL Database Setup
In order to run this application, you should have the MySQL database already set up on your machine. If you don't, visit the MySQL installation page https://dev.mysql.com/doc/refman/5.6/en/installing.html to install the version you need for your operating system. Once you have MySQL isntalled, you will be able to create the Bamazon database and the products table with the SQL code found in bamazon.sql. 

#Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, item name, department in which the item is located and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

#To run the customer interface please follow the steps below:

|> git clone https://github.com/mail4inom/MySQL-Amazon_Like_App.git, 
|> cd MySQL-Amazon_Like_App,                                        
|> npm init -y,                                                     
|> npm install mysql,                                              
|> npm install inquirer,                                            
|> node bamazonCustomer.js                                         



#Manager Interace

#The manager interface presents a list of four options, as below.
 
                                           
|? Please select an option: (Use arrow keys),
|❯ View Products for Sale,                   
|  View Low Inventory,                       
|  Add to Inventory,                         
|  Add New Product,                                                                     
|> cd MySQL-Amazon_Like_App,                 
|> node bamazonManager.js                   


> The View Products for Sale option allows the user to view the current inventory of store items: item IDs, descriptions, department in which the item is located, price, and the quantity available in stock.

> The View Low Inventory option shows the user the items which currently have fewer than 5 units available.

> The Add to Inventory option allows the user to select a given item ID and update the stock_quantity of target item.

> The Add New Product option allows the user to enter details about a new product which will be entered into the database upon completion of the form.

******************************************************************************************************************

