function initMap() {
    // The location of Uluru
    const lublin = { lat: 51.24774364382149, lng: 22.56485054750721 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: lublin,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: lublin,
        map: map,
    });
}
