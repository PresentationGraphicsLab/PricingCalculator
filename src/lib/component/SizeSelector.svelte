<script lang="ts">
	const MAX_WIDTH = 59;
	const MAX_LENGTH = 600;
	var presetSizes: [number, number][] = [
		[18, 24],
		[20, 30],
		[22, 28],
		[24, 36],
		[27, 40],
		[40, 60]
	];

	let selected: string = '24x36';
	export let width: number;
	export let height: number;
	update(selected)

	function onChange(event: any): void {
		update(event.currentTarget.value);
	}

	function update(selection: string): void {
		if (selection !== 'custom') {
			let split = selection.split('x');
			width = parseInt(split[0]);
			height = parseInt(split[1]);
		}
	}
</script>

<div class="size-selector">
	{#each presetSizes as preset}
		<label for="{preset[0]}x{preset[1]}">
			<input
				type="radio"
				id="{preset[0]}x{preset[1]}"
				name="presetSize"
				value="{preset[0]}x{preset[1]}"
				on:change={onChange}
				bind:group={selected}
			/>
			{preset[0]}" x {preset[1]}"
		</label>
	{/each}
	<label for="custom">
		<input type="radio" id="custom" name="presetSize" value="custom" on:change={onChange} bind:group={selected} />
		{#if selected === 'custom'}
			<input type="number" bind:value={width} min=1 max={height > MAX_WIDTH ? MAX_WIDTH : MAX_LENGTH}> in. x
			<input type="number" bind:value={height} min=1 max={width > MAX_WIDTH ? MAX_WIDTH : MAX_LENGTH}/> in.
		{:else}
			Custom size
		{/if}
	</label>
</div>

<style>
	.size-selector {
		display: grid;
		grid-template-columns: repeat(2, 18rem);
		gap: 1rem;
	}

	label {
		box-sizing: content-box;
		border-radius: 0.25rem;
		line-height: 2rem;
		cursor: pointer;
	}

	input[type='number'] {
		width: 4rem;
	}
</style>
