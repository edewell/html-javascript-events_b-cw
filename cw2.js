const textBox = document.querySelector('input');
const label = document.querySelector('label');
const codeCrewString =  "Code School is a hands-on class designed to train individuals to be entry-level software developers within a six-month course. The minimum education requirement is at least a high school diploma or GED. Students work in a small classroom setting and use real-word technologies to learn the fundamentals of coding, app development, the leadership, and the life skills needed for a successful career and job market competitiveness."
const button = document.querySelector('button');
let idx = 0;

textBox.addEventListener("keydown", handleKeyDown = (evt) => {
    if (idx < codeCrewString.length) {
        label.innerText += `${codeCrewString[idx]}`;
        idx++;
    }
    
    
})

button.addEventListener("click", handleReset = (evt) => {
    label.innerText = "";
    textBox.innerText = "";
})