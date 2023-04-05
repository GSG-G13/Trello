BEGIN;

DROP TABLE IF EXISTS Tasks CASCADE;
DROP TABLE IF EXISTS Employee CASCADE;

CREATE TABLE Employee(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE Tasks(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    employee_id INTEGER NOT NULL REFERENCES Employee(id)
);

INSERT INTO Employee(name, position, email) VALUES ('John', 'Manager', 'john@gmail.com')
, ('Mike', 'Developer', 'mike@mm.com')
, ('Sara', 'Developer', 'sssss');
INSERT INTO Tasks(name, description, employee_id) VALUES ('Task 1', 'Description 1', 1)
, ('Task 2', 'Description 2', 2);
COMMIT;
