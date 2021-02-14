function toggleClass()
{

    const body = document.querySelector('body');
    body.classList.toggle('light');
    body.style.transition = `0.4s linear`;
}


const deg = 6; 
// 360 / (12 * 5);

const hr = document.querySelector('#hr');
const mn = document.querySelector('#min');
const sc = document.querySelector('#sec');


setInterval(() => {
    
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let msec = day.getMilliseconds();

    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

});
