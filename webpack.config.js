const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = env => {
    const isProduction = env === 'production';
    const CSSExtract = new ExtractTextPlugin('styles.css');

    return {
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
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                loader: 'file-loader',
                test: /\.(png|jpg)$/,
                include: path.join(__dirname, 'src'),
                options: {
                    outputPath: 'images'
                }
            }
            ]
        },
        plugins: [ CSSExtract ],
        devtool: isProduction ? 'source-map' : 'cheap-moduel-eval-sourc-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            open: true,
            openPage: '',
            historyApiFallback: true
        }
    }
}