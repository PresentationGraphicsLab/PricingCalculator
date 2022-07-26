<script lang="ts">
	export let print: boolean;
	export let hardware: boolean;
	export let quantity: number;
	export let breakdown: string[];
	export let total: number;
	export let viewBreakdown: boolean;
	
	function calculatePrice(print: boolean, hardware: boolean): number {
		breakdown = [];
		total = 0;
		if (print) {
			total = total + logBreakdown('Print', 75);
		}
		if (hardware) {
			total = total + logBreakdown('Hardware', 55);
		}		
		breakdown.push("");
		breakdown.push("Total unit price: $" + total);
		return Math.ceil(total);
	}

	function logBreakdown(label: string, value: number, multiplier?: number): number {
		var amount = value;
		if (typeof multiplier !== 'undefined') {
			amount = amount * multiplier;
		}
		breakdown.push(label + ": $"+ amount);
		total += amount;
		return value;
	}
</script>

<div class="price-breakdown">
	<label for="view-breakdown">
		<input type="checkbox" id="view-breakdown" value="Price breakdown" bind:checked={viewBreakdown} />
		View unit price breakdown
	</label>
	<h2>Total cost: ${calculatePrice(print, hardware) * quantity} {#if quantity > 1}(${calculatePrice(print, hardware)}/each){/if}</h2>
	{#if viewBreakdown}
		{#each breakdown as item}
			<h3>{item}</h3>
		{/each}
	{/if}
</div>

<style>
	label {
		box-sizing: content-box;
		line-height: 2rem;
		cursor: pointer;
	}
	.price-breakdown {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
	}
	h2 {
		margin-top: 0.25rem;
		margin-bottom: 0.25rem;
	}
	h3 {
		margin-top: 0.25rem;
		margin-bottom: 0.25rem;
		margin-left: 1rem;
		font-weight: 500;
	}
</style>
