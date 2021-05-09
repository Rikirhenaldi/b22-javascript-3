const hero = (name) =>{
    return new Promise((resolve,rejected)=>{
      setTimeout(() => {
          let character = ["alucard", "eudora","hayabusa", "akai","estes","atlas","argus","aldous","layla","esmeralda"]
          let chosen = character.find((item)=>{
            return item === name          
          })
          if (chosen) {
              resolve(chosen)
          }else{
              rejected(console.log(new Error("Hero Tidak Tersedia atau input salah")))
          }
      }, 2000);  
    })
}
async function showResult (name) {
    try{
        let proses1 = await hero(name)
        console.log(`Hero Yang Anda Pilih Adalah ${proses1}`);
    }catch(e){
        console.log(e);
    }finally{
        console.log("Pemilihan Berhasil");
    }
}
showResult("alucard")

let NominateLegendPlayer = (keyword) =>{
    return new Promise((resolve,reject) => {
        
        setTimeout(() => {
            const nama = [
                'Cristian Ronaldo', 'Samuel Etto', 'Delpiero',
                'Dida', 'Pele', 'Maradona',
                'Cantona', 'Messi', 'Zinadine Zidan',
                'Paolo Maldini', 'Thiery Henry', 'Ronaldinho',
                 'Roberto Carlos',  'Tsubasa Ozora', 'Hyuga', 'Misaki']
                
                 let search = (name) => {
                   return name.toLowerCase().includes(keyword)
                }
                let findName = nama.filter(search)
                if (findName) {
                       resolve(findName)            
                }else{
                    rejecte(console.log(new Error('Nominate Mvp Player Not Found')))
                }
        }, 2000);
    
    })
}
NominateLegendPlayer("an")
.then(resolved => {
    console.log('The Nominate Mvp Player Footbal is' , resolved)
}).catch(rejected => {
    console.log(rejected);
})
