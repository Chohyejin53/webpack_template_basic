//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export 
module.exports = {
    //parcel index.html
    //파일을 읽어들이기 시작하는 진입점 설정
    entry:'./js/main.js',

    //결과물(번들)울 반환하는 설정
    output: {
        // path: path.resolve(__dirname,'dist'), //노드제이에스에서 필요한 절대경로 명시해야함 | __dirname는 현재 파일이 있는 경로를 의미함
        // filename:'main.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.s?css$/, //.css로 끝나는 확장자로 끝나는 파일을 찾음 s? : s가 있을수도 있고 없을수도 있는 경우도 모두 찾는다는 정규표현식
                use: [
                    'style-loader', //위가 나중에 실행
                    'css-loader',
                    'postcss-loader',
                    'sass-loader' //아래가 우선실행
                    
                ]
            },
            {
                test:/\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template:'./index.html'
        }),
        new CopyPlugin({
            patterns: [
                {from:'static'}
            ]
        })
    ],

    // devServer: {
    //     host:'localhost'
    // }
}