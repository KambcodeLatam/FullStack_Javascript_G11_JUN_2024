-- JOIN -- 

SELECT * FROM products;

SELECT * FROM customers;
SELECT * FROM order_details;

-- INNER JOIN -- 

SELECT * 
FROM order_details
JOIN products ON products.id = order_details.product_id;

SELECT * 
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;


-- LEFT JOIN
SELECT * 
FROM orders
LEFT JOIN customers ON orders.customer_id = customers.id;

SELECT * 
FROM customers
LEFT JOIN orders ON orders.customer_id = customers.id;


-- RIGHT JOIN

SELECT * 
FROM orders
RIGHT JOIN customers ON orders.customer_id = customers.id;

SELECT 
	c.id AS customer_id, 
	o.id AS order_id,
FROM orders AS o
RIGHT OUTER JOIN customers AS c ON o.customer_id = c.id;

-- FULL JOIN

SELECT * 
FROM orders
FULL OUTER JOIN customers ON orders.customer_id = customers.id;


-- MULTIPLE TABLAS

-- Encontrar los detalles de cada pedido, incluyendo nombre del cliente y nombre del producto

SELECT 
	c.name AS customer_name,
	c.id AS customer_id,
	p.name AS product_name,
	p.id AS product_id,
	p.price,
	o.id AS order_id,
	od.quantity
FROM orders AS o
JOIN customers AS c 
	ON c.id = o.customer_id
FULL JOIN order_details AS od
	ON od.order_id = o.id
JOIN products AS p
	ON p.id = od.product_id;
	















