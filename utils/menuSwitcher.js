export default function switcher(){
    switch(window.location.pathname){
        case '/favorites':
          one.style.background = "none";
          two.style.background = "#2e3e3e";
          two.style.borderRadius = "10px";
          three.style.background = "none";
          four.style.background = "none";
          break;
        case '/myvideos':
          one.style.background = "none";
          two.style.background = "none";
          three.style.background = "#2e3e3e";
          three.style.borderRadius = "10px";
          four.style.background = "none";
          break;
        case '/addvideo':
          one.style.background = "none";
          two.style.background = "none";
          three.style.background = "none";
          four.style.background = "#2e3e3e";
          four.style.borderRadius = "10px";
          break;
        case '/':
          one.style.background = "#2e3e3e";
          one.style.borderRadius = "10px";
          two.style.background = "none";
          three.style.background = "none";
          four.style.background = "none";
          break;
      }
      window.onload = switcher;
}