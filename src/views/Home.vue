<template>
  <div class="home">
    <button type="button" v-on:click="toggleList">Показать/скрыть список</button>
    <h2>Список пользователей</h2>
    <div v-if="!users.length" class="alert alert-warning">
      Данных еще нет, получаем...
    </div>
    <template v-else>
      <users-list v-if="isListVisible" v-bind:users="users" v-on:remove="removeFromList">
      </users-list>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  name: 'home',
  components: {
    'users-list': UserList
  },
  data: function() {
    return {
      isListVisible: true,
      users: []
    }
  },
  watch: {
    isListVisible: {
      immediate: true,
      handler: function() {
        console.clear()
        console.log('скрыть/показать список', this.isListVisible)
      }
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3004/users/')
        .then(response => response.data)
        .then(users => {
          this.users = users
        })
    },
    toggleList() {
      this.isListVisible = !this.isListVisible
    },
    removeFromList(id) {
      this.users = this.users.filter(function(item) {
        return item.id !== id
      })
    }
  }
}
</script>
