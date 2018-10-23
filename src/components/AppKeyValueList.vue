<script>
import Vue from "vue";
const { floor, random } = Math;
const getLast = arr => arr[arr.length - 1];

export default {
  props: {
    items: Array,
    buildNew: Function,
    keyField: {
      type: String,
      default: "key"
    },
    valueField: {
      type: String,
      default: "value"
    },
    keyLabel: String,
    valueLabel: String
  },
  data: function() {
    return {
      newItem: (this.buildNew || this.buildNewDefault)(),
      idPrefix: {
        key: `key${Date.now}${floor(1000 * random())}`,
        value: `value${Date.now}${floor(1000 * random())}`
      }
    };
  },
  methods: {
    buildNewDefault() {
      return {
        [this.keyField]: null,
        [this.valueField]: null
      }
    },
    onNewChanged(side) {
      this.items.push(this.newItem);
      this.newItem = (this.buildNew || this.buildNewDefault)();
      Vue.nextTick(() => getLast(this.$refs[`${side}Inputs`]).focus());
    },
    onChanged(item, index) {
      if (!item[this.keyField] && !item[this.valueField]) {
        this.items.splice(index, 1);
      }
    }
  }
};
</script>

<template>
  <div>
    <div v-for="(item, index) of items" :key="index">
      <label :for="`${idPrefix.key}${index}`">{{ keyLabel || keyField }}</label>
      <input
        ref="keyInputs"
        type="text"
        :id="`${idPrefix.key}${index}`"
        v-model="item[keyField]"
        @input="onChanged(item, index)">
      <label :for="`${idPrefix.value}${index}`">{{ valueLabel || valueField }}</label>
      <input
        ref="valueInputs"
        type="text"
        :id="`${idPrefix.value}${index}`"
        v-model="item[valueField]"
        @input="onChanged(item, index)">
    </div>
    <div :class="{ new: !!items.length }">
      <label for="newItemKey">{{ keyLabel || keyField }}</label>
      <input
        type="text"
        id="newItemKey"
        v-model.number="newItem[keyField]"
        @input="onNewChanged('key')">
      <label for="newItemValue">{{ valueLabel || valueField }}</label>
      <input
        type="text"
        id="newItemValue"
        v-model.number="newItem[valueField]"
        @input="onNewChanged('value')">
    </div>
  </div>
</template>

<style scoped>
.new {
  opacity: .5;
}
.new:active {
  opacity: 1;
}
</style>
