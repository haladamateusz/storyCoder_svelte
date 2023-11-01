<script lang="ts">
	import '../app.pcss';
	import { AppShell, AppBar, LightSwitch } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<img class="h-10 logo" src="logo.svg" alt="" />
				<strong class="text-xl ms-4">StoryCoder.dev</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />
				<button type="button" class="btn-icon h-8 w-8 variant-filled-secondary dark:bg-primary-600">
					<a href="https://discord.com/invite/ysxWRdDEsz">
						<img class="h-3 icon" src="discord.svg" alt="" />
					</a>
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
