<script lang="ts">
	export let selected: string;
    export let options: [string, string][];
</script>

{#each options as option}
    <label for={option[0]}>
        <input
            type="radio"
            id={option[0]}
            name={option[0]}
            value={option[0]}
            bind:group={selected}
        />
    {option[1]}
    </label>
{/each}

<style>
	label {
		box-sizing: content-box;
		line-height: 2rem;
		cursor: pointer;
	}
</style>
