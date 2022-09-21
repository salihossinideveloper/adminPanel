<template>
  <div
    class="signal-chart d-flex flex-column position-relative bgc-blue-40 box-shadow-1 border-radius-10 px-4 py-3 w-100 mt-5 mb-3"
  >
    <h4
      class="color-black-2 font-size-20 fw-bold border-bottom border-bottom-color-blue-8 pb-2 d-inline-flex pe-3"
    >
      نمودار سیگنال
    </h4>
    <div class="chart position-relative">
      <div class="chart-line">
        <svg
          class="w-100"
          viewBox="0 0 354 318"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.454415"
            x2="0.454415"
            y2="307.034"
            stroke="#AAA6A6"
            stroke-width="0.908829"
          />
          <path
            d="M354 308.405L0.00094986 308.405"
            stroke="#AAA6A6"
            stroke-width="0.908829"
          />
          <line
            x1="17.9227"
            y1="318"
            x2="17.9227"
            y2="307.035"
            stroke="#AAA6A6"
            stroke-width="1.81766"
          />
          <line
            x1="115.837"
            y1="318"
            x2="115.837"
            y2="307.035"
            stroke="#AAA6A6"
            stroke-width="1.81766"
          />
          <line
            x1="213.751"
            y1="318"
            x2="213.751"
            y2="307.035"
            stroke="#AAA6A6"
            stroke-width="1.81766"
          />
          <line
            x1="311.665"
            y1="318"
            x2="311.665"
            y2="307.035"
            stroke="#AAA6A6"
            stroke-width="1.81766"
          />
        </svg>
      </div>
      <div
        class="chart-items d-flex flex-column justify-content-center position-absolute"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignalChart",
  props: {
    signalEntries: {
      type: Array,
      default: () => {
        return [];
      },
    },
    signalTargets: {
      type: Array,
      default: () => {
        return [];
      },
    },
    signalStop: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      targets: [],
      entries: [],
    };
  },
};
</script>

<style scoped></style>
