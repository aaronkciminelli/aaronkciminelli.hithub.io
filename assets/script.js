function loadDoc1() {
    var iframe = document.getElementById("myFrame");
    iframe.src = "https://docs.google.com/document/d/e/2PACX-1vS6AoupbmijpMJpz3-WUaqHxIZMeKcawvguc1OKPUILXBUQU8IzzHKCCq-rLTgyYRPoGY09CCz_qdBA/pub?embedded=true";
    iframe.style.display = "block";
  }
  
function loadDoc2() {
    var iframe = document.getElementById("myFrame");
    iframe.src = "https://docs.google.com/document/d/e/2PACX-1vS6AoupbmijpMJpz3-WUaqHxIZMeKcawvguc1OKPUILXBUQU8IzzHKCCq-rLTgyYRPoGY09CCz_qdBA/pub?embedded=true";
    iframe.style.display = "block";
    }

    function resizeIframe() {
        var iframe = document.getElementById("myFrame");
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
      }
      
      window.addEventListener("message", function(event) {
        if (event.data === "resize") {
          resizeIframe();
        }
      });
      
