<script>
	import { page } from '$app/stores';

	export let data;
	let { projects } = data;
</script>

<main>
	<section>
		<h1>projects</h1>

		<div class="projectContainer">
			{#each projects as { title, slug, year, mainImage }}
				<h2>{title}</h2>
				<img src={mainImage.url} alt={title}>
			{/each}
		</div>
	</section>
</main>

<style>
	.projectContainer img {
		width: 100%;
	}
</style>