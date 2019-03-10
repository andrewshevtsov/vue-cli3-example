<template>
  <div>
    <table id="users-table" class="table">
      <caption class="table__caption">
        Всего пользователей:
        {{
          totalUsers
        }}
      </caption>
      <thead class="table__header">
        <tr class="table__row">
          <th class="table__header-cell">Id</th>
          <th class="table__header-cell">Last Name</th>
          <th class="table__header-cell">First Name</th>
          <th class="table__header-cell">Middle Name</th>
          <th class="table__header-cell">User Photo</th>
        </tr>
      </thead>
      <tbody class="table__body">
        <tr v-for="item in users" v-bind:key="item.id" class="table__row">
          <td class="table__body-cell">
            <button v-on:click="remove(item.id)" type="button"># {{ item.id }}</button>
          </td>
          <td class="table__body-cell">{{ item.lastName | toUppercase }}</td>
          <td class="table__body-cell">{{ item.firstName | toUppercase }}</td>
          <td class="table__body-cell">{{ item.middleName | toUppercase }}</td>
          <td class="table__body-cell">
            <img v-bind:src="item.avatarUrl || defaultImage" width="100px" alt="Avatar" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  filters: {
    toUppercase(value) {
      if (!value) return ''
      value = value.toString()
      return value.toUpperCase()
    }
  },
  computed: {
    totalUsers: function() {
      return this.users.length
    },
    defaultImage() {
      return 'https://via.placeholder.com/100'
    }
  },
  methods: {
    remove: function(id) {
      this.$emit('remove', id)
    }
  }
}
</script>
