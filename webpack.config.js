var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: path.join(__dirname, 'src'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?name=[path][name].[ext]&context=src',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    }
};
