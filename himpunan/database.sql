CREATE DATABASE Data_Pelanggan;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(40),
    email VARCHAR(40)
);

CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    nama_items VARCHAR(100),
    harga_items INT NOT NULL
)

CREATE TABLE orders(
    id SERIAL PRIMARY KEY,
    items_orders VARCHAR(100),
    Jumlah_orders INT NOT NULL
)


INSERT INTO users VALUES{
    (1,'M. Ilham Ramadhan', 'ramadhanmilham354@gmail.com');
    (2,'ramadhanmilham', 'killingtomore007@gmail.com');
}

INSERT INTO items VALUES{
    (1, 'Rexona', 12500),
    (2, 'INDOMIE', 3000),
    (3, 'POP MIE', 5000)
}

INSERT INTO orders VALUES{
    (1, 'Rexona', 3),
    (2, 'POP MIE', 2)
}