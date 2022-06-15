function townsCoordinates(input) {

    let data = [];
    input.shift();
    for (const line of input) {
        let [Town , Latitude , Longitude] = line.match(/([A-Za-z]+[ A-Za-z]*)|(\d+\.\d+)/g);
        Town = Town.trim();
        Latitude = Number(Math.round(Latitude * 100) / 100);
        Longitude = Number(Math.round(Longitude * 100) / 100);
        data.push({Town , Latitude , Longitude});
    }
    let result = JSON.stringify(data);
    console.log(result);
}

townsCoordinates(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']
)