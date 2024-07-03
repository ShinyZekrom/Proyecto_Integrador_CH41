-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema delhaz_socialmedia
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `delhaz_socialmedia` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `delhaz_socialmedia` ;

-- -----------------------------------------------------
-- Table `delhaz_socialmedia`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delhaz_socialmedia`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(80) NOT NULL,
  `username` VARCHAR(15) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(255) NOT NULL,
  `fecha_registro` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `foto_perfil` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username` (`username` ASC) VISIBLE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `delhaz_socialmedia`.`perfiles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delhaz_socialmedia`.`perfiles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `biografia` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `usuario_id` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `perfiles_ibfk_1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `delhaz_socialmedia`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `delhaz_socialmedia`.`publicaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delhaz_socialmedia`.`publicaciones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `descripcion` TEXT NOT NULL,
  `fecha_publicacion` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `contenido` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `usuario_id` (`usuario_id` ASC) VISIBLE,
  CONSTRAINT `publicaciones_ibfk_1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `delhaz_socialmedia`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `delhaz_socialmedia`.`tipos_reacciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delhaz_socialmedia`.`tipos_reacciones` (
  `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `icono` VARCHAR(255) NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

-- -----------------------------------------------------
-- Table `delhaz_socialmedia`.`reacciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delhaz_socialmedia`.`reacciones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `usuario_id` INT NOT NULL,
  `publicacion_id` INT NOT NULL,
  `tipo_reaccion_id` TINYINT UNSIGNED NOT NULL,
  `fecha_reaccion` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_reaction` (`usuario_id`, `publicacion_id`),
  INDEX `publicacion_id` (`publicacion_id` ASC) VISIBLE,
  INDEX `tipo_reaccion_id` (`tipo_reaccion_id` ASC) VISIBLE,
  CONSTRAINT `reacciones_ibfk_1`
    FOREIGN KEY (`usuario_id`)
    REFERENCES `delhaz_socialmedia`.`usuarios` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `reacciones_ibfk_2`
    FOREIGN KEY (`publicacion_id`)
    REFERENCES `delhaz_socialmedia`.`publicaciones` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `reacciones_ibfk_3`
    FOREIGN KEY (`tipo_reaccion_id`)
    REFERENCES `delhaz_socialmedia`.`tipos_reacciones` (`id`)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- Insertar tipos de reacciones
INSERT INTO `delhaz_socialmedia`.`tipos_reacciones` (nombre, icono) VALUES
('Me encanta', '/path/to/love_icon.svg'),
('Me inspira', '/path/to/inspire_icon.svg'),
('Me divierte', '/path/to/laugh_icon.svg'),
('Me interesa', '/path/to/interest_icon.svg'),
('Me entristece', '/path/to/sad_icon.svg');

