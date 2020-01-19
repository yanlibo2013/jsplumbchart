<template>
  <div class="chart" id="workplace">
    <jsplumbchart
      :data="jsplumbchartOption"
      @modifyJsplumbchartOption="modifyJsplumbchartOption"
      @modifyChart="modifyChart"
      @nodedblClick="nodedblClick"
      @handleDrop="handleDrop"
      ref="jsplumbchart"
    ></jsplumbchart>
  </div>
</template>


<script>
/* eslint-disable */
import "../assets/fonts/iconfont.css"; // step icons
import plumbGather from "jsplumb";
import jsplumbchart from "../jsplumbchart/index";
import { mapGetters, mapActions, mapState } from "vuex";

import { flowData } from "../../mock/data/flowData.js";

import Vue from "vue";
import VueDragDrop from "vue-drag-drop"; //https://github.com/cameronhimself/vue-drag-drop
Vue.use(VueDragDrop);
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
      steps: [],
      links: [],
      flowData: [],
      jsPlumb: plumbGather.jsPlumb,
      jsplumbchartOption: {
        steps: this.steps,
        links: this.links,
        container: "workplace",
        nodeType: "flowchartnode",
        jsPlumb: this.jsPlumb,
        containerRect: ""
      }
    };
  },
  computed: {
    //...mapState([""])
  },
  mounted() {
    this.steps = flowData.steps;
    this.links = flowData.links;
    this.jsplumbchartOption = {
      ...this.jsplumbchartOption,
      steps: this.steps,
      links: this.links
    };
  },
  beforeCreate() {},
  created() {
    this.jsplumbchartOption = {
      steps: this.steps,
      links: this.links,
      container: "workplace",
      nodeType: "flowchartnode",
      jsPlumb: this.jsPlumb,
      containerRect: ""
    };
  },
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    //...mapActions([""]),
    modifyJsplumbchartOption() {},
    modifyChart() {},
    nodedblClick() {},
    handleDrop() {},
    modifyChart(val) {
      this.steps = val.steps;
      this.links = val.links;
    },
    nodedblClick(val) {},
    handleDrop(val) {
      this.steps.push(val.drawIcon ? this.getCurrentNode(val) : val);
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
.chart {
  width: 100vw;
  height: 100vw;
}
</style>
