<template>
  <loader :loading="loading">
    <div class="py-2">
      <div class="d-flex align-items-center justify-content-between">
        <h5 class="font-size-16 pt-2 pb-3 px-3 color-blue-2 mb-0">صرافی</h5>
        <i class="icon-font-arrow-down font-size-22 d-none"></i>
      </div>
      <div class="d-flex flex-column px-3">
        <div v-for="item in rows" :key="item.id" class="form-check mb-2">
          <input
            @change="changeSingleExchange(item)"
            class="form-check-input custom-control-input"
            type="checkbox"
            :value="item"
            id="check-sra-2"
          />
          <label class="form-check-label font-size-14 px-2" for="check-sra-2">
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
    this.getSignalExchanges();
  },
  methods: {
    async getSignalExchanges() {
      this.loading = true;
      await signalExtraData()
        .then((response) => {
          this.rows = response.data.exchanges;
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
    changeSingleExchange(selected) {
      let assinment = `exchanges,${selected.title}`;
      this.$emit("selectedExchange", assinment);
    },
  },
};
</script>
