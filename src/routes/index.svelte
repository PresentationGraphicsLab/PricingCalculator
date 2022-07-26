<script context="module" lang="ts">
	import SizeSelector from '$lib/component/SizeSelector.svelte';
	import PreviewPanel from '$lib/component/PreviewPanel.svelte';
	import AddonSelector from '$lib/component/AddonSelector.svelte';
	import PriceBreakdown from '$lib/component/PriceBreakdown.svelte';
	import Chips from '$lib/component/Chips.svelte';

	export const prerender = true;
</script>

<script lang="ts">
	let product: 'poster' | 'x-frame' = 'poster';

	let width: number;
	let height: number;
	let print: boolean;
	let mount: boolean;
	let laminate: boolean;
	let mountedLamType: string;
	let total: number;
	let breakdown: string[];
	let viewBreakdown: boolean;

	let quantity: number = 1;
</script>

<section>
	<h1>Select a product</h1>

	<Chips bind:selected={product} options={['poster', 'x-frame']} />

	{#if product === 'poster'}
		<div>
			<h1>Select a poster size</h1>
			<div class="row">
				<div class="col main">
					<SizeSelector bind:width bind:height />

					<h1>Select add-ons and quantity</h1>
					<AddonSelector bind:print bind:mount bind:laminate bind:mountedLamType />
					<div class="quantity">
						Quantity: <input class="quantity-input" type="number" bind:value={quantity} min="1" />
					</div>
					<PriceBreakdown
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
					/>
				</div>
				<div class="col preview">
					<PreviewPanel {width} {height} />
					<br />
					Area: <b>{width * height}</b> square inches
				</div>
			</div>
		</div>
	{/if}
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
