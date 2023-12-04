<script>
   import Carousel from "$lib/components/Carousel.svelte";
   import Footer_mobile from "$lib/components/Footer_mobile.svelte"

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

<!-- Responsive-->
<section>
<section class="sm:hidden">
    <div class="bg-[url('/images/Hero_background.jpg')] w-[641px] h-[850px] bg-cover text-center text-white flex">
      
      <div class="space-y-6 px-20 pt-16">
      <div class="flex justify-between"> 
      <p class="text-white text-5xl font-bold tracking-wider">antic</p>
      <svg class="w-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"></path>
      </svg>

      </div> 
      <div class="space-y-6 pt-20">
      <p class="text-lg font-thin tracking-wider">HOME DESIGN</p>
      <p class="text-5xl font-heading font-thin leading-[70px]" >Elegance for Interiors & Exteriors</p>
      <p class="text-2xl font-heading font-thin">We provide everyone with modern, 
       trendy, quality furniture</p>
       <div class="flex items-center justify-center text-center pt-10">
           <svg class="text-white font-thin" width="75" height="75" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.75745 10.5858L9.17166 9.17154L12.0001 12L14.8285 9.17157L16.2427 10.5858L12.0001 14.8284L7.75745 10.5858Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" fill="currentColor" /></svg>
       </div>
       </div>



     </div>
    </div>
   </section>
   
   <section class="sm:hidden">
       <div class="w-[641px] text-primary items-center px-20 space-y-7 py-20 bg-peach">
        <h1 class="text-brown2 text-5xl font-heading font-medium leading-[60px]">We stay by your <br>side to design your projects</h1>
        <div class="flex text-karla text-primary text-xl font-bold mt-8 tracking-widest">
           <a href="/">Find out more</a>
           <img src="/icons/Right.svg" alt="right icon"/>
       </div>
       <div>
       <h3 class="text-primary text-sans font-semibold text-4xl">Our Advices</h3>
       <p class="text-sans font-normal text-2xl leading-9 text-brown2 mt-3">
          What if you took advantage of this rather special period to rethink your interior? You spend more time at home so you might as well feel good there.
       </p>
       </div>
       <div>
       <h3 class="text-primary text-sans font-semibold text-4xl">Click and Collect</h3>
       <p class="text-sans font-normal text-2xl leading-9 text-brown2 mt-3">Adapted and contactless. Free from € 200 of purchases in stores offering the service.</p>
       </div>
       <div>
       <h3 class="text-primary text-sans font-semibold text-4xl ">Conception Service</h3>
       <p class="text-sans font-normal text-2xl leading-9 text-brown2 mt-3">
               Personalized service with an expert advisor for your interior and exterior decoration or layout projects. 
       </p> 
       </div>
       <div>
       <h3 class="text-primary text-sans font-semibold text-4xl">Installation Service</h3>
           <p class="text-sans font-normal text-2xl leading-9 text-brown2 mt-3">Our furniture packaged in flat packs are designed for easy assembly. But you can call on our partner.</p>
       </div>
       </div>
   
   </section>
   
   
   <section class="sm:hidden">
       <div class="w-[641px] text-primary items-center px-20 space-y-6 py-20">
        <h1 class="text-onbackground  text-5xl font-heading font-medium leading-[60px]">Be aware of the latest trends</h1>
        <p class="text-sans font-normal text-2xl leading-9 text-brown2 mt-3">Stay informed of new trends, but also of our various offers.</p>
        <div class="flex text-karla text-primary text-xl font-bold mt-8 tracking-widest">
           <a href="/">Learn more</a>
           <img src="/icons/Right.svg" alt="right icon"/>
       </div>
       <div>
           <label for="email" class="hidden mb-2 text-base">Email address</label>
           <input class="block p-2.5 pl-4 w-full font-sans text-brown2 text-lg bg-peach bg-opacity-30" placeholder="email@address.com" type="email" id="email">
       </div>
       <div>
           <button type="submit" class="py-2.5 px-5 w-11/12 text-xl font-karla font-medium text-center text-white cursor-pointer bg-taupe">Subscribe</button>
       </div>
       <div class="pt-10 space-y-10" >
       <h3 class="text-taupe font-heading font-medium text-5xl">Inspirations</h3>
       <p class="text-sans font-normal text-2xl leading-9 text-brown2 mt-3">
           Our experts are keen to stay on top of trends in order to offer you new inspirations for your interior and exterior every day. Remember that to inspire you we have to inspire ourselves and we want to share that with you.</p>
       </div>
       </div>
   </section>
   
   <section class="sm:hidden" >
       <div class="w-[640px] pb-12">
       <Carousel {images}/>
       <slot />
       </div>
   </section>
   
   <section class="sm:hidden">
       <Footer_mobile />
       <slot />
   </section>
</section>