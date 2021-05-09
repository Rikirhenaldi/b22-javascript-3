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

// pertama tama panggil function cekHariKerja dengan mengisikan satu parameter berupa string nama hari yang ingin di cek
// karena fungsi cekHariKerja mengembalikan nilai berupa promise maka kita harus mengelola outputnya dengan fungsi then dan catch.
//  fungsi then digunakan untuk manangkap dan mengelola hasil resolve atau hasil sucsess dari fungsi promise. dan jika fungsi cekHariKerja memanggil nilai resolve maka fungsi then ini akan mengolahnya dan mengoutputkan berupa string nama hari.
//// sedangkan fungsi catch digunakan untuk menangkap dan mengelola hasil rejected atau hasil erorr dari fungsi promisenya.

cekHariKerja('rabu')
.then(resolved => { 
    console.log(resolved);
})
.catch(rejected => { 
    console.log(rejected);
})

// pertama tama buat async function yang diberi nama misalkan proses, asyncronus function ini memiliki satu parameter yang nantinya akan dikirimkan pada function cekHariKerja untuk dikelola.
// didalam function proses ini kita gunakan fungsi try untuk menangkap dan mengelola hasil resolved dari hasil promise. didalam try kita buat satu variabel dengan nama hasil yang di asign dengan await cekHariKerja(parameter), yang artinya didalam catch ini kita akan menjalankan function cek hari kerja terlebih dahulu hingga selesai. 
// selain itu kita juga gunakan fungsi catch yang digunakan untuk  menangkap dan mengelola hasil rejected atau hasil erorr dari hasil promise function cekHariKerja . berbeda dengan catch pada then, catch pada try memiliki parameter yang bisa diisikan.
// kemudian ada opsi fungsi yaitu finally untuk mereturn value berupa pernyataan selesai ketika fungsi try dan catch sudah dijalankan.
// setelah membuat function asyncronus untuk menghandle promise cekHariKerja maka selanjutnya kita panggil fungsi tersebut beserta dengan parameter nya yang diisi dengan string nama hari
async function proses(hari) {
    try{ 
        const hasil = await cekHariKerja(hari)
        console.log(hasil);
    }catch(e){ // 
        console.log(e);
    }finally{
        console.log("proses berakhir");
    }
}
proses("kamis")