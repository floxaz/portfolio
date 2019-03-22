const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            use: ['style-loader', 'css-loader', 'sass-loader'],
            test: /\.s?css$/
        },
        {
            loader: 'file-loader',
            test: /\.(png|jpg)$/,
            include: path.join(__dirname, 'src')
        }
    ]
    },
    devtool: 'cheap-moduel-eval-sourc-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        open: true,
        openPage: '',
        historyApiFallback: true
    }
};