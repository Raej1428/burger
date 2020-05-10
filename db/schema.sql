### Schema

CREATE DATABASE burger_db;
USE burger_db;
USE jawsdb_gray;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(300) NOT NULL,
	hungry BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
