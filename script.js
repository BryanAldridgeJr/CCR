const homeLink = document.getElementById('change');
const bodyColor = document.body.style.backgroundColor; 

homeLink.addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'rgb(255, 132, 132)') { 
        document.body.style.backgroundColor = bodyColor; 
    } else {
        document.body.style.backgroundColor = 'rgb(255, 132, 132)'; 
    }
});
