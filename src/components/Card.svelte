<script>
	export let src, alt, link;
</script>

<a href={link}>
	<div class="flip-card">
		<div class="flip-card-inner">
			<div class="flip-card-front">
				<h3>{alt}</h3>
			</div>
			<div class="flip-card-back">
				<img {src} {alt} />
			</div>
		</div>
	</div>
</a>

<style>
	img {
		height: 180px;
		border-radius: 20px;
	}

	.flip-card {
		background-color: transparent;
		width: 300px;
		height: 200px;
		perspective: 1000px;
		border-radius: 10%;
	}

	.flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.6s;
		transform-style: preserve-3d;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		border-radius: 10%;
	}

	.flip-card:focus {
		outline: 0;
	}

	.flip-card:hover .flip-card-inner,
	.flip-card:focus .flip-card-inner {
		transform: rotateY(180deg);
	}

	.flip-card-front,
	.flip-card-back {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		border-radius: 10%;
	}

	.flip-card-front {
		background: linear-gradient(to left, #8d7792, #cea9da);
		color: black;
		z-index: 2;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 10%;
	}

	.flip-card-back {
		background: linear-gradient(to right, #8d7792, #cea9da);
		color: white;
		transform: rotateY(180deg);
		z-index: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h3 {
		font-size: 20px;
		font-family: Verdana, sans-serif;
		font-weight: bold;
		color: #fff;
	}
</style>
