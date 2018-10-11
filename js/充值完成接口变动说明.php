<?php
1、充值完成接口：
	a、接口地址：https://testing-h5.yongche.org/ajax/Rechargerebate/complete
	b、接口返回内容：现在只会返回recharge_amount字段，其他如：裂变红包入口等信息，则需要调用下面的接口。
			  如：{
					  "code": 200,
					  "result": {
					    "recharge_amount": 0.01
					  }
				  }

2、充值完成获取扩展信息接口，查询"裂变红包"信息等(新增)：
	a、接口地址：https://testing-h5.yongche.org/ajax/Rechargerebate/completeExtInfo
	b、请求参数(和“充值完成接口”的参数一致，只是增加了recharge_amount参数，该参数由上面的接口返回)：
			{"transaction_id":"2000457212","is_joined":"0","activity_id":"1053","project_id":"265","recharge_amount": "0.01"}

	c、去除"易到鼓励金"相关返回字段，如：glju_total_amount、glj_sendtime、gljul_amount

	d、如果“recharge_amount”参数为空，则返回结果如下：
	{
	  "code": 618,
	  "msg": “交易失败”
	}
?>