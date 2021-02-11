<template>
  <v-app>
    <v-navigation-drawer
      app
      color="green"
      dark
      expand-on-hover
      hide-overlay
      permanent
      right
    >
      <v-list
        nav shaped dense
      >
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>SocialLink</v-list-item-title>
            <v-list-item-subtitle>Сергей Чернышев</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="my-3"></v-divider>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">Главная</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-account-box</v-icon>
          </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">Мой профиль</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/users">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple-plus</v-icon>
          </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-left">Найти друзей</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main app>
      <v-container fluid>
        <router-view v-on:login="updateUser($event)"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name:'App',
  data(){
    return{
      user:{},
    }
  },
  methods:{
    updateUser(user){
      this.user = user;
      console.log(user);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
