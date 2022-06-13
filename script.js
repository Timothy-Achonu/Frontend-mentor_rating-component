const ratingNumbers = document.querySelector('.rating-numbers');
ratingNumbers.addEventListener('click', styleButtons)
// console.log(ratingNumbers.children)

let checkSelectedRating = false;
let selectedRating;
const eachRatingNumber = document.querySelectorAll('.select-button')
// console.log(eachRatingNumber)
let count = 0;
let lastClickedButton;
function styleButtons(e) {
    
    if(e.target.matches('.select-button')) {
        count++;
        // console.log(e.target)
        e.target.classList.toggle('clicked-button');
        if(count >= 2) {
            if(e.target !== lastClickedButton) {
                // console.log(lastClickedButton);
                lastClickedButton.removeAttribute('class');
                lastClickedButton.setAttribute('class', 'select-button')
                // console.log(lastClickedButton.classList)
                /*
                How does removeAttribute method work?
                */
            } 
        }
        lastClickedButton = e.target;
        // console.log(lastClickedButton)
        selectedRating =  e.target.innerText ;
        checkSelectedRating = true;
        /*
          I don't get this. This works but, if I keep clicking and
          unclicking the ratings tryihg to test the code, suddenly 
          the function stops running when I click the buttons, 
          only one of them continues to run the function when I 
          click on it- I know this because it still toggles the
          'clicked-button' class and things are still printed on
          the console when that button is clicked.
        */
    }
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', showMessage); 

function showMessage() {
    if(checkSelectedRating == false) {
        alert('Select a rating first')
    }
    else if(checkSelectedRating === true) {
        document.querySelector('.main-container').
        setAttribute('class', 'main-container remove-rating-page');

        document.querySelector('.thank-you-message').
        setAttribute('class', 'thank-you-message show-message');

        document.querySelector('.selected-button').
        innerText = ` ${selectedRating} `;
        document.querySelector('.selected-button').style.
        margin = '0px 3px'
    }
}

