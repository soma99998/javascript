const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;
populateUI();


//console.log( typeof ticketPrice);
// update total and count 
function updatedSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected') ;
  //  console.log(selectedSeat);
  const selectedSeatCount = selectedSeats.length;
 // console.log(selectedSeatCount);
 count.innerHTML= selectedSeatCount;
 total.innerHTML = selectedSeatCount * ticketPrice;
// console.log(selectedSeats);
//copy selected seats into array
const seatsIndex = [...selectedSeats].map(seat=>[...seats].indexOf(seat)); 
localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex)); 

console.log(seatsIndex);
// map through array

// return a new array 


}
//get data from local storage and popluateui
function populateUI(){
  const selectedSeat = JSON.parse(localStorage.getItem('selectedSeats'));
  //console.log(selectedSeat);
  if(selectedSeat !== null && selectedSeat.length > 0)
    seats.forEach((seat,index)=> {
  if(selectedSeat.indexOf(index)> -1){
    seat.classList.add('selected')
  }
  })
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex') ;
  if(selectedMovieIndex !== null)
    movieSelect.selectedIndex = selectedMovieIndex;
}






// save selected movie index and price 
function setMovieData(movieIndex,moviePrice){
localStorage.setItem('selectedMovieIndex',movieIndex);
localStorage.setItem('selectedMoviePrice',moviePrice);
}

//movie click event
movieSelect.addEventListener('change',e =>{
    ticketPrice = +e.target.value; 
    //console.log(  ticketPrice);
    setMovieData(e.target.selectedIndex,e.target.value);
    updatedSelectedCount();
})





//seat click event

container.addEventListener('click',e =>{
   // console.log(e.target);
if(e.target.classList.contains('seat')&& !e.target.classList.contains('occupied'))
  //  console.log(e.target);
e.target.classList.toggle('selected');
updatedSelectedCount();
})

// intial count and set 

updatedSelectedCount();