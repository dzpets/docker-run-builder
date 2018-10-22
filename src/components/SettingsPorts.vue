<script>
import Vue from 'vue';
import AppGroup from "./AppGroup.vue";

const buildPort = () => ({
  host: null,
  container: null
});

const getLast = (arr) => arr[arr.length - 1];

export default {
  props: {
    ports: Array
  },
  data: () => ({
    newPort: buildPort()
  }),
  methods: {
    onNewPortChanged: function(side) {
      this.$emit("add:port", this.newPort);
      this.newPort = buildPort();
      Vue.nextTick(() => getLast(this.$refs[`${side}Ports`]).focus());
    },
    onPortChanged: function (port, index) {
      if (!port.host && !port.container) {
        this.$emit("remove:port", index);
      }
    }
  },
  components: {
    AppGroup
  }
};
</script>

<template>
  <app-group header="Ports">
    <div v-for="(port, index) of ports" :key="index">
      <input
        ref="hostPorts"
        type="number"
        min="0"
        max="65535"
        v-model.number="port.host"
        @input="onPortChanged(port, index)">
      <input
        ref="containerPorts"
        type="number"
        min="0"
        max="65535"
        v-model.number="port.container"
        @input="onPortChanged(port, index)">
    </div>
    <div>
      <input
        type="number"
        min="0"
        max="65535"
        v-model.number="newPort.host"
        @input="onNewPortChanged('host')">
      <input
        type="number"
        min="0"
        max="65535"
        v-model.number="newPort.container"
        @input="onNewPortChanged('container')">
    </div>
  </app-group>
</template>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
