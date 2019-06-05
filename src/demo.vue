<template>
  <div>
    <!-- select 下拉框 -->
    <el-select v-model="pvalue" placeholder="省份">
      <el-option v-for="item in province" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <!-- select 下拉框 -->
    <!-- :disabled="!city.length" 用来监听城市有没有值没有值无法选中 -->
    <el-select v-model="cvalue" :disabled="!city.length" placeholder="城市">
      <el-option v-for="item in city" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pvalue: '',
      province: [],
      cvalue: '',
      city: []
    }
  },
  // 省份的双向绑定原理触发 获取到城市的值然后渲染到页面
  watch: {
    async pvalue (newp) {
      let res = await this.$axios.post(XXXXXX + newp)
      this.city = res.city.map(item => {
        return {
          value: item.id,
          label: item.name
        }
      })
    }
  },
  // 刷新页面获取到省份
  async created () {
    let res = await this.$axios.post(XXXXXX)
    // 遍历数组加入到省份里面
    this.city = res.city.map(item => {
      return {
        province: item.id,
        label: item.name
      }
    })
  }
}
</script>

<style>
</style>
