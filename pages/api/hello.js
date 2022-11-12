// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const axios = require('axios');
export default function handler(req, res) {
    // let ip = test().;
    // console.log("ip:"+ip)
    // res.status(200).json({ ip: ip })

    axios.get('http://api.ip.pay520.vip/cloud/getIp.php').then(value => {
        console.log(value.data)
        res.status(200).json({ ip: value.data })
    })
}

function test(){
    return new Promise((resolve,reject)=>{
        axios.get('http://api.ip.pay520.vip/cloud/getIp.php').then(value => {
            console.log(value.data)
            resolve(value.data)
        })
    })

}
