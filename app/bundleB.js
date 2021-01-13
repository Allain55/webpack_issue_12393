console.log('BundleB')

setTimeout(() => {
	import(
		/* webpackChunkName: "myChunk" */
		'./chunkA.js'
		)
		.then(({default: chunkA}) => {
			chunkA();
		})
}, 1000);