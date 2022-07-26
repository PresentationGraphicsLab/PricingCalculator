<script lang="ts">
	import CalculatorPane from '$lib/component/CalculatorPane.svelte';
	import Checkbox from '$lib/component/Checkbox.svelte';
	import PreviewPanel from '$lib/component/PreviewPanel.svelte';
	import QuantityInput from '$lib/component/QuantityInput.svelte';
    import XframePriceBreakdown from '$lib/component/XframePriceBreakdown.svelte';

    const width = 23.5;
    const height = 63.25;
    
	let print: boolean = true;
	let hardware: boolean = false;
	export let total: number;
	export let breakdown: string[];
	export let viewBreakdown: boolean;

	export let quantity: number = 1;
</script>

<h1>Select x-frame options</h1>
<CalculatorPane>
	<div slot="options">
		<div class="options-group">
			<Checkbox id="print" name="Printing" bind:selected={print} />
			<Checkbox id="hardware" name="Hardware" bind:selected={hardware} />
		</div>
		<QuantityInput bind:quantity={quantity} />
		<XframePriceBreakdown
			{print}
			{hardware}
			{quantity}
			{total}
			{breakdown}
			{viewBreakdown}
		/>
	</div>
	<div slot="preview">
		<PreviewPanel {width} {height} />
	</div>
</CalculatorPane>

<style>
</style>
