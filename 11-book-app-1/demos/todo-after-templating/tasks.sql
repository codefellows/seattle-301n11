-- WARNING: this drops task_app db so make sure that's what you want
DROP DATABASE task_app;
CREATE DATABASE task_app;
\c task_app;
CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  contact VARCHAR(255),
  status BOOLEAN,
  category VARCHAR(255),
  due DATE NOT NULL DEFAULT NOW()
);

INSERT INTO tasks (title, contact, status, category, description) 
VALUES('milk cows','jb',FALSE,'farm','family is thirsty');
