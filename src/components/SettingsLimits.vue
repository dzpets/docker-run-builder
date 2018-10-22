<script>
import AppGroup from "./AppGroup.vue";

export default {
  props: {
    settings: Object
  },
  components: {
    AppGroup
  }
};
</script>

<template>
  <app-group header="Limits">
    <label for="memory">Memory</label>
    <input
      type="text"
      id="memory"
      v-model="settings.memory">
    <label for="memoryReservation">Memory Reservation</label>
    <input
      type="text"
      id="memoryReservation"
      v-model="settings.memoryReservation">
    <label for="cpus">CPUs</label>
    <input
      type="text"
      id="cpus"
      v-model="settings.cpus">
    <label for="cpuSet">CPU Set</label>
    <input
      type="text"
      id="cpuSet"
      v-model="settings.cpuSet">
  </app-group>
</template>
