<script lang="ts">
	import Description from '$lib/components/core/description.svelte';
	import Github from '$lib/components/icons/github.svelte';
	import Linkedin from '$lib/components/icons/linkedin.svelte';
	import Twitter from '$lib/components/icons/twitter.svelte';
	import { colorsMap } from '$lib/utils/consts';
	let description =
		"Thank you for exploring my portfolio! I'm excited to connect with you. Whether you have questions about my work, want to discuss potential collaborations, or simply want to say hello, I'd love to hear from you. Feel free to reach out using email or connect with me through the social media links provided.";

	let contactInfo = {
		email: 'keskas.aymen.islam@gmail.com',
		address: '19107 Algeria',
		socials: {
			twitter: 'https://twitter.com/soskue_aizen',
			linkedin: 'https://www.linkedin.com/in/aymen-keskas/',
			github: 'https://github.com/EMPTYVOID-DEV'
		}
	};
	$effect(() => {
		document.documentElement.style.setProperty('--primary', colorsMap.get('contact'));
	});
</script>

<div class="contact">
	<Description header="Get in touch" {description} />
	<div class="sections">
		<div class="section">
			<h4>Email</h4>
			<span>{contactInfo.email}</span>
		</div>
		<div class="section">
			<h4>Address</h4>
			<span>{contactInfo.address}</span>
		</div>
		<div class="section">
			<h4>Socials</h4>
			<div class="socials">
				<a target="_blank" href={contactInfo.socials.twitter}><Twitter /></a>
				<a target="_blank" href={contactInfo.socials.linkedin}><Linkedin /></a>
				<a target="_blank" href={contactInfo.socials.github}><Github /></a>
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
