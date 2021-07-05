function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function sendMail(email) {
  window.open('mailto:'+email);
}

function openLocation(location) {
    window.open('https://maps.google.com/?q='+location);
}

function phoneCall(number) {
  window.location.href='tel:'+number;
}
