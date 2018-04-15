DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(128)NOT NULL,
  department_name VARCHAR(128)NOT NULL,
  price DECIMAL(10, 2),
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);


INSERT INTO products  (product_name, department_name, price, stock_quantity)
VALUES ("Iphone X", "Cellphones", 1049.50, 10),
("Iphone 8", "Cellphones", 975.70, 6),
("Samsung 9", "Cellphones", 885.35, 8),
("God of War", "Video Games", 129.99, 15),
("Tomb Raider", "Video Games", 59.99, 10),
("Dell", "Laptops", 1099.57, 17),
("MacBook Pro", "Laptops", 2549.50, 10),
("HP", "Laptops", 949.80, 5),
("Amazon Gift Card", "Gift Cards", 100.00, 20),
("Amazon Gift Card", "Gift Cards", 50.00, 14);


