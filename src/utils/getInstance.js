/* eslint-disable */
import plumbGather from "jsplumb";

export default function(options) {
  let instance = plumbGather.jsPlumb.getInstance({
    Container: options.container
  });

  instance.bind("click", function(c) {
    // instance.deleteConnection(c); //instance
    options.delConnections(c, () => {
      instance.deleteConnection(c); //instance
    });
  });

  instance.bind("connection", function(c) {
    options.completedConnect();
  });

  // 连接线删除时触发
  //instance.bind("connectionDetached", function(c) {});

  return instance;
}
