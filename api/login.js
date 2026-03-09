export default function handler(req, res) {

if(req.method !== "POST"){
return res.status(405).json({error:"Method not allowed"})
}

const {username,password} = req.body

if(username === "admin" && password === "admin123"){
return res.json({success:true})
}

return res.json({success:false})

}
