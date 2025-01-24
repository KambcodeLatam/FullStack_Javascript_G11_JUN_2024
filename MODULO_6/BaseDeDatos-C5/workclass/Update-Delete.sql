-- DELETE

SELECT * FROM orders;

DELETE FROM orders
WHERE id IN (8,9);

DELETE FROM orders
WHERE id = 10;


-- UPDATE

UPDATE orders
SET  
	order_date = '2025-01-01'
WHERE customer_id = 1; 