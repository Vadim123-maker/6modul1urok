document.querySelector('.header_button1').onclick = function() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
};

document.querySelector('.header_button2').onclick = function() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
};