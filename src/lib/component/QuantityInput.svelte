<script lang="ts">
	export let quantity: number;
</script>

<div class="quantity">
    Quantity: <input class="quantity-input" type="number" bind:value={quantity} min="1" />
</div>

<style>
	.quantity {
		margin-top: 1rem;
	}

	.quantity-input {
		width: 6rem;
	}
</style>
