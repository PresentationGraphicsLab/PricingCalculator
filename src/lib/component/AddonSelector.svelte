<script lang="ts">
	export let mount: boolean = false;
	export let laminate: boolean = false;
	export let mountedLamType: string = 'standard';

	function onChange(event: any): void {
		// update(event.currentTarget.value);
	}
</script>

<div class="addon-selector">
	<label for="mount">
		<input type="checkbox" id="mount" value="Mount" on:change={onChange} bind:checked={mount} />
		Add mounting
	</label>
	<label for="laminate">
		<input
			type="checkbox"
			id="laminate"
			value="Laminate"
			on:change={onChange}
			bind:checked={laminate}
		/>
		Add lamination
	</label>

	{#if laminate && mount}
		<div class="sub-options">
			<label for="standard-lam">
				<input
					type="radio"
					id="standard-lam"
					name="mountedLamType"
					value="standard"
					on:change={onChange}
					bind:group={mountedLamType}
				/>
				Standard
			</label>

			<label for="deep-crystal-lam">
				<input
					type="radio"
					id="deep-crystal-lam"
					name="mountedLamType"
					value="deep-crystal"
					on:change={onChange}
					bind:group={mountedLamType}
				/>
				Deep Crystal
			</label>
		</div>
	{/if}
</div>

<style>
	.addon-selector {
		display: flex;
		flex-direction: column;
	}

	label {
		box-sizing: content-box;
		line-height: 2rem;
		cursor: pointer;
	}

	.sub-options {
		display: flex;
		flex-direction: column;
		margin-left: 1rem;
	}
</style>
