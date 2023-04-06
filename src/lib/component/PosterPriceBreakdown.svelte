<script lang="ts">
	export let width: number;
	export let height: number;
	export let print: boolean;
	export let mount: boolean;
	export let laminate: boolean;
	export let mountedLamType: string;
	export let quantity: number;
	export let breakdown: string[];
	export let total: number;
	export let viewBreakdown: boolean;
	export let basePrice: number;
	
	let runningBreakdown: number;

	function calculateStandardRatio(width: number, height: number) {
		let area = width * height;
		return area / (24 * 36);
	}

	function calculateMaterialCost(width: number, height: number, print: boolean, mount: boolean, laminate: boolean, mountedLamType: string) {
		var cost = 0;
		const standardMultiplier = calculateStandardRatio(width, height);
		if (print) {
			cost = cost + logBreakdown('Print material', basePrice, standardMultiplier);
		}
		if (mount) {
			cost = cost + logBreakdown('Mount material', basePrice, standardMultiplier);
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
	}

	function calculateLaborCost(width: number, height: number, print: boolean, mount: boolean, laminate: boolean, mountedLamType: string) {
		var labor = 0;
		if (print) {
			labor = labor + logBreakdown('Printing overhead', 8);
		}
		if (mount) {
			var mountOverheadLabel = laminate ? 'Mounting and laminating overhead' : 'Mounting overhead';
			labor = labor + logBreakdown(mountOverheadLabel, 8);
		} else if (laminate) {
			labor = labor + logBreakdown('Laminating overhead', 6);
		}
	}

	function calculateVolumeMultiplier(quantity: number): number {
		if (quantity > 4){
			return 0.8;
		}
		return 1;
	}

	function calculatePrice(width: number, height: number, print: boolean, mount: boolean, laminate: boolean, mountedLamType: string, quantity: number): number {
		breakdown = [];
		total = 0;
		runningBreakdown = 0;
		calculateMaterialCost(width, height, print, mount, laminate, mountedLamType);
		calculateLaborCost(width, height, print, mount, laminate, mountedLamType);
		var volumeMultiplier = calculateVolumeMultiplier(quantity);
		breakdown.push("");
		breakdown.push("Unit subtotal: $" + round(runningBreakdown));
		if (volumeMultiplier != 1) {
			breakdown.push("-" + round(100 - (volumeMultiplier * 100)) + "% volume discount");
		}
		breakdown.push("");
		var totalUnitPrice = runningBreakdown * volumeMultiplier;
		breakdown.push("Total unit price: $" + round(totalUnitPrice) + (!isWhole(totalUnitPrice) ? " ≈ $" + Math.ceil(totalUnitPrice) : ""));
		return Math.ceil(total);
	}

	function logBreakdown(label: string, value: number, multiplier?: number): number {
		var amount = value;
		if (typeof multiplier !== 'undefined') {
			amount = amount * multiplier;
		}
		breakdown.push(label + ": $"+ round(amount));
		runningBreakdown += amount;
		total += amount * calculateVolumeMultiplier(quantity);
		return value;
	}

	function round(x: number): string {
		var rounded = (Math.round((x + Number.EPSILON) * 100) / 100);
		return isWhole(rounded) ? rounded.toString() : rounded.toFixed(2);
	}

	function isWhole(x: number): boolean {
		return x % 1 == 0;
	}
</script>

<div class="price-breakdown">
	<label for="view-breakdown">
		<input type="checkbox" id="view-breakdown" value="Price breakdown" bind:checked={viewBreakdown} />
		View unit price breakdown
	</label>
	<h2>Total cost: ${calculatePrice(width, height, print, mount, laminate, mountedLamType, quantity) * quantity} {#if quantity > 1}(${calculatePrice(width, height, print, mount, laminate, mountedLamType, quantity)}/each){/if}</h2>
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
