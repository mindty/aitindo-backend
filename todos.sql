-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 30 Jan 2022 pada 02.05
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `todos`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `todo`
--

CREATE TABLE `todo` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `status` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `todo`
--

INSERT INTO `todo` (`id`, `name`, `status`) VALUES
(1, 'makan', 'ongoing'),
(2, 'tidur', 'ongoing'),
(3, 'tidur', 'ongoing'),
(4, 'belajar', 'ongoing'),
(5, 'belajar', 'ongoing'),
(6, 'cek email', 'ongoing'),
(7, 'cek email', 'ongoing'),
(8, 'cek mail', 'ongoing'),
(9, 'cek mail', 'ongoing'),
(10, 'cek mail', 'ongoing'),
(11, 'cek mail', 'ongoing'),
(12, 'cek mail', 'ongoing'),
(13, 'cek mail', 'ongoing'),
(14, 'cek mail', 'ongoing'),
(15, 'cek mailv', 'ongoing'),
(16, 'cek mailv', 'ongoing'),
(17, 'cek mailv', 'ongoing'),
(18, 'navodoklvmsd', 'ongoing'),
(19, 'navodoklvmsd', 'ongoing'),
(20, 'vavefse', 'ongoing'),
(21, 'navodoklvmsd', 'ongoing'),
(22, 'vavefse', 'ongoing'),
(23, 'cek mailv', 'ongoing'),
(24, 'do this', 'ongoing'),
(25, 'this', 'ongoing'),
(26, 'gsethsryj', 'ongoing'),
(27, 'vhdj', 'ongoing');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `todo`
--
ALTER TABLE `todo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `todo`
--
ALTER TABLE `todo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
