let dropList = document.querySelector('.drop-icon');
let links = document.querySelector('#nav');

document.querySelector('body').addEventListener('click' , function () {
    var e= e || window.event;
            e= e.target || e.srcElement;
            
            console.log("class is "+ e.className);
           
            if (e.className !== "drop-icon active") {
                console.log("bye");
                dropList.classList.remove("active");
                links.classList.remove("active");
         

            }
            
            if (e.className === "lnk") {
                // document.querySelector("#nav").classList.remove("active");
                // document.querySelector(".icon").classList.remove("active");
                links.classList.remove("active");
                dropList.classList.remove("active");
                
            }
            
          


         
});

dropList.onclick=function() {
    // links.style.display ="block";
    links.classList.toggle("active");
    dropList.classList.toggle("active");
};
// var query =  window.matchMedia("(max-width :767px)");
// if (query.matches) {
//     let home = document.querySelector('.landing');
//     let head = document.querySelector('.container');
//     links.onclick  =function(){
//         links.style.display ="none";
        
//     };
//     home.onclick = function(){
//         links.style.display ="none";
//     };
// };


