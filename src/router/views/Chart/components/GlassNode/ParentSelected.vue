<template>
  <multiSelect
    @select="getSelectedParent"
    v-model="selected"
    :options="parentData"
    :close-on-select="true"
    :clear-on-select="true"
    label="name"
    track-by="id"
  />
</template>

<script>
import { ParentSelector } from "../../Config/GlassNode/ParentSelector";
export default {
  name: "ParentSelected",
  data() {
    return {
      rows: [],
      parentData: ParentSelector,
      selected: [
        {
          id: 1,
          name: "آدرسها",
          value: "addresses",
        }
      ],
    };
  },
  methods: {
    getSelectedParent(selected) {
      this.$emit("selectedParent", selected);
    },
  },
};
</script>
