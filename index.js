function validate(){
      let firstNameInput=document.getElementById('first-name').value
      let lastNameInput=document.getElementById('last-name').value
      let emailInput=document.getElementById('email').value
      let phoneNumberInput=document.getElementById('phone-number').value
      let batchInput=document.getElementById('batch').value
      let currentModuleInput=document.getElementById('current-module').value

      let tncInput=document.getElementById('tnc').checked 
      
       let error=false
      

      if(firstNameInput.length>2){
            document.getElementById('first-name-valid').style.display='block';
            document.getElementById('first-name-invalid').style.display='none';
      }else{
            document.getElementById('first-name-invalid').style.display='block';
            document.getElementById('first-name-valid').style.display='none';
            error=true

            
      }



      if(lastNameInput.length>2){
            document.getElementById('last-name-valid').style.display='block';
            document.getElementById('last-name-invalid').style.display='none';

      }else{
            document.getElementById('last-name-invalid').style.display='block';
            document.getElementById('last-name-valid').style.display='none';
            error=true

      }

      if(emailInput &&
            emailInput.length !==0 &&
            emailInput.includes("@") &&
            emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
            emailInput.indexOf("@") !== 0
      ) { 
      document.getElementById('email-valid').style.display="block";
      document.getElementById('email-invalid').style.display="none";
}else{
      document.getElementById('email-invalid').style.display="block";
      document.getElementById('email-valid').style.display="none";
      error=true

}

if(phoneNumberInput>=9){
     document.getElementById('phone-number-valid').style.display="block";
     document.getElementById('phone-number-invalid').style.display="none";
}else{
     document.getElementById('phone-number-invalid').style.display="block";
     document.getElementById('phone-number-valid').style.display="none";
      error=true
}




 if(batchInput !== 'None' ){
      document.getElementById('batch-valid').style.display="block";
      document.getElementById('batch-invalid').style.display="none";
}else{
      document.getElementById('batch-invalid').style.display="block";
      document.getElementById('batch-valid').style.display="none";
      error=true

 }


 



  if (currentModuleInput !== 'None'){
      document.getElementById('module-valid').style.display="block";
      document.getElementById('module-invalid').style.display="none";
}else{ 
      document.getElementById('module-invalid').style.display="block";
      document.getElementById('module-valid').style.display="none";
      error=true
}




  if(tncInput){
      document.getElementById('tnc-invalid').style.display="none";
  }else{
      document.getElementById('tnc-invalid').style.display="block";
      error=true

  }

  console.log(error)

  if(!error){
      alert('you details have been saved succesfully')

      document.getElementById('first-name').value = ''
       document.getElementById('last-name').value = ''
       document.getElementById('email').value = ''
       document.getElementById('phone-number').value = ''
       document.getElementById('batch').value = 'None'
       document.getElementById('current-module').value=''
       document.getElementById('tnc').checked = 'false'
  }
}