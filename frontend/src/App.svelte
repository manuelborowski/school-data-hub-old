<script lang="ts">
	import Navbar from "../components/Navbar.svelte"

	const navbar_event = event => {
		console.log("In App.svelte: ", event.detail)
	}

	let menu = [
		{type: "item", name: "manuel link 1"},
		{type: "item", name: "manuel link 2"},
		{type: "menu", name: "manuel menu 3", menu : [
				{type: "item", name: "manuel link 3-1"},
				{type: "item", name: "manuel link 3-2"},
			]},
	];

</script>

<main>
	<Navbar content="test" menu_list={menu} on:navbar={navbar_event}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	/*h1 {*/
	/*	color: #ff3e00;*/
	/*	text-transform: uppercase;*/
	/*	font-size: 4em;*/
	/*	font-weight: 100;*/
	/*}*/

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>