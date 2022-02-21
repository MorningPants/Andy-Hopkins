<script>
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import '../app.css';
</script>


<main>
	<Header />
	<slot />
	<Footer />
</main>


<style>
	
	main{
		overflow-x: hidden;
	}
</style>
