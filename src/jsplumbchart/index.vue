<template>
  <!-- <div class="jsplumb-chart cavans" id="jsplumbchart"> -->
  <drop class="jsplumb-chart" @drop="handleDrop">
    <div class="jtk-surface" id="jsplumb-chart">
      <!-- <div
        v-for="(data, index) in stepData"
        :key="index"
        :id="data.id"
        :class="setNodeStyle(data)"
        :data-sign="data.name"
        :data-type="data.type"
        :style="
          'left:' +
            data.x +
            'px;top:' +
            data.y +
            'px;position:absolute;margin:0'
        "
        @dblclick="dblClick(data)"
        @mousedown="selectCurrentStep(data)"
        @mousemove.ctrl="multSe3lectStep(data)"
        @mouseup="mouseUpStep"
      >-->
      <div
        v-for="(data, index) in stepData"
        :key="index"
        :id="data.id"
        :class="setNodeStyle(data)"
        :data-sign="data.name"
        :data-type="data.type"
        :style="'left:' + data.x + 'px;top:' + data.y + 'px;'"
        @dblclick="dblClick(data)"
        @mousedown="selectCurrentStep(data)"
        @mousemove.ctrl="multSe3lectStep(data)"
        @mouseup="mouseUpStep"
      >
        <i class="icon iconfont icon-ir-designIconBg designIconBg"></i>
        <i
          id="changeSte"
          :class="
            nodeIcon(data.type) == 'iconTrue'
              ? 'icon iconfont icon-ir-d-' + data.type
              : 'icon iconfont icon-ir-d-default'
          "
        ></i>
        <h4 :title="data.name">{{ data.name }}</h4>
        <h5>ID:{{ data.id }}</h5>
        <em
          id="copeDes"
          class="icon iconfont icon-ir-copy"
          title="复制"
          @mousedown="deleCopyStepmouseDown"
          @click.stop="copyNode(data)"
        ></em>
        <em
          id="removeDes"
          class="fa fa-trash-o"
          title="删除"
          @click.stop="delNode(data.id)"
          @mousedown="deleCopyStepmouseDown"
        ></em>

        <!-- line split -->
        <!-- <div class="line-split" v-show="data.type=='multioutput'" :style="setLineSplit(data)"></div> -->

        <!-- selected node -->

        <!-- <div v-show="data.isSelected" class="resize top"></div>
        <div v-show="data.isSelected" class="resize left"></div>
        <div v-show="data.isSelected" class="resize bottom"></div>
        <div v-show="data.isSelected" class="resize right"></div>-->
      </div>
    </div>
  </drop>
  <!-- </div> -->
</template>

