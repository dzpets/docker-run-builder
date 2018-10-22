export default () => ({
  image: '',
  name: '',
  detached: true,
  ports: [],
  envVariables: [],
  volumes: [],
  limits: {
    // https://docs.docker.com/config/containers/resource_constraints
    memory: '',
    memoryReservation: '',
    cpus: null,
    cpuSet: ''
  },
  customParams: []
});
