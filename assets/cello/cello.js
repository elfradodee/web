// PRELOADER

setTimeout(function() {
    document.getElementById('preloader').classList.add('hide');
}, 2000);

// MENU

var divAbout    = document.getElementById('about');
var divEdu      = document.getElementById('edu');
var divSkill    = document.getElementById('skill');
var divAward    = document.getElementById('award');
var divContact  = document.getElementById('contact');

var btnAbout    = document.getElementById('btnAbout');
var btnEdu      = document.getElementById('btnEdu');
var btnSkill    = document.getElementById('btnSkill');
var btnAward    = document.getElementById('btnAward');
var btnContact  = document.getElementById('btnContact');

function menuAbout() {

    divAbout.classList.remove('d-none');
    divEdu.classList.add('d-none');
    divSkill.classList.add('d-none');
    divAward.classList.add('d-none');
    divContact.classList.add('d-none');

    btnAbout.classList.add('active');
    btnEdu.classList.remove('active');
    btnSkill.classList.remove('active');
    btnAward.classList.remove('active');
    btnContact.classList.remove('active');

}

function menuEdu() {

    divAbout.classList.add('d-none');
    divEdu.classList.remove('d-none');
    divSkill.classList.add('d-none');
    divAward.classList.add('d-none');
    divContact.classList.add('d-none');

    btnAbout.classList.remove('active');
    btnEdu.classList.add('active');
    btnSkill.classList.remove('active');
    btnAward.classList.remove('active');
    btnContact.classList.remove('active');

}

function menuSkill() {

    divAbout.classList.add('d-none');
    divEdu.classList.add('d-none');
    divSkill.classList.remove('d-none');
    divAward.classList.add('d-none');
    divContact.classList.add('d-none');

    btnAbout.classList.remove('active');
    btnEdu.classList.remove('active');
    btnSkill.classList.add('active');
    btnAward.classList.remove('active');
    btnContact.classList.remove('active');

}

function menuAward() {

    divAbout.classList.add('d-none');
    divEdu.classList.add('d-none');
    divSkill.classList.add('d-none');
    divAward.classList.remove('d-none');
    divContact.classList.add('d-none');

    btnAbout.classList.remove('active');
    btnEdu.classList.remove('active');
    btnSkill.classList.remove('active');
    btnAward.classList.add('active');
    btnContact.classList.remove('active');

}

function menuContact() {

    divAbout.classList.add('d-none');
    divEdu.classList.add('d-none');
    divSkill.classList.add('d-none');
    divAward.classList.add('d-none');
    divContact.classList.remove('d-none');

    btnAbout.classList.remove('active');
    btnEdu.classList.remove('active');
    btnSkill.classList.remove('active');
    btnAward.classList.remove('active');
    btnContact.classList.add('active');

}