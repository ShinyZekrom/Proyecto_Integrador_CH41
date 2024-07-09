-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema delhaz
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema delhaz
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `delhaz` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `delhaz` ;

-- -----------------------------------------------------
-- Table `delhaz`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delhaz`.`usuarios` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `fecha_registro` DATETIME(6) NOT NULL,
  `foto_perfil` VARCHAR(255) NOT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `delhaz`.`perfiles`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delhaz`.`perfiles` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `descripcion` TEXT NULL DEFAULT NULL,
  `usuarios_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_perfiles_usuarios1_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_perfiles_usuarios1`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `delhaz`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `delhaz`.`publicacion`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delhaz`.`publicacion` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `contenido` VARCHAR(255) NOT NULL,
  `descripcion` VARCHAR(255) NOT NULL,
  `fecha_publicacion` DATETIME(6) NOT NULL,
  `usuario` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `delhaz`.`tipos_reacciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delhaz`.`tipos_reacciones` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `icono` VARCHAR(255) NULL DEFAULT NULL,
  `nombre` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `delhaz`.`reacciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delhaz`.`reacciones` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `fecha_reaccion` DATETIME(6) NOT NULL,
  `usuarios_id` BIGINT NOT NULL,
  `publicacion_id` BIGINT NOT NULL,
  `tipos_reaccion_id` BIGINT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reacciones_usuarios_idx` (`usuarios_id` ASC) VISIBLE,
  INDEX `fk_reacciones_publicacion1_idx` (`publicacion_id` ASC) VISIBLE,
  INDEX `fk_reacciones_tipos_reacciones1_idx` (`tipos_reaccion_id` ASC) VISIBLE,
  CONSTRAINT `fk_reacciones_usuarios`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `delhaz`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reacciones_publicacion1`
    FOREIGN KEY (`publicacion_id`)
    REFERENCES `delhaz`.`publicacion` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_reacciones_tipos_reacciones1`
    FOREIGN KEY (`tipos_reaccion_id`)
    REFERENCES `delhaz`.`tipos_reacciones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
