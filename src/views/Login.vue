<template>
  <div class="d-flex justify-center">
    <v-card width="600px" class="mt-12 pa-10">
      <v-card-title> Войдите в аккаунт </v-card-title>

      <v-text-field
        label="Введите логин"
        v-model="login"
        outlined
        counter
      ></v-text-field>

      <v-text-field
        label="Введите пароль"
        v-model="password"
        outlined
        counter
        :type="show1 ? 'text' : 'password'"
      ></v-text-field>
      <v-alert v-if="loginFlag" color="red" type="error"
        >Логин и/или пароль введён неправильно</v-alert
      >
      <v-btn @click="authenticate"> Войти </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      login: "",
      password: "",
      loginFlag: false,
      myId: 1,
    };
  },
  methods: {
    authenticate() {
      this.axios
        .get(
          "http://37.77.104.246/api/jsonstorage/?id=f80dee6fccecd08530e12b496fae7ad9"
        )
        .then((response) => {
          let users = response.data;
          let found = false;
          for (let i in users) {
            if (
              this.login == users[i].login &&
              this.password == users[i].password
            ) {
              this.myId = String(Number(i) + 1);
              this.$store.commit('setUID', this.myId);
              this.$emit("authenticate");
              this.$router.push("/user/" + this.myId);
              this.$store.commit('setAuthParam', true);
              found = true;
              break;
            }
          }
          if (!found) {
            this.loginFlag = true;
            this.$store.commit('setAuthParam', false);
          }
        });
    },
  },
};
</script>