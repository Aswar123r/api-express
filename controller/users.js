

const users = {
    input: async (req, res)=>{

        try{
        const data1 = req.body
        return res.json({
            status: "true",
            message:"data get it started",
            data: data1
        })
    }catch (error){
        return res.json({
            status: false,
            message: "data error" + error
        })
    }
    }

}
module.exports = users