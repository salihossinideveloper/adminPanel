<template>
  <material-select
    v-model="selected"
    :items="rows"
    label="وضعیت کاربر"
    @change="$emit('change', $event)"
    @open="checkUpdate"
  ></material-select>
</template>

<script>
import { getAllExtraData } from "../Service/Actions/global";

export default {
  name: "UserStatus",
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
      await getAllExtraData().then((response) => {
        this.rows = response.data.user_status.map((u) => ({
          name: u.title,
          value: u.id,
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
