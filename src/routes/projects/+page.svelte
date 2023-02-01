<script>
    export let data
</script>

<main>
    <section>
        <h1>projects</h1>
    </section>
    <div>
        {#each data.projects as { title }, inex}
        
            <h1>{title}</h1>

      
      {/each}
    </div>
</main>