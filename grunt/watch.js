module.exports = {
  less: {
    files:["src/less/**/*.less"],
    tasks:["less"]
  },
  js:{
    files:["src/js/**/*.js"],
    tasks:["concat","uglify"]
  }
};