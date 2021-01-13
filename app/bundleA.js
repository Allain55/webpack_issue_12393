console.log('BundleA')

setTimeout(() => {
	import(
		/*
			webpackPrefetch: true,
			webpackChunkName: "myChunk"
		 */
			'./chunkA.js'
		)
		.then(({default: chunkA}) => {
			chunkA();
		});
}, 1000)