import cookieParser from "cookie-parser";
export function verifyToken(req,res,next){

///verify token



//1.get token from req(using cookie parser)
let signeedToken=req.coookies.token;
if(!signeedToken){
    return res.status(401).json({message:"please login first"})
}
console.log(req.cookies)//{token:""}

//2.verify token(decode)

let decodedToken = jwt.verrify(signeedToken,"abcdef");
console.log("decoded token:",decodedToken);
next()



}