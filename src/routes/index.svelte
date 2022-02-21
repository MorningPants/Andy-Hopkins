<script>
	import Card from '../components/Card.svelte';
</script>
<h1>Web Developer</h1>
<div class="flex">
	<img src="/static/hand-coding.svg" alt="Hand Coding" width="40%" />
	<div>
		<h2>Some of my work:</h2>
		<div class="flex wrap">
			<Card link={"https://codepen.io/MorningPants"} src={'/static/Codepen.png'} alt={'Codepen'} />
			<Card link={"https://skyschool.arizona.edu/"} src={'/static/SkySchool.png'} alt={'Arizona Sky School'} />
			<Card link={"https://thrivefamilymassage.com"} src={'/static/Thrive.png'} alt={'Thrive Family Massage'} />
		</div>
	</div>
</div>

<style>
	.flex {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.wrap{
		flex-wrap: wrap-reverse;
		gap: 10px;
		max-width: 40vw;
	}
	h1, h2{
		text-align: center;
		font-family: "Antic Slab", serif;
		font-weight: bold;
	}
	h2{
		text-decoration: underline;
		margin: 10px;
	}
</style>
