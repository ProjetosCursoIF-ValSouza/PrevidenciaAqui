DROP DATABASE IF EXISTS BD_PrevAqui;
CREATE DATABASE BD_PrevAqui;
USE BD_PrevAqui;
CREATE TABLE boletim_informativo (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL
);