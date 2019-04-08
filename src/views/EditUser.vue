<template>
  <div class="edit-user">
    <h1 class="edit-user__title">Редактирование пользователя {{ id }}</h1>
    <div class="container">
      <div class="alert alert-warning" v-if="!user">
        Загрузка...
      </div>
      <edit-user v-else v-model="user" />
      <button type="submit" class="btn btn-primary" @click="saveUser">Сохранить</button>
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>

<script>
import axios from '@/axios.js'

export default {
  name: 'edit',
  components: {
    EditUser: () => import('@/components/EditUser.vue')
  },
  data: () => ({
    user: null
  }),
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return '/users/' + this.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get(this.url)
        .then(response => response.data)
        .then(user => {
          this.user = user
        })
    },
    saveUser() {
      axios.patch(this.url, this.user).then(() => this.$router.push('/users'))
    }
  }
}
</script>

<style>
.edit-user__title {
  margin-bottom: 20px;
}
</style>
