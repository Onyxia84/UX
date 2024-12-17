CREATE DATABASE products_db;

USE products_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10,2) DEFAULT 0.00,
    image_url VARCHAR(500)
);

INSERT INTO products (name, description, price, image_url)
VALUES
('Produit 1', 'Description courte du produit 1', 19.99, 'https://via.placeholder.com/150'),
('Produit 2', 'Description courte du produit 2', 29.99, 'https://via.placeholder.com/150'),
('Produit 3', 'Description courte du produit 3', 39.99, 'https://via.placeholder.com/150');
