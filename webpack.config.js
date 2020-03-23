const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['bable-loader'],
        }],
    },
    resolve: {
        extensions: ['*', '.ts', '.tsx', '.js'],
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    // },
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
        hot: true,
    },
};
