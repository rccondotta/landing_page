const faqQuestion = document.querySelectorAll('.faq-question');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

faqQuestion.forEach(question => {
    question.addEventListener('click', () => {
        question.classList.toggle('active');
        let arrow = question.querySelector('.arrow');
        if (arrow.innerHTML.charCodeAt(0) === 9656) {
            arrow.innerHTML = '&#9660;';
        } else {
            arrow.innerHTML = '&#9656;';
        }
    });
});


function toggleAnswer(id) {
    var answer = document.getElementById(id);
    if (answer.style.maxHeight) {
        // if maxHeight is not null or empty, hide the answer
        answer.style.maxHeight = null;
    } else {
        // if maxHeight is null or empty, show the answer
        answer.style.maxHeight = answer.scrollHeight + "px";
    }
};
