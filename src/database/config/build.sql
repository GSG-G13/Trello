CREATE TABLE "Employee"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "position" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL
);

CREATE TABLE "Tasks"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "employee id" BIGINT NOT NULL
);
ALTER TABLE
    "Tasks" ADD PRIMARY KEY("id");
ALTER TABLE
    "Tasks" ADD CONSTRAINT "tasks_employee id_foreign" FOREIGN KEY("employee id") REFERENCES "Employee"("id");