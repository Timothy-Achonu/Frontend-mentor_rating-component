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
                lastClickedButton.classList.remove('clicked-button');
                // lastClickedButton.removeAttribute('class');
                // lastClickedButton.setAttribute('class', 'select-button')
                // console.log(lastClickedButton.classList)
                /*
                How does removeAttribute method work?
                I think the removeAttribute method removes the
                attribute you specify when you call it and not an
                attribute name, it removes the whole attribute.
                */
            } 
        }
        lastClickedButton = e.target;
        // console.log(lastClickedButton)
        selectedRating =  e.target.innerText ;
        checkSelectedRating = true;
    }
}

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', showMessage); 

function showMessage(e) {
    if(checkSelectedRating === false) {
        alert('Please Select a Rating');
    }
    else if(lastClickedButton.classList.contains('clicked-button') === false) {
        alert('Please Select a rating')
    }
    else if(lastClickedButton.classList.contains('clicked-button') === true) {
        console.log(lastClickedButton);
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

