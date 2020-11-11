const timeNodes= [...document.querySelectorAll('[data-time]')];
const seconds = timeNodes
.map(node=>node.dataset.time)
.map(timeCode=>{
    const [mins, sec]= timeCode.split(':');
    return ((parseInt(mins)*60)+parseInt(sec))
})
.reduce((total,videoSec)=>total+videoSec)
console.log(seconds);
const hours= Math.floor(seconds/3600);
const secondsLeft= seconds%3600;
const minutes = Math.floor(secondsLeft/60);
const secs = secondsLeft%60

console.log(hours, minutes, secs);



    