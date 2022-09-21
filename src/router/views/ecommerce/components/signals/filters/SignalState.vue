<template>
  <loader :loading="loading">
    <div class="border-bottom border-bottom-color-blue-1 py-2">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="font-size-16 py-3 px-3 color-blue-2 mb-0">وضعیت سیگنال</h5>
        <i class="icon-font-arrow-down font-size-22 d-none"></i>
      </div>
      <div class="d-flex flex-column px-3">
        <div v-for="item in rows" :key="item.id" class="form-check mb-2">
          <input
            @change="changeSingleState(item)"
            class="form-check-input custom-control-input"
            type="checkbox"
            :value="item"
            id="check-long-2"
          />
          <label class="form-check-label font-size-14 px-2" for="check-long-2">
            {{ item.title }}
          </label>
        </div>
      </div>
    </div>
  </loader>
</template>

<script>
import { signalExtraData } from "@/Service/Actions/Signal";

export default {
  name: "SignalState",
  data() {
    return {
      rows: [],
      loading: false,
    };
  },
  created() {
    this.getSignalTypes();
  },
  methods: {
    async getSignalTypes() {
      this.loading = true;
      await signalExtraData()
        .then((response) => {
          this.rows = response.data.states;
          this.loading = false;
        })
        .catch((error) => {
          this.$store.dispatch(
            "notification/showErrorsNotification",
            error.response.data.errors
          );
          this.loading = false;
        });
    },
    changeSingleState(selected) {
      let assinment = `state,${selected.title}`;
      this.$emit("selectedStatus", assinment);
    },
  },
};
</script>

<style scoped></style>
