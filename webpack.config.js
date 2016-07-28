module.exports = {
    entry: [
        'babel-polyfill',
        './demo/index.js'
    ],
    output: {
        filename: './bundle/bundle.js'
    },
    watch: true,
    extensions: ['.js'],
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        }]
    }
};
