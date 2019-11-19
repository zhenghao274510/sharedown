<template>
  <div class="list" v-cloak>
    <img src="@/assets/img/3.png" alt class="img" />
    <span class="btn" @click="download">点击下载</span>
    <down-zhi :show="show"></down-zhi>
  </div>
</template>

<script>
import downZhi from "@/compoments/downhide";
export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    downZhi
  },
  mounted() {
    var u = navigator.userAgent;
    var ua = navigator.userAgent.toLowerCase(); //获取判断用的对象
    var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (ua.match(/MicroMessenger/i) == "micromessenger"|| isiOS) {
      //   微信环境
      this.show = true;
    } else {
			this.download();
    }
  },
  methods: {
    download() {
			let a = document.createElement("a");
			// apk链接  修改
      a.href = "http://wx.yugong101.com/yugonghui.apk";
      a.click();
    }
  }
};
</script>

<style scoped="scoped">
[v-cloak] {
  display: none !important;
}
.list {
  width: 100%;
  height: 100%;
  position: relative;
}
.img {
  position: absolute;
  top: 0;
	left: 0;
	width:100%;
	height:100%;
}
.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #72d241;
  color: #fff;
  text-decoration: none;
}
</style>
