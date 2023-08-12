
import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
	async GET(_req, ctx) {
		const resp = await ctx.render()
		resp.headers.set('X-Custom-Header', 'Hello')
		return resp
	}
}
export default function AboutPage() {
	return (
		<main>
			<h1>About Us</h1>
			<p>the about us page.</p>
		</main>
	)
}