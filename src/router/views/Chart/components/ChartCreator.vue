<template>
  <section v-if="isLoaded" :key="id">
    <vue-high-chart
      class="chart"
      :highcharts="Highcharts"
      :options="options"
      ref="drilldownChart"
    />
  </section>
</template>

<script>
import Highcharts from "highcharts/highstock";
export default {
  props: {
    chartSeries: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  watch: {
    //listen is chart series is data and pass to func assign to chart series option
    chartSeries: {
      immediate: true,
      handler(val) {
        if (val) {
          this.assignmentChartSeries(val);
        }
      },
    },
  },
  data() {
    return {
      isLoaded: false,
      id: 1,
      Highcharts: Highcharts,
      options: {
        rangeSelector: {
          selected: 2,
        },
        title: {
          text: "Chart",
        },
        yAxis: [
          {
            //--- Primary yAxis
            title: {
              text: "Value",
            },
            opposite: false,
          },
          {
            //--- Secondary yAxis
            title: {
              text: "Price",
            },
          },
        ],
        plotOptions: {
          series: {
            showInLegend: true,
          },
        },
        colors: [
          "#2f7ed8",
          "#caab5a",
          "#8bbc21",
          "#FF0000",
          "#1aadce",
          "#492970",
          "#f28f43",
          "#77a1e5",
          "#c42525",
          "#a6c96a",
        ],
        tooltip: {
          shape: "square",
          headerShape: "callout",
          borderWidth: 0,
          shadow: false,
          positioner: function (width, height, point) {
            var chart = this.chart,
              position;

            if (point.isHeader) {
              position = {
                x: Math.max(
                  // Left side limit
                  chart.plotLeft,
                  Math.min(
                    point.plotX + chart.plotLeft - width / 2,
                    // Right side limit
                    chart.chartWidth - width - chart.marginRight
                  )
                ),
                y: point.plotY,
              };
            } else {
              position = {
                x: point.series.chart.plotLeft,
                y: point.series.yAxis.top - chart.plotTop,
              };
            }

            return position;
          },
        },
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 800,
              },
              chartOptions: {
                rangeSelector: {
                  inputEnabled: false,
                },
              },
            },
          ],
        },
        series: [],
      },
    };
  },
  methods: {
    assignmentChartSeries(data) {
      this.options.series=[]
      this.loading = true;
      data.map((item) => {
        this.options.series.push(item);
      });
      console.log(this.options.series, "this.options.series");
      //start generate chart
      this.id += 10;
      this.isLoaded = true;
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.chart {
  height: 80vh;
}
</style>
