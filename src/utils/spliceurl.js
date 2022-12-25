//用于拼接URL

const spliceurl = (url)=>{
    let A = 'http://127.0.0.1:5566/' //本地开发时调用的
    let B = url
    return A+B
}

export default spliceurl