<script lang="ts">
	let {
		tabs = [],
		activeTab = $bindable(0),
		onchange
	}: {
		tabs?: { icon?: import('../../utils/types').iconComponent; title: string }[];
		activeTab?: number;
		onchange?: (event: { activeTab: number }) => void;
	} = $props();
</script>

<div class="tabs">
	{#each tabs as tab, index}
		<button
			class="tab"
			class:active={index == activeTab}
			onclick={() => {
				activeTab = index;
				onchange?.({
					activeTab
				});
			}}
		>
			<tab.icon />
			<span>{tab.title}</span>
		</button>
	{/each}
</div>

<style>
	.tabs {
		width: var(--width, 100%);
		display: flex;
		align-items: center;
		border: 2px solid var(--primary);
		border-radius: 0.3rem;
		gap: 0.25rem;
		padding: 0.25rem;
		overflow-x: auto;
	}

	.tabs::-webkit-scrollbar {
		display: none;
	}

	.tab {
		height: 2.5rem;
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: start;
		gap: 0.25rem;
		padding: 0.5rem;
		border-radius: 0.3rem;
		background-color: transparent;
		border: none;
		outline: none;
		cursor: pointer;
		transition: all 200ms ease-in;
		--icon: var(--muted);
	}

	.tab span {
		font-size: var(--small);
		font-family: var(--font);
		font-weight: 600;
		text-transform: capitalize;
		color: var(--muted);
	}

	.active {
		background-color: var(--primary);
		--icon: var(--black);
	}

	.active span {
		color: var(--black);
	}

	.tab :global(svg) {
		width: 1.25rem;
		height: 1.25rem;
	}
</style>
