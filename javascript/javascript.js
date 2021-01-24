function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function eatmenu(){
    document.getElementById("menu-ride").style.display="none";
    document.getElementById("menu-earn").style.display="none";
    document.getElementById("menu-freight").style.display="none";
    document.getElementById("menu-business").style.display="none";
    document.getElementById("menu-transit").style.display="none";
    document.getElementById("menu-bike").style.display="none";
    document.getElementById("menu-eat").style.display="inline-block";
    document.getElementById("menu-background").style.backgroundImage="url(./img/eats.jpg)";
  }

  function ridemenu(){
    document.getElementById("menu-ride").style.display="flex";
    document.getElementById("menu-earn").style.display="none";
    document.getElementById("menu-freight").style.display="none";
    document.getElementById("menu-business").style.display="none";
    document.getElementById("menu-transit").style.display="none";
    document.getElementById("menu-bike").style.display="none";
    document.getElementById("menu-eat").style.display="none";
    document.getElementById("menu-background").style.backgroundImage="url(./img/rides.jpg)";
    
}

function earnmenu(){
    document.getElementById("menu-ride").style.display="none";
    document.getElementById("menu-earn").style.display="block";
    document.getElementById("menu-freight").style.display="none";
    document.getElementById("menu-business").style.display="none";
    document.getElementById("menu-transit").style.display="none";
    document.getElementById("menu-bike").style.display="none";
    document.getElementById("menu-eat").style.display="none";
    document.getElementById("menu-background").style.backgroundImage="url(./img/earns.jpg)";
}

function freightmenu(){
    document.getElementById("menu-ride").style.display="none";
    document.getElementById("menu-earn").style.display="none";
    document.getElementById("menu-freight").style.display="block";
    document.getElementById("menu-business").style.display="none";
    document.getElementById("menu-transit").style.display="none";
    document.getElementById("menu-bike").style.display="none";
    document.getElementById("menu-eat").style.display="none";
    document.getElementById("menu-background").style.backgroundImage="url(./img/freights.jpg)";
}

function businessmenu(){
    document.getElementById("menu-ride").style.display="none";
    document.getElementById("menu-earn").style.display="none";
    document.getElementById("menu-freight").style.display="none";
    document.getElementById("menu-business").style.display="block";
    document.getElementById("menu-transit").style.display="none";
    document.getElementById("menu-bike").style.display="none";
    document.getElementById("menu-eat").style.display="none";
    document.getElementById("menu-background").style.backgroundImage="url(./img/business.jpg)";
}

function transitmenu(){
    document.getElementById("menu-ride").style.display="none";
    document.getElementById("menu-earn").style.display="none";
    document.getElementById("menu-freight").style.display="none";
    document.getElementById("menu-business").style.display="none";
    document.getElementById("menu-transit").style.display="block";
    document.getElementById("menu-bike").style.display="none";
    document.getElementById("menu-eat").style.display="none";
    document.getElementById("menu-background").style.backgroundImage="url(./img/transits.jpg)";
}

function bikemenu(){
    document.getElementById("menu-ride").style.display="none";
    document.getElementById("menu-earn").style.display="none";
    document.getElementById("menu-freight").style.display="none";
    document.getElementById("menu-business").style.display="none";
    document.getElementById("menu-transit").style.display="none";
    document.getElementById("menu-bike").style.display="block";
    document.getElementById("menu-eat").style.display="none";
    document.getElementById("menu-background").style.backgroundImage="url(./img/bikes.jpg)";
}
