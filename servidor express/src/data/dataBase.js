let fs=require('fs')

module.exports = {
    getShops : JSON.parse(fs.readFileSync('./src/data/shops.json','utf-8')),

    getProducts:JSON.parse(fs.readFileSync('./src/data/products.json','utf-8'))
}