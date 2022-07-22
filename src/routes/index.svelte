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
	let print: boolean;
	let mount: boolean;
	let laminate: boolean;
	let mountedLamType: string;
	let breakdown: string[];
	let viewBreakdown: boolean;

	let quantity: number = 1;
</script>

<section>
	<!-- <h1>Pricing calculator</h1>

	Selected: {product} -->

	<div>
		<h1>Select a poster size</h1>
		<div class="row">
			<div class="col main">
				<SizeSelector bind:width={width} bind:height={height}/>
				
				<h1>Select add-ons and quantity</h1>
				<AddonSelector bind:print={print} bind:mount={mount} bind:laminate={laminate} bind:mountedLamType={mountedLamType} />
				<div class="quantity">Quantity: <input class="quantity-input" type="number" bind:value={quantity} min=1></div>
				<PriceBreakdown width={width} height={height} print={print} mount={mount} laminate={laminate} mountedLamType={mountedLamType} quantity={quantity} breakdown={breakdown} viewBreakdown={viewBreakdown} />
			</div>
			<div class="col preview">
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

	.main {
		flex-grow: 1;
	}

	.quantity {
		margin-top: 1rem;
	}

	.quantity-input {
		width: 6rem;
	}

	.preview {
		min-width: 24rem;
	}

	h1 {
		word-wrap: break-word;
		white-space: normal;
	}

	@media (max-width: 680px) {
		.preview {
			display: none;
		}
	}
</style>
