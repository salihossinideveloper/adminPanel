<template>
  <multi-select
    @select="selectedSingleCoin"
    v-model="selected"
    :options="rows"
    :close-on-select="true"
    :preserve-search="true"
    placeholder="ارز مورد نظر را انتخاب نمایید"
    label="name"
    track-by="name"
  >
  </multi-select>
</template>

<script>
import { list } from "@/Service/Actions/Coins";
export default {
  name: "Coins",
  data() {
    return {
      rows: [],
      selected: [],
      coinFilter: {
        start: "",
        limit: 100,
      },
    };
  },
  props: {
    coinSelected: {
      type: Number,
    },
  },
  created() {
    this.update();
  },
  methods: {
    async update() {
      await list(this.coinFilter).then((response) => {
        this.rows = response.data;
        if (this.coinSelected) {
          this.findCoin(this.coinSelected);
        }
      });
    },
    //passing selected conin to parent
    selectedSingleCoin(selected) {
      this.$emit("selectCoin", selected);
    },
    //search and find is selected coin
    findCoin(val) {
      this.selected= this.rows.filter((s) => s.id === val);
    },
  },
};
</script>

<style scoped></style>
