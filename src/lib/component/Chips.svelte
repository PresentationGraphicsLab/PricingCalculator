<script lang="ts">
	export let selected: string;
	export let options: string[];

	function handleClick(option: string): any {
		selected = option;
	}
</script>

<div class="chips">
	{#each options as option}
		<button class={selected === option ? "selected chip" : "chip"} on:click={handleClick(option)}>
			{selected === option ? ("✔ " + option) : option}
		</button>
	{/each}
</div>

<style>
	.chips {
		display: flex;
	}

	.chip {
		background-color: var(--cornerstone-gray);
		color: var(--white);
		padding: 0.5rem 0.75rem;
		margin: 0 0.25rem;
		border-radius: 0.3rem;
		text-transform: capitalize;
		border: none;
		cursor: pointer;
	}

	.chip:first-child {
		margin-left: 0;
	}

	.selected {
		background-color: var(--chico-red);
		font-weight: 500;
		cursor: default;
	}
</style>
