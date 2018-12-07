 isIOS9() {
      //获取固件版本
      var getOsv = function () {
        var reg = /OS ((\d+_?){2,3})\s/;
        if (navigator.userAgent.match(/iPad/i) || navigator.platform.match(/iPad/i) || navigator.userAgent.match(/iP(hone|od)/i) || navigator.platform.match(/iP(hone|od)/i)) {
          var osv = reg.exec(navigator.userAgent);
          if (osv.length > 0) {
            return osv[0].replace('OS', '').replace('os', '').replace(/\s+/g, '').replace(/_/g, '.');
          }
        }
        return '';
      };
      var osv = getOsv();
      var osvArr = osv.split('.');
      //初始化显示ios9引导
      if (osvArr && osvArr.length > 0) {
        if (parseInt(osvArr[0]) >= 9) {
          return true
        }
      }
      return false
    },