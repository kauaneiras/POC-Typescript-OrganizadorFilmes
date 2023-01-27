CREATE TABLE IF NOT EXISTS users (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) UNIQUE NOT NULL,
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sessions (
    "id" SERIAL PRIMARY KEY,
    "token" VARCHAR(255) UNIQUE NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL, 
    FOREIGN KEY ("user_id") REFERENCES users ("id") ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS movies (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS gender (
    "id" SERIAL PRIMARY KEY,
    "gender" VARCHAR(255) NOT NULL,
    "movie_id" INTEGER NOT NULL, 
    FOREIGN KEY ("movie_id") REFERENCES movies ("id") ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS plataform (
    "id" SERIAL PRIMARY KEY,
    "plataform" VARCHAR(255) NOT NULL,
    "movie_id" INTEGER NOT NULL, 
    FOREIGN KEY ("movie_id") REFERENCES movies ("id") ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS watchedmovies (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL,
    "movie_id" INTEGER NOT NULL,
    FOREIGN KEY ("user_id") REFERENCES users ("id") ON DELETE CASCADE,
    FOREIGN KEY ("movie_id") REFERENCES movies ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS wishlist (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER NOT NULL,
    "movie_id" INTEGER NOT NULL,
    FOREIGN KEY ("user_id") REFERENCES users ("id") ON DELETE CASCADE,
    FOREIGN KEY ("movie_id") REFERENCES movies ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS avaliation (
    "id" SERIAL PRIMARY KEY,
    "watchedmovies_id" INTEGER NOT NULL,
    "avaliation" VARCHAR(255) NOT NULL,
    FOREIGN KEY ("watchedmovies_id") REFERENCES watchedmovies ("id") ON DELETE CASCADE,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- adicionar dados ao banco
INSERT INTO users (name, email, password) VALUES ('admin', 'admin@email.com' ,'$2b$10$odqKqaq/hIs7q61A0vlSs.IVByYC8FOsPDgo4j6JTBSDC1mgTDegq');
INSERT INTO users (name, email, password) VALUES ('user', 'user@email.com' ,'$2b$10$odqKqaq/hIs7q61A0vlSs.IVByYC8FOsPDgo4j6JTBSDC1mgTDegq');
INSERT INTO users (name, email, password) VALUES ('user2', 'user2@email.com', '$2b$10$odqKqaq/hIs7q61A0vlSs.IVByYC8FOsPDgo4j6JTBSDC1mgTDegq');
-- senha: 123456

INSERT INTO movies (title) VALUES ('The Lord of the Rings: The Fellowship of the Ring');
INSERT INTO movies (title) VALUES ('The Lord of the Rings: The Two Towers');
INSERT INTO movies (title) VALUES ('The Hobbit: The Desolation of Smaug');
INSERT INTO movies (title) VALUES ('Stranger Things');
INSERT INTO movies (title) VALUES ('The Witcher');
INSERT INTO movies (title) VALUES ('The Umbrella Academy');

INSERT INTO gender (gender, movie_id) VALUES ('Ação', 1);
INSERT INTO gender (gender, movie_id) VALUES ('Aventura', 1);
INSERT INTO gender (gender, movie_id) VALUES ('Ação', 2);
INSERT INTO gender (gender, movie_id) VALUES ('Aventura', 2);
INSERT INTO gender (gender, movie_id) VALUES ('Ação', 3);
INSERT INTO gender (gender, movie_id) VALUES ('Aventura', 3);
INSERT INTO gender (gender, movie_id) VALUES ('Magia', 3);
INSERT INTO gender (gender, movie_id) VALUES ('Aventura', 4);
INSERT INTO gender (gender, movie_id) VALUES ('Suspense', 4);
INSERT INTO gender (gender, movie_id) VALUES ('Vintage', 4);
INSERT INTO gender (gender, movie_id) VALUES ('Magia', 5);
INSERT INTO gender (gender, movie_id) VALUES ('Suspense', 5);
INSERT INTO gender (gender, movie_id) VALUES ('Aventura', 5);
INSERT INTO gender (gender, movie_id) VALUES ('Superherois', 6);
INSERT INTO gender (gender, movie_id) VALUES ('Ação', 6);
INSERT INTO gender (gender, movie_id) VALUES ('Aventura', 6);

INSERT INTO plataform (plataform, movie_id) VALUES ('Prime', 1);
INSERT INTO plataform (plataform, movie_id) VALUES ('prime', 2);
INSERT INTO plataform (plataform, movie_id) VALUES ('Prime', 3);
INSERT INTO plataform (plataform, movie_id) VALUES ('Netflix', 4);
INSERT INTO plataform (plataform, movie_id) VALUES ('Netflix', 5);
INSERT INTO plataform (plataform, movie_id) VALUES ('Netflix', 6);



