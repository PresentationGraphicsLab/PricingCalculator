<script context="module" lang="ts">
	import Chips from '$lib/component/Chips.svelte';
	import PosterCalculator from "$lib/component/PosterCalculator.svelte";
	import XframeCalculator from '$lib/component/XframeCalculator.svelte';

	export const prerender = true;
</script>

<script lang="ts">
	let product: 'poster' | 'coroplast' | 'x-frame' = 'poster';

	let total: number;
	let breakdown: string[];
	let viewBreakdown: boolean;

	let quantity: number = 1;
</script>

<section>
	<h1>Select a product</h1>

	<Chips bind:selected={product} options={['poster', 'coroplast', 'x-frame']} />

	{#if product === 'poster'}
	<PosterCalculator bind:quantity bind:total bind:breakdown bind:viewBreakdown coroplast={false} />
	{:else if product === 'coroplast'}
	<PosterCalculator bind:quantity bind:total bind:breakdown bind:viewBreakdown coroplast={true} />
	{:else if product === 'x-frame'}
	<XframeCalculator bind:quantity bind:total bind:breakdown bind:viewBreakdown />
	{/if}
</section>

<style>
	
</style>
