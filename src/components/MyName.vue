<template>
  <h1>Enter your name</h1>
  <div>{{ firstName }} - <span style="color: #535bf2">{{ lastName }}</span></div>
</template>

<script>
export default {
  name: 'MyName',
  data: () => ({
    firstName: 'Anton',
    lastName: 'Shevchenko'
  })
};
</script>

<style scoped>

</style>