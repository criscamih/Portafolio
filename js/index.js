import { TimeLine } from "./timeLine.js";

TimeLine();

const portfolioAction1 = document.querySelector(".step1");
const portfolioAction2 = document.querySelector(".step2");
const portfolioAction3 = document.querySelector(".step3");
const portfolioAction4 = document.querySelector(".step4");
const portfolioAction5 = document.querySelector(".step5");

const experience1 = document.querySelector(".experience1");
const experience2 = document.querySelector(".experience2");
const experience3 = document.querySelector(".experience3");
const experience4 = document.querySelector(".experience4");
const experience5 = document.querySelector(".experience5");

const lineProgress = document.querySelector("#line-progress");

portfolioAction1.onclick = () => {
    lineProgress.style.width = '3%';
    portfolioAction1.classList.add('active');
    portfolioAction2.classList.remove('active');
    portfolioAction3.classList.remove('active');
    portfolioAction4.classList.remove('active');
    portfolioAction5.classList.remove('active');
    experience1.classList.add('active');
    experience1.classList.remove('hide');
    experience2.classList.remove('active');
    experience2.classList.add('hide');
    experience3.classList.remove('active');
    experience3.classList.add('hide');
    experience4.classList.remove('active');
    experience4.classList.add('hide');
    experience5.classList.remove('active');
    experience5.classList.add('hide');
}
portfolioAction2.onclick = () => {
    lineProgress.style.width = '25%';
    portfolioAction1.classList.remove('active');
    portfolioAction2.classList.add('active');
    portfolioAction3.classList.remove('active');
    portfolioAction4.classList.remove('active');
    portfolioAction5.classList.remove('active');
    experience1.classList.add('hide');
    experience1.classList.remove('active');
    experience2.classList.remove('hide');
    experience2.classList.add('active');
    experience3.classList.remove('active');
    experience3.classList.add('hide');
    experience4.classList.remove('active');
    experience4.classList.add('hide');
    experience5.classList.remove('active');
    experience5.classList.add('hide');
}
portfolioAction3.onclick = () => {
    lineProgress.style.width = '50%';
    portfolioAction1.classList.remove('active');
    portfolioAction2.classList.remove('active');
    portfolioAction3.classList.add('active');
    portfolioAction4.classList.remove('active');
    portfolioAction5.classList.remove('active');
    experience1.classList.add('hide');
    experience1.classList.remove('active');
    experience2.classList.add('hide');
    experience2.classList.remove('active');
    experience3.classList.add('active');
    experience3.classList.remove('hide');
    experience4.classList.remove('active');
    experience4.classList.add('hide');
    experience5.classList.remove('active');
    experience5.classList.add('hide');
}
portfolioAction4.onclick = () => {
    lineProgress.style.width = '75%';
    portfolioAction1.classList.remove('active');
    portfolioAction2.classList.remove('active');
    portfolioAction3.classList.remove('active');
    portfolioAction4.classList.add('active');
    portfolioAction5.classList.remove('active');
    experience1.classList.add('hide');
    experience1.classList.remove('active');
    experience2.classList.add('hide');
    experience2.classList.remove('active');
    experience3.classList.remove('active');
    experience3.classList.add('hide');
    experience4.classList.add('active');
    experience4.classList.remove('hide');
    experience5.classList.remove('active');
    experience5.classList.add('hide');
}
portfolioAction5.onclick = () => {
    lineProgress.style.width = '100%';
    portfolioAction1.classList.remove('active');
    portfolioAction2.classList.remove('active');
    portfolioAction3.classList.remove('active');
    portfolioAction4.classList.remove('active');
    portfolioAction5.classList.add('active');
    experience1.classList.add('hide');
    experience1.classList.remove('active');
    experience2.classList.add('hide');
    experience2.classList.remove('active');
    experience3.classList.remove('active');
    experience3.classList.add('hide');
    experience4.classList.remove('active');
    experience4.classList.add('hide');
    experience5.classList.add('active');
    experience5.classList.remove('hide');
}
