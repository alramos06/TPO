function validateForm(){
    var valid=true;
    try{
        var contactName = document.getElementById("contactName").value;
        var contactPhone = document.getElementById("contactPhone").value;
        var contactEmail = document.getElementById("contactEmail").value;
        var contactQuestion = document.getElementById("contactQuestion").value;

        if(contactName == '')
        {
            valid=false;
        }

        if(contactPhone == '')
        {
            valid=false;
        }

        if(contactEmail == '')
        {
            valid=false;
        }

        if(contactQuestion == '')
        {
            valid=false;
        }

        if(!valid){
            alert("Debe completar todos los datos");
        }
        return valid;
    }
    catch(err){
        alert(err);
        return false;
    }
}
