const glob = require('glob'); //读文件名
const {VueLoaderPlugin} = require('vue-loader')
const path = require('path')

let list = {}

async function getFileKeyVal(dirPath, list) {
    const files = glob.sync(`${dirPath}/**/index.js`);
    console.log(files)
    for (let file of files) {
        const name = file.split(/[/.]/)[2];
        list[name] = `./${file}`;
    }
}

getFileKeyVal('components/lib', list);
console.log(list)

module.exports = {
    mode:'development',
    entry: list,
    output: {
        filename:'[name].umd.js',
        path: path.resolve(__dirname,'dist'),
        library:'dui',
        libraryTarget:'umd'
    },
    plugins:[new VueLoaderPlugin()],
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:[{
                    loader:'vue-loader'
                }]
            }
        ]
    }
}