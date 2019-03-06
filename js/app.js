document.addEventListener('DOMContentLoaded', function() {
    var next = document.getElementById('nextPicture');
    var prev = document.getElementById('prevPicture');
    var list = document.querySelectorAll('li');
    var counter = 0;

    list[counter].classList.add('visible');

    next.addEventListener('click', function() {
        list[counter].classList.remove('visible');
        counter++;
        if (counter >= list.length - 1) {
            counter = 0;
        } 
        list[counter].classList.add('visible');
        
    })
    prev.addEventListener('click', function() {
        list[counter].classList.remove('visible');
        counter--;
        if (counter < 0) {
            counter = list.length-1;
        } 
        list[counter].classList.add('visible');
       
    })
})
