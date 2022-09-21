<script>
/**
 * Stat component -- specify the widget icon, title and value.
 */
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    value: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    }
  }
};
</script>

<template>
  <div class="card mini-stats-wid">
    <div class="card-body">
      <div class="d-flex">
        <div class="flex-grow-1">
          <h4 class="mb-2">{{title}}</h4>
          <p class="mb-0">{{value}}</p>
        </div>

        <div class="avatar-sm align-self-center mini-stat-icon rounded-circle bg-primary">
          <span class="avatar-title">
            <i :class="`${icon} font-size-24`"></i>
          </span>
        </div>
      </div>
    </div>
    <!-- end card-body -->
  </div>
  <!-- end card -->
</template>