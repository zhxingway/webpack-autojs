
//定义要编译的项目，compile， true 表示编译，false，不编译
var projects = [ //项目数组，放的是每一个要编译的项目，
  {
    id: 1, //项目号
    compile: true, //是否编译
    name: "zxf_test", //项目名称，需要和文件夹名相同
    main: "./zxf_test.js" //主入文件，入口文件，按autojs目录，一般和project.json 同级
  },
  {
    id: 2, //项目号
    compile: false, //是否编译
    name: "sdk", //项目名称，需要和文件夹名相同
    main: "./utils.js" //主入文件，入口文件，按autojs目录，一般和project.json 同级
  },
  {
    id: 3, //项目号
    compile: true, //是否编译
    name: "single", //项目名称，需要和文件夹名相同
    main: "./single.js" //主入文件，入口文件，按autojs目录，一般和project.json 同级
  }
]

var config = {
  watch: "deploy", //watch模式的时候，是自动deploy（部署）、或 rerun（重新运行）、还是none（不操作），
  baseDir: "./work", //放置多个项目的工作目录，每一个项目独立文件夹，
  base64: false,
  projectPrefix: "", //项目编译后，项目目录的前缀，如配置为b_ 则demo项目编译后名称为b_demo ，当希望项目的源码和编译和的代码都保存在手中，就有必要配置这个
  advancedEngines: true,
  header: "header.txt",  //这个文件中放了你可以放一些声明、说明等注释内容
  base64RandomStrLength: 100,
  target: "node", // web || node
  projects: projects,
};

module.exports = config;
