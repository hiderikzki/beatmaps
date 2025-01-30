document.onreadystatechange = async function () {
    if (document.readyState == "complete") {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.open('GET', "./beatmaps/", false);
        xmlHttp.send(null);

        document.open();
        document.write(xmlHttp.responseText);
        document.getElementsByTagName("title")[0].innerHTML = "hideri's beatmap storage";
        document.close();
    }
}