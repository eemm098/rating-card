

let rate = document.querySelectorAll(".rate");

rate.forEach((e) => {
    e.addEventListener('click', () => {
        rate.forEach((e) => {
            e.classList.remove('active');
        })
        e.classList.add('active')
        
    })
})

let submit = document.querySelector('.submit');
let card = document.querySelector('.rating-card');

submit.addEventListener("click", () => {

   let d = document.querySelector('.active').getAttribute('data-num')
     document.querySelector('.the-result').innerHTML = d
    card.classList.remove('first');
});

