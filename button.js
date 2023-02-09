
function addButtonEventListener() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var currentTab = tabs[0];
        var currentUrl = currentTab.url;
        var element = document.getElementById("no");
        element.innerHTML = '<a href="' +currentUrl + '">'+ currentUrl+'</a>';
    });

}


try {
    window.onload = function() {
        addButtonEventListener();
    }
} catch (error) {
    console.log(error);
}

// Store the current tab's URL in the chrome.storage API when the "Save URL" button is clicked
document.getElementById("save-url").addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.storage.local.get(['urls'], function(result) {
        let urls = result.urls || [];
        urls.push(tabs[0].url);
        chrome.storage.local.set({ urls: urls }, function() {
          console.log('URL saved');
        });
      });
    });
  });
  
  // Retrieve all saved URLs from the chrome.storage API and display them when the "Get URLs" button is clicked
  document.getElementById("get-urls").addEventListener("click", function() {
    chrome.storage.local.get(['urls'], function(result) {
      let urls = result.urls || [];
      console.log(urls);
      let urlList = document.createElement("ul");
      urls.forEach(function(url) {
        
       
        if (Object.keys(url).length !== 0) {
            let item = document.createElement("li");
        
        let link= document.createElement("a");
        link.href=url;
        link.textContent=url;
        link.target = "_blank";
        item.appendChild(link);
        
        urlList.appendChild(item);
        }
      });
      document.getElementById("url-list").innerHTML = '';
      document.getElementById("url-list").appendChild(urlList);
    });
  });


  chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
      file: "product.js"
    
    });
  })



// Retrieve the information from the global variable
