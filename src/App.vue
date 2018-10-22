<template>
  <div id="app">
    <settings-general
      :name.sync="dockerRun.name"
      :image.sync="dockerRun.image"
      :detached.sync="dockerRun.detached"
    />
    <settings-ports
      :ports="dockerRun.ports"
      @add:port="dockerRun.ports.push($event)"
      @remove:port="removePort"
    />
    <settings-limits
      :settings="dockerRun.limits"
    />
    <pre>{{ json }}</pre>
  </div>
</template>

<script>
import SettingsGeneral from './components/SettingsGeneral.vue';
import SettingsPorts from './components/SettingsPorts.vue';
import SettingsLimits from './components/SettingsLimits.vue';
import store from './store';
import dockerRunBuilder from "./services/dockerRunBuilder.js";

export default {
  name: 'app',
  data: () => ({
    dockerRun: store()
  }),
  components: {
    SettingsGeneral,
    SettingsPorts,
    SettingsLimits
  },
  computed: {
    json: function () {
      return dockerRunBuilder(this.dockerRun);
    }
  },
  methods: {
    removePort: function (portIndex) {
      this.dockerRun.ports.splice(portIndex, 1);
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
