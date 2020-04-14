<template>
  <div class="error404">
    <h4>
      ERROR 404 : Page Not Found
    </h4>
    <router-link to="/" tag="button" class="btn btn-danger">Вернуться на главную</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.error404 {
  text-align: center;
}
.error404 h4{
  margin-top:300px;

  color:#fff;
}
</style>
