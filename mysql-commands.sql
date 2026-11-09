CREATE DATABASE IF NOT EXISTS bdd_viajes;
USE bdd_viajes;
create table if not exists usuarios(
  id_usuario int primary key auto_increment,
  nombre varchar(50) not null,
  apellido varchar(50) not null,
  email varchar(100) not null unique,
  password varchar(255) not null,
  rol varchar(20) not null default 'usuario',
  fecha_registro timestamp default current_timestamp,
  activo boolean not null default true,
  CHECK (rol IN ('admin', 'usuario'))
);
create table IF NOT EXISTS refresh_tokens(
  id_refresh_token bigint primary key auto_increment,
  id_usuario int not null,
  token_hash char(64) not null unique,
  expires_at datetime not null,
  revoked_at datetime null,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);
create table IF NOT EXISTS aeropuertos(
  id_aeropuerto int primary key auto_increment,
  nombre varchar(100) not null,
  ciudad varchar(100) not null,
  pais varchar(100) not null,
  activo boolean not null default true
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
  CHECK (estado IN ('en hora', 'cancelado', 'demorado')),
  FOREIGN KEY (id_aeropuerto_origen) REFERENCES aeropuertos(id_aeropuerto),
  FOREIGN KEY (id_aeropuerto_destino) REFERENCES aeropuertos(id_aeropuerto)
);
create table IF NOT EXISTS reservas(
  id_reserva int primary key auto_increment,
  id_vuelo int not null,
  id_usuario int not null,
  fecha_reserva timestamp default current_timestamp,
  estado varchar(20) not null,
  cantidad_pasajes int not null default 1,
  FOREIGN KEY (id_vuelo) REFERENCES vuelos(id_vuelo),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
  activa boolean not null default true
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

INSERT INTO usuarios
  (nombre, apellido, email, password, rol)
SELECT 'Admin', 'Prueba', 'admin@test.com',
       '$2b$12$YK4n30x5M56uqVRob9VUg.CLDWTeANz8cVST9EHQ66ZAOpss3EN4.',
       'admin'
WHERE NOT EXISTS (
  SELECT 1 FROM usuarios WHERE email = 'admin@test.com'
);

INSERT INTO aeropuertos (nombre, ciudad, pais)
SELECT 'Aeropuerto Ezeiza', 'Buenos Aires', 'Argentina'
WHERE NOT EXISTS (
  SELECT 1 FROM aeropuertos WHERE nombre = 'Aeropuerto Ezeiza'
);

INSERT INTO aeropuertos (nombre, ciudad, pais)
SELECT 'Aeropuerto Internacional de Cordoba', 'Cordoba', 'Argentina'
WHERE NOT EXISTS (
  SELECT 1 FROM aeropuertos
  WHERE nombre = 'Aeropuerto Internacional de Cordoba'
);

INSERT INTO vuelos
  (id_aeropuerto_origen, id_aeropuerto_destino, fecha_salida,
   fecha_llegada, precio, estado)
SELECT
  origen.id_aeropuerto,
  destino.id_aeropuerto,
  '2027-01-15 08:00:00',
  '2027-01-15 10:00:00',
  85000.00,
  'en hora'
FROM aeropuertos origen
JOIN aeropuertos destino
  ON destino.nombre = 'Aeropuerto Internacional de Cordoba'
WHERE origen.nombre = 'Aeropuerto Ezeiza'
  AND NOT EXISTS (
    SELECT 1 FROM vuelos
    WHERE fecha_salida = '2027-01-15 08:00:00'
      AND id_aeropuerto_origen = origen.id_aeropuerto
      AND id_aeropuerto_destino = destino.id_aeropuerto
  );

INSERT INTO vuelos
  (id_aeropuerto_origen, id_aeropuerto_destino, fecha_salida,
   fecha_llegada, precio, estado)
SELECT
  origen.id_aeropuerto,
  destino.id_aeropuerto,
  '2027-01-20 14:30:00',
  '2027-01-20 16:30:00',
  92000.00,
  'demorado'
FROM aeropuertos origen
JOIN aeropuertos destino
  ON destino.nombre = 'Aeropuerto Ezeiza'
WHERE origen.nombre = 'Aeropuerto Internacional de Cordoba'
  AND NOT EXISTS (
    SELECT 1 FROM vuelos
    WHERE fecha_salida = '2027-01-20 14:30:00'
      AND id_aeropuerto_origen = origen.id_aeropuerto
      AND id_aeropuerto_destino = destino.id_aeropuerto
  );