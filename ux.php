<?php
// Configuration de la connexion à la base de données
$host = "localhost";
$username = "root"; // Remplacez par votre utilisateur MySQL
$password = "";     // Remplacez par votre mot de passe MySQL
$database = "products_db";

// Connexion à la base de données
$conn = new mysqli($host, $username, $password, $database);

// Vérification de la connexion
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}

// Requête SQL pour récupérer les produits
$sql = "SELECT * FROM products";
$result = $conn->query($sql);

// Création d'un tableau pour stocker les produits
$products = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}

// Retourner les produits sous format JSON
header('Content-Type: application/json');
echo json_encode($products);

// Fermer la connexion
$conn->close();
?>
