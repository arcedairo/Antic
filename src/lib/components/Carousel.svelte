<script lang="ts">
 type ImageType = {
   title: string
   src: string
 }

 export let images: ImageType[]
</script>

<ul class="flex overflow-hidden gap-5 snap-x snap-mandatory">
{#each images as {title, src}}
  <li class="shrink-0 snap-center">
     <img {title} {src} alt={title}/>
  </li>
{/each}
</ul>