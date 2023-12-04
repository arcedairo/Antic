
<script context="module" lang="ts">
    import Carousel from "$lib/components/Carousel.svelte";
	import Footer_mobile from "$lib/components/Footer_mobile.svelte"


	export const prerender = true

let images = [
  {title: 'Slide1', src: '/images/slide1.png'},
  {title: 'Slide2', src: '/images/slide2.png'},
  {title: 'Slide3', src: '/images/slide3.png'},
  {title: 'Slide4', src: '/images/slide4.png'},
  {title: 'Slide1', src: '/images/slide5.png'},
  {title: 'Slide2', src: '/images/slide6.png'},
  {title: 'Slide3', src: '/images/slide7.png'},
  {title: 'Slide4', src: '/images/slide8.png'},
]

</script>

<section class="hidden lg:block">
<section class="-mt-32 border-b-[1px]"> 
  <div class="flex items-center bg-peach">
	<div class="flex flex-col w-1/2">
        <div class="flex flex-col mx-36 mt-4">
			<span class="label text-sm text-primary font-sans font-semibold tracking-wider">HOME DESIGN</span>
            <h1 class="text-primary text-5xl font-heading font-thin leading-[70px] mt-8 mb-7">Elegance for Interiors & Exteriors</h1>
			<p class="text-brown2 font-sans font-light text-[22px] leading-[30.8px]">We provide everyone with modern, trendy, quality furniture</p>
			 <div class="flex mt-10">
				<a href="/">
				<img src="/icons/scroll-down.svg" alt="scroll" width={50} height={50} />
			    </a>
			 </div>
		</div>
	</div>
   <div class="flex w-1/2 bg-[url('/images/Hero_background.jpg')] w-[683px] h-[830px] bg-cover"> 
   </div>
  </div>
</section>

<section class="border-b-[1px] hidden lg:block">
  <div class="flex bg-peach py-20">
	<div class="flex flex-col w-1/2">
        <div class="flex flex-col mx-36">
            <h1 class="text-brown2 text-5xl font-heading font-light leading-[60px]">We stay by your side to design your projects</h1>
		</div>

		<div class="flex mx-36 text-karla text-primary font-bold mt-8 tracking-widest">
			<a href="/">Find out more</a>
			<img src="/icons/Right.svg" alt="right icon"/>
		</div>
	</div>
   
	<div class="flex flex-col w-1/2">
	  <div class="grid grid-cols-2 mt-3">
		<div class="flex flex-col ml-4 mr-14 space-y-3">
             <h3 class="text-primary text-sans font-semibold text-2xl">Our Advices</h3>
			 <p class="text-sans font-normal text-lg leading-6 text-brown2">
				What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.
			 </p>
		</div>
		<div class="flex flex-col mr-20 space-y-3">
			<h3 class="text-primary text-sans font-semibold text-2xl">Click and Collect</h3>
			<p class="text-sans font-normal text-lg leading-6 text-brown2">Adapted and contactless. Free from € 200 of purchases in stores offering the service.</p>
	   </div>
	  </div>

	  <div class="grid grid-cols-2 mt-8">
		<div class="flex flex-col ml-4 mr-14 space-y-3">
			<h3 class="text-primary text-sans font-semibold text-2xl">Conception Service</h3>
			<p class="text-sans font-normal text-lg leading-6 text-brown2">
				Personalized service with an expert advisor for your interior and exterior decoration or layout projects. 
			</p>
		</div>
		<div class="flex flex-col mr-20 space-y-3">
			<h3 class="text-primary text-sans font-semibold text-2xl">Installation Service</h3>
			<p class="text-sans font-normal text-lg leading-6 text-brown2">Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.</p>
		</div>
	</div>
	</div>

  </div>

</section>

<section class="hidden lg:block">
 <div class="flex pb-10">
	<div class="flex flex-col w-1/2 space-y-3 pt-16">
		<div class="flex flex-col w-full mx-36 space-y-3">
            <h1 class="text-onbackground text-[34px] font-heading font-light leading-10">Be aware of the latest trends</h1>
		    <p class="font-sans text-brown font-normal text-lg leading-6">Stay informed of new trends, but also of our various offers.</p>
		</div>

		<div class="flex mx-36 text-karla text-primary font-bold tracking-widest">
			<a href="/">Learn more</a>
			<img src="/icons/Right.svg" alt="right icon"/>
		</div>
	</div>

	<div class="flex flex-col w-1/2 mt-24 items-center">
		<form action="#">
			<div class="items-center mx-auto max-w-screen-sm sm:flex sm:space-y-0 space-x-4">
				<div class="relative w-72">
					<label for="email" class="hidden mb-2 text-sm">Email address</label>
					<input class="block p-2.5 pl-4 w-full font-sans text-brown2 text-lg bg-peach bg-opacity-30" placeholder="email@address.com" type="email" id="email">
				</div>
				<div>
					<button type="submit" class="py-2.5 px-5 w-full text-lg font-karla font-medium text-center text-white cursor-pointer bg-taupe">Subscribe</button>
				</div>
			</div>
		</form>
	</div>

 </div>
</section>

<section class="flex flex-col items-center mt-4 hidden lg:block">
<Carousel {images}/>
<slot />
</section>

<section class="mt-10 pb-16 border-b-[2px] hidden lg:block">
  <div class="flex">
	<div class="flex flex-col w-1/3 items-center">
		<h1 class="text-taupe text-[43px] font-heading font-light leading-10 ml-36">Inspirations</h1>
	</div>

	<div class="flex flex-col w-1/3 items-center mx-28">
		<p class="text-sans font-normal text-lg leading-6 text-brown2">
			Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you. 
		</p>
	</div>

	<div class="flex flex-col w-1/3">
	     <div class="flex gap-2.5 ml-20">
			<a href="/">
				<img src="/icons/Leftarrows.svg" alt="left_arrow" width={40} height={40} />
			</a>
			<a href="/">
				<img src="/icons/Rightarrows.svg" alt="right_arrow" width={40} height={40} />
			</a>
		</div>
	</div>
  </div>
</section>
</section>