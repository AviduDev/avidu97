
import { client } from '$lib/graphql-client'
import { allProjects } from '$lib/graphql-queries'

export const load = async () => {
	const { projects } = await await client.request(allProjects)

	return {
		projects,
	}
}