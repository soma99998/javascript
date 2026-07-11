const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

 function showError(input,message){
    const formControl = input.parentElement; 
    
    formControl.className ='form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
    console.log(formControl);

 }
 function showSuccess(input){
    const  formControl = input.parentElement;
    formControl.className ='form-control success';


 }

 // check if email is valid 
 function checkEmail(input){
    // Source - https://stackoverflow.com/a/46181
// Posted by John Rutherford, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-01, License - CC BY-SA 4.0

const re =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


if(re.test(input.value.trim()))
   showSuccess(input)
else
   showError(input,' email is not valid')
 }   
// check   required  

 function checkReqired(inputArr){
inputArr.forEach(function(input){

   if(input.value.replace(/\s+/g, '') === '') {
      console.log('Empty or spaces only');
      
      showError(input,` ${getFieldName(input)} is rquired  `);
   }else{
   showSuccess(input);}
})}

//  function get fieldname

function getFieldName(input){
   return input.id.charAt(0).toUpperCase() + input.id.slice(1) ;

}
// check password match 


function checkPasswordMatch(input1,input2){
   if(input1.value !== input2.value)
      
   showError(input2 ,'password doesnot match ');

      
}




// check input  length


function checkLength(input,min,max){
   if(input.value.length < min){
      showError(input,`${getFieldName(input)} must be at least ${min}charater`);
   }else if( input.value.length > max){
       showError(input,`${getFieldName(input)} must be less than ${max}charater`);
   }
else
    showSuccess(input);
}



form.addEventListener('submit',function(e){
    e.preventDefault();
checkReqired([username,email,password,password2]);
checkLength(username,3,15);
checkLength(password,6,23);
checkEmail(email);
checkPasswordMatch(password,password2);












//    if(username.value === ''){ 
//     showError(username,'username is required ');

//    }else
//     showSuccess(username);

//      if(email.value === ''){ 
//     showError(email,'email is required ');

//    }else if(!isValidEmail(email.value)){
//      showError(email,'email is  not valid  ');
//    }else
//     showSuccess(email);

//      if(password.value === ''){ 
//     showError(password,'password is required ');

//    }else
//     showSuccess(password);

//      if(password2.value === ''){ 
//     showError(password2,'confirm password is required ');

//    }else
//     showSuccess(password2);

})

