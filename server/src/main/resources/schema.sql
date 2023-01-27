DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts cascade;

CREATE TABLE IF NOT EXISTS posts (
    identification SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(32),
    sub_title VARCHAR(64),
    body VARCHAR(MAX),
    link VARCHAR(MAX),
    image VARCHAR(MAX)
);

CREATE TABLE IF NOT EXISTS comments (
    identification SERIAL PRIMARY KEY NOT NULL,
    post_id INT NOT NULL,
    username VARCHAR(64),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    body VARCHAR(MAX),

    parent_id INT,
    FOREIGN KEY(post_id) REFERENCES posts(identification),
    FOREIGN KEY(parent_id) REFERENCES comments(identification)
);