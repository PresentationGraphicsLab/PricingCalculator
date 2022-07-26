<div class="row">
    <div class="options">
        <slot name="options">
            <span class="missing">Missing options</span>
        </slot>
    </div>
    <div class="preview">
        <slot name="preview">
            <span class="missing">Missing preview</span>
        </slot>
    </div>
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
	}

	.options {
		flex-grow: 1;
	}

	.preview {
		min-width: 24rem;
	}

	@media (max-width: 680px) {
		.preview {
			display: none;
		}
	}
</style>
