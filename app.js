let addToCart = (btn) => {
    let desk = btn.parentNode.parentNode;
    let childArr = desk.children;
    let code = childArr[0].innerHTML;
    let price = childArr[2].innerHTML;
  
    let ans = "<div>";
    ans += "<div>" + code + "</div>";
    ans += "<div>" + price + "</div>";
    ans += "</div>";
  
    if (sessionStorage.getItem("basket") == null) {
        sessionStorage.setItem("basket", ans);
        alert("Added to cart successfully!");
    } else {
        let prev = sessionStorage.getItem("basket");
        ans = prev + ans;
        sessionStorage.setItem("basket", ans);
        alert("Added to cart successfully!");
    }
  }
  
  let show = () => {
    let display = document.getElementById('display');
    display.innerHTML = sessionStorage.getItem("basket");
  }
  
  function toggleMenu() {
      document.querySelector('.navAnchor').classList.toggle('active');
  }

// JavaScript function to hide the pop-up and show the main content
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('closeButton').addEventListener('click', function() {
        hidePopup();
    });
});

// this the pop up start
// function hidePopup() 

// {
//     document.getElementById("popup").style.display = "none";
// }

window.onload = function() {
    document.getElementById("popup").style.display = "block";
  }
  
  // JavaScript function to hide the popup
  function hidePopup() {
    document.getElementById("popup").style.display = "none";
  }

// this the pop up end

// Sidebar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
  

// slideshow part
  
let arr=["slideshow1.jpg","slideshow1.jpg","slideshow2.jpg","slideshow3.jpg","slideshow4.jpg"];
let i=0;
let slide=()=> {
    i++;
    if(i==5) {
        i=0;
    }
    wp.src= "./images/"+ arr[i];
}
