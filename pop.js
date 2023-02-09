document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Sauda").addEventListener("click", function() {


        chrome.storage.local.get(['variable1', 'variable2'], function(result) {
            console.log('Value of variable1 is ' + result.variable1);
            console.log('Value of variable2 is ' + result.variable2);
          
      // Populate the form fields with the extracted information
      document.querySelector("#title").value = result.variable1;
      document.querySelector("#price").value = result.variable2;
    });
  });
});

