import validator from "validator";




const signUpValidations = (req) => {

    const {firstName , lastName , email , password} = req.body; 

    if(!validator.isAlpha(firstName)){
        throw new Error("First name can only contain letters");
    }

    if(!validator.isAlpha(lastName)){
        throw new Error("Last name can only contain letters");
    }

    if(!email){
        throw new Error("Email is Required");
    }

    if(!validator.isEmail(email)){
        throw new Error("Invalid Email");
    }

    if(!password){
        throw new Error("Password is Required");
    }

    if(!validator.isStrongPassword(password)){
        throw new Error("Password must contains Upppercase , lowercase , number and special character and min length of 8");
    }
}



export default signUpValidations;