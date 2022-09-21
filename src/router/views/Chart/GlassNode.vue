<template>
  <main-layout>
    <section style="height: 100vh">
      <!-- header top bar -->
      <section class="crypto-header-el">
        <section class="row">
          <section class="col-md-4">
            <label class="form-check-label mb-2 pre-5">دسته والد</label>
            <parent-selected @selectedParent="getSelectedParentId" />
          </section>
          <section class="col-md-4">
            <label class="form-check-label mb-2 pre-5">دسته فرزند</label>
            <child-selected @selectedChild="getSelectedChild" :dis="childSelector" :parent-selected="parentSelectedId"/>
          </section>
          <section class="col-md-4">
            <label class="form-check-label mb-2 pre-5">نوع چارت</label>
            <other-selected @selectedOther="getSelectedOther" :current-level="level" />
          </section>
        </section>
      </section>
      <!-- chart element -->
      <section class="crypto-chart-bottom">
        <loader :loading="loadingChart">
          <chart-creator :chart-series="chartData" />
        </loader>
      </section>
    </section>
  </main-layout>
</template>

<script>
import ParentSelected from "./components/GlassNode/ParentSelected.vue";
import ChildSelected from "./components/GlassNode/ChildSelected.vue";
import OtherSelected from "./components/GlassNode/OtherSelected.vue";
import ChartCreator from "./components/ChartCreator.vue";
import { getGlassNode } from "@/Service/Actions/Chart";
export default {
  name: "GlassNode",
  components: {
    ParentSelected,
    ChildSelected,
    OtherSelected,
    ChartCreator,
  },
  data() {
    return {
      chartData: [],
      chartSelector: {
        part1: "addresses",
        part2: "active_count",
        symbol: "btc",
      },
      parentSelectedId: 1,
      childSelector: false,
      loadingChart: false,
    };
  },
  created() {
    this.getChartData();
  },
  methods: {
    //parent
    getSelectedParentId(selected) {
      this.controllChangeChildState(false);
      this.chartSelector.part1 = selected.value;
      this.parentSelectedId = selected.id;
      this.controllChangeChildState(true);
    },
    //child
    getSelectedChild(selected) {
      this.chartSelector.part2 = selected.value;
      this.getChartData();
    },
    getSelectedOther(selected) {
      this.chartSelector.symbol = selected.value;
      this.getChartData();
    },
    //disbled true or false child selector
    controllChangeChildState(state) {
      this.childSelector = state;
    },
    //action
    async getChartData() {
      this.chartData = []
      this.loadingChart = true;
      await getGlassNode(this.chartSelector).then((response) => {
        this.generateChartSeries(response.data);
      })
      .catch(error=>{
        this.$store.dispatch('notification/showErrorsNotification', error.response.data.errors)
      })
      this.loadingChart = false;
    },
    generateChartSeries(data) {
      Object.entries(data).forEach((entry, index) => {
        const [key, value] = entry;
        this.chartData.push({
          id: key,
          name: key,
          showInNavigator: true,
          yAxis: index,
          data: value,
        });
      });
    },
  },
};
</script>
