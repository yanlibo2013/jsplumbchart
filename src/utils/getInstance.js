/* eslint-disable */
// import plumbGather from "jsplumb";

export default function(options) {
  // let instance = plumbGather.jsPlumb.getInstance({
  //   Container: r
  // });

  let instance = options.jsPlumb.getInstance({
    Container: options.container
  });

  // let instance = options.jsPlumb.getInstance({});
  // instance.setContainer(options.container);

  instance.bind("mouseover", function(c) {
    options.modifyOverConnectStatus(true);
  });

  instance.bind("mouseout", function(c) {
    options.modifyOverConnectStatus(false);
  });

  instance.bind("click", function(c) {
    // instance.deleteConnection(c); //instance
    options.delConnections(c, () => {
      options.modifyOverConnectStatus(false);
      instance.deleteConnection(c); //instance
      //instance.detach(c);
    });

    c.preventDefault();
  });

  instance.bind("connection", function(c) {
    options.modifyOverConnectStatus(false);
    options.completedConnect();
  });

  // 连接线删除时触发
  //instance.bind("connectionDetached", function(c) {});

  return instance;
}
