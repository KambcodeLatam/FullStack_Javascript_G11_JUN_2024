-- DDL --

-- CREATE 

CREATE TABLE students (
	id SERIAL PRIMARY KEY, 
	name VARCHAR NOT NULL,
	phone VARCHAR(10),
	email VARCHAR UNIQUE
);

CREATE TABLE employees (
	id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
	position VARCHAR(50) NOT NULL,
	salary DECIMAL(10, 2),
	isActive BOOLEAN DEFAULT true,
	hire_date DATE DEFAULT CURRENT_DATE
);



INSERT INTO students (name, phone, email) 
VALUES
	('William', '3118536986', 'will@gmail.com'),
	('Harry', '3502689548', 'harry@gmail.com'),
	('Julian', '3148567854', 'Julian@gmail.com');

INSERT INTO employees (name, position, salary)  -- colum isActive and hire_date have default values
VALUES ('William', 'FullStack Developer', 10000000.00);