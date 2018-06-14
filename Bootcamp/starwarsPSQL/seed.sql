DROP TABLE IF EXISTS jedis;

CREATE TABLE jedis (
  id serial PRIMARY KEY,
  name varchar(50),
  lightsaber_color varchar(50),
  years_training integer,
  tempted_by_dark_side boolean
);

INSERT INTO jedis (name, lightsaber_color, years_training, tempted_by_dark_side) VALUES
('Darth AaronT', 'white', 14, FALSE),
('Aisha Solo', 'green', 12, FALSE),
('Andrew Fett', 'blue', 15, FALSE),
('AaronN Sideous', 'gray', 18, FALSE),
('Chuk-3P0', 'purple', 7, TRUE),
('Dmitry Binks', 'red', 14, FALSE),
('Henry Kenobi', 'green', 7, TRUE),
('Justinbacca', 'red', 19, FALSE),
('Kevin Windu', 'red', 9, TRUE),
('Rakib-D2', 'green', 14, TRUE),
('Renat Ren', 'orange', 8, TRUE),
('David Maul', 'blue', 19, FALSE),
('Yasmeen-the-Hutt', 'red', 10, FALSE),
('Banu-Gon-Jinn', 'blue', 14, TRUE),
('Jakub-TR8R', 'green', 8, FALSE),
('Zach Skywalker', 'purple', 6, FALSE),
('Ivelisse Tarkin', 'orange', 2, TRUE),
('Dmitry Calrissian', 'blue', 20, TRUE),
('Shariar Gunray', 'green', 14, TRUE),
('Sith Lord Daniel', 'red', 14, FALSE),
('Nikki Solo', 'yellow', 100, FALSE),
('Maria Fett', 'brown', 9, FALSE),
('Nishad Sideous','purple', 13, FALSE),
('Connor Binks', 'gray', 12, FALSE),
('Noam Kenobi', 'red', 14, FALSE),
('Jakub Windu', 'white', 12, TRUE),
('Daniyal Calrissian', 'blue', 15, TRUE),
('Nader Skywalker', 'red', 6, TRUE),
('Matthew Windu', 'purple', 8, FALSE);
