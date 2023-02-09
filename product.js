/*
function fetchProductDetails() {
   var button= document.getElementById("Sauda");
   button.style.backgroundColor='blue';
var scripts = document.querySelectorAll('script[type="application/ld+json"]');
console.log(scripts);
for(var i=0;i<scripts.length;i++){
   var script= scripts[i];
   var data= JSON.parse(script.innerHTML);
   if(data.hasOwnProperty("@context")&& data["@context"]==="https://schema.org" && data.hasOwnProperty("@type") && data["@type"] === "Product"){
    var name= data.name;
    var price=data.offers.price;
    var url=data.offers.url;

    let heading= document.createElement('h1');
    heading.innerText= `Product: ${name} - Price: ${price}`;
    document.body.appendChild(heading);
    console.log(name);
   }
}
}

document.getElementById("Sauda").addEventListener("click",fetchProductDetails);
*/

let paragraphs=document.getElementsByTagName("p");
console.log("in paragraph");
for(elem of paragraphs){
elem.style['background-color']='#FF00FF'

};


var jq = document.createElement('script');
jq.src ="lib/jquery-3.6.0.min.js"
jq.onload = function() {
    $('a[href]').addClass('alter');
    var style = document.createElement('style');
    style.innerHTML = '.alter{color:white!important;background:black!important;}';
    document.head.appendChild(style);
};
document.head.appendChild(jq);




let scripts = document.querySelectorAll('script[type="application/ld+json"]');
console.log(scripts);
for(var i=0;i<scripts.length;i++){
   var script= scripts[i];
   console.log("in script");

   var data= JSON.parse(script.innerHTML);

   console.log("after parsing");
   if(data.hasOwnProperty("@context")&& data["@context"]==="https://schema.org" && data.hasOwnProperty("@type") && data["@type"] === "Product"){
   console.log("in if  block"); 
   let name= data.name;
    let price=data.offers.price;
    let url=data.offers.url;

    //let heading= document.createElement("h1");
    //heading.innerText= `Product: ${name} - Price: ${price}`;
    //document.body.appendChild(heading);
    console.log(name);
    console.log("price is");
    let msg = {name: name, price: price, url:url};
    
    
     console.log(price);
   
     chrome.storage.local.set({'variable1': name, 'variable2': price}, function() {
      console.log('Variables are stored.');
    });
    
   }
   }
// content script



