const cekHariKerja = (day) =>{
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
              return item === day          
            })
            if (cek) {
                resolve(cek)
            }else {
                reject (new Error('hari ini bukan hari kerja'))
            }
        }, 3000);
    })
}
cekHariKerja('rabu')
.then(resolved => {
    console.log(resolved);
})
.catch(rejected => {
    console.log(rejected);
})
async function proses() {
    try{
        const hasil = await cekHariKerja("kamis")
        console.log(hasil);
    }catch(e){
        console.log(e);
    }finally{
        console.log("proses berakhir");
    }
}
proses()