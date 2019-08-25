<template>
  <jsplumbchart
    :data="{stepData:flowData,links:this.links}"
    @modifyChart="modifyChart"
    @nodedblClick="nodedblClick"
    @handleDrop="handleDrop"
    ref="jsplumbchart"
  ></jsplumbchart>
</template>


<script>
import jsplumbchart from "../jsplumbchart/index";
import { mapGetters, mapActions, mapState } from "vuex";

import { flowData } from "../../mock/data/flowData.js";
export default {
  watch: {
    // flowData(val) {
    // }
  },
  props: {
    // data: {
    //   type: Object,
    //   default: false
    // }
  },
  components: {
    jsplumbchart
  },
  data: function() {
    return {
      stepData: [],
      links: [],
      flowData: []
    };
  },
  computed: {
    //...mapState([""])
  },
  mounted() {
    let res = flowData;

    this.flowData = res.steps;
    this.flowType = res.flowType;
    this.links = res.links;
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    //...mapActions([""]),
    modifyChart(val) {
      this.flowData = val.stepData;
      this.links = val.links;
    },
    nodedblClick(val) {},
    handleDrop(val) {
      this.flowData.push(this.getCurrentNode(val.data));
    },
    getCurrentNode(data) {
      return {
        id: data.drawIcon.id + "_" + (this.flowData.length + +1),
        name: data.drawIcon.name,
        type: data.drawIcon.type,
        x: event.offsetX,
        y: event.offsetY,
        stepSettings: data.drawIcon.stepSettings
      };
    }
  }
};
</script>

<style lang="scss">
</style>
