<template>
  <div class="edit-user">
    <h1 class="edit-user__title">Редактирование пользователя</h1>
    <edit-user></edit-user>
  </div>
</template>

<script>
import EditUser from '@/components/EditUser.vue'

export default {
  name: 'edit',
  components: {
    'edit-user': EditUser
  }
}
</script>

<style>
.edit-user__title {
  margin-bottom: 20px;
}
</style>
