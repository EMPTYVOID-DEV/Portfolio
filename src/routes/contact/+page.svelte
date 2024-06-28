<script lang="ts">
	import Description from '$lib/components/core/description.svelte';
	import Github from '$lib/components/icons/github.svelte';
	import Linkedin from '$lib/components/icons/linkedin.svelte';
	import Twitter from '$lib/components/icons/twitter.svelte';
	import { colorsMap } from '$lib/utils/consts';
	import { onMount } from 'svelte';
	let description =
		"Thank you for exploring my portfolio! I'm excited to connect with you. Whether you have questions about my work, want to discuss potential collaborations, or simply want to say hello, I'd love to hear from you. Feel free to reach out using email or connect with me through the social media links provided.";
	onMount(() => {
		document.documentElement.style.setProperty('--primary', colorsMap.get('contact'));
	});
</script>

<div class="contact">
	<Description header="Get in touch" {description} />
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
				<a target="_blank" href="https://twitter.com/soskue_aizen"><Twitter /></a>
				<a target="_blank" href="https://www.linkedin.com/in/aymen-keskas/"><Linkedin /></a>
				<a target="_blank" href="https://github.com/EMPTYVOID-DEV"><Github /></a>
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
		color: var(--primary);
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
