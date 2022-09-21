<template>
  <div class="border-bottom border-bottom-color-blue-38 pt-3">
    <h4
      class="color-black-2 font-size-20 fw-bold border-bottom border-bottom-color-blue-8 pb-2 d-inline-flex pe-3"
    >
      وضعیت
    </h4>
    <ul class="d-flex flex-column px-0 mt-2">
      <li class="pe-2 mb-1">
        <span class="pe-2 font-size-16 color-black">بسته شدن:</span>
        <span class="pe-2 font-size-16 color-black">{{ close ? close : "-" }}</span>
      </li>
      <li class="pe-2 mb-1">
        <span class="pe-2 font-size-16 color-black">باز شدن:</span>
        <span class="pe-2 font-size-16 color-black">{{ open ? open : "-" }}</span>
      </li>
      <li v-if="false" class="pe-2 mb-1">
        <span class="pe-2 font-size-16 color-black">ارسال سیگنال:</span>
        <span class="pe-2 font-size-16 color-black">_____</span>
      </li>
      <li class="pe-2 mb-1">
        <span class="pe-2 font-size-16 color-black">توضیحات:</span>
        <span class="pe-2 font-size-16 color-black">{{ description }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SignalHeader",
  props: {
    description: {
      type: String,
      default: "",
    },
    open: {
      type: String,
      default: "",
    },
    close: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped></style>
