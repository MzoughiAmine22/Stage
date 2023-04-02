-- phpMyAdmin SQL Dump
-- version 3.4.5
-- http://www.phpmyadmin.net
--
-- Client: 127.0.0.1
-- Généré le : Dim 02 Avril 2023 à 23:21
-- Version du serveur: 5.5.16
-- Version de PHP: 5.3.8

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `sujet`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mail` text NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Contenu de la table `admin`
--

INSERT INTO `admin` (`id`, `mail`, `password`) VALUES
(1, 'smartadmin2023@gmail.com', '456');

-- --------------------------------------------------------

--
-- Structure de la table `formateur`
--

CREATE TABLE IF NOT EXISTS `formateur` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `age` int(11) NOT NULL,
  `surName` text NOT NULL,
  `adr` text NOT NULL,
  `mail` text NOT NULL,
  `phoneNum` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Contenu de la table `formateur`
--

INSERT INTO `formateur` (`id`, `name`, `age`, `surName`, `adr`, `mail`, `phoneNum`) VALUES
(2, 'Farah', 21, 'Mzoughi', 'Aouina', 'fm@gmail.com', 64512879),
(4, 'Nour', 20, 'Mili', 'Ariana', 'ml@gmail.com', 65498325),
(7, 'Mariem', 29, 'tahari', 'Bardou', 'ss@gmail.com', 12365482),
(8, 'Toumia', 49, 'Ouerghi', 'Aouina', 'tt@gmail.com', 12369874),
(9, 'Amine', 21, 'Mzoughi', 'Aouina', 'zz@gmail.com', 12369874),
(10, 'Youssef', 25, 'Makrem', 'Marsa', 'zz@gmail.com', 69874521),
(11, 'Naouress', 25, 'Khemeri', 'Lac', 'oo@gmail.com', 65439872),
(12, 'Aziz', 20, 'Zina', 'Sokra', 'pp@gmail.com', 95137534),
(13, 'Eya', 22, 'Zhang', 'Aouina', 'tt@gmail.com', 45688529),
(14, 'Yosra', 24, 'Saadani', 'Ariana', 'xx@gmail.com', 68741253);

-- --------------------------------------------------------

--
-- Structure de la table `formation`
--

CREATE TABLE IF NOT EXISTS `formation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `date` date NOT NULL,
  `duration` text NOT NULL,
  `formateur` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `formateur` (`formateur`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Contenu de la table `formation`
--

INSERT INTO `formation` (`id`, `name`, `date`, `duration`, `formateur`) VALUES
(6, 'Node JS', '2023-04-04', '3', 4),
(7, 'Angular', '2023-02-06', '5', 7),
(9, 'Microsoft 365', '2023-01-30', '3', 4),
(10, 'MYSQL', '2023-06-06', '4', 8),
(11, 'Base de données', '2023-02-28', '4', 9),
(12, 'Linux', '2023-03-07', '3', 8),
(13, 'React', '2023-05-03', '7', 12),
(14, 'UML', '2023-04-01', '3', 11),
(15, 'Microsoft Azure', '2023-07-03', '5', 14),
(16, 'Adobe', '2023-06-13', '4', 4),
(17, 'Windows Server', '2023-07-09', '3', 2),
(18, 'Python', '2023-07-04', '3', 13),
(19, 'Office 2019', '2023-07-10', '4', 7),
(20, 'Windows Client', '2023-06-14', '3', 10);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullname` text NOT NULL,
  `age` int(11) NOT NULL,
  `mail` text NOT NULL,
  `password` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id`, `fullname`, `age`, `mail`, `password`) VALUES
(2, 'Aya Barhoumi', 32, 'ab@gmail.com', '$2a$10$zn3ABVyGiGmluNoQt6KWHObGpEqIHnkxB2.Oe8BevUSrhcLztnn3O'),
(3, 'Fox Man', 21, 'fm@gmail.com', '$2a$10$UkUe5w9DDEOvdxhV48hhKOA61kUObIwC/Eo5IxubZjwMQNHix0g4y'),
(4, 'Abd Kader', 26, 'ak@gmail.com', '$2b$10$LyKcouBe2wwzeyE72ieWd.zym9S6A9Pe9MvbGPzUnLm4QLMpPWPpq'),
(5, 'm', 12, 'm@gmail.com', '$2b$10$QYwqmNxTSoltZpxa7t8Sk.VGhJ9xVIISjwsEIgjMF5dqAK5YTnzpC'),
(6, 'Nice Name', 58, 'nice@gmail.com', '$2a$10$hUIMnu7NAWqKoSX2jrso1.rJE0relNfN5iQNBPMoo8n3GmyU4gyb6'),
(7, 'Test Blanc', 45, 'tb@gmail.com', '$2a$10$wYKpJKrzezNcnArVQ3ypa.aPo6sHVjMOXXLYUuvr3O1Zikov3o1B2'),
(8, 'Lina Medj', 32, 'lm@gmail.com', '$2a$10$9AQP4eFXEnz4ZsljJQZjTu5qXl4uZG9DF9OaO9ZJeUK9d1skN5yB6'),
(9, 'Amine Mzoughi', 20, 'aminemzoughi@gmail.com', '$2a$10$rRzMZrRYtOtjUNA.3T3v9.IUBBNidmiuO9VTNxtKS6o9yIirl.ZSu');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `formation`
--
ALTER TABLE `formation`
  ADD CONSTRAINT `formation_ibfk_1` FOREIGN KEY (`formateur`) REFERENCES `formateur` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
