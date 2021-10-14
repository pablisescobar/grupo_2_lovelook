const fs=require('fs')
const path = require('path')

module.exports = {
    getImgCarousel:JSON.parse(fs.readFileSync('./src/data/carousel.json','utf-8')),
    getProducts:JSON.parse(fs.readFileSync('./src/data/products.json','utf-8')),
    getImgCarousel:JSON.parse(fs.readFileSync('./src/data/carousel.json','utf-8')),
}