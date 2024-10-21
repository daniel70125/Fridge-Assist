CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    decription VARCHAR(250),
    date ??,
    preptime VARCHAR(100),
    cooktime VARCHAR(100),
    servings VARCHAR(50),
    ingredients VARCHAR(1000),
    step1 VARCHAR(250),
    ...STEP10 VARCHAR(250),
    calories VARCHAR(50),
    fat VARCHAR(50),
    carbs VARCHAR(50),
    protein VARCHAR(50),
    image VARCHAR(500),
    FOREIGN KEY (id) REFERENCES users(id)
)

CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR(200), gender VARCHAR(10));