<script lang="ts">
	import CalculatorPane from '$lib/component/CalculatorPane.svelte';
	import Checkbox from '$lib/component/Checkbox.svelte';
	import PreviewPanel from '$lib/component/PreviewPanel.svelte';
	import PosterPriceBreakdown from '$lib/component/PosterPriceBreakdown.svelte';
    import QuantityInput from '$lib/component/QuantityInput.svelte';
	import RadioGroup from '$lib/component/RadioGroup.svelte';
	import SizeSelector from '$lib/component/SizeSelector.svelte';

	let width: number;
	let height: number;
	let print: boolean = true;
	let mount: boolean = false;
	let laminate: boolean = false;
	let mountedLamType: string = 'standard';
	export let total: number;
	export let breakdown: string[];
	export let viewBreakdown: boolean;
	export let coroplast: boolean;

	export let quantity: number = 1;
</script>

<h1>Select a poster size</h1>
<CalculatorPane>
	<div slot="options">
		<SizeSelector bind:width bind:height />

		{#if !coroplast}
			<h1>Select poster options</h1>
			<div class="options-group">
				<Checkbox id="print" name="Printing" bind:selected={print} />
				<Checkbox id="mount" name="Mounting" bind:selected={mount} />
				<Checkbox id="laminate" name="Lamination" bind:selected={laminate}>
					{#if mount}
						<RadioGroup
							bind:selected={mountedLamType}
							options={[
								['standard', 'Standard'],
								['deep-crystal', 'Deep Crystal']
							]}
						/>
					{/if}
				</Checkbox>
			</div>
		{/if}
		<QuantityInput bind:quantity={quantity} />
		<PosterPriceBreakdown
			{width}
			{height}
			{print}
			{mount}
			{laminate}
			{mountedLamType}
			{quantity}
			{total}
			{breakdown}
			{viewBreakdown}
			basePrice={coroplast ? 50 : 28}
		/>
	</div>
	<div slot="preview">
		<PreviewPanel {width} {height} />
	</div>
</CalculatorPane>

<style>
</style>
