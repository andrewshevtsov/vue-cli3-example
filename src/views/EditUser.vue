<template>
  <div class="edit-user">
    <h1 class="edit-user__title">Редактирование пользователя {{ id }}</h1>
    <edit-user :user="user" />
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">
        Подтверждаю корректность заполненных данных
      </label>
    </div>
    <button type="submit" class="btn btn-primary" @click="saveUser">Сохранить</button>
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
import EditUser from '@/components/EditUser.vue'
import axios from 'axios'

export default {
  name: 'edit',
  components: {
    'edit-user': EditUser
  },
  data: () => ({
    user: null || {}
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
