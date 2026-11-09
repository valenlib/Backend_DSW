CREATE DATABASE IF NOT EXISTS bdd_viajes;
USE bdd_viajes;
create table if not exists usuarios(
  id_usuario int primary key auto_increment,
  nombre varchar(50) not null,
  apellido varchar(50) not null,
  email varchar(100) not null unique,
  password varchar(255) not null,
  fecha_registro timestamp default current_timestamp,
  activo boolean not null default true
);
create table if not exists viajes(
  id_viaje int primary key auto_increment,
  id_usuario int not null,
  destino varchar(100) not null,
  fecha_salida date not null,
  fecha_regreso date not null,
  precio decimal(10, 2) not null,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
create table IF NOT EXISTS reservas(
  id_reserva int primary key auto_increment,
  id_viaje int not null,
  id_usuario int not null,
  fecha_reserva timestamp default current_timestamp,
  estado varchar(20) not null,
  cantidad_pasajes int not null default 1,
  FOREIGN KEY (id_viaje) REFERENCES viajes(id_viaje),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
  activa boolean not null default true
);
create table IF NOT EXISTS aeropuertos(
  id_aeropuerto int primary key auto_increment,
  nombre varchar(100) not null,
  ciudad varchar(100) not null,
  pais varchar(100) not null
);
create table IF NOT EXISTS vuelos(
  id_vuelo int primary key auto_increment,
  id_aeropuerto_origen int not null,
  id_aeropuerto_destino int not null,
  fecha_salida datetime not null,
  fecha_llegada datetime not null,
  precio decimal(10, 2) not null,
  estado varchar(20) not null default 'en hora',
  nuevo_horario datetime null,
  FOREIGN KEY (id_aeropuerto_origen) REFERENCES aeropuertos(id_aeropuerto),
  FOREIGN KEY (id_aeropuerto_destino) REFERENCES aeropuertos(id_aeropuerto)
);
create table IF NOT EXISTS aviones(
  id_avion int primary key auto_increment,
  modelo varchar(100) not null,
  capacidad int not null,
  estado varchar(20) not null
);
create table IF NOT EXISTS asientos(
  id_asiento int primary key auto_increment,
  id_avion int not null,
  numero_asiento varchar(10) not null,
  clase varchar(20) not null,
  estado varchar(20) not null,
  FOREIGN KEY (id_avion) REFERENCES aviones(id_avion)
);