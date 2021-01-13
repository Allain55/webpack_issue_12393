const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
  	bundleA: './app/bundleA.js',
  	bundleB: './app/bundleB.js',
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
	// uncommenting these would have the same effect
	// 'optimization': {
	// 	'splitChunks': {
	// 		'minChunks'  : 1,
	// 		'minSize' 	 : 0,
	// 		'cacheGroups': {
	// 			'myChunk': {
	// 				'name'              : 'myChunk',
	// 				'test'              : /chunkA/u,
	// 				'chunks'   : 'all'
	// 			}
	// 		},
	// 	}
	// },
	
	plugins: [
		new HtmlWebpackPlugin({
			minify: false,
			inject: false,
			template: './app/pageA/index.html',
			filename: 'pageA/index.html'
		}),
		new HtmlWebpackPlugin({
			minify: false,
			inject: false,
			template: './app/pageB/index.html',
			filename: 'pageB/index.html'
		}),
	],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
        watch: true,
      }
    ],
    port: 3500,
  }

};
