<template>
  <main-layout>
    <loader :loading="loading">
      <div v-if="loadedDetailPage" class="d-flex flex-wrap signals signals-details w-100">
        <fieldset class="w-100 ">
          <!--signal type-->
          <signal-type :signal-type-name="signalInformation.type_value" :signal-type="signalInformation.type" />

          <div class="d-flex flex-wrap w-100">
            <div class="col-12 col-lg-7 col-xl-8">
              <!--signal exchange-->
              <signal-exchange :exchange-list="signalInformation.exchanges" :signal-type="signalInformation.type" />
              <!--signal header-->
              <signal-header :description="signalInformation.message" :open="signalInformation.opened_at"
                :close="signalInformation.closed_at" />
              <!--signal details-->
              <signal-details :entries-list="signalInformation.entries" :percent="signalInformation.percent"
                :amount="signalInformation.amount" :stop-loss="signalInformation.stop_loss"
                :risk="signalInformation.risk_value" :yield-number="signalInformation.yield"
                :time="signalInformation.time" :risk-reward="signalInformation.risk_reward"
                :state-value="signalInformation.status_value" :single-targets="signalInformation.targets" />
            </div>
            <div class="col-12 col-lg-5 col-xl-4 px-0 px-md-4 d-flex flex-column">
              <signal-analyzer :name="signalInformation.user_data.name" :score=" signalInformation.user_data.score"
                :rank="signalInformation.user_data.rank" :user-image="signalInformation.user_data.image" />
              <signal-chart :signal-entries="signalInformation.entries" :signal-targets="signalInformation.targets"
                :signal-stop="signalInformation.stop_loss" />
            </div>
          </div>
        </fieldset>
      </div>
    </loader>
  </main-layout>
</template>

<script>
import { userSignalSingleInfo } from "@/Service/Actions/Signal";
import SignalType from "./components/details/SignalType";
import SignalExchange from "./components/details/SignalExchange";
import SignalHeader from "./components/details/SignalHeader";
import SignalDetails from "./components/details/SignalDetails";
import SignalAnalyzer from "./components/details/SignalAnalyzer";
import SignalChart from "./components/details/SignalChart";

export default {
  name: "signalDetail",
  data() {
    return {
      signalInformation: {},
      loading: false,
      loadedDetailPage: false
    }
  },
  components: {
    SignalType,
    SignalExchange,
    SignalHeader,
    SignalDetails,
    SignalAnalyzer,
    SignalChart
  },
  computed: {
    getSignalRouteId() {
      return this.$route.params.id
    }
  },
  created() {
    this.getSignalSingleInfo()
  },
  methods: {
    async getSignalSingleInfo() {
      this.loading = true
      await userSignalSingleInfo(this.getSignalRouteId)
        .then(response => {
          this.signalInformation = response.data
          this.loading = false
          this.loadedDetailPage = true
        })
        .catch(error => {
          this.$store.dispatch('notification/showErrorsNotification', error.response.data.errors)
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>

</style>