<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="first-name-field">Имя</label>
        <input
          type="text"
          class="form-control"
          id="first-name-field"
          v-model="localUser.firstName"
        />
      </div>
      <div class="form-group">
        <label for="last-name-field">Фамилия</label>
        <input type="text" class="form-control" id="last-name-field" v-model="localUser.lastName" />
      </div>
      <div class="form-group">
        <label for="balance-field">Баланс</label>
        <input
          type="text"
          class="form-control"
          id="balance-field"
          aria-describedby="balance-help"
          v-model="localUser.balance"
        />
        <small id="balance-help" class="form-text text-muted">
          We'll never share your balance with anyone else :)
        </small>
      </div>
      <div class="form-group">
        <label for="phone-field">Телефон</label>
        <input type="tel" class="form-control" id="phone-field" v-model="localUser.phone" />
      </div>
      <div class="form-group">
        <label for="address-field">Адрес</label>
        <input
          type="text"
          class="form-control"
          id="address-field"
          aria-describedby="addressHelp"
          v-model="localUser.address"
        />
        <small id="addressHelp" class="form-text text-muted">
          We'll never share your address with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="company-field">Компания</label>
        <input type="text" class="form-control" id="company-field" v-model="localUser.company" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EditUser',
  model: {
    prop: 'user',
    event: 'megaEvent'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    localUser: {},

    accessList: ['guest', 'user', 'admin']
  }),
  watch: {
    localUser: {
      deep: true,
      handler: 'updateUser'
    }
  },
  mounted() {
    this.localUser = Object.assign({}, this.user)
  },
  methods: {
    updateUser() {
      this.$emit('megaEvent', Object.assign({}, this.localUser))
    }
  }
}
</script>

<style>
.form-check {
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
}
</style>
