<template>
  <loader :loading="loading">
    <div class="border-bottom border-bottom-color-blue-1 py-2">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="font-size-16 py-3 px-3 color-blue-2 mb-0">نوع سیگنال</h5>
        <i class="icon-font-arrow-down font-size-22 d-none"></i>
      </div>
      <div class="d-flex flex-column px-3">
        <div v-for="item in rows" :key="item.id" class="form-check mb-2">
          <input
            @change="changeSingleType(item)"
            class="form-check-input custom-control-input"
            type="checkbox"
            :value="item.id"
            id="check-long-1"
          />
          <label class="form-check-label font-size-14 px-2" for="check-long-1">
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
  name: "signalType",
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
          this.rows = response.data.types;
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
    //passing selected single type to parent
    changeSingleType(selected) {
      let assinment = `type,${selected.id}`;
      this.$emit("selectedType", assinment);
    },
  },
};
</script>

<style scoped></style>
