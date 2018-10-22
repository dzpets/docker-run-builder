<script>
import Vue from "vue";
import AppGroup from "./AppGroup.vue";
import AppKeyValueList from "./AppKeyValueList.vue";

const getLast = arr => arr[arr.length - 1];

export default {
  props: {
    ports: Array
  },
  methods: {
    buildPort() {
      return {
        host: null,
        container: null
      };
    }
  },
  components: {
    AppGroup,
    AppKeyValueList
  }
};
</script>

<template>
  <app-group header="Ports">
    <app-key-value-list
      :items="ports"
      :build-new="buildPort"
      key-field="host"
      value-field="container"
      @add:item="$emit('add:port', $event)"
      @remove:item="$emit('remove:port', $event)"
    />
  </app-group>
</template>
