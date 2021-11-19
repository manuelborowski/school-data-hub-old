import App from './App.svelte';
import "carbon-components-svelte/css/white.css";

const app = new App({
	target: document.body,
	props: {
		name: 'Nancy'
	}
});

export default app;