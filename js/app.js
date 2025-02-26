// Landing page. Who are you?
// 3-15 found in DOM Events Lecture // username add if needed
// const commentButtonElement =document.querySelector('#comment-button');
// const commentListElement = document.querySelector('p');
// const inputElement = document.querySelector ('input');

// commentButtonElement.addEventListener('click', () =>{
    
//     if (inputElement.value != "") {
//         const commentElement = document.createElement ('p');
//     commentElement.textContent= inputElement.value; //placeholder
//     commentListElement.appendChild(commentElement);
//     inputElement.value =""
//     }
// }); 
 

//=====Constants======//

const backStory = document.getElementById('backStory')
const startButton = document.querySelector ('.startButton');
const startScreen = document.getElementById ('startScreen');
const buttonContainer = document.getElementById ('buttonContainer');
const weekOne = document.createElement('weekOne');
const mow = document.createElement('mow');
const output = document.getElementById('output');
const imageContainer = document.getElementById('imageContainer');


// start of game 

mainTitle.style.margin ='20px'
mainTitle.style.padding = 

startButton.addEventListener('click', () => {
    // console.log(event.target.innerText)
    // startScreen.style.display= 'none'; 
    backStory.textContent = "Welcome to your first week! Melvin gives you a list of lawns to cut. Start cutting with your teeth?";  
    backStory.style.display ='block';
    backStory.style.fontSize = '40px';
    // startButton.style.fontSize = 30px ;
    weekOne.style.display = 'block';
    wallet.style.display = 'block'
    imageContainer.style.backgroundImage = "url('../images/Ls2Cousin.png')";
    // console.log(backStory)
});

// ===== Week 1 ======== //  


weekOne.textContent = 'Start Week!'; 
buttonContainer.appendChild(weekOne);
weekOne.style.fontSize ='20px';
weekOne.style.display = 'none';
weekOne.style.margin = '20px'; 
weekOne.style.color = 'blue';
weekOne.style.fontWeight = 'bold'; 
weekOne.style.position = 'absolute';
weekOne.style.border = '2px solid black'; 

// Variable//

let walletAmount = 0;
let week = 1;
 
// if (buttonContainer) { 
    weekOne.addEventListener('click', () => {
        console.log('clicked');
        backStory.innerHTML = 'Make that <span style="color: green;">schmuny</span>!';    weekOne.textContent = 'Mow!';
        imageContainer.style.backgroundImage = "url('../images/LandscaperScissors.png')";
    // for (let week = 1; week <= 4; week ++) {
    incrementWallet(week);
    wallet.innerHTML = `You have $${walletAmount}`;
    console.log (week); 
// };
}); 
// } else {
     
// } 
function incrementWallet (week) {
    let walletName = `mowWeek ${week}`;
    walletAmount += 100;
    console.log(`${walletName}: $${walletAmount}`);
    return `You have $${walletAmount}`;
    
}


wallet.innerHTML= incrementWallet();
wallet.style.fontSize = '25px'
// output.style.position = 
// output.style.margin = '300px' 
wallet.style.display = 'none'


// images ========== //

const Ls1Teeth = document.createElement('Ls1Teeth'); 
img.src = images/Ls1Teeth.png
img.alt = 'Week 1 Teeth Img'
const Ls2Cousin = document.createElement('Ls2Cousin');
Ls1Teeth.src = images/Ls2Cousin.png
Ls1Teeth.alt = 'Week 2 Cousin Img'
//create image container+properties
// const imageContainer = document.createElement('image-container');
// imageContainer.id = 'image-container';
// imageContainer.className = 'container';
//put on DOM
document.body.appendChild(imageContainer);
imageContainer.appendChild(Ls1Teeth);
console.log(Ls1Teeth);