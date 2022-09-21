<template>
  <div dir="ltr" class="owl-theme">
    <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          v-for="image in images"
          :key="image.id"
      >
        <section
            class="holder-single-image-slide">
          <img
              style="border-radius: 15px"
              class="w-100"
              :src="require(`@/assets/images/slider/${image.name}`)"
              alt="">
        </section>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "RoundedSlider",
  props: {
    images: {
      type: Array,
      default: () => {
        return []
      },
    }
  }
}
</script>