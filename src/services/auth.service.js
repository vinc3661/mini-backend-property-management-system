const bcrypt=require("bcryptjs");

const hashPassword=async(password,saltSounds)=>{

const hash=await bcrypt.hash();
return hash;

}