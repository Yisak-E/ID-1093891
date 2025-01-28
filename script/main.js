const slideshow = document.getElementById('portf_parts');

let count = 0;
slideshow.addEventListener('mouseover', function () {

    // slideshow.style.transform = 'rotate(5deg)';
    
});
slideshow.addEventListener('mouseout', () => {
    
    //slideshow.style.transform = 'rotate(0deg)';
})


function show() {
    
}
const bodys = document.getElementsByTagName('img');
bodys.addEventListener('mouseover', () => { 
    bodys.style.backgroundColor = `rgb(217, 28, 195)`;
})
