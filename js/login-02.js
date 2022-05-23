function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username=="admin" && password=="user"){
        alert("Login succesfully");
        return false;
    }else{
        alert("Login Faild")
    }


}