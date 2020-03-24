const webpack = require('webpack');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(scss|sass)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                enforce: 'pre',
                test: /\.(js)$/,
                loader: 'source-map-loader',
            }
        ],
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
