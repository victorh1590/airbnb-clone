-- Query de Inserção

-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 06, 2020 at 08:25 PM
-- Server version: 5.7.32-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `temvaga_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `imoveis`
--

CREATE TABLE `imoveis` (
  `codigo` bigint(20) UNSIGNED NOT NULL,
  `cidade` varchar(50) DEFAULT NULL,
  `preco` varchar(8) DEFAULT NULL,
  `categoria` varchar(15) DEFAULT NULL,
  `imagem` mediumtext,
  `descricao` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `imoveis`
--

INSERT INTO `imoveis` (`codigo`, `cidade`, `preco`, `categoria`, `imagem`, `descricao`) VALUES
(1, 'São Paulo', '25.53', 'Apartamento', '1.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(2, 'São Paulo', '35.00', 'Casa', '2.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(3, 'São Paulo', '506.00', 'Sobrado', '3.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(4, 'Campinas', '300.00', 'Kitnet', '4.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(5, 'Campinas', '760.00', 'Quarto', '5.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(6, 'Campinas', '185.00', 'Apartamento', '6.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(7, 'Ribeirão Preto', '99.55', 'Casa', '7.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(8, 'Poços de Caldas', '106.70', 'Sobrado', '8.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(9, 'Ouro Preto', '56.75', 'Kitnet', '9.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(10, 'Belo Horizonte', '67.00', 'Quarto', '10.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(11, 'Belo Horizonte', '345.90', 'Apartamento', '11.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(12, 'Rio de Janeiro', '223.00', 'Casa', '12.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(13, 'Rio de Janeiro', '447.52', 'Sobrado', '13.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(14, 'Vitória', '189.00', 'Kitnet', '14.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(15, 'Salvador', '222.50', 'Quarto', '15.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(16, 'Curitiba', '110.95', 'Apartamento', '16.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(17, 'Manaus', '56.79', 'Sobrado', '17.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(18, 'Goiânia', '440.75', 'Quarto', '18.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(19, 'Porto Alegre', '87.05', 'Kitnet', '19.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue '),
(20, 'Fortaleza', '50.00', 'Apartamento', '20.jpg', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at ligula ex. Vivamus malesuada velit ac lectus gravida, tempus mollis leo feugiat. Vivamus mattis tellus vitae blandit porta. Maecenas vitae tellus tortor. Sed tempor turpis est, ac consequat metus auctor vitae. Mauris dapibus dui risus, sed eleifend nulla euismod vitae. Quisque condimentum orci id finibus ultrices. Etiam et mi feugiat, ultricies odio in, facilisis arcu. Curabitur nec turpis eu leo porttitor mollis. Praesent congue ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `imoveis`
--
ALTER TABLE `imoveis`
  ADD PRIMARY KEY (`codigo`),
  ADD UNIQUE KEY `codigo` (`codigo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `imoveis`
--
ALTER TABLE `imoveis`
  MODIFY `codigo` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
