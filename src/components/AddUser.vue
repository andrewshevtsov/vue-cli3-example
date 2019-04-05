<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="first-name-field">Имя</label>
        <input type="text" class="form-control" id="first-name-field" />
      </div>
      <div class="form-group">
        <label for="last-name-field">Фамилия</label>
        <input type="text" class="form-control" id="last-name-field" />
      </div>
      <div class="form-group">
        <label for="balance-field">Баланс</label>
        <input
          type="text"
          class="form-control"
          id="balance-field"
          aria-describedby="balance-help"
        />
        <small id="balance-help" class="form-text text-muted">
          We'll never share your balance with anyone else :)
        </small>
      </div>
      <div class="form-group">
        <label for="phone-field">Телефон</label>
        <input type="tel" class="form-control" id="phone-field" />
      </div>
      <div class="form-group">
        <label for="address-field">Адрес</label>
        <input type="text" class="form-control" id="address-field" aria-describedby="addressHelp" />
        <small id="addressHelp" class="form-text text-muted">
          We'll never share your address with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="company-field">Компания</label>
        <input type="text" class="form-control" id="company-field" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddUser',
  props: {
    value: {
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
      handler: 'updateUser'
    }
  },
  mounted() {
    this.localUser = Object.assign({}, this.value)
  },
  methods: {
    updateUser() {
      this.$emit('input', Object.assign({}, this.localUser))
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
