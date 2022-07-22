<script lang="ts">
	export let width: number;
	export let height: number;
	export let print: boolean;
	export let mount: boolean;
	export let laminate: boolean;
	export let mountedLamType: string;
	export let quantity: number;
	export let breakdown: string[];
	export let viewBreakdown: boolean;

	function calculateStandardRatio(width: number, height: number) {
		let area = width * height;
		return area / (24 * 36);
	}

	function calculateMaterialCost(width: number, height: number, mount: boolean, laminate: boolean, mountedLamType: string): number {
		var cost = 0;
		const standardMultiplier = calculateStandardRatio(width, height);
		if (print) {
			cost = cost + logBreakdown('Print material', 28, standardMultiplier);
		}
		if (mount) {
			cost = cost + logBreakdown('Mount material', 28, standardMultiplier);
			if (laminate) {
				if (mountedLamType === 'standard') {
					cost = cost + logBreakdown('Lamination material', 6, standardMultiplier);
				} else if (mountedLamType === 'deep-crystal') {
					cost = cost + logBreakdown('Deep crystal material', 12, standardMultiplier);
				}
			}
		} else {
			if (laminate) {
				cost = cost + logBreakdown('Lamination material', 6, standardMultiplier);
			}
		}
		return cost * standardMultiplier;
	}

	function calculateLaborCost(width: number, height: number, mount: boolean, laminate: boolean, mountedLamType: string): number {
		var labor = 0;
		if (print) {
			labor = labor + logBreakdown('Printing overhead', 8);
		}
		if (mount) {
			labor = labor + logBreakdown('Mounting overhead', 8);
		} else if (laminate) {
			labor = labor + logBreakdown('Laminating overhead', 6);
		}
		return labor;
	}

	function calculateVolumeMultiplier(quantity: number): number {
		if (quantity > 4){
			return 0.8;
		}
		return 1;
	}

	function calculatePrice(width: number, height: number, mount: boolean, laminate: boolean, mountedLamType: string, quantity: number): number {
		breakdown = [];
		return Math.ceil((calculateMaterialCost(width, height, mount, laminate, mountedLamType) + calculateLaborCost(width, height, mount, laminate, mountedLamType)) * calculateVolumeMultiplier(quantity));
	}

	function logBreakdown(label: string, value: number, multiplier?: number): number {
		if (typeof multiplier !== 'undefined') {
			breakdown.push(label + ": $"+ value * multiplier);
		} else {
			breakdown.push(label + ": $"+ value);
		}
		return value;
	}
</script>

<div class="price-breakdown">
	<label for="view-breakdown">
		<input type="checkbox" id="view-breakdown" value="Price breakdown" bind:checked={viewBreakdown} />
		View price breakdown
	</label>
	<h2>Total cost: ${calculatePrice(width, height, mount, laminate, mountedLamType, quantity) * quantity} {#if quantity > 1}(${calculatePrice(width, height, mount, laminate, mountedLamType, quantity)}/each){/if}</h2>
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
