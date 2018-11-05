CREATE DATABASE bobsburgers_db;
USE bobsburgers_db;

CREATE TABLE burgers
(
  id int AUTO_INCREMENT,
  burgername varchar(75) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY(id)
);