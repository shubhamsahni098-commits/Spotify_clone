let masterPlay = document.querySelectorAll(".masterplay");
/*let audioElement0 = new Audio('bd.mp3');
let audioElement1 = new Audio('[1].mp3');
let audioElement2 = new Audio('[2].mp3');*/
let audioElement = [new Audio('bd.mp3'),new Audio('[1].mp3'),new Audio('[2].mp3'),new Audio('[3].mp3'), new Audio('[4].mp3')];
let banner = ["bd-bg.png","rj_cover.png","jg_c.png","aq_c.png","jt_c.png"];
let  headerTxt = ["Badri Ki Dulhaniya","Raja Ji Ke Dilwa","Jag Ghumya - Sultan","Dheere Dheere Se","Jatti - Karan Randhawa"];
/*let forwardBtn = document.querySelector(".fw");*/
let forwardBtn = document.querySelector(".fw");
let backwardBtn = document.querySelector(".bw");
let c = 0;
let lastPlayed ;
let gif = document.querySelector(".gif-img");
let header = document.querySelector(".header");
let myProgressBar = document.querySelector("#myProgressBar");
let play = document.querySelector(".play");
let next = document.querySelector(".next");
let previous = document.querySelector(".previous");


masterPlay[6].addEventListener('mouseenter',() =>{
    if(audioElement[c].paused){
        play.innerText = "Play";
        play.style.opacity = '1';

    }
    else{
        /*play.style.innerText = "Pause";*/ 
        play.innerText = "Pause";
        play.style.opacity = '1';
    }
})
masterPlay[6].addEventListener('mouseleave',() =>{
     play.style.opacity = '0';
})

masterPlay[6].addEventListener('click', () =>{
    if(audioElement[c].paused){
        
        masterPlay[6].classList.remove("fa-play-circle");
        masterPlay[6].classList.add("fa-pause-circle");
        audioElement[c].play();

        audioElement[c].addEventListener("timeupdate", () =>{
        progress = parseInt((audioElement[c].currentTime/audioElement[c].duration) * 100);
        myProgressBar.value = progress;

        if(myProgressBar.value == 100){
            masterPlay[6].classList.remove("fa-pause-circle");
            masterPlay[6].classList.add("fa-play-circle");
            masterPlay[c].classList.remove("fa-pause-circle");
            masterPlay[c].classList.add("fa-play-circle");
            gif.classList.add("hide");

        }
        })
        
        if(lastPlayed >= 0){
            if(lastPlayed !== c){
                if(c >= 0){
            console.log("lp=",lastPlayed);
            audioElement[lastPlayed].pause();
            masterPlay[lastPlayed].classList.remove("fa-pause-circle");
            masterPlay[lastPlayed].classList.add("fa-play-circle");

        }
        else{
            audioElement[1].pause();
            masterPlay[1].classList.remove("fa-pause-circle");
            masterPlay[1].classList.add("fa-play-circle");

        }

            }
            

        }
        
        masterPlay[c].classList.remove("fa-play-circle");
        masterPlay[c].classList.add("fa-pause-circle");
        gif.classList.remove("hide");
        if(c == 0){
            document.querySelector(".banner").style.backgroundImage = `url(${banner[c]})`;/*ekho
        
           /* cover_photo.classList.remove("banner");
           cover_photo.classList.add("new-banner");*/
           header.innerText = headerTxt[c];
        }
        lastPlayed = c;
        


    }
    else{
        audioElement[c].pause();
        masterPlay[c].classList.remove("fa-pause-circle");
        masterPlay[c].classList.add("fa-play-circle");
        masterPlay[6].classList.remove("fa-pause-circle");
        masterPlay[6].classList.add("fa-play-circle");

        gif.classList.add("hide");
    }

})

forwardBtn.addEventListener('click', () =>{
    if(c < masterPlay.length - 1){
        c++;
        document.querySelector(".banner").style.backgroundImage = `url(${banner[c]})`;/*ekho
        
       /* cover_photo.classList.remove("banner");
        cover_photo.classList.add("new-banner");*/
        header.innerText = headerTxt[c];
        
    }
    if(audioElement[c].paused){
        
        masterPlay[6].classList.remove("fa-pause-circle");
        masterPlay[6].classList.add("fa-play-circle");
    }
    else{
        masterPlay[6].classList.remove("fa-play-circle");
        masterPlay[6].classList.add("fa-pause-circle");

    }
})
forwardBtn.addEventListener("mouseenter",() =>{
    next.style.opacity = '1';
})
forwardBtn.addEventListener("mouseleave",() =>{
    next.style.opacity = '0';
})
backwardBtn.addEventListener('click', () =>{
    if(c > 0){
       c--;
        document.querySelector(".banner").style.backgroundImage = `url(${banner[c]})`;/*ekho
        
       /* cover_photo.classList.remove("banner");
        cover_photo.classList.add("new-banner");*/
        header.innerText = headerTxt[c];
    }
    if(audioElement[c].paused){
        
        masterPlay[6].classList.remove("fa-pause-circle");
        masterPlay[6].classList.add("fa-play-circle");
    }
    else{
        masterPlay[6].classList.remove("fa-play-circle");
        masterPlay[6].classList.add("fa-pause-circle");

    }

})
backwardBtn.addEventListener("mouseenter",() =>{
    previous.style.opacity = '1';
})
backwardBtn.addEventListener("mouseleave",() =>{
    previous.style.opacity = '0';
})


myProgressBar.addEventListener("change",() =>{
    audioElement[c].currentTime = myProgressBar.value * audioElement[c].duration/100;
})

