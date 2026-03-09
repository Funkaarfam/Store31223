export default function handler(req, res) {

if(req.method !== "POST"){
return res.status(405).json({error:"Method not allowed"})
}

const {username,password} = req.body

// simple test login
if(username === "admin" && password === "password123"){
return res.json({success:true})
}

res.json({success:false})

}
