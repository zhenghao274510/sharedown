const get = (key) => {
  if (typeof key == String) {
    if (wx.getStorageSnyc(key)) {
      return JSON.parse(wx.getStorageSnyc(key))
    }
  }
}
const put=(key,data)=>{
  if(typeof key==String){
    wx.setStorageSync(key,JSON.stringify(data))
  }
}
const remove=(key)=>{
  if(typeof key==String){
    wx.removeStorageSync(key)
  }
}
//   公众号  beecloud  等同
const onBridgeReady=(data)=> {
  // console.log(this.newcardnum);
  WeixinJSBridge.invoke(
    "getBrandWCPayRequest",
    {
      appId: data.appId, //公众号名称，由商户传入
      timeStamp: data.timeStamp, //时间戳，自1970年以来的秒数
      nonceStr: data.nonceStr, //随机串
      package: data.prepay,
      signType: data.signType, //微信签名方式：
      paySign: data.paySign //微信签名
    },
    function(res) {
      if (res.err_msg == "get_brand_wcpay_request:ok") {
        // 使用以上方式判断前端返回,微信团队郑重提示：
        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
        console.log("支付成功");
      
      } else {
        //   支付失败
      }
    }
  );
}
//   微信  
const PayBywx=(timeStamp, nonceStr, prepay_id, signType, paySign)=>{
  wx.requestPayment({
    timeStamp: timeStamp,
    nonceStr: nonceStr,
    package: prepay_id,
    signType: signType,
    paySign: paySign,
    success(res) {
     
      console.log("支付成功!");
    },
    fail(res) {
      
      wx.showToast({
        title: "取消交易",
        icon: "none"
      });
  
    }
  });
}
