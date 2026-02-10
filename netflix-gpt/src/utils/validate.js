export const emailPasswordValidation = (email, password) =>{
    const validEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
    const validpassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password);

    if(!validEmail) return "Email not valid";
    if(!validpassword) return "Password not valid";
    
    return null;
};