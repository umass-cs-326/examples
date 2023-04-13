DROP TABLE IF EXISTS pets;

CREATE TABLE IF NOT EXISTS pets (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  owner_id INTEGER NOT NULL
);

INSERT INTO
  pets(name, owner_id)
VALUES
  ('Fido', 1),
  ('Spot', 2),
  ('Rover', 3),
  ('Fluffy', 4),
  ('Patches', 4),
  ('Spike', 3),
  ('Tiger', 2),
  ('Smokey', 1),
  ('Felix', 1),
  ('Garfield', 2),
  ('Odie', 3),
  ('Snoopy', 4),
  ('Charlie Brown', 4),
  ('Scooby Doo', 3),
  ('Shaggy', 2),
  ('Fred', 1),
  ('Daphne', 1),
  ('Velma', 2),
  ('Scooby Snacks', 3),
  ('Scrappy Doo', 4);

SELECT
  *
FROM
  pets;

SELECT
  *
FROM
  pets
WHERE
  owner_id = 1;

SELECT
  *
FROM
  people A,
  pets B
WHERE
  B.owner_id = A.id;

SELECT
  A.name,
  B.name
FROM
  people A,
  pets B
WHERE
  B.owner_id = A.id
  AND A.name = 'Artemis';