const greet_div = document.getElementById("greeting");
const greet_icon = document.getElementById("greet_icon");

const username = document.getElementById("username");

//Greeting Function
const greeting = () => {
  let current_time = new Date().getHours();

  if (current_time >= 0 && current_time < 12) {
    greet_div.innerHTML = "Good Morning";
    greet_icon.innerHTML = "cloud";
    greet_icon.style.color = "#3B38F1";
  } else if (current_time >= 12 && current_time < 16) {
    greet_div.innerHTML = "Good Afternoon";
    greet_icon.innerHTML = "light_mode";
    greet_icon.style.color = "#FFD34E";
  } else if (current_time >= 16 && current_time <= 23) {
    greet_div.innerHTML = "Good Evening";
    greet_icon.innerHTML = "mode_night";
    greet_icon.style.color = "#403f3f";
  }
};

//Tab Switch Buttons

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.getElementsByClassName('tab-link');
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', tabSwitch, false);
    }
  
    function tabSwitch(){
      document.getElementsByClassName('active')[0].classList.remove('active');
      this.classList.add('active');

      document.getElementsByClassName('show')[0].classList.remove('show');
      const arrayTabs = Array.prototype.slice.call(tabs);
      const index = arrayTabs.indexOf(this);
      document.getElementsByClassName('tab-content')[index].classList.add('show');
    };
  }, false);