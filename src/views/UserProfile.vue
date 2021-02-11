<template>
  <div>
    <div v-if="isAuthorised">
      <v-row class="text-left">
        <v-col cols="10">
          <h1 class="green--text text--darken-2">
            <v-icon large color="green darken-2">mdi-account-outline</v-icon>
            {{ userData.name }}
          </h1>
        </v-col>
      </v-row>
      <v-row class="text-left">
        <v-col cols="2">
          <img
            :src="`https://randomuser.me/api/portraits/men/${userId}.jpg`"
            style="max-width: 100%"
          />
        </v-col>
        <v-col cols="10" class="text-left">
          <p>
            Веб-сайт:
            <a :href="'http://' + userData.website" target="_blank">{{
              userData.website
            }}</a>
          </p>
          <p>
            E-mail:
            <a :href="'mailto:' + userData.email">{{ userData.email }}</a>
          </p>
          <p>Город: {{ userData.address.city }}</p>
          <p>Место работы: {{ userData.company.name }}</p>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <h2 class="my-8">Публикации</h2>
      <v-row v-for="(post, i) in posts" :key="i">
        <v-col sm="8">
          <v-card class="mx-auto" color="#dfe3ee" max-width="400">
            <v-card-title>
              <span class="title font-weight-light">{{ post.title }}</span>
            </v-card-title>

            <v-card-text class="headline font-weight-bold">
              {{ post.body }}
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    :src="`https://randomuser.me/api/portraits/men/${userId}.jpg`"
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>{{ userData.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div v-if="!isAuthorised">
      <v-row align="center"
        ><v-col cols="12" md="4" offset-md="4">
          <div class="my-2">
            <v-alert type="error">Вы не вошли в аккаунт!</v-alert>
          </div>
        </v-col>
        <v-col cols="12">
          <div class="my-2">
            <v-btn to="/login" x-large color="success" dark> Войти </v-btn>
          </div>
          <div class="my-2">
            <v-btn to="/register" x-large color="success" dark>
              Зарегистрироваться
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  data() {
    return {
      userData: "",
      posts: [],
      userId: "",
      isAuthorised: false,
    };
  },
  methods: {
    getUserData() {
      this.axios
        .get(`http://jsonplaceholder.typicode.com/users/${this.userId}`)
        .then((response) => {
          this.userData = response.data;
          this.$store.commit('setName', this.userData.name);
        });
    },
    getUserPosts() {
      this.axios
        .get(`http://jsonplaceholder.typicode.com/posts?userId=${this.userId}`)
        .then((response) => {
          this.posts = response.data;
        });
    },
    initPage() {
      if (this.$router.currentRoute.path == "/") {
        this.isAuthorised = this.$store.state.isAuthorised;
        this.userId = this.$store.state.userData.id;
      } else {
        this.isAuthorised = true;
        this.userId = this.$route.params.id;
      }

      this.getUserData();
      this.getUserPosts();
    },
  },
  mounted() {
    this.initPage();
  },
  watch: {
    $route() {
      this.initPage();
    },
  },
};
</script>