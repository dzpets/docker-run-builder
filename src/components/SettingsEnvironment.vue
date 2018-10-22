<script>
import Vue from "vue";
import AppGroup from "./AppGroup.vue";
import AppKeyValueList from "./AppKeyValueList.vue";

const getLast = arr => arr[arr.length - 1];

export default {
  props: {
    env: Array
  },
  methods: {
    buildEnv() {
      return {
        key: null,
        value: null
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
  <app-group header="Environment">
    <app-key-value-list
      :items="env"
      :build-new="buildEnv"
      @add:item="$emit('add:env', $event)"
      @remove:item="$emit('remove:env', $event)"
    />
  </app-group>
</template>
