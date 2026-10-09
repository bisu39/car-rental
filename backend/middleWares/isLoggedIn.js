 import jwt from 'jsonwebtoken'
 import appError from '../utils/appError.js'
 const isLoggedin = (req,res,next)=>{
    const {token} = req.headers;
    if(!token){
        throw new appError("Not logged in! login first", 401)
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_USER_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        throw new appError("Invalid token", 401)
    }
}
export default isLoggedin