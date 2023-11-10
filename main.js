const hideSuccessfulActions = function(){
  let indicatorContainer = document.querySelectorAll(".merge-status-list");

  if(indicatorContainer.length == 2) {
    indicatorContainer[1].querySelectorAll(".octicon-check").forEach((e) => { 
      e.parentElement.parentElement.style.display = "none"; 
      e.parentElement.parentElement.classList.remove("d-flex");
    });
  }
}
if ( window.location.href.match( /https?:\/\/github\.com\/(\w+-?_?)+\/(\w+-?_?)+\/pull\/\d+/)[0] ) {
  window.setInterval(hideSuccessfulActions, 100);
}
