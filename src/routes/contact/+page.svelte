<script lang="ts">
	import Description from '$lib/components/core/description.svelte';
</script>

<div class="contact">
	<Description header="Get in touch" />
	<div class="sections">
		<div class="section">
			<h4>Email</h4>
			<span>Keskasaymen8@gmail.com</span>
		</div>
		<div class="section">
			<h4>Address</h4>
			<span>19107 algeria</span>
		</div>
		<div class="section">
			<h4>Socials</h4>
			<div class="socials">
				<a target="_blank" href="https://twitter.com/soskue_aizen"
					><i class="fa-brands fa-x-twitter"></i></a
				>
				<a target="_blank" href="https://www.linkedin.com/in/aymen-keskas/"
					><i class="fa-brands fa-linkedin"></i></a
				>
				<a target="_blank" href="https://github.com/Shinji13"><i class="fa-brands fa-github"></i></a
				>
			</div>
		</div>
	</div>
</div>

<style>
	.contact {
		width: 80%;
		display: flex;
		flex-direction: column;
		gap: 40px;
		padding-left: 5%;
	}
	.sections {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	.section {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
	.section h4 {
		color: var(--orange);
	}
	.section span {
		color: var(--black);
	}
	.socials {
		display: flex;
		gap: 10px;
	}
	.socials a {
		font-size: 1.8rem;
		color: var(--black);
	}
</style>
