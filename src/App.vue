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
      @remove:port="dockerRun.ports.splice($event, 1)"
    />
    <settings-environment
      :env="dockerRun.envVariables"
      @add:env="dockerRun.envVariables.push($event)"
      @remove:env="dockerRun.envVariables.splice($event, 1)"
    />
    <app-group header="Volumes">
      <app-key-value-list
        :items="dockerRun.volumes"
        key-field="host"
        value-field="container"
        @add:item="dockerRun.volumes.push($event)"
        @remove:item="dockerRun.volumes.splice($event, 1)"
      />
    </app-group>
    <settings-limits
      :settings="dockerRun.limits"
    />
    <pre>{{ json }}</pre>
  </div>
</template>

<script>
import AppGroup from './components/AppGroup.vue'
import AppKeyValueList from './components/AppKeyValueList.vue'
import SettingsGeneral from './components/SettingsGeneral.vue';
import SettingsPorts from './components/SettingsPorts.vue';
import SettingsLimits from './components/SettingsLimits.vue';
import SettingsEnvironment from './components/SettingsEnvironment.vue';
import store from './store';
import dockerRunBuilder from "./services/dockerRunBuilder.js";

export default {
  name: 'app',
  data: () => ({
    dockerRun: store()
  }),
  components: {
    AppGroup,
    AppKeyValueList,
    SettingsGeneral,
    SettingsPorts,
    SettingsLimits,
    SettingsEnvironment
  },
  computed: {
    json: function () {
      return dockerRunBuilder(this.dockerRun);
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
