<!DOCTYPE html>
<html>

<head>
  <title>Liste des éléments de la base de données</title>
</head>

<body>

  <h1>Liste des fruits et legumes </h1>

  <ul>
    <?php
    $servername = "localhost";
    $username = "seasonly";
    $password = "seasonly";
    $dbname = "seasonly";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
      die("Échec de la connexion : " . $conn->connect_error);
    }

    $sql = "SELECT * FROM vegetable";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        echo "<li>" . $row["name"] . "</li>";
      }
    } else {
      echo "0 résultats";
    }
    $conn->close();
    ?>
  </ul>

</body>

</html>