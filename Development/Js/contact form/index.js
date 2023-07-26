function handleSubmit(event){
  event.preventDefault();
  const name= document.getElementById("fname").value.trim();
  const message= document.getElementById("message").value.trim();
  const email= document.getElementById("email").value.trim();
  const phone= document.getElementById("message").value.trim();
  const services= document.querySelector('input[type="checkbox"]:checked');

  if(!name||!message||!email||!phone||services.length===0){
    alert("please fill the fileds.");
    return;
  }

  const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailPattern.test(email)){
    alert("please enter the valid address");
    return;
  }
  const formData={
    name,
    message,
    email,
    phone,
    services:Array.from(services).map((services=services.value))
  };


  document.getElementById("fname").value= "";
  document.getElementById("message").value= "";
  document.getElementById("email").value= "";
  document.getElementById("phone").value= "";
  services.forEach((services )=>(services.checked=false));
  console.log(formData);
}
  const contactForm=document.querySelector("form");
  contactForm.addEventListener("submit", handleSubmit)



  