-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 13 Mar 2022 pada 01.24
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_rest_api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(250) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `title`, `price`, `created_at`, `updated_at`) VALUES
(1, 'Product 1', 1000, '2022-03-13 00:22:50', '2022-03-13 00:22:50'),
(2, 'Product 2', 1000, '2022-03-13 00:23:00', '2022-03-13 00:23:00'),
(3, 'Product 3', 1000, '2022-03-13 00:23:02', '2022-03-13 00:23:02'),
(4, 'Product 4', 1000, '2022-03-13 00:23:05', '2022-03-13 00:23:05'),
(5, 'Product 5', 1000, '2022-03-13 00:23:09', '2022-03-13 00:23:09'),
(6, 'Product 6', 1000, '2022-03-13 00:23:22', '2022-03-13 00:23:22'),
(7, 'Product 7', 1000, '2022-03-13 00:23:25', '2022-03-13 00:23:25'),
(8, 'Product 8', 1000, '2022-03-13 00:23:28', '2022-03-13 00:23:28'),
(9, 'Product 9', 1000, '2022-03-13 00:23:32', '2022-03-13 00:23:32'),
(10, 'Product 10', 1000, '2022-03-13 00:23:36', '2022-03-13 00:23:36');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
