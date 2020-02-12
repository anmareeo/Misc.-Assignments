let getBeers = require('./fileio')

async function main(){
getBeers()
.then(result => {
    return JSON.parse(result)
})
.then(objBeers => {
    console.log(objBeers[0])
    throw new Error('Bad Error')
})
.catch(error => {
    console.log(error)
})
.finally(()=> {
    console.log('Finally Run') 
})
let newBeers = await getBeers()
console.log(JSON.parse(newBeers)[1])
console.log('End')
}
main()