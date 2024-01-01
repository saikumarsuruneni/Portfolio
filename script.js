// BG Image
document.addEventListener("DOMContentLoaded", function() {
    var background = document.getElementById('background');

    window.addEventListener('scroll', function() {
        var scrollPos = window.scrollY;
        background.style.opacity = 1 - scrollPos / 800;
    });
});
// BG Image

// Tabs
    var tablinks = document.getElementsByClassName("tab-links");
    var subsubtitlecontents = document.getElementsByClassName("sub-sub-title-contents");

    function opentab(tabname) {
        for (var tablink of tablinks) {
            tablink.classList.remove("active-link");
        }
        for (var tabcontent of subsubtitlecontents) {
            tabcontent.classList.remove("active-tab");
        }
        
        event.currentTarget.classList.add("active-link");        
        document.getElementById(tabname).classList.add("active-tab");
    }
// TABS

// PROJECT
document.getElementById('photo-container').addEventListener('wheel', function (e) {
    if (e.deltaY > 0) {
        this.scrollBy(120, 0);
    } else {
        this.scrollBy(-120, 0);
    }
    e.preventDefault();
});
// PROJECT




// FORMS

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzy54Tb8QIH5DfWQnqb_fWOyFUDEjK1NVFiQIn7q_ScETJrpS3GaW60x1shrjiNH4-I/exec'
  const form = document.forms['submit-to-google-sheet']
  const form_message = document.getElementById("form_message")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        form_message.innerHTML = "Message Sent Successfully"
        setTimeout(function(){
            form_message.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

//FORMS