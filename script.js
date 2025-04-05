document.addEventListener('DOMContentLoaded', function() {

// FOR THE DARKMODE
    let darkmode = localStorage.getItem('darkmode')
    const themeSwitch = document.getElementById('theme-switch')
    const enableDarkmode = () => {
        document.body.classList.add('darkmode')
        localStorage.setItem('darkmode', 'active')
    }
    const disableDarkmode = () => {
        document.body.classList.remove('darkmode')
        localStorage.setItem('darkmode', null)
    }
    
    if(darkmode === "active") enableDarkmode()
    themeSwitch.addEventListener("click", () => {
    
    darkmode = localStorage.getItem('darkmode')
    
    darkmode !== "active" ? enableDarkmode(): disableDarkmode()
    })
    

// FOR THE HAMBURGER MENU SECTION
    const menu = document.querySelector(".menu_button");

    menu.addEventListener('click', function(){
        const navbarsection = document.querySelector(".nav-bar");
        navbarsection.classList.toggle("active"); 
    });



// ADJUST HEIGHT WHEN THE PROJECT ADDED

    function adjustSecondDivHeight() {
        // Get the height of the first div (div1)
        const div1 = document.querySelector('.wrapper');
        const div2 = document.querySelector('.spacer');
  
        // Calculate the height of div1 plus 100vh
        const div1Height = div1.offsetHeight;
        const additionalHeight = window.innerHeight; // 100vh
  
        // Set the height of div2 to be div1's height + 100vh
        div2.style.height = (div1Height + additionalHeight) + 'px';
      }
  
      // Adjust the height of div2 on page load
      window.addEventListener('load', adjustSecondDivHeight);




//  TO HIDE THE HEADER WHEN SCROLLED
      window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        const scrollPosition = window.scrollY; // Current scroll position
        const documentHeight = document.documentElement.scrollHeight; // Total height of the document
        const threshold = documentHeight * 0.1; // 10% of the document height
  
        // If scroll position is greater than 10% of the page height, hide the header
        if (scrollPosition > threshold) {
          header.style.top = '-60px'; // Hide the header (you can adjust the value based on your header's height)
        } else {
          header.style.top = '0'; // Show the header
        }
      });


    

});
  
