<template>
  <div class="userBox">
    <personal-header :title="title"></personal-header>
    <div class="list">
      <p class="username">你的生日</p>
      <div class="inptbox">
        <input
          type="text"
          placeholder="选择生日"
          @click="setDate"
          onfocus="this.blur()"
          v-model="birthday"
        />
      </div>
    </div>
  </div>
</template>

<script>
import personalHeader from '../../common/header.vue'
export default {
  data () {
    return {
      title: '个人信息',
      birthday: '1990-01-01'
    }
  },
  components: {
    personalHeader
  },
  methods: {
    setDate () {
      this.$picker.show({
        type: 'datePicker',
        date: '2000-06-15',
        endTime: '2018-01-01',
        startTime: '1940-01-01',
        onOk: data => {
          this.birthday = data
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.userBox {
  padding-top: 1.333333rem; /* 100/75 */
  background-color: #fafbfb;
  padding-bottom: 1.333333rem /* 100/75 */;
}
.list {
  padding: 0 0.48rem /* 36/75 */;

  .username {
    line-height: 1.2rem; /* 90/75 */
    font-size: 0.4rem /* 30/75 */;
    color: #666666;
  }
  .inptbox {
    height: 1rem /* 75/75 */;
    line-height: 1rem;
    border-bottom: 1px solid #e6e6e6;
  }
  input {
    border: none;
    outline: none;
    font-size: 0.453333rem /* 34/75 */;
    color: #000;
    height: 80%;
  }
}
</style>
