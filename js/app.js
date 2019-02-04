document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formSubmit = document.querySelector('#tea-rating-form');
  formSubmit.addEventListener('submit', handleFormSubmit);

  const formDelete = document.querySelector('#delete-items');
  formDelete.addEventListener('click', handleFormDelete);
});

const handleFormSubmit = function(event){
  event.preventDefault();

  const newRating = document.createElement('li')
  newRating.innerHTML = `
  Brand: ${event.target.brand.value}<br>
  Type: ${event.target.type.value}<br>
  Rating: ${event.target.rating.value}
  `
  const ratingsList = document.querySelector('#ratings-list')
  ratingsList.appendChild(newRating)

  const formSubmit = document.querySelector('#tea-rating-form');
  formSubmit.reset();

  newRating.classList.add("media-card");
  newRating.classList.add("flex");
  console.dir(ratingsList);
};

const handleFormDelete = function(){
  const allItems = document.querySelector('#ratings-list');
  allItems.innerHTML='';
  console.dir(handleFormDelete);
};
