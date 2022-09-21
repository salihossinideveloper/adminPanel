<template>
  <material-select
    v-model="selected"
    :items="rows"
    @change="$emit('change', $event)"
    @open="checkUpdate"
  ></material-select>
</template>

<script>
import { signalExtraData } from "@/Service/Actions/Signal";

export default {
  name: "SignalType",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    showAll: { type: Boolean, default: true },
    value: { type: [String, Number], default: "" },
  },
  data() {
    return {
      loading: false,
      rows: [],
      selected: "",
    };
  },
  watch: {
    value(val) {
      this.selected = val;
      this.checkUpdate();
    },
  },
  created() {
    this.selected = this.value;
    this.checkUpdate();
  },
  methods: {
    async update() {
      await signalExtraData().then((response) => {
        this.rows = response.data.types.map((t) => ({
          name: t.title,
          value: t.id,
        }));
      });
    },
    checkUpdate() {
      if (this.rows.length === 0) {
        this.update();
      }
    },
  },
};
</script>

<style scoped></style>
