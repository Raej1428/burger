### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (
id integer not null auto_increment,
 burger_name varchar (100) not null,
 devoured boolean not null,
primary key(id)
);