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
  
  const portfolioButton = document.getElementById('button2');
  portfolioButton.addEventListener('click', function() {
    loadPortfolio('assets/Portfolio.html');
  });

  function resizeIframe() {
    const myFrame = document.getElementById('myFrame');
    myFrame.style.height = myFrame.contentWindow.document.body.scrollHeight + 'px';
  }