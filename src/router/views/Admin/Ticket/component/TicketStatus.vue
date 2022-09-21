<template>
  <material-select
      v-model="selected"
      :items="rows"
      label="وضعیت"
      @change="$emit('change', $event)"
      @open="update"
  ></material-select>
</template>

<script>
import {extraData} from "@/Service/Actions/Tickets";

export default {
  name: "TicketStatus",
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    showAll: {type: Boolean, default: true},
    value: {type: [String, Number], default: ''}
  },
  data() {
    return {
      loading: false,
      rows: [],
      selected: ''
    }
  },
  watch: {
    value(val) {
      this.selected = val
      this.checkUpdate()
    }
  },
  created() {
    this.selected = this.value
    this.checkUpdate()
  },
  methods: {
    update() {
      extraData()
          .then(response => {
            this.rows = response.data.status.map(u => ({
              name: u.title,
              value: u.id
            }))
          })
    },
    checkUpdate() {
      if (this.rows.length === 0) {
        this.update()
      }
    }
  }
}
</script>

<style scoped>

</style>