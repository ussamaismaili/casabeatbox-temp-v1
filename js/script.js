let dropList = document.querySelector('.drop-icon');
let links = document.querySelector('#nav');
dropList.onclick=function() {
    links.style.display ="block";
};


let home = document.querySelector('.landing');
let head = document.querySelector('.container');


links.onclick  =function(){
    links.style.display ="none";
    
};

home.onclick = function(){
    links.style.display ="none";
};

