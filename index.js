let beatmaps = [
    "GoodViber - completely past life"
]

let beatmapLocation = function ( name ) {
    return "./beatmaps/" + name + ".osz";
}

let createBeatmapContainer = function ( beatmap ) {
    let storage = document.getElementById("beatmaps");
    
    let container = document.createElement("div");
    container.classList.add("beatmap");

    let title = document.createElement("p");
    title.classList.add("beatmap-name");
    title.textContent = beatmap;
    container.appendChild(title);

    let download = document.createElement("a");
    download.setAttribute("href", beatmapLocation(beatmap));
    download.setAttribute("download", "");
    download.textContent = "Download";
    container.appendChild(download);

    storage.appendChild(container);
}

document.onreadystatechange = async function () {
    if (document.readyState == "complete") {
        beatmaps.forEach(function (beatmap) {
            createBeatmapContainer(beatmap);
        });
    }
}