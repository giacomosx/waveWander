const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))



const hideBtn = document.querySelectorAll('.hideBtn');

hideBtn.forEach(btn => {
    btn.addEventListener('click', function(){
        let idSection = this.getAttribute('data-g-collapse');
        let sectionToCollapse = document.getElementById(idSection);

        if (sectionToCollapse.classList.contains('section--collapsed')) {
            sectionToCollapse.classList.remove('section--collapsed');
            this.innerHTML =  '<ion-icon name="eye-outline"></ion-icon>';
        } else {
            sectionToCollapse.classList.add('section--collapsed');
            this.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>';
        }
    })
})


const allCards = document.querySelectorAll('main .card');
document.getElementById('counter').innerHTML = allCards.length;

document.getElementById('hideAllBtn').addEventListener('click', function(){
    
    if (this.innerHTML === 'Hide') {
        
        allCards.forEach(card => {
            card.classList.add('card--fade-out');
        })
        this.innerHTML = 'Show';
        
    } else {
        
        allCards.forEach(card => {
            card.classList.remove('card--fade-out');
        })
        this.innerHTML = 'Hide';
    }
 })