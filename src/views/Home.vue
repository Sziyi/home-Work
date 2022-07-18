<template>
  <div class="home">
    <songButton>默认按钮</songButton>
    <songButton type="primary">成功按钮</songButton>
    <songButton type="danger">危险按钮</songButton>
    <songButton type="warning" @click="handleSubmit">警告按钮</songButton>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      flag: false
    }
  },
  components: {
    songButton: () => import('../components/button/index.vue')
  },
  methods: {
    handleSubmit() {
      this.flag = true
      setTimeout(() => {
        console.log('123')
        this.flag = false
      }, 3000)
    }
  }
}
</script>
