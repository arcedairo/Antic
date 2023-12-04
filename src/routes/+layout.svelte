<script>
    import Navbar from '$lib/components/Navbar.svelte';
  import '../app.css'
  import '@fontsource/merriweather/700.css'
  import '@fontsource/merriweather/300.css'
  import '@fontsource/merriweather/400.css'
  import '@fontsource/varta'
  import '@fontsource/karla'
  import Carousel from '$lib/components/Carousel.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Responsive from '$lib/components/Responsive.svelte';
</script>

<div class="w-full min-h-screen">
	<div class="hidden lg:block"> 
  <Navbar />
  </div>

  <slot />
  
  <div class="hidden lg:block" >
  <Footer />
  </div>
  <div class="sm:hidden">
    <Responsive />
  </div>
  

</div>

<style lang="postcss" global>

</style>