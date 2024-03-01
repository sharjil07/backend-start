const asyncHandler=(requestHnadler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHnadler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}


/*
   const=asynHandler=(fn)=>async(req,res,nexr)=>{
    try{
        awsit fn(req,res,next)
    }catch(error){
         res.status(err.code||500).json({
            success:false,
            message:err.message
         })
    }
   }
*/
