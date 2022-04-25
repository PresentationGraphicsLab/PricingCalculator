<script lang="ts">
	export let width: number;
	export let height: number;
	export let mount: boolean;
	export let laminate: boolean;
	export let mountedLamType: string;
	export let quantity: number;

	function calculateStandardRatio(width: number, height: number) {
		let area = width * height;
		return area / (24 * 36);
	}

	function calculateMaterialCost(width: number, height: number, mount: boolean, laminate: boolean, mountedLamType: string): number {
		var cost = 28;
		if (mount) {
			cost = cost * 2;
			if (laminate) {
				if (mountedLamType === 'standard') {
					cost = cost + 6;
				} else if (mountedLamType === 'deep-crystal') {
					cost = cost + 25;
				}
			}
		}
		return cost * calculateStandardRatio(width, height);
	}

	function calculateLaborCost(width: number, height: number, mount: boolean, laminate: boolean, mountedLamType: string): number {
		var labor = 8;
		if (mount) {
			labor = labor + 8;
		} else if (laminate) {
			labor = labor + 6;
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
		return Math.ceil((calculateMaterialCost(width, height, mount, laminate, mountedLamType) + calculateLaborCost(width, height, mount, laminate, mountedLamType)) * calculateVolumeMultiplier(quantity));
	}

</script>

<div class="price-breakdown">
	<h2>Total cost: ${calculatePrice(width, height, mount, laminate, mountedLamType, quantity) * quantity} {#if quantity > 1}(${calculatePrice(width, height, mount, laminate, mountedLamType, quantity)}/each){/if}</h2>
</div>

<style>
	.price-breakdown {
		display: flex;
		flex-direction: column;
	}
</style>
