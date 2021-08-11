function funKonig() {
  //alert("Hallo König");
  
  // Get the checkbox
  var checkBox = document.getElementById("checkKonige");
  // Get the output text
  var text = document.getElementById("1");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  
  var text = document.getElementById("3");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
} 

function funBibelbuch() {
	
  //alert("Hallo Bibelbuch");
  // Get the checkbox
  var checkBox = document.getElementById("checkBibelbuch");
  // Get the output text
  var text = document.getElementById("2");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
} 
