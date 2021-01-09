-- DATABASE NAME = 'weekend-to-do-app'

CREATE TABLE todos(
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(90) NOT NULL, 
	"complete" BOOLEAN DEFAULT false
	);
	
  --dummy data
INSERT INTO "todos" ("name")
VALUES 
	('Vacuum'),
	('Laundry'),
	('Wash all of the pots and pans');