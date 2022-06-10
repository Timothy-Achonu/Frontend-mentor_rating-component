const ratingNumbers = document.querySelector('.rating-numbers');
ratingNumbers.addEventListener('click', styleButtons)
console.log(ratingNumbers)

let checkSelectedRating = false;
let selectedButton;
function styleButtons(e) {
    if(e.target.matches('.select-button')) {
        e.target.style.backgroundColor = 'hsl(217, 12%, 54%)';
        e.target.style.color = 'white';
        selectedButton =  e.target.innerText ;
        checkSelectedRating = true;
    }
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', showMessage); 

function showMessage() {
    if(checkSelectedRating === true) {
        document.querySelector('.main-container').
        setAttribute('class', 'main-container remove-rating-page');

        document.querySelector('.thank-you-message').
        setAttribute('class', 'thank-you-message show-message');

        document.querySelector('.selected-button').
        innerText = ` ${selectedButton} `;
        document.querySelector('.selected-button').style.
        margin = '0px 3px'
    }
}

