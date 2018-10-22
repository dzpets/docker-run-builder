<script>
import AppGroup from "./AppGroup.vue";

export default {
  props: {
    image: String,
    name: String,
    detached: Boolean
  },
  components: {
    AppGroup
  }
};
</script>

<template>
  <app-group header="General">
    <input
      type="text"
      :value="image"
      @input="$emit('update:image', $event.target.value)"
    >
    <input
      type="text"
      :value="name"
      @input="$emit('update:name', $event.target.value)"
    >
    <input
      type="checkbox"
      :checked="detached"
      @change="$emit('update:detached', $event.target.checked)"
    >
  </app-group>
</template>
