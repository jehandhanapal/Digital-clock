const hEl = document.getElementById('hours');
const mEl = document.getElementById('minutes');
const sEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function updateclock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    if (h>=12) {
         ampmEl.innerText = "PM";
    } 
    else {
        ampmEl.innerText = "AM";
    }

    hEl.innerText = h;
    mEl.innerText = m;
    sEl.innerText = s;
    
    setTimeout(() => {
        updateclock();
    }, 1000);
}
updateclock();
