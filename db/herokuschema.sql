drop table if exists burgers;

CREATE TABLE burgers (
id integer not null auto_increment,
 burger_name varchar (300) not null,
 hungry boolean default false,
primary key(id)

);

INSERT INTO burgers (burger_name, hungry) VALUES ('Bacon-Bacon-Bacon_More-Bacon', false);
INSERT INTO burgers (burger_name, hungry) VALUES ('Avo-Mango-Mayo', false);
INSERT INTO burgers (burger_name, hungry) VALUES ('Thanksgiving', false);
INSERT INTO burgers (burger_name, hungry) VALUES ('Jalapeno-Passion', false);
INSERT INTO burgers (burger_name, hungry) VALUES ('Basic-B', false);
INSERT INTO burgers (burger_name, hungry) VALUES ('Cordon-B', false);
INSERT INTO burgers (burger_name, hungry) VALUES ('Sprouts-n-Feta', false);
INSERT INTO burgers (burger_name, hungry) VALUES ('Stuffed-Italian', false);
INSERT INTO burgers (burger_name, hungry) VALUES ('Impossible-Ur-Way', false);
INSERT INTO burgers (burger_name, hungry) VALUES ('Kids-Slidder', false);