-- CRUD Operations

-- Create
INSERT INTO people VALUES ('5', 'Caleb', 16);
INSERT INTO people VALUES ('6', 'Hazel', 13);

-- Read
-- Get all rows from the people table.
SELECT * FROM people;
-- Get all rows from the people table where age is < 20.
SELECT * FROM people
	WHERE age < 20;

-- Update
UPDATE people
	SET age = 23 
	WHERE id = '4';

-- Delete
DELETE FROM people
	WHERE id = '3';
	
SELECT * FROM people WHERE age > 20;
SELECT * FROM people WHERE age > 20 AND age < 30;