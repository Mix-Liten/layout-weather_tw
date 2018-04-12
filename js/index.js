var app = new Vue({
  el: "#app",
  data: {
    filter: "",
    place_data: [],
    timeStr:''
  },
  computed: {
    now_area: function() {
      var vobj = this;
      var result = this.place_data.filter(function(obj) {
        return obj.name == vobj.filter;
      });
      if (result.length == 0) {
        return vobj.place_data[0];
      }
      return result[0];
    }
  },
  mounted: function() {
    var vobj = this;
    $.get(
      "https://api.openweathermap.org/data/2.5/group?id=1668284,6724654,7280290,1675151,1668399,1548565,7280289,1674197,1667905,1671971,1671564,1665194,1668352,1670479,1668295,1674502,1670651,1672228,1678836,1679136&lang=zh_TW&units=metric&APPID=b1ecbccd638b763d489602917ba47cc3").then(function(res) {
      vobj.place_data = res.list;
      vobj.default_data = res.list[0];
    });
  }
});

$("path").mouseenter(function(e) {
  var tagname = $(this).attr("class");
  app.filter = tagname;
});