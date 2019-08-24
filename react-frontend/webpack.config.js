const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
    
    const config = {}

    const htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: './src/index.html'
    })

    config.plugins = [
        htmlWebpackPlugin
    ]

    config.module = {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }

    return config
}