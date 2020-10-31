-- phpMyAdmin SQL Dump
-- version 4.6.6deb4+deb9u1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Czas generowania: 03 Paź 2020, 12:22
-- Wersja serwera: 10.1.45-MariaDB-0+deb9u1
-- Wersja PHP: 7.0.33-0+deb9u9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `kplis`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `monety`
--

CREATE TABLE `monety` (
  `id` int(10) UNSIGNED NOT NULL,
  `flaga` varchar(50) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `nominal` varchar(50) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `kat` varchar(50) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `stop` varchar(50) CHARACTER SET utf8 COLLATE utf8_polish_ci NOT NULL,
  `rok` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `monety`
--

INSERT INTO `monety` (`id`, `flaga`, `nominal`, `kat`, `stop`, `rok`) VALUES
(1, 'ARMENIA', '32', 'o', 'aluminum', 2020),
(2, 'LITWA', '32', '54', 'silver', 2020);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `monety`
--
ALTER TABLE `monety`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `monety`
--
ALTER TABLE `monety`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
