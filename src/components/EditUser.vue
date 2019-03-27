<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="first-name-field">Имя</label>
        <input
          type="text"
          class="form-control"
          id="first-name-field"
          placeholder="enter first name"
        />
      </div>
      <div class="form-group">
        <label for="last-name-field">Фамилия</label>
        <input
          type="text"
          class="form-control"
          id="last-name-field"
          placeholder="enter last name"
        />
      </div>
      <div class="form-group">
        <label for="balance-field">Баланс</label>
        <input
          type="text"
          class="form-control"
          id="balance-field"
          aria-describedby="balance-help"
          placeholder="enter balance"
        />
        <small id="balance-help" class="form-text text-muted">
          We'll never share your balance with anyone else :)
        </small>
      </div>
      <div class="form-group">
        <label for="phone-field">Телефон</label>
        <input type="tel" class="form-control" id="phone-field" placeholder="phone" />
      </div>
      <div class="form-group">
        <label for="address-field">Адрес</label>
        <input
          type="text"
          class="form-control"
          id="address-field"
          aria-describedby="addressHelp"
          placeholder="enter address"
        />
        <small id="addressHelp" class="form-text text-muted">
          We'll never share your address with anyone else.
        </small>
      </div>
      <div class="form-group">
        <label for="company-field">Компания</label>
        <input type="text" class="form-control" id="company-field" placeholder="company" />
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          Подтверждаю корректность заполненных данных
        </label>
      </div>
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>
  </div>
</template>

<style>
.form-check {
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
}
</style>
