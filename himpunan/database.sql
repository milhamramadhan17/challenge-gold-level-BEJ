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