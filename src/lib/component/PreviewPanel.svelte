<script lang="ts">
	export let width: number = 20;
	export let height: number = 10;
</script>

<div class="preview-panel">
	<div class="col">
		<div class="paper" style="aspect-ratio: {width > height ? height : width} / {width > height ? width : height}"></div>
		<span class="label">{width > height ? height : width}"</span>
	</div>
	<div class="height-label">
		<span class="label">{width > height ? width : height}"</span>
	</div>
</div>
<br />
Area: <b>{width * height}</b> square inches

<style>
	.preview-panel {
		display: flex;
		flex-direction: row;
		gap: 0.5rem;
		width: 100%;
	}

	.col {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
	}

	.height-label{
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 2rem;
	}

	.paper {
		background-color: var(--cornerstone-gray);
		height: 20rem;
		transition: aspect-ratio 0.5s ease-in-out;
	}

	.label {
		font-size: 1.5rem;
		font-weight: bold;
		color: var(--cornerstone-gray)
	}
</style>
