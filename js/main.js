// declaring variables
var linkedin= document.getElementById('linkedin');
var mail = document.getElementById('mailing');
var github=document.getElementById('github');
var libraryProject = document.getElementById('library');
var quiz = document.getElementById('quiz');
var insurance = document.getElementById('insurance');


// add eventlistener
linkedin.addEventListener('click', linkedinEvent);
mail.addEventListener('click', mailingEvent);
github.addEventListener('click',githubEvent);
libraryProject.addEventListener('click',libraryEvent);
quiz.addEventListener('click',quizEvent);
insurance.addEventListener('click',insuranceEvent);

function linkedinEvent(e){
    e.preventDefault();
    window.open(
        'https://www.linkedin.com/in/adlight-akinyi/',
        '_blank'
    );
}
function mailingEvent(e){
    e.preventDefault();
    location.href='mailto:adlightakinyi1@gmail.com?body=HI there';
}
function githubEvent (e){
    e.preventDefault();
    window.open(
        'https://github.com/AdlightAkinyi',
        '_blank'
    );
}
function libraryEvent(e){
    e.preventDefault();
    window.open(
        'https://kisavi.github.io/KITCHEN-RECIPE/',
        '_blank'
    );
}
function quizEvent(e){
    e.preventDefault();
    window.open(
        'https://adlightakinyi.github.io/Quote-app/Quote-app/',
        '_blank'
    );
}
function insuranceEvent (e){
    e.preventDefault();
    window.open(
        'https://adlightakinyi.github.io/Git-Search/user-profile',
        '_blank'
    );
}