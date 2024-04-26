<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Traitez les données comme vous le souhaitez, par exemple, envoyez un e-mail à partir d'ici.

    // Vous pouvez également rediriger l'utilisateur vers une page de remerciement ou afficher un message de confirmation ici.
}

function initMap() {
    var myLatLng = {lat: -34.397, lng: 150.644}; // votre propre adresse

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Notre position'
    });
};