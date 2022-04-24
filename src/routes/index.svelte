<script context="module" lang="ts">
	import SizeSelector from '$lib/component/SizeSelector.svelte';
	import PreviewPanel from '$lib/component/PreviewPanel.svelte';
	import AddonSelector from '$lib/component/AddonSelector.svelte';

	export const prerender = true;
</script>

<script lang="ts">
	let product: 'poster' | 'xframe' = 'poster';

	let width: number;
	let height: number;
</script>

<section>
	<!-- <h1>Pricing calculator</h1>

	Selected: {product} -->

	<div>
		<h1>Select a poster size</h1>
		<div class="row">
			<div class="col">
				<SizeSelector bind:width={width} bind:height={height}/>
				
				<h1>Select add-ons</h1>
				<AddonSelector />
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
</style>
