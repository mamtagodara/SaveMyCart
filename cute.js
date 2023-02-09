function copyToClipboard(text) {
  const input = document.createElement("input");
  input.style.position = "fixed";
  input.style.opacity = 0;
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  document.body.removeChild(input);
}

function OnMyPageClick(info, tab) {
  console.log("Clicked on page", info.srcUrl, tab);
  copyToClipboard(tab.url);

  chrome.windows.create({
    url: "http:/keep.google.com",
    type: "popup",
  });
}

function OnMyImageClick(info, tab) {
  console.log("Clicked on image", info.pageUrl, tab);
}
function OnQuoteClick(info, tab) {
  console.log("Clicked on image", info.pageUrl, tab);
  chrome.windows.create({
    url:
      "http:/facebook.com/sharer.php?u=" +
      info.pageUrl +
      "&display=popup&quote=" +
      info.selectionText,
    type: "popup",
  });
}

//fetch("https://www.timeanddate.com/worldclock/usa/california").then(Response=>Response.text())
//.then(data=>console.log(data)
//.then(error=>console.log("error",error)));

chrome.contextMenus.create({
  title: "ठेलागाड़ी",
  contexts: ["page"],
  onclick: OnMyPageClick,
});

chrome.contextMenus.create({
  title: " चित्रगाड़ी",
  contexts: ["image"],
  onclick: OnMyImageClick,
});
chrome.contextMenus.create({
  title: "गाड़ी",
  contexts: ["selection"],
  onclick: OnQuoteClick,
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.browserAction.onClicked.addListener(buttonclicked);
});

function buttonclicked(tab) {
  console.log("extension clicked");

  let msg = {
    txt: "hello"
  };
  chrome.tabs.sendMessage(tab.id, msg);
};


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
  });





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


  
 
  chrome.runtime.onInstalled.addListener(function() {
    chrome.browserAction.onClicked.addListener(buttonclicked);
  });
  
  function buttonclicked(tab) {
    console.log("extension clicked");
  
    let msg = {
      txt: "hello"
    };
    chrome.tabs.sendMessage(tab.id, msg);
  };

  chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse){
     var heading= document.createElement("h1");
     heading.innerHTML= "Info of the product is :"+ request.name+request.price+request.url;
     document.body.appendChild(heading);
    }
  )


