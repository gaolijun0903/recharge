new Vue({
  	el: '#app',
	data:{
		urlDomain:'',
		balance:'97',
		showToast:false,  //吐司提示框的展示与否  false-不展示，true-展示
	  	toastMsg:'' //吐司提示信息
	},
	mounted: function(){
		
	},
	methods:{
		init:function (){
            if(navigator.userAgent.indexOf("YongChe")>0){
                var version = navigator.userAgent.substr(navigator.userAgent.indexOf("YongChe")).split(" ")[0].split("/")[1]
                //console.log(version)
                var isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1; //android终端
                var isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                version = version.split(".");
                if((version[0]>7)||(version[0]=7 && version[1] >=1&&version[2]>=5)){
                    this.checkIsApple();
                }
            } else {
                console.log("非APP")
            }
            //start(initPrivilegeTypes);
        },
        checkIsApple:function () {//检测是否是apple设备
            var browser = {
                versions: function () {
                    var u = navigator.userAgent, app = navigator.appVersion;
                    return { //移动终端浏览器版本信息
                        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                        iPad: u.indexOf('iPad') > -1 //是否iPad
                    };
                }()
            };

            if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {
                window.location.href = "yongche://checkapplepay?callback=appPay_callback";
            }
            var vm = this;
            appPay_callback=function (status) {//验证是否支持apple pay的回调函数
	            var isApple = false;
	            if (status == 1) {
	                isApple = true;
	            }
	            vm.setPayType(isApple);
	        }
        },
        setPayType:function (isApple) {//是否支持apple pay
            
            if (isApple) {
                normalArea.hide();
                appleArea.show();
            }
            else {
                appleArea.hide();
                normalArea.show();
            }
        },
        
        
        
        
        
        
        
        
		isIpX:function(){
			var u = navigator.userAgent;
		    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		    if (isIOS) {        
		        if (screen.height == 812 && screen.width == 375){
		            return true;
		        }else{
		            return false
		        } 
		    }
		},
		showToastFn:function(msg,cb){  //toast提示
			var vm = this;
			vm.showToast = true;
     		vm.toastMsg = msg;
     		setTimeout(function(){
     			vm.showToast = false;
     			if(cb){ cb(); }
     		},2000)
		},
		getCookie:function (name){//读取cookie
			var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
			if(arr=document.cookie.match(reg)){
				return unescape(arr[2]);
			}else{
				return null;
			}
		}
  	},
	
})