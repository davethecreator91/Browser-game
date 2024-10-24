// Landing page. Who are you?
// 3-15 found in DOM Events Lecture
const commentButtonElement =document.querySelector('#comment-button');
const commentListElement = document.querySelector('p');
const inputElement = document.querySelector ('input');

commentButtonElement.addEventListener('click', () =>{
    
    if (inputElement.value != "") {
        const commentElement = document.createElement ('p');
    commentElement.textContent= inputElement.value; //placeholder
    commentListElement.appendChild(commentElement);
    inputElement.value =""
    }
}); 
const backStory = document.getElementById('backStory')
const startButton = document.querySelector ('.startButton');
const startScreen = document.getElementById ("startScreen");
startButton.addEventListener('click', () => {
    // console.log(event.target.innerText)
    startScreen.style.display= 'none'
});

