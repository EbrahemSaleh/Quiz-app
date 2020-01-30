
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:'./src/js/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
     ],
     module:{
         rules:[{
             test:/\.js$/,
             exclude:/node_modules/,
             use:{
                 loader:'babel-loader',
                 options: {
                 presets: ['@babel/preset-env']
                                }
             }
         },
         {
             test:/\.css$/,
             use:['style-loader', 'css-loader'],
         }
         ]
     },
     devServer: {
         open : true,
         port:9000
     }
}