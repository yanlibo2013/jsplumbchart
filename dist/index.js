/*!
 * jsplumbchart v1.0.3
 * (c) ylb
 * Released under the ISC License.
 */
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var getInstance = _interopDefault(require('@/utils/getInstance'));
var panzoom = _interopDefault(require('@/utils/panZoom/moveAndZoom'));
var _ = _interopDefault(require('lodash'));
var flowchart = require('@/utils/flowchart');
var __vue_normalize__ = _interopDefault(require('vue-runtime-helpers/dist/normalize-component.mjs'));
var __vue_create_injector__ = _interopDefault(require('vue-runtime-helpers/dist/inject-style/browser.mjs'));

//
// import "@svgdotjs/svg.panzoom.js";

var script = {
  watch: {
    data: function data(val) {
      this.stepData = this.data.stepData;
      this.links = this.data.links;
    },
    stepData: function stepData(val) {
      this.$emit("modifyChart", {
        steps: val,
        links: this.links
      });
    },
    links: function links(val) {
      this.$emit("modifyChart", {
        steps: this.stepData,
        links: val
      });
    }
  },
  props: {
    data: {
      type: Object,
      "default": false
    }
  },
  components: {},
  data: function data() {
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
      nodeClass: flowchart.nodeClass,
      nodeIcon: flowchart.nodeIcon,
      setClass: flowchart.setClass,
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
    };
  },
  computed: {//...mapState([""])
  },
  mounted: function mounted() {
    var _this = this;

    // let canvas = document.getElementById("cavans");
    // this.initX = canvas.offsetLeft;
    // this.initY = canvas.offsetTop;
    // console.log(this.initX,this.initY);
    this.$nextTick(function () {
      //console.log(" this.$nextTick(() => { mounted");
      //this.setZoomJsplumbChart("cavans");
      _this.initEvent();
    });
  },
  beforeCreate: function beforeCreate() {},
  created: function created() {},
  beforeMount: function beforeMount() {},
  beforeUpdate: function beforeUpdate() {},
  updated: function updated(p) {
    var _this2 = this;

    this.$nextTick(function (t) {
      _this2.drawJsplumbChart({
        jsplumbInstance: _this2.jsplumbInstance,
        self: _this2,
        flowData: _this2.stepData,
        links: _this2.links
      }, function () {
        _this2.getLinksData(); // if (this.isPanZoomInit) {
        //   panzoom.init(this.jsplumbInstance);
        //   this.isPanZoomInit = false;
        // }
        //

      });
    });
  },
  beforeDestroy: function beforeDestroy() {},
  destroyed: function destroyed() {},
  methods: {
    //...mapActions([""]),
    getScale: function getScale(instance) {
      var container = instance.getContainer();
      var scale1;

      if (instance.pan) {
        console.log("if (this.jsplumbInstance.pan) {");

        var _instance$pan$getTran = instance.pan.getTransform(),
            scale = _instance$pan$getTran.scale;

        scale1 = scale;
      } else {
        console.log(" } else {");
        var matrix = window.getComputedStyle(container).transform;
        scale1 = matrix.split(", ")[3] * 1;
      }

      instance.setZoom(scale1);
      return scale1;
    },
    resume: function resume() {
      return panzoom.init(this.jsplumbInstance).resume;
    },
    handleDrop: function handleDrop(val, nativeEvent) {
      var containerRect = this.jsplumbInstance.getContainer().getBoundingClientRect();
      var scale = this.getScale(this.jsplumbInstance);
      var left = (nativeEvent.pageX - containerRect.left) / scale;
      var top = (nativeEvent.pageY - containerRect.top) / scale;
      left -= 20;
      top -= 25;
      this.$emit("handleDrop", Object.assign({}, val, {
        x: left,
        y: top
      }));
    },
    delAllselected: function delAllselected(data) {
      this.stepData = _.filter(data, function (item) {
        return !item.isSelected;
      });
    },
    deleCopyStepmouseDown: function deleCopyStepmouseDown() {
      this.isDeleCopyStep = true;
    },
    mouseUpStep: function mouseUpStep() {
      this.mulSelect = false;
    },
    multSe3lectStep: function multSe3lectStep(val) {
      this.mulSelect = true;
    },
    selectCurrentStep: function selectCurrentStep(val) {
      var _this3 = this;

      if (this.isDeleCopyStep) {
        return;
      }

      this.stepData = _.map(this.stepData, function (item) {
        if (val.id == item.id) {
          return Object.assign({}, item, {
            isSelected: true
          });
        } else {
          if (!_this3.mulSelect) {
            delete item.isSelected;
          }

          return item;
        }
      });
    },
    resetJsplumbChart: function resetJsplumbChart() {// document.getElementById("cavans").style = "matrix(1, 0, 0, 1, 0, 0)";
      //this.setZoomJsplumbChart("cavans");
    },
    drawJsplumbChart: function drawJsplumbChart(data, connectCallback) {
      var _this4 = this;

      flowchart.addEndpointToNode(data.jsplumbInstance, data.self, data.flowData, function (val) {
        _this4.stepData = _.map(_this4.stepData, function (item) {
          if (item.id == val.id) {
            return Object.assign({}, item, {
              x: val.x,
              y: val.y
            });
          } else {
            return item;
          }
        });
      }, _);
      flowchart.connect(data.jsplumbInstance, data.self, data.links, connectCallback);
    },
    completedConnect: function completedConnect() {
      this.getLinksData();
    },
    delConnections: function delConnections(val, fn) {
      //console.log(" delConnections(val, fn) {", val, fn);
      fn();
      this.getLinksData(); // message(
      //   "确定删除当前连线",
      //   () => {
      //     fn();
      //     this.getLinksData();
      //   },
      //   this
      // );
    },
    delNode: function delNode(val) {
      this.stepData = _.filter(_.cloneDeep(this.stepData), function (item) {
        return item.id != val;
      });
      this.isDeleCopyStep = false;
      console.log(" delNode(val) {", this.stepData); // message(
      //   "确定删除当前节点",
      //   () => {
      //     this.stepData = _.filter(_.cloneDeep(this.stepData), item => {
      //       return item.id != val;
      //     });
      //   },
      //   this
      // );
    },
    dblClick: function dblClick(val) {
      this.$emit("nodedblClick", val);
    },
    getLinksData: function getLinksData() {
      this.links = flowchart.filterLinkData(_.map(this.jsplumbInstance.getAllConnections(), function (item) {
        return {
          name: item.id,
          source: item.sourceId,
          sourceOutput: item.endpoints[0].canvas.nextSibling.textContent,
          target: item.targetId,
          targetInput: item.target.dataset.type,
          input: item.endpoints[1].canvas.nextSibling.textContent
        };
      }), _); //console.log("  getLinksData() {", this.links);
    },
    reset: function reset() {
      this.stepData = [];
      this.links = [];
      this.jsplumbInstance.deleteEveryEndpoint("workplace");
    },
    mousewheelCavans: function mousewheelCavans(event) {
      console.log("mousewheelCavans", event);
    },
    mousedownBody: function mousedownBody(event) {
      if (this.mouserOverConnect) {
        return;
      }

      this.stepData = _.map(this.stepData, function (item) {
        delete item.isSelected;
        return item;
      });
    },
    mouseup: function mouseup(event) {// console.log("mouseup(event) {");
    },
    mousemove: function mousemove(event) {
      console.log("  mousemove(event) {");
    },
    addClass: function addClass(ele, cls) {
      if (!this.hasClass(ele, cls)) {
        ele.className = ele.className == "" ? cls : ele.className + " " + cls;
      }
    },
    removeClass: function removeClass(elem, cls) {
      if (this.hasClass(elem, cls)) {
        var newClass = " " + elem.className.replace(/[\t\r\n]/g, "") + " ";

        while (newClass.indexOf(" " + cls + " ") >= 0) {
          newClass = newClass.replace(" " + cls + " ", " ");
        }

        elem.className = newClass.replace(/^\s+|\s+$/g, "");
      }
    },
    hasClass: function hasClass(elem, cls) {
      cls = cls || "";
      if (cls.replace(/\s/g, "").length == 0) return false; //当cls没有参数时，返回false

      return new RegExp(" " + cls + " ").test(" " + elem.className + " ");
    },
    copyNode: function copyNode(item) {
      var val = _.cloneDeep(item);

      delete val.isSelected;
      var node = Object.assign({}, val, {
        x: val.x + 50,
        y: val.y + 50,
        id: "rtc_" + val.type + "_" + (this.stepData.length + 1)
      });
      this.$emit("handleDrop", node);
      this.isDeleCopyStep = false; //this.mousedown();
    },
    setNodeStyle: function setNodeStyle(val) {
      var stepStyle = flowchart.setClass(flowchart.nodeClass(val.type)); // let output = val.outputConfigurations
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
    modifyOverConnectStatus: function modifyOverConnectStatus(val) {
      this.mouserOverConnect = val;
    },
    initEvent: function initEvent() {
      var _this5 = this;

      document.onkeydown = function (e) {
        if (e.keyCode == 46) {
          _this5.delAllselected(_this5.stepData);
        }
      };

      document.onmousedown = function (e) {
        _this5.mousedownBody(e);
      };
    },
    dragAllEelment: function dragAllEelment(x1, y1, elem) {
      var l = document.getElementById(elem).offsetLeft;
      var t = document.getElementById(elem).offsetTop;
      console.log("document.onmousemove = ev => {", l, t); //event的兼容性

      var ev = ev || event; //获取鼠标移动时的坐标

      var x2 = ev.clientX;
      var y2 = ev.clientY; //计算出鼠标的移动距离
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
    setLineSplit: function setLineSplit(step) {
      //console.log("setLineSplit(step){", step); //outputConfigurations
      if (step.type == "multioutput") {
        var outputConfigurations = _.toArray(step.outputConfigurations); // console.log("step.outputConfigurations", step.outputConfigurations);
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
        } //if(outputConfigurations.length==)

      }
    }
  }
};

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('drop', {
    staticClass: "jsplumb-chart",
    on: {
      "drop": _vm.handleDrop
    }
  }, [_c('div', {
    staticClass: "jtk-surface",
    attrs: {
      "id": "jsplumb-chart"
    }
  }, _vm._l(_vm.stepData, function (data, index) {
    return _c('div', {
      key: index,
      "class": _vm.setNodeStyle(data),
      style: 'left:' + data.x + 'px;top:' + data.y + 'px;',
      attrs: {
        "id": data.id,
        "data-sign": data.name,
        "data-type": data.type
      },
      on: {
        "dblclick": function dblclick($event) {
          return _vm.dblClick(data);
        },
        "mousedown": function mousedown($event) {
          return _vm.selectCurrentStep(data);
        },
        "mousemove": function mousemove($event) {
          if (!$event.ctrlKey) {
            return null;
          }

          return _vm.multSe3lectStep(data);
        },
        "mouseup": _vm.mouseUpStep
      }
    }, [_c('i', {
      staticClass: "icon iconfont icon-ir-designIconBg designIconBg"
    }), _vm._v(" "), _c('i', {
      "class": _vm.nodeIcon(data.type) == 'iconTrue' ? 'icon iconfont icon-ir-d-' + data.type : 'icon iconfont icon-ir-d-default',
      attrs: {
        "id": "changeSte"
      }
    }), _vm._v(" "), _c('h4', {
      attrs: {
        "title": data.name
      }
    }, [_vm._v(_vm._s(data.name))]), _vm._v(" "), _c('h5', [_vm._v("ID:" + _vm._s(data.id))]), _vm._v(" "), _c('em', {
      staticClass: "icon iconfont icon-ir-copy",
      attrs: {
        "id": "copeDes",
        "title": "复制"
      },
      on: {
        "mousedown": _vm.deleCopyStepmouseDown,
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.copyNode(data);
        }
      }
    }), _vm._v(" "), _c('em', {
      staticClass: "fa fa-trash-o",
      attrs: {
        "id": "removeDes",
        "title": "删除"
      },
      on: {
        "click": function click($event) {
          $event.stopPropagation();
          return _vm.delNode(data.id);
        },
        "mousedown": _vm.deleCopyStepmouseDown
      }
    })]);
  }), 0)]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-ab4a71da_0", {
    source: "@charset \"UTF-8\";.jsplumb-chart{width:100%;height:100%;position:relative;overflow:hidden;outline:0!important}.jsplumb-chart #jsplumb-chart{outline:0!important;height:100%;width:100%;position:relative}.jsplumb-chart .jtk-surface .designIconBig{height:70px;width:150px;margin:0 auto;box-shadow:0 10px 18px -9px rgba(0,0,0,.5);background:#fff;text-align:center;position:absolute;margin-right:15px;margin-bottom:20px;float:left}.jsplumb-chart .jtk-surface .designIconBig i,.jsplumb-chart .jtk-surface .trapezoid i{float:none!important;position:absolute;left:5px;top:8px;width:30px!important;height:30px!important;line-height:30px!important;font-size:30px!important}.jsplumb-chart .jtk-surface .designIconBig h4,.jsplumb-chart .jtk-surface .trapezoid h4{position:absolute;top:5px;left:38px;margin:0;padding:0;width:110px;text-align:left;font-size:14px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.jsplumb-chart .jtk-surface .designIconBig h5,.jsplumb-chart .jtk-surface .trapezoid h5{position:absolute;top:25px;left:38px;margin:0;padding:0;width:110px;text-align:left;font-size:12px;font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.jsplumb-chart .jtk-surface .designIconBig #removeDes{position:absolute;top:46px;right:15px;font-size:14px;color:#b9c0d8;margin:0;padding:0}.jsplumb-chart .jtk-surface .designIconBig #copeDes{position:absolute;top:45px;right:35px;font-size:14px;color:#b9c0d8;margin:0;padding:0}.jsplumb-chart .jtk-surface .trapezoid #removeDes{position:absolute;top:46px;right:-138px;font-size:14px;color:#b9c0d8;margin:0;padding:0}.jsplumb-chart .jtk-surface .trapezoid #copeDes{position:absolute;top:45px;right:-118px;font-size:14px;color:#b9c0d8;margin:0;padding:0}.jsplumb-chart .jtk-surface .designIconBig #pitchOnDes,.jsplumb-chart .jtk-surface .trapezoid #pitchOnDes{position:absolute;top:47px;right:60px;font-size:14px;color:#b9c0d8;margin:0;padding:0}.jsplumb-chart .jtk-surface .desingIconBig #markDes,.jsplumb-chart .jtk-surface .trapezoid #markDes{position:absolute;top:45px;right:20px;font-size:14px;color:#b9c0d8;margin:0;padding:0}.jsplumb-chart .jtk-surface .t1Style{border:2px solid #48c038;color:#48c038;border-radius:2px}.jsplumb-chart .jtk-surface .t2Style{border:2px solid #4586f3;color:#4586f3;border-radius:2px}.jsplumb-chart .jtk-surface .t3Style{border:2px solid #8367df;color:#8367df;border-radius:2px}.jsplumb-chart .jtk-surface .redStyle{border:2px solid red}.jsplumb-chart .jtk-surface .designIconBg{position:absolute;color:#fff!important}.jsplumb-chart .jtk-surface .designIconBig #removeDes:hover,.jsplumb-chart .jtk-surface .trapezoid #removeDes:hover{color:#ff4e4e}.jsplumb-chart .jtk-surface .designIconBig #copeDes:hover,.jsplumb-chart .jtk-surface .trapezoid #copeDes:hover{color:#ff4e4e}.jsplumb-chart .jtk-surface .designIconBig #pitchOnDes:hover{color:#ff4e4e}.jsplumb-chart .jtk-surface .bigrounded{border-radius:0 2rem 2rem 0;width:175px}.jsplumb-chart .jtk-surface .trapezoid{color:#4586f3;border-right:150px solid #fff;border-top:50px solid transparent;border-bottom:50px solid transparent;height:70px;width:0}.jsplumb-chart .jtk-surface .resize{width:8px;height:8px;background-color:#ddd;border:1px solid #000;position:absolute}.jsplumb-chart .jtk-surface .resize.left{top:50%;left:-4px;cursor:ew-resize}.jsplumb-chart .jtk-surface .resize.right{top:50%;right:-4px;cursor:ew-resize}.jsplumb-chart .jtk-surface .resize.top{top:-4px;left:50%;margin-left:-4px;cursor:ns-resize}.jsplumb-chart .jtk-surface .resize.bottom{bottom:-4px;left:50%;margin-left:-4px;cursor:ns-resize}.jsplumb-chart .jtk-surface .circle-right{width:100px;height:0;border:0 solid transparent;border-bottom:100px solid #669;border-top:100px solid #669;-moz-border-radius:0 100px 100px 0;-webkit-border-radius:0 100px 100px 0;border-radius:0 100px 100px 0}.jsplumb-chart .line-split{position:absolute;width:2px;background:#4586f3;right:-2px}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

/* style inject shadow dom */

var __vue_component__ = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, __vue_create_injector__, undefined, undefined);

var index = {
  install: function install(Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component("jsplumb-chart", __vue_component__);
  }
};

module.exports = index;
