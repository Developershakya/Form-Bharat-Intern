function createBurst(){


let container = document.querySelector('.animation-container')
let burst = document.querySelector('.burst')
burst.style.top = Math.random() * 700 +'px';
burst.style.left = Math.random() * 500 +'px';
let burstClone =burst.cloneNode(true);
container.appendChild(burstClone);
setTimeout(() =>{
    burstClone.remove()
},2000);

}


setInterval(createBurst,2000);
