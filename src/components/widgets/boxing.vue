<template>
  <router-link :to="linkPath">
  <section class="card-wrapper d-flex flex-column point ">
     <section class="card-wrapper__image justify-content-center align-items-center">
       <img
           style="width: 100%"
           class="pt-1"
           :src="require(`@/assets/images/svg/dashboard/${image}`)"
           :alt="title">
     </section>
     <section
         class="card-wrapper__title d-flex justify-content-center align-items-center font-size-20">
       {{title}}
     </section>
  </section>
  </router-link>
</template>

<script>
export default {
  name: "boxing",
  props: {
    title: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    linkPath:{
      type:String,
      default:""
    }
  }
}
</script>

<style scoped>

</style>