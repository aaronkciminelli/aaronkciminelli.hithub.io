function loadResume() {
    const frame = document.getElementById('myFrame');
    frame.src = 'assets/Resume.html';
  }
  
  function loadPortfolio() {
    const frame = document.getElementById('myFrame');
    frame.src = 'assets/Portfolio.html';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const resumeButton = document.getElementById('button1');
    const portfolioButton = document.getElementById('button2');
  
    resumeButton.addEventListener('click', loadResume);
    portfolioButton.addEventListener('click', loadPortfolio);
  });
  