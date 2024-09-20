var re = /\S+@\S+\.\S+/;

function validate()
{
    let x = document.forms["form"]["name"].value;
    if (x == ""){
        alert("Name must be filled out");
        return false;
    }
    let y = document.forms["form"]["email"].value;
    if (y == "") {
        alert("Email must be filled out");
        return false;}
    else{
        if (re.test(y) == false){
            alert("Email must be valid")
            return false;}
        }
}
