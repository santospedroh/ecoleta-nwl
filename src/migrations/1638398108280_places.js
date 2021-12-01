module.exports = {
    "up": "CREATE TABLE places (id INT NOT NULL AUTO_INCREMENT, image TEXT, name VARCHAR(255), address VARCHAR(255), address2 VARCHAR(255), state VARCHAR(255), city VARCHAR(255), items VARCHAR(255), PRIMARY KEY (id))",
    "down": "DROP TABLE places"
}