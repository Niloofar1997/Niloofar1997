
 /*----------------------Toggle Navbar----------------------*/

  document.getElementById("navtoggler").addEventListener("click", navtoggler);

 function navtoggler() {
     hideSection();
     toggleNavbar();
     document.body.classList.toggle("hide-scrolling")
 };

 function hideSection(){
    document.querySelector('section.active').classList.toggle("fade-out");
 };

 function toggleNavbar(){
    document.querySelector('.header').classList.toggle("active");
 };


/*----------------------Active Section----------------------*/

document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){

        document.getElementById("overlay").classList.add("active")
        document.getElementById("navtoggler").classList.add("hide")
        if(e.target.classList.contains("nav-item")){
            toggleNavbar()
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active" , "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            document.getElementById("navtoggler").classList.remove("hide")
            document.getElementById("overlay").classList.remove("active")
        }, 500);
    }
})



 
 /*----------------------About Tabs----------------------*/

 function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  /*----------------------Skills----------------------*/

  const bars = document.querySelectorAll('.progress__bar');

  bars.forEach((bar) => {
 
     let percentage = bar.dataset.percent;
     let tooltip = bar.children[0];
     tooltip.innerText = percentage + '%';
     bar.style.width = percentage + '%';
     console.log(percentage);
 })


/*----------------------portfolio Item Details Popup----------------------*/

document.addEventListener("click" , (e) => {
    if(e.target.classList.contains("view-project-btn")){
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0,0)
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    var popup = document.getElementById("PortfolioItem");
    popup.classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    var main = document.getElementById("main").classList.toggle("fade-out");
}

var ppclose = document.getElementById("pp-close").addEventListener("click" , togglePortfolioPopup );

//hide popup  when clicking outside of it

document.addEventListener("click" , (e) => {
    if(e.target.classList.contains("pp-inner")){
        togglePortfolioPopup();
    }
})


function portfolioItemDetails(portfolioItem){
    document.getElementById("ppimg").src = 
    portfolioItem. querySelector(".portfolio-item-thumbnail img").src;

    document.getElementById("pph3").innerHTML = 
    portfolioItem. querySelector(".portfolio-item-title").innerHTML

    document.getElementById("ppbody").innerHTML = 
    portfolioItem. querySelector(".portfolio-item-details").innerHTML

    document.getElementById("pp1").innerHTML = 
    portfolioItem. querySelector(".general-info ul:nth-child(1)").innerHTML

    document.getElementById("pp2").innerHTML = 
    portfolioItem. querySelector(".general-info ul:nth-child(2)").innerHTML

    document.getElementById("pp3").innerHTML = 
    portfolioItem. querySelector(".general-info ul:nth-child(3)").innerHTML

    document.getElementById("pp4").innerHTML = 
    portfolioItem. querySelector(".general-info ul:nth-child(4)").innerHTML
}













