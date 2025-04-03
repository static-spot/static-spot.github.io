/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

vue.on ("setup", function () {
	console.log (123)
	})

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

vue.app.start = function () {
	vue.app.router = vue.router.create ([
		... (vue.app.route || []),
		{name: "index", path: "/", template: vue.router ["/"]},
		{name: "post", path: "/:year/:month/:slug.html", template: vue.router ["/"]},
		{name: "page", path: "/p/:slug.html", template: vue.router ["/"]},
		{name: "*", path: "/:slug(.*)+", template: vue.router ["try_catch"]},
		])
	vue.partial (vue.app)
	vue.app.use (vue.app.router)
	vue.app.mount ("#container")
	}

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

vue.router ["/"] = vue ({
	setup () {
		console.log (1)
		return {}
		},
	template: `
		<div>
			{{ vue.router.url.path }}
			<router:link url="index">Home</router-link>
			-
			<router:link url="/p/about.html">About</router-link>
			-
			<router:link v-bind:url="{name: 'page', param: {slug: 'hello'}}">About Us</router-link>
			<div>router /</div>
		</div>
		`,
	})

vue.router ["try_catch"] = vue ({
	setup () {
		console.log (2)
		return {}
		},
	template: `
		<div>
			error
		</div>
		`,
	})

/**
 * xxx
 *
 * title
 * description
 * sub description
 *
 * xxx://xxx.xxx.xxx/xxx
 */

/**
 * the end
 *
 * xxx://xxx.xxx.xxx/xxx
 */
