-- SELECT --

INSERT INTO orders (customer_id, order_date)
VALUES (1, '2024-04-01'),
		(1, '2024-03-01'),
		(7, '2024-04-01');

SELECT * FROM customers;

-- Listar los productos que cuestan mayor o igual a 300

SELECT price, stock, name FROM products
WHERE price >= 300
ORDER BY stock DESC;


SELECT customer_id, COUNT(*) FROM orders
GROUP BY customer_id
HAVING COUNT(*) > 2;


-- SUBCONSULTA
-- Encontrar los productos cuyo precio es mayor que el precio promedio

SELECT * FROM products;


-- 287.500
SELECT AVG(price) FROM products;

SELECT * FROM products
WHERE price > 
	(SELECT AVG(price) FROM products)
;

-- Encontrar los clientes que han realizado al menos un pedido

-- 7, 1
SELECT DISTINCT customer_id FROM orders;

SELECT * FROM customers
WHERE id IN (
	SELECT DISTINCT customer_id FROM orders
);

-- 1
SELECT * FROM customers
WHERE name = 'John Doe';


SELECT * FROM orders
WHERE customer_id = (
	SELECT id FROM customers
	WHERE name = 'John Doe'
);
