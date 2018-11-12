CREATE DATABASE bobsburgers_db;
USE bobsburgers_db;

CREATE TABLE burgers
(
  id INT NOT NULL AUTO_INCREMENT,
  burgername VARCHAR (75) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);