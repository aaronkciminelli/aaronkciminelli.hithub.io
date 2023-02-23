function loadResume(url) {
    document.getElementById('myFrame').src = url;
  }
  
  function loadPortfolio(url) {
    document.getElementById('myFrame').src = url;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.getElementById('button1');
    const portfolioButton = document.getElementById('button2');
    
    resumeButton.addEventListener('click', function() {
      loadResume('assets/Resume.html');
    });
    
    portfolioButton.addEventListener('click', function() {
      loadPortfolio('assets/Portfolio.html');
    });
  });
  