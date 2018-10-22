<script>
export default {
  props: {
    header: {
      type: String,
      required: true
    }
  }
};
</script>

<template>
  <div>
    <p><b>{{ header }}</b></p>
    <slot />
  </div>
</template>
