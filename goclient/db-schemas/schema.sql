CREATE TABLE users (
    username VARCHAR(50) PRIMARY KEY NOT NULL,
    password CHAR(60) NOT NULL,
    amount float DEFAULT 0.00,
    CONSTRAINT amount_non_negative CHECK (amount >= 0)
);

CREATE TABLE transactions (
    transaction_id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    sender_username VARCHAR(50) NOT NULL,
    receiver_username VARCHAR(50) NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    amount FLOAT NOT NULL,
    transaction_type ENUM('credit', 'debit') NOT NULL,
    description TEXT,
    FOREIGN KEY (sender_username) REFERENCES users(username),
    FOREIGN KEY (receiver_username) REFERENCES users(username),
    CONSTRAINT amount_non_negative CHECK (amount >= 0)
);