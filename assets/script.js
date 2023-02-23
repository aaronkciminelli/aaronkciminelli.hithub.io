function loadResume(url) {
    document.getElementById('myFrame').src = url;
}
  
function loadPortfolio(url) {
    document.getElementById('myFrame').src = url;
}

const resumeButton = document.getElementById('button1');
resumeButton.addEventListener('click', function() {
    loadResume('assets/Resume.html');
});