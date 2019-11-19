<template>
  <div class="appdown" v-if="show">
      <img src="@/assets/img/zhiyin.png" alt />
      <div>
        <p>1.点击右上角</p>
        <p>2.在浏览器中打开</p>
      </div>
    </div>
</template>

<script>
//import 《组件名称》 from '《组件路径》';

export default {
  props:{
    show:{
       type:Boolean,
       default:false
    }
  },
  data() {
    return {

    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //import引入的组件需要注入到对象中才能使用
  components: {

  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {

  },
  //方法集合
  methods: {
  },
  //生命周期 - 创建之前
  beforeCreate() {},
  //生命周期 - 挂载之前
  beforeMount() {},
  //生命周期 - 更新之前
  beforeUpdate() {},
  //生命周期 - 更新之后
  updated() {},
  //生命周期 - 销毁之前
  beforeDestroy() {},
  //生命周期 - 销毁完成
  destroyed() {},
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated() {},
}
</script>
<style scoped>
.appdown{
  width: 100%;
  min-height: 100%;
  position: absolute;
  top:0;
  z-index:99;
  background:rgba(0, 0, 0, .4);

}
.appdown>img{
	width: 200px;
	height: 200px;
  position: absolute;
  right: 40px;
  top:50px;
}
.appdown>div{
  position: absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%);
	width:300px;
	height: 300px;


}
.appdown>div>p{
  line-height: 35px;
  text-align: center;
  font-size: 18px;
	width: 100%;
	color: #fff;
}
</style>