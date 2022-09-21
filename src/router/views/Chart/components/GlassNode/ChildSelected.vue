<template>
  <multiSelect
    @select="getSelectedChild"
    v-model="selected"
    :options="rows"
    label="name"
    track-by="id"
  />
</template>

<script>
import { ChildSelector } from "../../Config/GlassNode/ChildSelector";
export default {
  name: "ParentSelected",
  data() {
    return {
      rows: [],
      selected: [
        {
          id: 1,
          parentId: 1,
          name: "آدرسهای فعال",
          value: "active_count",
        },
      ],
    };
  },
  props: {
    parentSelected: {
      type: Number,
      default: 1,
    },
    currentLevel: {
      type: Number,
      default: undefined,
    },
  },
  watch: {
    parentSelected: {
      immediate: true,
      handler(val) {
        if (val) {
          this.setChildDataToSelectedBox(val);
        }
      },
    },
    currentLevel: {
      immediate: true,
      handler(val) {
        console.log(val, "val child");
        if (val !== 1) {
          this.selected = [];
        }
      },
    },
  },
  methods: {
    setChildDataToSelectedBox(val) {
      this.rows = ChildSelector.filter((c) => c.parentId === val);
    },
    getSelectedChild(selected) {
      this.$emit("selectedChild", selected);
    },
  },
};
</script>
