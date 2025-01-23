-- DML

-- READ 

SELECT * FROM products;

-- DISTINCT

SELECT DISTINCT price FROM products;

-- WHERE

SELECT * FROM products;
WHERE id = 1;

-- OPERATORS 
--   = > <  >=  <= !=  
SELECT * FROM products
WHERE price != 200;

--   AND OR 
SELECT * FROM products
WHERE price > 200 AND price < 1000;

SELECT * FROM products
WHERE price > 500 OR stock < 20;

-- BETWEEN LIKE IN NOT IS-NULL

SELECT * FROM products
WHERE price BETWEEN 200 AND 500;

 -- % _
SELECT * FROM products
WHERE name LIKE 'M%';

SELECT * FROM products
WHERE name NOT LIKE 'M%';


SELECT * FROM products
WHERE id IN (5, 7, 8);

SELECT * FROM products
WHERE id NOT IN (5, 7, 8);

SELECT * FROM products
WHERE id IS NOT NULL;


-- ORDER BY ASC - DESC

SELECT * FROM products
ORDER BY stock DESC;

-- Aggregate functions
-- MIN()
-- MAX()
-- SUM()
-- AVG()
-- COUNT()


SELECT MAX(price) FROM products;

SELECT MIN(price) FROM products;

SELECT SUM(stock) FROM products;

SELECT AVG(stock) FROM products;

SELECT COUNT(*) FROM products;

-- GROUP BY

SELECT price, COUNT(*), SUM(price)
FROM products
GROUP BY price; 

-- HAVING  --> SELECT  column  -> agreggate Function -> FROM -> GROUP BY column HAVING condition

SELECT price, COUNT(*), SUM(price)
FROM products
GROUP BY price
HAVING price > 200;

