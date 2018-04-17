# MySQL-Amazon_Like_App

#Description
This application implements a simple command line based storefront using the npm inquirer package and the MySQL database backend together with the npm mysql package. The application presents two interfaces: customer and manager.

#Customer Interface
The customer interface allows the user to view the current inventory of store items: item IDs, item name and price. The user is then able to purchase one of the existing items by entering the item ID and the desired quantity. If the selected quantity is currently in stock, the user's order is fulfilled, displaying the total purchase price and updating the store database. If the desired quantity is not available, the user is prompted to modify their order.

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

Finally here is the link for video demo of this App: https://drive.google.com/file/d/1lnnnMuiMeRmUAujEhJeIp8jkBYvJgaAW/view

******************************************************************************************************************

