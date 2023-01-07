

    function validation() {

        const user= document.getElementById("user").value;
        const email= document.getElementById("email").value;
        const address= document.getElementById("address").value;
        const options= document.getElementById("options").value;
        const phonenumber=document.getElementById("phonenumber").value;
      

    var usercheck = /^[A-Za-z. ]{3,20}$/;
    var foremailcheck= /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,5}$/;
    var addresscheck = /^[A-Za-z0-9'\.\-\s\, ]{4,}$/ ;
    var forphonenumbercheck = /^[89]{1}[0-9]{9}/;
  
    
    if(usercheck.test(user)){
        document.getElementById('username').innerHTML = "";
    
    }else{
        document.getElementById("username").innerHTML="*Invalid Username* ";
    }

    if(foremailcheck.test(email)){
    document.getElementById('emailId').innerHTML = "";
    
    }else{
        document.getElementById('emailId').innerHTML=" *Invalid Email address*";
        return false;
    }
   if(addresscheck.test(address)){
    document.getElementById('userAddress').innerHTML = "";
    
    }else{
        document.getElementById('userAddress').innerHTML=" *Put right address*";
        return false;
   }
if(forphonenumbercheck.test(phonenumber)){
    document.getElementById('phone').innerHTML = "";
    
}else{
    document.getElementById('phone').innerHTML=" *Invalid Number*";
    return false;  
}



}