const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['january','febuary','maret','april','mei','juni','juli','agustus','september','oktober','november','desember'];
        if (!error) {
            callback(null, month)
        }else{
            callback(new Error('Sory Data Not Found', []))
        }
    }, 4000);
}
function showMonth(error,data){
    return new Promise((resolve,reject)=> {
        if(error == null){
            resolve(data.map(x => console.log(x)))
        }else{
            reject(data)
        }
    })
}
async function prosesor(cb) {
    try{
        const proses1 = await getMonth(cb)
        return proses1
    }catch(e){
        console.log(e);
    }
}
prosesor(showMonth)