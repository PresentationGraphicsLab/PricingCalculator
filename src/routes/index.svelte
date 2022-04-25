<script context="module" lang="ts">
	import SizeSelector from '$lib/component/SizeSelector.svelte';
	import PreviewPanel from '$lib/component/PreviewPanel.svelte';
	import AddonSelector from '$lib/component/AddonSelector.svelte';
	import PriceBreakdown from '$lib/component/PriceBreakdown.svelte';

	export const prerender = true;
</script>

<script lang="ts">
	let product: 'poster' | 'xframe' = 'poster';

	let width: number;
	let height: number;
	let mount: boolean;
	let laminate: boolean;
	let mountedLamType: string;

	let quantity: number = 1;
</script>

<section>
	<!-- <h1>Pricing calculator</h1>

	Selected: {product} -->

	<div>
		<h1>Select a poster size</h1>
		<div class="row">
			<div class="col">
				<SizeSelector bind:width={width} bind:height={height}/>
				
				<h1>Select add-ons and quantity</h1>
				<AddonSelector bind:mount={mount} bind:laminate={laminate} bind:mountedLamType={mountedLamType} />
				<div class="quantity">Quantity: <input class="quantity-input" type="number" bind:value={quantity} min=1></div>
				<PriceBreakdown width={width} height={height} mount={mount} laminate={laminate} mountedLamType={mountedLamType} quantity={quantity} />
			</div>
			<div class="col">
				<PreviewPanel width={width} height={height}/>
				<br>
				Area: <b>{width * height}</b> square inches
			</div>
		</div>
	</div>
</section>

<style>
	.row {
		display: flex;
		flex-direction: row;
	}

	.quantity {
		margin-top: 1rem;
	}

	.quantity-input {
		width: 6rem;
	}
</style>
