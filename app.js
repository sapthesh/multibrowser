/*function onClientLoad() {
    gapi.client.setApiKey("AIzaSyAopzUJBrVaD7ncUFeREkAaPMYRH4-O22Y");
    gapi.client.load("youtube", "v3", onYouTubeLoaded);
}*/

function onYouTubeLoaded() {
    createSearchBox();
}

function createSearchBox() {
    var searchCtr = document.getElementById('searchContainer');
    var searchBox = document.createElement('input');
    searchBox.setAttribute("type", "text");
    searchBox.setAttribute("id", "searchBox");
    searchBox.setAttribute("width", 100);
    searchBox.setAttribute("height", 30);
    searchCtr.appendChild(searchBox);

    var searchBtn = document.createElement('button');
    searchBtn.setAttribute("text", "search");
    searchBtn.setAttribute("width", 80);
    searchBtn.setAttribute("height", 30);
    searchBtn.onclick = requestYoutube;
    searchCtr.appendChild(searchBtn);
}


function requestYoutube(searchTxt) {
    var searchTxt = document.getElementById("searchBox").value;
    if (searchTxt) {
        var request = gapi.client.youtube.search.list({
            q: searchTxt,
            type: 'video',
            part: 'snippet',
            maxResults: 8
        });
        request.execute(function (response) {
            for (var vds in response.items) {
                createYouTubeFrame(response.items[vds].id["videoId"]);
            }
        });
    }
}

function createYouTubeFrame(videoId) {
    var src = "https://www.youtube.com/embed/" + videoId;
    var ifm = document.createElement('iframe');
    ifm.setAttribute('width', 420);
    ifm.setAttribute('height', 360);
    ifm.setAttribute('src', src);
    var videoContainer = document.getElementById('videoContainer');
    videoContainer.appendChild(ifm);
}
