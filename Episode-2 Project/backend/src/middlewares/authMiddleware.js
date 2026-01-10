

const adminAuth = (req,res,next) => {
    const token = "PRRRRRRRR";

    const  isAdmin = token === "PRRRRRRRR";

    if(!isAdmin){
        res.status(401).json({Messge : "Unauthorized"})
    }
    next();
}




const userAuth = (req,res,next) => {
    const token = "PIYU";


    const isUser = token === "PIYU";


    if(!isUser){
        res.status(401).json({Messge : "Unauthorized"})
    }
    next();
}

export {adminAuth ,userAuth};