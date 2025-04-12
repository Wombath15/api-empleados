CREATE DATABASE IF NOT EXISTS company_db;

USE company_db;

CREATE TABLE employees (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employees;