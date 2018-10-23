<template>
  <div id="app">
    <settings-general
      :name.sync="dockerRun.name"
      :image.sync="dockerRun.image"
      :detached.sync="dockerRun.detached"
    />
    <app-group header="Ports">
      <app-key-value-list
        :items="dockerRun.ports"
        key-field="host"
        value-field="container"
      />
    </app-group>
    <app-group header="Environment">
      <app-key-value-list
        :items="dockerRun.envVariables"
      />
    </app-group>
    <app-group header="Volumes">
      <app-key-value-list
        :items="dockerRun.volumes"
        key-field="host"
        value-field="container"
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
import SettingsLimits from './components/SettingsLimits.vue';
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
    SettingsLimits
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
