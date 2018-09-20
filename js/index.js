new Vue({
  	el: '#app',
	data:{
		urlDomain:'',
		webHost:'',   //www.yongche.com
		version_show_subdesc:'', // ？ true
		balance:'97',   //账户余额
		loading: true, //是否加载中
		project_id:'',  //项目ID， getActiveInfo接口返回，getDocument接口需要的参数
		is_black:false,  //是否是黑名单用户
		risk:1,  //风控类型字段，对应风控提示文案不同
		show_protocal:false,  //是否展示 购买协议
		show_confirm:false, //是否展示确认弹窗
		support_applepay:false, //是否支持apple pay
		ok_white:false, //控制input的字体颜色
		input_price:'',  //其他金额--输入的金额
		cur_tag_idx:9, //当前选中的金额等级标签，对应“tag_order”
		minRebateCharge:'',  //享有返现的最小充值额度  目前没有使用
		price_range:{   //可充值金额的最大最小值
			max:0,
			min:0
		},
		project_tags:[
            {
                "tag_id":4448,
                "tag_banner":"",
                "tag_picture":"https://i3.yongche.name/media/g3/M04/01/24/rBEDAlt-NHyIckZlAAIn58iurf4AAAnawMP-eEAAif_828.png",
                "show_name":"",
                "recharge":100,
                "activity_id":1053,
                "tag_order":1,
                "percent":40,
                "otherRewards":""
            },
            {
                "tag_id":4449,
                "tag_banner":"",
                "tag_picture":"https://i3.yongche.name/media/g3/M04/01/24/rBEDAlt-NI2IKfHTAAIzxJ_Ym7EAAAnawOGe8oAAjPc299.png",
                "show_name":"",
                "recharge":200,
                "activity_id":1053,
                "tag_order":2,
                "percent":40,
                "otherRewards":""
            },
            {
                "tag_id":4450,
                "tag_banner":"",
                "tag_picture":"https://i1.yongche.name/media/g3/M04/01/24/rBEDA1t-NJuIXJWLAAIwL-PvcRkAAAnawP5ETkAAjBH635.png",
                "show_name":"",
                "recharge":300,
                "activity_id":1053,
                "tag_order":3,
                "percent":40,
                "otherRewards":""
            },
            {
                "tag_id":4451,
                "tag_banner":"",
                "tag_picture":"https://i3.yongche.name/media/g3/M04/01/24/rBEDAlt-NKuIR_sBAAIy9jxykZYAAAncQAJZO4AAjMO188.png",
                "show_name":"",
                "recharge":400,
                "activity_id":1053,
                "tag_order":4,
                "percent":40,
                "otherRewards":""
            },
            {
                "tag_id":4452,
                "tag_banner":"",
                "tag_picture":"https://i2.yongche.name/media/g3/M03/01/24/rBEDA1t8-QeIT13iAAI2Y9ZXP1AAAAnHAPygsMAAjZ7859.png",
                "show_name":"",
                "recharge":900,
                "activity_id":1053,
                "tag_order":7,
                "percent":40,
                "otherRewards":""
            },
            {
                "tag_id":4453,
                "tag_banner":"",
                "tag_picture":"https://i1.yongche.name/media/g3/M03/01/24/rBEDA1t8-RuIa-BiAAIzbPiDLw8AAAnIgDLlO4AAjOE865.png",
                "show_name":"",
                "recharge":600,
                "activity_id":1053,
                "tag_order":5,
                "percent":40,
                "otherRewards":""
            },
            {
                "tag_id":4454,
                "tag_banner":"",
                "tag_picture":"https://i2.yongche.name/media/g3/M03/01/24/rBEDAlt8-T2IZlrOAAIxalR0dkQAAAnIgExLxgAAjGC265.png",
                "show_name":"",
                "recharge":800,
                "activity_id":1053,
                "tag_order":6,
                "percent":40,
                "otherRewards":""
            },
            {
                "tag_id":4455,
                "tag_banner":"",
                "tag_picture":"https://i3.yongche.name/media/g4/M02/01/24/rBEDBVt8-WiISuImAAIxk9FSSqcAAAnGQP2QyoAAjGr721.png",
                "show_name":"",
                "recharge":1000,
                "activity_id":1053,
                "tag_order":8,
                "percent":40,
                "otherRewards":""
            },
            {
                "levels":[
                    {
                        "min_price":0,
                        "max_price":100,
                        "percent":0,
                        "tag_banner":"",
                        "otherReward":""
                    },
                    {
                        "min_price":600,
                        "max_price":1000,
                        "percent":40,
                        "tag_banner":"",
                        "otherReward":""
                    },
                    {
                        "min_price":100,
                        "max_price":200,
                        "percent":40,
                        "tag_banner":"",
                        "otherReward":""
                    },
                    {
                        "min_price":200,
                        "max_price":600,
                        "percent":40,
                        "tag_banner":"",
                        "otherReward":""
                    }
                ],
                "tag_id":4456,
                "tag_banner":"",
                "tag_picture":"https://i2.yongche.name/media/g3/M04/01/24/rBEDAlt-MmWIJ6_CAAITKh-5SZAAAAnawKaI8oAAhNC013.png",
                "show_name":"",
                "recharge":0,
                "activity_id":1053,
                "tag_order":9,
                "percent":0,
                "otherRewards":""
            }
        ],
		protocal:{
                "title":"活动协议",
                "value":"<p>一、温馨提示</p><p>1、请您根据自己的消费情况进行购买，易到用车对购买次数不设任何限制；</p><p>2、本次活动仅限个人用户参与，企业用户不在此活动范围；</p><p>3、更多未尽事宜请使用注册手机号拨打客服电话：400-050-0090 进行咨询。</p><p> </p><p>二、活动时间</p><p>2018年7月1日至2018年12月31日。</p><p> </p><p>三、出行卡使用说明</p><p>1、“出行卡面额”是指用户实际购买的金额；</p><p>2、“账户余额”是指用户实际购买的金额（出行卡面额）加上参加易到用车不定期活动获得的奖励、赠送、奖励金额（活动金额）的总金额；</p><p>3、账户余额可用于支付易到用车除出租车车型外的所有车型服务的行程费用、高速费、停车费（用车费用），但不能用于支付行程中产生的其他第三方费用；</p><p>4、用户支付用车费用时将优先使用出行卡面额，出行卡面额使用完毕再使用活动金额支付用车费用；</p><p>5、账户余额有效期为自充值日起至用完之日；</p><p>6、发票金额根据易到实际收到的金额开具。</p><p> </p><p>四、会员成长值计算方法</p><p>1、使用账户余额支付的用车费用的行程，按照实际支付金额×100%的方式计算成长值;</p><p>2、使用银行卡、司机代缴费方式支付的用车费用的行程，按照实际支付金额×100%计算成长值。</p><p> </p><p>五、特别声明</p><p>1、账户余额不能转移或转赠；</p><p>2、出行卡仅提供给正当、合法使用叫车服务的易到用车客户。每位用户的易到用车账号、手机设备号和银行卡号都必须是唯一的，任何信息与其他用户重合都不能参加本活动；</p><p>3、若您存在移动设备上曾登录多个账号、个人信息与司机重合、存在风险订单等，可能无法参与购卡返现活动；</p><p>4、活动中，按照易到用车现行的风控规则，一旦发现作弊行为，易到用车有权追回作弊所得、回收账号使用权，并保留取消作弊人后续参与易到用车任何活动的权利，必要时会追究其法律责任；</p><p><strong>5、</strong><strong>易到用车网约车服务采用“分时定价”（不同城市、不同时间、不同车型的用车服务费不同），您在下单接受服务前，请您认真查看价格提示，确认无异议后下单。</strong></p><p> </p><p> </p>"
            },
		rule:{},
		popup:{},
		levels:[],
		
		
		showToast:false,  //吐司提示框的展示与否  false-不展示，true-展示
	  	toastMsg:'' //吐司提示信息
	},
	computed:{
		rewardlist_url:function(){  //我的奖品页面地址
			return "//"+this.webHost+"/cms/page/rebate4_list.html" ;
		},
		risk_text:function(){  //黑名单用户，风控提示文案
			var num  = this.risk;
			var text = '';
			if(num == 0) {
                text = '风控服务请求不到，或没有返回结果'
            } else if(num == -1) {
                text = '同一手机号、移动设备、支付账号仅能以一个账号参与活动，您的手机号已被其他账号参与过充值返现活动。'
            }
          	//else if(num == -2) {
            	//  	text = '同一手机号、移动设备、支付账号仅能以一个账号参与活动，您的身份证已被其他账号参与过充值返现活动。'
          	//}
            else if(num == -3) {
                text = '同一手机号、移动设备、支付账号仅能以一个账号参与活动，您的用户信息与上次充返记录不一致。'
            } else if(num == -4) {
                text = '同一手机号、移动设备、支付账号仅能以一个账号参与活动，您的移动设备已被其他账号参与过充值返现活动。'
            } else if(num == -5) {
                text = '同一手机号、移动设备、支付账号仅能以一个账号参与活动，您的信用卡已被其他账号参与过充值返现活动。'
            } else if(num <= -6) {
                text = '1、移动设备上曾登录过多个账号，存在安全隐患<br/>2、个人信息与司机重合<br/>3、存在风险订单'
            } else {
                text = '1、移动设备上曾登录过多个账号，存在安全隐患<br/>2、个人信息与司机重合<br/>3、存在风险订单'
            }
            return text;
		}
	},
	mounted: function(){
		this.loading = false;  //TODO
		this.sortProjectTags(this.project_tags); //充值金额按tag_order排序   //TODO  测试的
	},
	methods:{
		init:function (){
			this.checkLogin();
        },
        checkLogin:function(){ //检测登录状态
        		var vm = this;
        		$.ajax({
		        method:'get',
		        url:'/ajax/Rechargerebate/getRebateIndex?time='+new Date().getTime()
		    }).success(function(data){
		        if(data.code==200){  //登录，请求充返信息
                    	vm.version_show_subdesc = result.version_show_subdesc,
                		vm.webHost = result.webHost;
                		
                		vm.checkUserAgent(); //根据移动终端浏览器版本信息，检测是否支持apple pay
					vm.getActiveInfo();  //获取充返活动信息
					vm.getUserAmout();   //获取账户余额
              }else{  //未登录，跳转登录页面
                    window.location.href = 'yongche://login?done=' + encodeURIComponent(window.location.href);
                }
		    }).error(function(e){
		        alert('服务器异常，请稍后重试');   //TODO	
		    });
        },
        getActiveInfo:function(){ //获取充返活动信息
        		var vm = this;
        		$.ajax({
                method:'get',
                url:'/Ajax/Rechargerebate/getActiveInfo?time='+new Date().getTime()
            }).success(function(data){
                vm.dealActiveInfo(data);
                
            }).error(function(e){
                //alert('服务器异常，请稍后重试');
            });
        },
        dealActiveInfo:function(data){
        		if(data && data.code==200 && data.result){
        			var result = data.result;
        			this.is_black = result.is_black;  //是否黑名单用户
                this.risk = result.risk;  //风控类型
                this.project_id = result.project_id;  //项目ID，getDocument接口需要的参数
				
        			if(result.project_tags&&result.project_tags.length>0){
        				this.setPriceRange(result.project_tags);  //设置可充值的金额的最大最小值
        				
        				this.sortProjectTags(result.project_tags); //充值金额按tag_order排序
        				
        			}
        			
        		}
        },
        sortProjectTags:function(tags){   //充值金额按tag_order排序
			tags.sort(function(x,y){  //按照tag_order排序
                return x.tag_order-y.tag_order;
            });
            tags.forEach(function(tag,idx){  //增加优惠金额和总金额字段
            		tag.extra =  Number(tag.recharge) * Number(tag.percent)*0.01;
            		tag.total = tag.recharge + tag.extra;
            })
            this.project_tags = tags;  //充值等级标签--数组
        },
        setPriceRange:function(data){ //设置可充值的金额的最大最小值
        		var levels = $.map(data,function(e,i){
                return e.levels;
            });
            levels = levels.sort(function(a,b){ //排序
            		a.min_price-b.min_price;
            })
            var maxPrice = levels[0].max_price;
            var minPrice = levels[0].min_price;
            $.each(levels,function(i,e){
                if(e.max_price>maxPrice) maxPrice = e.max_price;
                if(e.min_price<minPrice) minPrice = e.min_price;
            });
    			this.price_range.max = maxPrice;
    			this.price_range.min = minPrice;
    			this.levels = levels;
        },
        
        getUserAmout:function(){  //获取账户余额
        		var vm = this;
        		$.ajax({
                method:'get',
                url:'/Ajax/Rechargerebate/getUserAmout?time='+new Date().getTime()
            }).success(function(data){
                if(data.code==200&&data.result){
                    vm.balance = data.result.amount;
                }
            }).error(function(e){
                //alert('服务器异常，请稍后重试');
            });
        },
        
        
        getDocument:function(){ //获取协议、规则、弹窗提示 的文案
        		var vm = this;
        		$.ajax({
                method:'get',
                url:'/ajax/Rechargerebate/getDocument?project_id='+this.project_id+'&time='+new Date().getTime()
            }).success(function (data) {
                if(data.code=200){
                    if(data.result&&data.result.project_document){
                        var document = data.result.project_document;
                        if(document&&document.popup){
			                vm.popup = document.popup;
			            }
			            if(document&&document.protocal){
			            		vm.protocal = document.protocal
			            }
			            if(document&&document.rule){
			                vm.rule = document.rule;
			            }
                    }
                    if(data.result&&data.result.angle_mark){   //？不知道做什么的  TODO
                        //rebatePage.newUserPrivilege.css('visibility','visible');
                        //rebatePage.newUserPrivilege.css('background-image','url('+data.result.angle_mark+')');
                    }
                }
                vm.loading = false;
            }).error(function (e) {
                //alert('服务器异常，请稍后重试');
            })
        },
        payFn:function(isApplePay){
        		var amount = this.project_tags[this.cur_tag_idx].recharge;  //当前所选分类的金额值
        		if(amount==0){  //其他金额recharge=0，取手动输入的金额
        			if(this.input_price==''){   //没有输入
        				amount = 0;
        			}else{
        				amount = this.input_price;
        			}
        			
        			
        		}
        		
        		
        		var params = {
        			amount: 100,
        			tag_id: this.project_tags[this.cur_tag_idx].tag_id,
        			activity_id: this.project_tags[this.cur_tag_idx].activity_id
        		}
        		
        		
        		var url = this.setPayUrl(params,isApplePay);
        		console.log(url);
        		//window.location.href = url;
        },
        
        chooseTag:function(idx){  //选择金额标签
        		this.cur_tag_idx = idx;
        },
        showProtocal:function(){  //展示协议详情页面
        		this.show_protocal = true;
        },
        closeMask:function(){  //关闭协议详情页面
        		this.show_protocal = false;
        },
        
        watchInput:function(){
        		var val = this.input_price;
        		var reg = /^[1-9]\d*$/;
        		if(reg.test(val)){ //不以0开头
                this.ok_white = true;  //控制输入框字体的颜色，--白色
            }else{// 以0开头
            		this.ok_white = false;  //控制输入框字体的颜色，--透明
            		val = '';
            }
        		this.input_price = val;
        },
        judgeLevel:function(inputNum){ //判断输入框输入的金额在哪个等级范围内
        		var levels = this.levels;
        		var levelObj = '';
        		levels.forEach(function(level,idx){
        			if(inputNum >= level.min_price && inputNum < level.max_price){
        				levelObj = level;
        			}
        		})
        		var percent = levelObj.percent;
        		
        },
        setPayUrl:function(params,isApplePay){
        		var url ="", accountDesc = "";
        		if (isApplePay) {//使用Apple Pay方式
                url += "yongche://applePayPaymentRecharge?";
            }else {
                url += "yongche://paymentStore?";
            }
            if (this.version_show_subdesc) { //当前版本是否支持设置 “需支付*元”
                accountDesc+=encodeURIComponent("需支付" + params.amount + "元");
            }
            if (this.is_black) {//是黑名单用户
                url += "activity_id=&amount=" + params.amount + "&pay_type=3&callback=rebate_result&activity_token="
            }else {
                var activity_token = this.project_id +'|'+ params.tag_id +'|1';    //例子：  "255|684|1"
                activity_token =  encodeURIComponent(activity_token);
                var data = {order_id:0};
                data = encodeURIComponent(JSON.stringify(data));
                url += "from=2&activity_id=" + params.activity_id + "&amount=" + params.amount + "&amount_desc=" + accountDesc + "&pay_type=3&callback=rebate_result&activity_token=" + activity_token +'&data='+data;
            }
            
            function rebate_result(){  //?TODO
            	
            }
            
            return url;
        		
        },
        checkUserAgent:function () {   //根据移动终端浏览器版本信息，检测是否支持apple pay
        		var u = navigator.userAgent;
			var browser = {
                versions: function () {
                    return { //移动终端浏览器版本信息
                        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                        iPad: u.indexOf('iPad') > -1 //是否iPad
                    };
                }()
            };
            if(u.indexOf("YongChe")>0){
                var yc_version = u.substr(u.indexOf("YongChe")).split(" ")[0].split("/")[1]
                yc_version = yc_version.split(".");
                if((yc_version[0]>7)||(yc_version[0]=7 && yc_version[1] >=1 && yc_version[2]>=5)){  //7.1.5及以上版本
                    if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {  //协议验证是否支持apple pay
		                window.location.href = "yongche://checkapplepay?callback=appPay_callback";
		            }
                }
            } else {
                console.log("非APP")
            }
            
            var vm = this;
            appPay_callback=function (status) {//验证是否支持apple pay的回调函数
	            vm.support_applepay = status == 1 ? true : false;  //根据是否支持Apple Pay，设置对应的购买按钮
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
	watch:{
		input_price:function(){
			
		}
	}
})