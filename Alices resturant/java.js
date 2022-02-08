let name;
btn1.addEventListener('click', function() {

  if (document.getElementById("navn").value == ""
  	|| document.getElementById("navn").value == null) {
    alert('Please fill in your navn');
    //return false;
  } else {
    // display the next formfield
    f2.style.display = 'block'
    // hide formfield F1
    f1.style.display = 'none'
  }
})


//form del 1
btn1.addEventListener('click',function(){
  radio.style.display = 'block';
  navn.style.display = 'none';
})

//form del 2
btn2.addEventListener('click',function(){
  tjek.style.display = 'block';
  radio.style.display = 'none';
})

//form del 3
btn3.addEventListener('click',function(){
  lastField.style.display = 'block';
  tjek.style.display = 'none';
})




//fortsætte videre ... indtil brugeren taster send på lastfield.
