-- SQL

-- DDL 


-- CREATE

CREATE TABLE IF NOT EXISTS customers (
	id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	name TEXT NOT NULL,
	email TEXT UNIQUE NOT NULL,
	registration_date DATE DEFAULT CURRENT_DATE
);

-- ALTER
-- add Column
ALTER TABLE customers ADD COLUMN phone_number TEXT;

-- delete Column
ALTER TABLE customers DROP COLUMN phone_number;

-- rename Column
ALTER TABLE customers RENAME COLUMN name TO fullname;
ALTER TABLE customers RENAME COLUMN fullname TO name;

-- change Datatype
ALTER TABLE customers ALTER COLUMN email TYPE VARCHAR;

-- rename table
ALTER TABLE customers RENAME TO clients;
ALTER TABLE clients RENAME TO customers;


ALTER TABLE customers ADD CONSTRAINT salary_range CHECK (salary > 1000000);


-- DELETE
DROP TABLE customers;
TRUNCATE customers;
