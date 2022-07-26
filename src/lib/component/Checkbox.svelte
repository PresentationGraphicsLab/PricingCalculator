<script lang="ts">
	export let id: string;
	export let name: string;
	export let selected: boolean;
</script>

<label for={id}>
	<input type="checkbox" {id} value={name} bind:checked={selected} />
	{name}
	{#if selected}
		<div class="sub-options">
			<slot />
		</div>
	{/if}
</label>

<style>
	label {
		box-sizing: content-box;
		line-height: 2rem;
		cursor: pointer;
	}

	.sub-options {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
	}
</style>
