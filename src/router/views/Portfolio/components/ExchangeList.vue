<template>
    <section class="holder-exchange">
        <material-select v-model="selected" :items="list" @change="$emit('change', $event)" />
    </section>
</template>
  
<script>
import { Exchange } from "./Config";

export default {
    name: "Categories",
    model: {
        prop: "value",
        event: "change",
    },
    props: {
        value: { type: [String, Number], default: "" },
    },
    data() {
        return {
            list: Exchange,
            selected: "",
        };
    },
    watch: {
        value(val) {
            this.selected = val;
        },
    },
    created() {
        this.selected = this.value;
    },
};
</script>
  
<style scoped>

</style>
  