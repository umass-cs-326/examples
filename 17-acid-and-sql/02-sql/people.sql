-- Drop the people table if it exists.
-- We are just doing this to reset the DB each time.
DROP TABLE IF EXISTS people;

CREATE TABLE IF NOT EXISTS people (
	id VARCHAR(30) PRIMARY KEY,
	name VARCHAR(30),
	age INTEGER
);

-- Using auto-incrementing IDs
CREATE TABLE IF NOT EXISTS people (
	id SERIAL PRIMARY KEY,
	name VARCHAR(30) NOT NULL,
	age INTEGER NOT NULL
);

INSERT INTO
	people(id, name, age)
VALUES
	('1', 'Artemis', 19),
	('2', 'Parzival', 17),
	('3', 'John', 30),
	('4', 'Mia', 22);

INSERT INTO
	people(name, age)
VALUES
	('Artemis', 19),
	('Parzival', 17),
	('John', 30),
	('Mia', 22);