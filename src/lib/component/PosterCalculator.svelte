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
</style>
