-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-06-2023 a las 18:44:33
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `farmacia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `doctor`
--

CREATE TABLE `doctor` (
  `mail` varchar(50) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `last_log` date NOT NULL,
  `session` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `doctor`
--

INSERT INTO `doctor` (`mail`, `pass`, `name`, `last_log`, `session`) VALUES
('juanl78@hotmail.es', '12345', 'juan', '2023-05-30', 'LZNHjWoL');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medicine`
--

CREATE TABLE `medicine` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `tmax` float NOT NULL,
  `tmin` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `medicine`
--

INSERT INTO `medicine` (`id`, `name`, `tmax`, `tmin`) VALUES
(1, 'deniprol', 30, 5),
(2, 'IBUPROFENO', 20, 40),
(3, 'FORENZEN', 30, 5),
(4, 'PARACETAMOL', 25, 10),
(5, 'AGUASOL', 35, 15),
(6, 'CAPABROL', 40, 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `patient`
--

CREATE TABLE `patient` (
  `mail` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `patient`
--

INSERT INTO `patient` (`mail`, `name`) VALUES
('Alfonsito@hotmail.es', 'Alfonso'),
('Mariano@hotmail.es', 'Mariano'),
('Pedro@hotmail.es', 'Pedro'),
('Vanessa@hotmail.es', 'Vanessa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `xip`
--

CREATE TABLE `xip` (
  `id` int(10) NOT NULL,
  `doctor_mail` varchar(50) NOT NULL,
  `id_medicine` int(11) NOT NULL,
  `id_patient` varchar(50) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `xip`
--

INSERT INTO `xip` (`id`, `doctor_mail`, `id_medicine`, `id_patient`, `date`) VALUES
(1, 'juanl78@hotmail.es', 1, 'Alfonsito@hotmail.es', '2023-05-16'),
(2, 'juanl78@hotmail.es', 1, 'Mariano@hotmail.es', '2023-05-16'),
(16, 'juanl78@hotmail.es', 1, 'Alfonsito@hotmail.es', '2023-06-11'),
(17, 'juanl78@hotmail.es', 1, ' Mariano@hotmail.es', '2023-06-12');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`mail`);

--
-- Indices de la tabla `medicine`
--
ALTER TABLE `medicine`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `patient`
--
ALTER TABLE `patient`
  ADD PRIMARY KEY (`mail`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
