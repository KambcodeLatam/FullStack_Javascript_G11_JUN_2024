-- DML

-- CREATE 

INSERT INTO customers (name, email, registration_date)
VALUES ('John Doe',  'john@example.com', '2025-01-15');


INSERT INTO customers (name, email, registration_date) 
VALUES
	('William', 'william@example.com', '2025-01-15'),
	('Julian', 'julian.smith@example.com', '2025-02-20'),
	('Arit', 'arit@example.com', '2024-10-15'),
	('Harry', 'harry@example.com', '2024-11-15'),
	('Jane Smith', 'jane.smith@example.com', '2024-02-20'),
	('Alice Johnson', 'alice.johnson@example.com', '2025-03-10');


INSERT INTO products (name, price, stock) 
VALUES
	('Laptop', 1200.00, 10),
	('Phone', 800.00, 20),
	('Tablet', 300.00, 15);

INSERT INTO products (name, price, stock) VALUES
    ('Mouse', 20.00, 50),
    ('Keyboard', 50.00, 40),
    ('Monitor', 200.00, 30),
    ('Headphones', 80.00, 60),
    ('Speaker', 100.00, 25);


INSERT INTO orders (customer_id, order_date) 
VALUES
	(1, '2024-04-01'),
	(7, '2024-04-05');

INSERT INTO order_details (order_id, product_id, quantity, unit_price) 
VALUES
	(3, 1, 1, 1200.00),
	(3, 3, 2, 300.00),
	(4, 2, 1, 800.00);





