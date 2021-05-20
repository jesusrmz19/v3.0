const menuBtn = document.querySelector('#openMenu');
const closeMenuBtn = document.querySelector('#closeNav');
const chooseAbout = document.querySelector('#aboutNav');
const myMenu = document.querySelector('#myMenu');
const toAbout = document.querySelector('#toAbout');

function aboutIntoView(){
    console.log('slow');
    var about = document.getElementById('about');
    about.scrollIntoView({behavior:'smooth'});
}

function openMenu(){
    console.log('open');
    myMenu.classList.toggle('open');
}

toAbout.addEventListener('click', aboutIntoView);
menuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', openMenu);
chooseAbout.addEventListener('click', openMenu);

// Code below for the Contact Page Form 
//form="contactMe"

const submitBtn = document.querySelector('.submitBtn');
const regexpEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const inputs = document.querySelectorAll('.nameInput');
function sendEmail(){
    var form = document.getElementById('contactMe');
    var att = document.createAttribute('action');
    att.value = 'first.php';
    form.setAttributeNode(att);
    att = document.createAttribute('method');
    att.value='post';
    form.setAttributeNode(att);
    att = document.createAttribute('form');
    att.value = 'contactMe';
    submitBtn.setAttributeNode(att);
    console.log(form);
    console.log(submitBtn);
}
function moveLabel(){
    console.log('focus IN');
    console.log(this);
}
function checkForm(){ 
    var errorForm = document.getElementById('errorForm');
    var errorEmail = document.getElementById('errorEmail');
    if(!formName.value || !formEmail.value || !formMessage.value){
        errorForm.style.display = 'block';
        errorEmail.style.display = 'none';
    }else{
        errorForm.style.display = 'none';
        var validEmail = regexpEmail.test(formEmail.value);
        if(!validEmail){
            errorEmail.style.display = 'block';
        }
        submitBtn.innerHTML = 'Sending...';
        sendEmail();
    }
}
inputs.forEach(input => input.addEventListener('focus', moveLabel));
submitBtn.addEventListener('click', checkForm);

