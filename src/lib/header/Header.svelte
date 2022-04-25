<script lang="ts">
	import { page } from '$app/stores';
	import logo from './mark.svg';
</script>

<header>
	<nav>
		<div class="logo">
			<a href="/">
				<img src={logo} alt="Institutional Mark" />
			</a>
		</div>
		<div class="text">Presentation and Environmental Graphic Services</div>
	</nav>
</header>

<style>
	nav {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		padding: 0.5rem;
		background-color: var(--chico-red);
		box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
	}

	.logo img {
		height: 2.5rem;
		object-fit: contain;
	}

	.text {
		font-size: 1.25rem;
		font-weight: 500;
		color: var(--white);
	}

	@media (max-width: 600px) {
		.text {
			font-size: 1rem;
		}
	}
</style>
