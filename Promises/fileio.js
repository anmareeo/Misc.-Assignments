
   let fs = require('fs')
//this will import the code, the built-in module that is the fs code.The best way to know how to use someone's module is to read their documentation. 
function getBeers() {

    return new Promise((resolve, reject)=> {

        fs.readFile('beers.txt', 'utf8', (error, data)=>{
    
            if (error != null) {
            reject(error) 
            } else {
            resolve (data)
            }
    }) //end of readfile

})

} //end of getBeers


module.exports = getBeers


