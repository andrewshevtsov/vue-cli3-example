<template>
  <div class="edit-user">
    <h1 class="edit-user__title">Добавление пользователя {{ id }}</h1>

    <div class="alert alert-warning" v-if="!user">
      Загрузка...
    </div>
    <add-user v-else v-model="user" />
    <div class="container">
      <button type="submit" class="btn btn-primary" @click="saveUser">Сохранить</button>
      <pre>{{ user }}</pre>
    </div>
  </div>
</template>

<script>
import AddUser from '@/components/AddUser.vue'
import axios from 'axios'

export default {
  name: 'add-user',
  components: {
    'add-user': AddUser
  },
  data: () => ({
    user: null
  }),
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      axios
        .get('http://localhost:3004/users/' + this.id)
        .then(response => response.data)
        .then(user => {
          this.user = user
        })
    },
    saveUser() {
      axios.patch('http://localhost:3004/users/' + this.id, this.user).then(() => {
        this.$router.push('/users')
      })
    }
  }
}
</script>

<style>
.edit-user__title {
  margin-bottom: 20px;
}
</style>
