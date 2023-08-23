let videoId = '';
  let refreshInterval = null;

  document.getElementById("addButton").addEventListener("click", function () {
    videoId = document.getElementById("link").value;
    var count = parseInt(document.getElementById("count").value);
    var iframeContainer = document.getElementById("iframes");
    
    for (var i = 0; i < count; i++) {
      var iframeWrapper = document.createElement("div");
      iframeWrapper.className = "iframe-container";
      var iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1";
      iframe.setAttribute("frameborder", "0");
      iframeWrapper.appendChild(iframe);
      iframeContainer.appendChild(iframeWrapper);
    }

    // Display current time
    var currentTime = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = "Videos loaded at: " + currentTime;
  });

  document.getElementById("refreshButton").addEventListener("click", function () {
    const refreshSeconds = parseInt(document.getElementById("refresh").value);
    if (!isNaN(refreshSeconds) && refreshSeconds > 0) {
      if (refreshInterval) {
        clearInterval(refreshInterval);
      }
      refreshInterval = setInterval(refreshIframes, refreshSeconds * 1000);
      refreshIframes();
    }
  });

  function refreshIframes() {
    var iframes = document.getElementsByTagName("iframe");
    for (var i = 0; i < iframes.length; i++) {
      iframes[i].src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&mute=1";
    }
  }