<template>
  <multiSelect
    @select="getOtherSelected"
    v-model="selected"
    :options="other"
    label="name"
    track-by="id"
  />
</template>

<script>
import { OtherSelector } from "../../Config/GlassNode/OtherSelector";
export default {
  name: "ParentSelected",
  data() {
    return {
      rows: [],
      other: OtherSelector,
      selected: [
        {
          id: 1,
          name: "بیت کوین",
          value: "btc",
        },
      ],
    };
  },
  methods: {
    getOtherSelected(selected) {
      this.$emit("selectedOther", selected);
    },
  },
};
</script>
