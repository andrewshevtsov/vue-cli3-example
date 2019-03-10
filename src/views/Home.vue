<template>
  <div class="home">
    <h2>Список пользователей</h2>
    <div v-if="!users.length" class="alert alert-warning">
      Данных еще нет, получаем...
    </div>
    <users-list v-else v-bind:users="users" v-on:remove="removeFromList"></users-list>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue'

export default {
  name: 'home',
  components: {
    'users-list': UserList
  },
  data: function() {
    return {
      users: []
    }
  },
  mounted() {
    this.users = [
      {
        id: 0,
        isActive: true,
        balance: '$2,762.84',
        picture: 'http://placehold.it/128x128',
        age: 38,
        accessLevel: 'user',
        firstName: 'Carter',
        lastName: 'Garza',
        company: 'NETILITY',
        email: 'carter.garza@netility.ca',
        phone: '+7 (891) 504-2384',
        address: '845 Herkimer Court, Herald, North Carolina, 6042',
        about:
          'Amet laborum aliquip tempor voluptate qui non. Enim sunt nisi Lorem sint culpa cillum ex magna non eu. Aute anim exercitation proident voluptate aliquip quis nulla enim nulla duis cupidatat. Consequat Lorem exercitation nulla qui exercitation ad cupidatat reprehenderit qui.',
        registered: '20.03.2016'
      },
      {
        id: 1,
        isActive: true,
        balance: '$3,859.02',
        picture: 'http://placehold.it/128x128',
        age: 22,
        accessLevel: 'guest',
        firstName: 'Lee',
        lastName: 'Mayo',
        company: 'EGYPTO',
        email: 'lee.mayo@egypto.biz',
        phone: '+7 (835) 531-2943',
        address: '725 Lake Street, Carrizo, Washington, 2879',
        about:
          'Fugiat pariatur ut ea occaecat magna amet reprehenderit dolor consectetur occaecat exercitation pariatur do id. Pariatur reprehenderit nulla et Lorem amet aliquip quis nulla. Consequat nostrud irure est ea est Lorem in occaecat aute est.',
        registered: '05.11.2018'
      },
      {
        id: 2,
        isActive: true,
        balance: '$2,215.72',
        picture: 'http://placehold.it/128x128',
        age: 40,
        accessLevel: 'admin',
        firstName: 'Eula',
        lastName: 'Cantrell',
        company: 'COREPAN',
        email: 'eula.cantrell@corepan.tv',
        phone: '+7 (966) 598-2311',
        address: '610 Lois Avenue, Saddlebrooke, Montana, 1946',
        about:
          'Adipisicing mollit aliqua esse nulla magna incididunt amet cupidatat ex est aute cupidatat esse nulla. Culpa eu sit ut Lorem anim dolore id. Magna anim quis ipsum irure sit esse reprehenderit ad nulla officia voluptate duis proident. Aliqua ut id fugiat amet esse ad eu.',
        registered: '09.05.2018'
      },
      {
        id: 3,
        isActive: true,
        balance: '$2,511.26',
        picture: 'http://placehold.it/128x128',
        age: 24,
        accessLevel: 'guest',
        firstName: 'Norma',
        lastName: 'Thomas',
        company: 'FOSSIEL',
        email: 'norma.thomas@fossiel.com',
        phone: '+7 (814) 598-3335',
        address: '225 Schweikerts Walk, Cucumber, Rhode Island, 4157',
        about:
          'Incididunt officia reprehenderit irure esse et do eu elit voluptate et amet amet ad. Ex culpa occaecat consequat est sint voluptate laborum ullamco nisi. Magna dolore occaecat ut commodo sit sint mollit id in sit mollit. Pariatur pariatur proident velit voluptate irure mollit. Nulla ut nostrud adipisicing anim duis sit proident ex nostrud in in laborum ipsum quis.',
        registered: '08.09.2015'
      },
      {
        id: 4,
        isActive: false,
        balance: '$2,905.94',
        picture: 'http://placehold.it/128x128',
        age: 36,
        accessLevel: 'guest',
        firstName: 'Selma',
        lastName: 'Atkins',
        company: 'ISBOL',
        email: 'selma.atkins@isbol.info',
        phone: '+7 (963) 421-2309',
        address: '929 Hubbard Street, Gracey, New Mexico, 4121',
        about:
          'Dolore esse fugiat anim ullamco aute mollit minim irure. Aliqua eiusmod voluptate dolore ex deserunt eu irure est reprehenderit reprehenderit. Nulla amet est ipsum adipisicing irure nisi elit non pariatur et.',
        registered: '12.02.2015'
      }
    ]
  },
  methods: {
    removeFromList(id) {
      this.users = this.users.filter(function(item) {
        return item.id !== id
      })
    }
  }
}
</script>
