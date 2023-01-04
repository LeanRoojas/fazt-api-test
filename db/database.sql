create database if no exists companydb;

create table employee(
    id INT(11) not null auto_increment,
    name varchar(45) default null,
    salary INT(5) default null,
    primary key (id)
);