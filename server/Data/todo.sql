
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  
  
);

  
  INSERT INTO todos (title,description) VALUES
  ('Buy Coffee', 'also get some milk'),
  ('Dentist', 'appointment on friday'),
  ('Call Jeff', 'ideas for secret invention');
  