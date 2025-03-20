const quotes = [
    "“All our dreams can come true, if we have the courage to pursue them.” —Walt Disney",
    "“The secret of getting ahead is getting started.” —Mark Twain",
    "“The best time to plant a tree was 20 years ago. The second best time is now.” —Chinese Proverb",
    "“Do something today that your future self will thank you for.”",
    "“Small progress is still progress. Keep going!”"
  ];
  

function getRandomQuote(){
    return quotes [Math.floor(Math.random() * quotes.length)];
}



 

function updateMotivation(){
    if (min === 24 &&sec ==0|| min === 10 && sec==0|| min === 15&& sec==0) {
        document.getElementById('motivation').innerText = getRandomQuote();
     }
    }


let min, sec, timerInterval;
function countDown(){
    if(min == 0 && sec == 0){
        alert("Time is up");
        clearTimeout(timerInterval);
        return;
    }
    
        sec--;
        if(sec < 0){
            min --
            sec = 59
            
        }
        document.getElementById("minutes").innerText = min
        document.getElementById("seconds").innerText = sec
        updateMotivation();
        timerInterval = setTimeout(countDown, 1000)
        
    
}
function start(){
    countDown();

}
      document.getElementById("start").addEventListener("click",function(){
        min= parseInt(document.getElementById("minutes").innerText)
        sec = parseInt(document.getElementById("seconds").innerText)
        start();
    });

    function pause(){
        clearTimeout(timerInterval)
         }
    document.getElementById("pause").addEventListener("click",pause);
            

function reset(){
    clearTimeout(timerInterval)
    min= 25;
    sec = 0;
    document.getElementById('minutes').innerText = min
    document.getElementById('seconds').innerText = sec

}

document.getElementById('reset').addEventListener('click', reset);

