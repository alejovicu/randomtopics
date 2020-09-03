const getRandomTopic = function () {
    readTextFile("js/topics.json", function (fileContent) {
        const data = JSON.parse(fileContent)
        document.getElementById("topic").innerHTML = data.topics[ Math.floor((Math.random() * data.topics.length) + 0) ];
    })
}

function readTextFile(file, callback) {
    const rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}