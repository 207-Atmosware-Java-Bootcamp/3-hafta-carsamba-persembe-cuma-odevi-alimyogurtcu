$(function () {
  
  var bool = true;

  function getTime() {
    var date = new Date();
    var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minute =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var second =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    var time = hour + ":" + minute + ":" + second;
  
    return time;
  }
  
  document.getElementById("time").innerText = getTime();

  function runEffect() {
	  
    document.getElementById("time").innerText = getTime();
    
    $("#effect").toggle();
    
    document.getElementById("button").innerText = bool
      ? "Saati göster"
      : "Saati gizle";
    
    bool = !bool;
  
  }

  $("#button").on("click", function () {
    runEffect();
  });

});
