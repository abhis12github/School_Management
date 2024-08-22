function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

//Distance calculation using Haversine Formula.
function calculateDistance(latitude1, longitude1, latitude2, longitude2) {
    const radius = 6371;
    const latitudeDiff = degreesToRadians(latitude2 - latitude1);
    const longitudeDiff = degreesToRadians(longitude2 - longitude1);
    const a = Math.sin(latitudeDiff / 2) * Math.sin(latitudeDiff / 2) +
        Math.cos(degreesToRadians(latitude1)) * Math.cos(degreesToRadians(latitude2)) *
        Math.sin(longitudeDiff / 2) * Math.sin(longitudeDiff / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = radius * c;

    console.log(`Distance between (${latitude1}, ${longitude1}) and (${latitude2}, ${longitude2}) is ${distance} km`);
    
    return distance;
}

module.exports = {
    calculateDistance
};