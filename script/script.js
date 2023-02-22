var radioButtons = document.querySelectorAll('input[name="resume-section"]');

for (var i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("change", function() {
    loadResumeContent(this.value);
  });
}

function loadResumeContent(sectionName) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("resume-content").innerHTML = this.responseText;
    }
  };
  xhr.open("GET", "resume/" + sectionName + ".html", true);
  xhr.send();
}
