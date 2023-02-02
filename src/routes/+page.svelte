<script>
	import Contact from '../lib/components/Contact.svelte';

	export let data;
	let { Mainprojects } = data;
</script>

<!-- -------------------HEAD-------------------------- -->
<head>
	<title>Website Designer and Frontend Developer from Sri Lanka</title>
</head>
<main>
	<!-- -------------------hero-------------------------- -->
	<section class="heroSection">
		<h1>website designer / frontend developer</h1>
		<br /><span class="location"><p>from sri lanka</p></span>

		<div class="socialMediaLinks">
			<a href="https://www.behance.net/avidu" target="blank">Behance</a>
			<a href="https://github.com/AviduDev" target="blank">GitHub</a>
			<a href="https://www.linkedin.com/in/avidu-web-designer-from-sri-lanka/" target="blank"
				>LinkedIn</a
			>
		</div>

		<div class="available"><p>Available</p></div>
	</section>

	<!-- -------------------description-------------------------- -->
	<section class="descriptionSection">
		<div class="description">
			<p>
				<span
					><a
						target="blank"
						href="https://www.google.com/search?q=ayubowan+meaning&sxsrf=AJOqlzWpKU1Kazqu3J2it98iY0hsKGMd8A%3A1675157357369&ei=bd_YY52PFsSZseMP_46I6AQ&oq=ayubowan&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQARgAMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgoIABBHENYEELADMgcIABCwAxBDMgcIABCwAxBDMgcIABCwAxBDMgcIABCwAxBDMg0IABDkAhDWBBCwAxgBMg0IABDkAhDWBBCwAxgBMg0IABDkAhDWBBCwAxgBMg8ILhDUAhDIAxCwAxBDGAIyEgguEMcBEK8BEMgDELADEEMYAjISCC4QxwEQrwEQyAMQsAMQQxgCMg8ILhDUAhDIAxCwAxBDGAJKBAhBGABKBAhGGAFQAFgAYIYPaAFwAXgAgAEAiAEAkgEAmAEAyAETwAEB2gEGCAEQARgJ2gEGCAIQARgI&sclient=gws-wiz-serp"
						>ආයුබෝවන්</a
					></span
				> — I’m Avidu Sampath, a freelance Website Designer and Front-end Developer from Sri Lanka who
				has been involved in cutting-edge designs and concepts for fashion and luxury brands in the past
				9 years. based in Milan — available worldwide
			</p>
		</div>
		<div class="attitude"><p>N0545 E0125454</p></div>
	</section>

	<!-- -------------------services-------------------------- -->
	<section class="srvSection">
		<div class="srvContainer">
			<span class="serviceIcon">⚡</span>
			<a href="/">Website designing</a>
		</div>
		<div class="srvContainer">
			<span class="serviceIcon">⚡</span>
			<a href="/">front-end development</a>
		</div>
		<div class="srvContainer">
			<span class="serviceIcon">⚡</span>
			<a href="/">graphic designing</a>
		</div>
		<div class="srvContainer">
			<span class="serviceIcon">⚡</span>
			<a href="/">domain names</a>
		</div>
		<div class="srvContainer">
			<span class="serviceIcon">⚡</span>
			<a href="/">other services</a>
		</div>
	</section>

	<!-- -------------------projects-------------------------- -->
	<section class="projectSection">
		<h2>projects</h2>
		<div class="projectContainer">
			<div class="project">
				<div class="projectDes">
					<div class="projectTtl"><h3>project title</h3></div>
					<div class="projectDetails">
						<p class="prjItm">Type</p>
						<p class="prjItm">Finished</p>
						<p class="prjItm">Year</p>
					</div>
				</div>
				<div class="projectImg">
					<img
						class="projectImage"
						src="https://res.cloudinary.com/avidu/image/upload/v1656003940/cld-sample-5.jpg"
						alt="project title"
					/>
				</div>
			</div>
		</div>

		<div class="projectDes">
			<div class="description">
				<p>
					Im Avidu Sampath, a freelance Website Designer and Front-end Developer from Sri Lanka who
					has been involved in cutting-edge designs and concepts for fashion and luxury brands in
					the past 9 years. based in Milan — available worldwide
				</p>
			</div>
			<a href="/" class="allproject"><button>ALL PROJECTS</button></a>
		</div>
	</section>

	<section class="processSec">
		<h2>the process</h2>

		<div class="processContainer">
			<div class="process">
				<div class="processTtl">
					<h3 class="processNum">1</h3>
					<h3 class="processTxt">initial discussion</h3>
				</div>
				<div class="processDes">
					<p class="processDesTxt">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, porro.
					</p>
					<p class="processDesRgt">FREE</p>
				</div>
			</div>
		</div>
	</section>

	<!-- -------------------contact-------------------------- -->

	<section class="contactSection">
		<Contact />
	</section>
</main>

<!-- -------------------TEST-------------------------- -->
<style>
	/* ---------------------hero----------------- */
	.heroSection {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #012a4a;
		height: 100vh;
		position: relative;
		background-color: #ddfdfe;
		border-radius: 2vw;
	}

	.location {
		font-family: 'sora';
		font-size: 3vw;
		margin: 0;
		padding: 0;
	}

	.sec2 {
		height: 100vh;
		background-color: rgb(217, 255, 194);
	}

	.socialMediaLinks {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-around;
		position: absolute;
		bottom: 30vw;
	}

	.available {
		position: absolute;
		left: 1vw;
		bottom: 1vw;
		background-color: #007200;
		color: #ddfdfe;
		padding: 1vw;
		border-radius: 500px;
	}

	.descriptionSection {
		display: flex;
		flex-direction: column;
		margin: 5vw 1vw 5vw 1vw;
		color: #012a4a;
	}

	.description {
		max-width: 80%;
	}

	.attitude {
		align-self: flex-end;
		margin-top: 3vw;
	}

	/* ---------------------service----------------- */
	.srvSection {
		background-color: #feeddd;
		border-radius: 2vw;
		padding: 2vw 0 2vw 0;
		margin: 5vw 0 5vw 0;
	}

	.srvContainer {
		display: flex;
		align-items: center;
		color: #bc3908;
		margin: 2vw 0 2vw 0;
		font-family: 'oswald';
	}

	.srvContainer a {
		font-family: 'oswald';
		font-size: 10vw;
		text-transform: uppercase;
	}
	.serviceIcon {
		font-size: 10vw;
	}

	/* ---------------------projects----------------- */
	.projectImage {
		max-width: 100%;
		border-radius: 2vw;
	}

	.projectDetails {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.projectDes {
		display: flex;
		flex-direction: column;
		margin: 5vw 1vw 5vw 1vw;
		color: #10451d;
	}

	.description {
		max-width: 80%;
	}

	.allproject {
		align-self: flex-end;
		margin-top: 3vw;
	}

	/* ---------------------process----------------- */

	.processContainer {
		border-radius: 2vw;
		background-color: #ffdbea;
		padding: 2vw 1vw 2vw 1vw;
		margin: 5vw 1vw 5vw 1vw;
	}
	.process {
		display: flex;
		flex-direction: column;
		color: #bd004f;
	}

	.processTtl {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.processDes {
		display: flex;
		flex-direction: column;
	}

	.processDesTxt {
		width: 80%;
	}

	.processDesRgt {
		align-self: flex-end;
	}

	/* --------------------cotact------------------ */
	.contactSection {
		margin: 5vw 1vw 5vw 1vw;
	}
</style>
