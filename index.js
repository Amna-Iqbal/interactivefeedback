let selectedBtn;
const submitBtn = document.getElementById('submit');
const rating = document.getElementById('rating');
const ratingBtns = document.getElementById('rating-btns');

ratingBtns.addEventListener('click', handlingRating);
submitBtn.addEventListener('click', submitFeedback);


function handlingRating(e){
    if(e.target.tagName === 'BUTTON'){
   selectedBtn = e.target.value;
  submitBtn.disabled=false;}
}

function submitFeedback(){ 
    rating.innerHTML = `
    <div class="thank-img">
        <img src="./images/illustration-thank-you.svg" alt="star icon">
    </div>
    <p class="selected-rating">You selected ${selectedBtn} out of 5</p>
    <h1 class="title">Thank you</h1>
    <p class="rating-text">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>`  
}