import { client } from '$lib/graphql-client'
import { firstProjects } from '$lib/graphql-queries'

export const load = async () => {
	const { Mainprojects } = await await client.request(firstProjects)

	return {
		Mainprojects,
	}
}