<script>
/* eslint-disable */
<<<<<<< HEAD
// import { mapGetters, mapActions, mapState } from "vuex";
import getInstance from "@/utils/getInstance";
import panzoom from "@/utils/panZoom/moveAndZoom";
=======
import { mapGetters, mapActions, mapState } from "vuex";
import getInstance from "@/components/utils/getInstance";
>>>>>>> 178338fd2cd285143f57e209f360e3d037be7887
import _ from "lodash";
import {
  message,
  filterLinkData,
  nodeClass,
  nodeIcon,
  specialNodeClass,
  origin,
  destination,
  addEndpointToNode,
  getNodeType,
  setClass,
<<<<<<< HEAD
  connect,
  getOutputConfigurations
} from "@/utils/flowchart";
// import panzoom from "panzoom";
// import "@svgdotjs/svg.panzoom.js";
=======
  connect
} from "@/components/utils/flowchart";
import panzoom from "panzoom";
>>>>>>> 178338fd2cd285143f57e209f360e3d037be7887
export default {
  watch: {
    data(val) {
      this.stepData = this.data.stepData;
      this.links = this.data.links;
    },
    stepData(val) {
      this.$emit("modifyChart", { steps: val, links: this.links });
    },
    links(val) {
      this.$emit("modifyChart", { steps: this.stepData, links: val });
    }
  },
  props: {
    data: {
      type: Object,
      default: false
    }
  },
  components: {},
  data: function() {
    return {
      panzoomInstance: "",
      // panzoomInstance: panzoom.init(this.jsplumbInstance),
      jsplumbInstance: getInstance({
        // container: "workplace",
        container: "jsplumb-chart",
        delConnections: this.delConnections,
        completedConnect: this.completedConnect,
        jsPlumb: this.data.jsPlumb,
        modifyOverConnectStatus: this.modifyOverConnectStatus
      }),
      stepData: [],
      links: [],
      nodeClass: nodeClass,
      nodeIcon: nodeIcon,
      setClass: setClass,
<<<<<<< HEAD
      instanceZoom: "",
      dragging: false,
      //鼠标按下时的鼠标所在的X，Y坐标
      mouseDownX: "",
      mouseDownY: "",
      //初始位置的X，Y 坐标
      initX: "",
      initY: "",
      distanceX: 0,
      distancey: 0,
      selectedStepId: "",
      mulSelect: false,
      isDeleCopyStep: false,
      mouserOverConnect: false,
      isPanZoomInit: true
=======
      instanceZoom: ""
>>>>>>> 178338fd2cd285143f57e209f360e3d037be7887
    };
  },
  computed: {
    //...mapState([""])
  },
  mounted() {
    // let canvas = document.getElementById("cavans");
    // this.initX = canvas.offsetLeft;
    // this.initY = canvas.offsetTop;
    // console.log(this.initX,this.initY);
    this.$nextTick(() => {
      //console.log(" this.$nextTick(() => { mounted");
      //this.setZoomJsplumbChart("cavans");
      this.initEvent();
    });
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated(p) {
    this.$nextTick(t => {
      this.drawJsplumbChart(
        {
          jsplumbInstance: this.jsplumbInstance,
          self: this,
          flowData: this.stepData,
          links: this.links
        },
        () => {
          this.getLinksData();
          if (this.isPanZoomInit) {
            panzoom.init(this.jsplumbInstance);
            this.isPanZoomInit = false;
          }
          //
        }
      );
    });
  },
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    //...mapActions([""]),
<<<<<<< HEAD
    getScale(instance) {
      let container = instance.getContainer();
      let scale1;
      if (instance.pan) {
        console.log("if (this.jsplumbInstance.pan) {");
        const { scale } = instance.pan.getTransform();
        scale1 = scale;
      } else {
        console.log(" } else {");
        const matrix = window.getComputedStyle(container).transform;
        scale1 = matrix.split(", ")[3] * 1;
      }
      instance.setZoom(scale1);
      return scale1;
    },
    resume() {
      return panzoom.init(this.jsplumbInstance).resume;
    },
    handleDrop(val, nativeEvent) {
      const containerRect = this.jsplumbInstance
        .getContainer()
        .getBoundingClientRect();
      let scale = this.getScale(this.jsplumbInstance);

      let left = (nativeEvent.pageX - containerRect.left) / scale;
      let top = (nativeEvent.pageY - containerRect.top) / scale;
      left -= 20;
      top -= 25;
      this.$emit("handleDrop", {
        ...val,
        x: left,
        y: top
=======
    resetJsplumbChart() {
      // document.getElementById("cavans").style = "matrix(1, 0, 0, 1, 0, 0)";
      // this.setZoomJsplumbChart();
    },
    setZoomJsplumbChart() {
      // 假设矩阵是：matrix(a,b,c,d,e,f);
      // 如果只是平移translate，只关注最后两个数值就好：
      // e是水平移动距离，f是垂直移动距离
      // 如果只是缩放scale，只关注a和d两个数值就好：
      // a是水平缩放倍数，d是垂直缩放倍数
      // 如果是旋转rotate，假设旋转角度是θ：
      // matrix(cosθ,sinθ,-sinθ,cosθ,0,0)
      // 拉伸skew，用到了三角函数tanθ，只与b, c两个参数相关，书写如下：
      // （注意y轴倾斜角度在前）
      // matrix(1,tan(θy),tan(θx),1,0,0)

      // and forward it it to panzoom.
      // var instance = panzoom(document.getElementById("cavans"), {
      //   zoomDoubleClickSpeed: 1,
      //   smoothScroll: false
      // }).zoomAbs(
      //   300, // initial x position
      //   500, // initial y position
      //   0.1 // initial zoom
      // );
      //instance.style = "transform-origin: 500px 500px 0px";

      let canvas = document.getElementById("cavans");

      this.instanceZoom = panzoom(canvas, {
        zoomDoubleClickSpeed: 1,
        smoothScroll: false
      });

      let style = window.getComputedStyle(canvas);

      var values = [];

      this.instanceZoom.on("pan", function(e, dx, dy, dz) {
        console.log("Fired when the `element` is being panned", e);
        values = style.transform
          .split("(")[1]
          .split(")")[0]
          .split(",");
        console.log(values);
        console.log("x", parseFloat(values[4]));
        console.log("y", parseFloat(values[5]));
        console.log("坐标", {
          x: parseFloat(values[4]) * parseFloat(values[0]),
          y: parseFloat(values[5]) * parseFloat(values[3])
        });
>>>>>>> 178338fd2cd285143f57e209f360e3d037be7887
      });
    },
    delAllselected(data) {
      this.stepData = _.filter(data, item => {
        return !item.isSelected;
      });
    },
    deleCopyStepmouseDown() {
      this.isDeleCopyStep = true;
    },
    mouseUpStep() {
      this.mulSelect = false;
    },
    multSe3lectStep(val) {
      this.mulSelect = true;
    },
    selectCurrentStep(val) {
      if (this.isDeleCopyStep) {
        return;
      }
      this.stepData = _.map(this.stepData, item => {
        if (val.id == item.id) {
          return {
            ...item,
            isSelected: true
          };
        } else {
          if (!this.mulSelect) {
            delete item.isSelected;
          }

<<<<<<< HEAD
          return item;
        }
=======
      this.instanceZoom.on("zoom", function(e, dx, dy, dz) {
        console.log("Fired when `element` is zoomed", e);
        values = style.transform
          .split("(")[1]
          .split(")")[0]
          .split(",");
        console.log(values);
        console.log("水平缩放", parseFloat(values[0]));
        console.log("垂直缩放", parseFloat(values[3]));
        console.log("坐标", {
          x: parseFloat(values[4]) * parseFloat(values[0]),
          y: parseFloat(values[5]) * parseFloat(values[3])
        });
      });

      this.instanceZoom.on("panend", (e, dx, dy, dz) => {
        console.log("Fired when pan ended", e, dx, dy, dz);
        // values = style.transform
        //   .split("(")[1]
        //   .split(")")[0]
        //   .split(",");
        // console.log(values);
        // console.log("x", parseFloat(values[4]));
        // console.log("y", parseFloat(values[5]));
        // console.log("坐标", {
        //   x: parseFloat(values[4]) * parseFloat(values[0]),
        //   y: parseFloat(values[5]) * parseFloat(values[3])
        // });
        // this.modifyElementPosition({
        //   x: parseFloat(values[4]) * parseFloat(values[0]),
        //   y: parseFloat(values[5]) * parseFloat(values[3])
        // });
      });

      this.instanceZoom.on("zoom", (e, dx, dy, dz) => {
        console.log("Fired when `element` is zoomed", e, dx, dy, dz);
        // values = style.transform
        //   .split("(")[1]
        //   .split(")")[0]
        //   .split(",");
        // console.log(values);
        // console.log("水平缩放", parseFloat(values[0]));
        // console.log("垂直缩放", parseFloat(values[3]));
        // console.log("坐标", {
        //   x: parseFloat(values[4]) * parseFloat(values[0]),
        //   y: parseFloat(values[5]) * parseFloat(values[3])
        // });
        // this.modifyElementPosition({
        //   x: parseFloat(values[4]) * parseFloat(values[0]),
        //   y: parseFloat(values[5]) * parseFloat(values[3])
        // });
>>>>>>> 178338fd2cd285143f57e209f360e3d037be7887
      });

      this.instanceZoom.on("transform", function(e) {
        // This event will be called along with events above.
        console.log("Fired when any transformation has happened", e);
      });

      // canvas.style = "transform-origin: 500px 500px 0px";
    },
    resetJsplumbChart() {
      // document.getElementById("cavans").style = "matrix(1, 0, 0, 1, 0, 0)";
      //this.setZoomJsplumbChart("cavans");
    },

    drawJsplumbChart(data, connectCallback) {
      addEndpointToNode(
        data.jsplumbInstance,
        data.self,
        data.flowData,
        val => {
          this.stepData = _.map(this.stepData, item => {
            if (item.id == val.id) {
              return {
                ...item,
                x: val.x,
                y: val.y
              };
            } else {
              return item;
            }
          });
        },
        _
      );

      connect(
        data.jsplumbInstance,
        data.self,
        data.links,
        connectCallback
      );
    },
    completedConnect() {
      this.getLinksData();
    },
<<<<<<< HEAD
=======
    handleDrop(data, event) {
      this.$emit("handleDrop", { data: data, event: event });
    },
>>>>>>> 178338fd2cd285143f57e209f360e3d037be7887
    delConnections(val, fn) {
      //console.log(" delConnections(val, fn) {", val, fn);
      fn();
      this.getLinksData();
      // message(
      //   "确定删除当前连线",
      //   () => {
      //     fn();
      //     this.getLinksData();
      //   },
      //   this
      // );
    },
    delNode(val) {
      this.stepData = _.filter(_.cloneDeep(this.stepData), item => {
        return item.id != val;
      });
      this.isDeleCopyStep = false;

      console.log(" delNode(val) {", this.stepData);
      // message(
      //   "确定删除当前节点",
      //   () => {
      //     this.stepData = _.filter(_.cloneDeep(this.stepData), item => {
      //       return item.id != val;
      //     });
      //   },
      //   this
      // );
    },
    dblClick(val) {
      this.$emit("nodedblClick", val);
    },
    getLinksData() {
      this.links = filterLinkData(
        _.map(this.jsplumbInstance.getAllConnections(), item => {
          return {
            name: item.id,
            source: item.sourceId,
            sourceOutput: item.endpoints[0].canvas.nextSibling.textContent,
            target: item.targetId,
            targetInput: item.target.dataset.type,
            input: item.endpoints[1].canvas.nextSibling.textContent
          };
        }),
        _
      );
      //console.log("  getLinksData() {", this.links);
    },
    reset() {
      this.stepData = [];
      this.links = [];
      this.jsplumbInstance.deleteEveryEndpoint("workplace");
    },
    mousewheelCavans(event) {
      console.log("mousewheelCavans", event);
    },
<<<<<<< HEAD
    mousedownBody(event) {
      if (this.mouserOverConnect) {
        return;
      }

      this.stepData = _.map(this.stepData, item => {
        delete item.isSelected;
        return item;
      });
    },
    mouseup(event) {
      // console.log("mouseup(event) {");
    },
    mousemove(event) {
      console.log("  mousemove(event) {");
    },
    addClass(ele, cls) {
      if (!this.hasClass(ele, cls)) {
        ele.className = ele.className == "" ? cls : ele.className + " " + cls;
      }
    },
    removeClass(elem, cls) {
      if (this.hasClass(elem, cls)) {
        var newClass = " " + elem.className.replace(/[\t\r\n]/g, "") + " ";
        while (newClass.indexOf(" " + cls + " ") >= 0) {
          newClass = newClass.replace(" " + cls + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, "");
      }
    },
    hasClass(elem, cls) {
      cls = cls || "";
      if (cls.replace(/\s/g, "").length == 0) return false; //当cls没有参数时，返回false
      return new RegExp(" " + cls + " ").test(" " + elem.className + " ");
    },

    copyNode(item) {
      let val = _.cloneDeep(item);
      delete val.isSelected;
      let node = {
        ...val,
        x: val.x + 50,
        y: val.y + 50,
        id: "rtc_" + val.type + "_" + (this.stepData.length + 1)
      };
      this.$emit("handleDrop", node);
      this.isDeleCopyStep = false;
      //this.mousedown();
    },
    setNodeStyle(val) {
      let stepStyle = setClass(nodeClass(val.type));
      // let output = val.outputConfigurations
      //   ? getOutputConfigurations(val.outputConfigurations, _)
      //   : [];
      // if (val.type == "multioutput") {
      //   console.log('if (val == "multioutput") {');
      //   return " circle-right " + stepStyle;
      // }

      // if (output.length > 5) {
      //   return " stepsItem trapezoid ";
      // }
      return "designIconBig stepsItem " + stepStyle;
    },

    modifyOverConnectStatus(val) {
      this.mouserOverConnect = val;
    },
    initEvent() {
      document.onkeydown = e => {
        if (e.keyCode == 46) {
          this.delAllselected(this.stepData);
        }
      };

      document.onmousedown = e => {
        this.mousedownBody(e);
      };
    },
    dragAllEelment(x1, y1, elem) {
      var l = document.getElementById(elem).offsetLeft;
      var t = document.getElementById(elem).offsetTop;

      console.log("document.onmousemove = ev => {", l, t);
      //event的兼容性
      var ev = ev || event;
      //获取鼠标移动时的坐标
      var x2 = ev.clientX;
      var y2 = ev.clientY;
      //计算出鼠标的移动距离
      var x = x2 - x1;
      var y = y2 - y1;
      //移动的数值与元素的left，top相加，得出元素的移动的距离
      var lt = y + t;
      var ls = x + l;
      //更改元素的left，top值
      // divs.style.top = lt + "px";
      // divs.style.left = ls + "px";

      // this.stepData = _.map(this.stepData, item => {
      //   if (item.id == elem) {
      //     return {
      //       ...item,
      //       x: ls,
      //       y: lt
      //     };
      //   } else {
      //     return item;
      //   }
      // });
    },
    setLineSplit(step) {
      //console.log("setLineSplit(step){", step); //outputConfigurations

      if (step.type == "multioutput") {
        let outputConfigurations = _.toArray(step.outputConfigurations);
        // console.log("step.outputConfigurations", step.outputConfigurations);
        // console.log("outputConfigurations", outputConfigurations);

        switch (outputConfigurations.length) {
          case 20:
          case 19:
          case 18:
          case 17:
          case 16:
          case 15:
            return "height: 290px; top: -110px;";
          case 14:
          case 13:
          case 12:
          case 11:
          case 10:
            return "height: 210px; top: -70px;";
          case 9:
          case 8:
            // case 7:
            return "height: 140px; top: -35px;";
          case 7:
          case 6:
          case 5:
            return "height: 120px; top: -25px;";
          default:
            "";
        }

        //if(outputConfigurations.length==)
      }
=======
    tab(event) {
      console.log("tab", event);
>>>>>>> 178338fd2cd285143f57e209f360e3d037be7887
    }
  }
};
</script>

<style lang="scss">
// @import "./tookit.css";
.jsplumb-chart {
  width: 100%;
  height: 100%;
<<<<<<< HEAD
  position: relative;
  overflow: hidden;
  outline: none !important;

  #jsplumb-chart {
    outline: none !important;
=======
  position: absolute;

  .cavans {
>>>>>>> 178338fd2cd285143f57e209f360e3d037be7887
    height: 100%;
    width: 100%;
    position: relative;
<<<<<<< HEAD
  }

  .jtk-surface {
    // z-index: 0;
    // height: 100%;
    // width: 100%;
    // // background: #4586f3;
    // // top: 20px;
    // // left: 20px;
    // // height: 50px;
    // // width: 50px;
    // position: relative;
    // cursor: -webkit-grab;
=======
    cursor: -webkit-grab;
    // top: 0;
    // left: 0;
    // top: 500px;
    // left: 500px;
    //   background-image: url("../assets/img/designBg.png");
>>>>>>> 178338fd2cd285143f57e209f360e3d037be7887

    // ////////////////////////node style begin///////////////////
    .designIconBig {
      height: 70px;
      width: 150px;
      margin: 0 auto;
      // padding: 12px;
      // box-sizing: border-box;
      box-shadow: 0 10px 18px -9px rgba(0, 0, 0, 0.5);
      background: #ffffff;
      text-align: center;
      position: absolute;
      margin-right: 15px;
      margin-bottom: 20px;
      // cursor: move;
      float: left;
    }

    .designIconBig i,
    .trapezoid i {
      float: none !important;
      position: absolute;
      left: 5px;
      top: 8px;
      width: 30px !important;
      height: 30px !important;
      line-height: 30px !important;
      font-size: 30px !important;
    }

    .designIconBig h4,
    .trapezoid h4 {
      position: absolute;
      top: 5px;
      left: 38px;
      margin: 0px;
      padding: 0px;
      width: 110px;
      text-align: left;
      font-size: 14px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .designIconBig h5,
    .trapezoid h5 {
      position: absolute;
      top: 25px;
      left: 38px;
      margin: 0px;
      padding: 0px;
      width: 110px;
      text-align: left;
      font-size: 12px;
      font-weight: normal;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .designIconBig #removeDes {
      position: absolute;
      top: 46px;
      right: 15px;
      font-size: 14px;
      color: #b9c0d8;
      margin: 0px;
      padding: 0px;
    }

    .designIconBig #copeDes {
      position: absolute;
      top: 45px;
      right: 35px;
      font-size: 14px;
      color: #b9c0d8;
      margin: 0px;
      padding: 0px;
    }

    .trapezoid #removeDes {
      position: absolute;
      top: 46px;
      right: -138px;
      font-size: 14px;
      color: #b9c0d8;
      margin: 0px;
      padding: 0px;
    }

    .trapezoid #copeDes {
      position: absolute;
      top: 45px;
      right: -118px;
      font-size: 14px;
      color: #b9c0d8;
      margin: 0px;
      padding: 0px;
    }
    .designIconBig #pitchOnDes,
    .trapezoid #pitchOnDes {
      position: absolute;
      top: 47px;
      right: 60px;
      font-size: 14px;
      color: #b9c0d8;
      margin: 0px;
      padding: 0px;
    }
    .desingIconBig #markDes,
    .trapezoid #markDes {
      position: absolute;
      top: 45px;
      right: 20px;
      font-size: 14px;
      color: #b9c0d8;
      margin: 0px;
      padding: 0px;
    }

    .t1Style {
      border: 2px solid #48c038;
      color: #48c038;
      border-radius: 2px;
    }
    .t2Style {
      border: 2px solid #4586f3;
      color: #4586f3;
      border-radius: 2px;
    }
    .t3Style {
      border: 2px solid #8367df;
      color: #8367df;
      border-radius: 2px;
    }

    .redStyle {
      border: 2px solid red;
    }
    .designIconBg {
      position: absolute;
      color: #ffffff !important;
    }

    .designIconBig #removeDes:hover,
    .trapezoid #removeDes:hover {
      color: #ff4e4e;
    }

    .designIconBig #copeDes:hover,
    .trapezoid #copeDes:hover {
      color: #ff4e4e;
    }

    .designIconBig #pitchOnDes:hover {
      color: #ff4e4e;
    }

    // ////////////////////////node style end///////////////////

    .bigrounded {
      border-radius: 0 2rem 2rem 0;
      width: 175px;
    }

    // .endpointSourceLabelMult {
    //   transform-origin: bottom left !important;
    //   transform: rotate(-45deg) !important;
    // }

    .trapezoid {
      color: #4586f3;
      border-right: 150px solid #ffffff;
      border-top: 50px solid transparent;
      border-bottom: 50px solid transparent;
      height: 70px;
      width: 0px;

      /*边框颜色：上 右 下 左 （从上边框开始 顺时针方向）*/
      // border-color: transparent transparent #402820 transparent;
      /*为了兼容IE6，所有设置为透明（transparent）的边，需要设置为dashed；有颜色的边设置为solid*/
      // border-style: dashed dashed solid dashed;
    }

    .resize {
      width: 8px;
      height: 8px;
      background-color: #ddd;
      border: 1px solid #000;
      position: absolute;
      &.left {
        top: 50%;
        left: -4px;
        cursor: ew-resize;
      }
      &.right {
        top: 50%;
        right: -4px;
        cursor: ew-resize;
      }
      &.top {
        top: -4px;
        left: 50%;
        margin-left: -4px;
        cursor: ns-resize;
      }
      &.bottom {
        bottom: -4px;
        left: 50%;
        margin-left: -4px;
        cursor: ns-resize;
      }
    }

    .circle-right {
      width: 100px;
      height: 0px;
      border: 0 solid transparent;
      border-bottom: 100px solid #669;
      border-top: 100px solid #669;
      -moz-border-radius: 0 100px 100px 0;
      -webkit-border-radius: 0 100px 100px 0;
      border-radius: 0 100px 100px 0;
    }
  }

  .line-split {
    position: absolute;
    // height: 330px;
    width: 2px;
    background: #4586f3;
    right: -2px;
    // top: -120px;
  }
}
</style>
