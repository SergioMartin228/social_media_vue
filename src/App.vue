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
      <v-list nav shaped dense>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img
              :src="user.img"
              alt=""
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>SocialLink</v-list-item-title>
            <v-list-item-subtitle>{{$store.state.userData.name}}</v-list-item-subtitle>
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
            <router-link
              :to="`/user/${$store.state.userData.id}`"
              class="text-left caption"
              tag="v-list-item-title"
              >Мой профиль</router-link
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/users">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-left"
              >Найти друзей</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main app>
      <v-container fluid>
        <router-view @authenticate="initPage" />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user:{
        img:'',
        name:''
      },
    };
  },
  methods: {
    initPage(){
      if(this.$store.state.isAuthorised){
        this.user.img = `https://randomuser.me/api/portraits/men/${this.$store.state.userData.id}.jpg`;
        this.user.name = this.$store.state.userData.name;
      }else{
        this.user.img = `https://img2.freepng.ru/20180616/qqc/kisspng-question-mark-computer-icons-clip-art-5b24b766383476.9523211315291329022302.jpg`;
      }
    }
  },
  mounted(){
    this.initPage();
  }
};
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
