CREATE DATABASE IF NOT EXISTS company_db;

USE company_db;

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
salary INT UNSIGNED NOT NULL

    PRIMARY KEY (id)
);

DESCRIBE employees;

INSERT INTO employees VALUES 
(1, 'John Doe', 50000), 
(2, 'Jane Smith', 60000), 
(3, 'Alice Johnson', 70000), 
(4, 'Bob Brown', 80000), 
(5, 'Charlie Davis', 90000);