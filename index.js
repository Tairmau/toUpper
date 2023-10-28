// variables
let textArea = document.getElementById('textarea');
let majuscule = document.getElementById('majuscule');
let minuscule = document.getElementById('minuscule');
let copier = document.getElementById('copier');

// Minuscule
minuscule.addEventListener('click', function(event){

    let text = textArea.value;
    if(text){
        textArea.value = text.toLowerCase();
        minuscule.style.backgroundColor = 'blue';
        majuscule.style.backgroundColor = 'rgb(185, 4, 4)';
    }else{
        alert('Aucune données!');
        minuscule.style.backgroundColor = 'rgb(185, 4, 4)';

    }
})

// Majuscule
majuscule.addEventListener('click', function(event){

    let text = textArea.value;
    if(text){
        textArea.value = text.toUpperCase();
        majuscule.style.backgroundColor = 'blue';
        minuscule.style.backgroundColor = 'rgb(185, 4, 4)';
    }else{
        alert('Aucune données !');
        majuscule.style.backgroundColor = 'rgb(185, 4, 4)';
    }
})


// Copier
copier.addEventListener('click', function(event){

    let text = textArea.value;
    if(text){
        navigator.clipboard.writeText(text);

    }else{
        alert('Aucune données à copier !');
    }
})
