<script>
	export let data;
	let { projects } = data;
</script>

<main>
	<section>
		<h1>projects</h1>

		<div class="projectContainer">
			{#each projects as { title, slug, year, mainImage, tags, company, collaboration, design, demoUrl, liveSite, sourceUrl }}
				<h2 class="projectTitle">{title}</h2>

				<img src={mainImage.url} alt={title} />

				<div class="projectDesCon">
					<div class="projectTags">
						{#each tags as tag}
							<p class="projectTag">{tag}</p>
						{/each}

						<p>{year}</p>
					</div>

					<p>{company}</p>
					<div class="projectLinks">
						<a href={liveSite} target="blank">Live Site🡥</a>
						<a href={design} target="blank">Design🡥</a>
						<a href={sourceUrl} target="blank">Source Code🡥</a>
					</div>
				</div>
			{/each}
		</div>
	</section>
</main>

<style>
	.projectTitle {
		font-size: 5vw;
	}
	.projectContainer img {
		width: 100%;
		border-radius: 2vw;
	}

	.projectTags {
		justify-content: space-between;
		display: flex;
		flex-direction: row;
	}

	.projectTag {
		background-color: rgb(0, 0, 0);
		color: white;
	}

	.projectLinks {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
