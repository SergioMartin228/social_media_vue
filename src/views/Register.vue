<template>
  <div>
      <h1>Регистрация</h1>
    <v-row align="center" class="my-2">
      <v-col cols="6" offset-md="3">
        <v-form app ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="userData.login"
            :counter="20"
            label="Логин"
            required
          ></v-text-field>
          <v-text-field
            v-model="userData.password"
            label="Пароль"
            required
          ></v-text-field>
          <v-text-field
            v-model="userData.email"
            label="E-mail"
            required
          ></v-text-field
          ><v-text-field
            v-model="userData.name"
            label="Имя"
            required
          ></v-text-field
          ><v-text-field
            v-model="userData.website"
            label="Website"
          ></v-text-field
          ><v-text-field v-model="userData.city" label="Город"></v-text-field>
          <v-text-field
            v-model="userData.company"
            label="Работа"
          ></v-text-field>
          <v-text-field
            v-model="userData.photo"
            label="Ссылка на картинку"
          ></v-text-field>
          <v-checkbox
            v-model="checkboxReady"
            :rules="[(v) => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate">
            Validate
          </v-btn>
          <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      valid: true,
      checkboxReady: false,
      userData: {
        name: "",
        email: "",
        website: "",
        login: "",
        password: "",
        city: "",
        company: "",
        photo: "",
      },
    };
  },
  methods: {
    validate() {
      this.axios
        .get(
          "http://37.77.104.246/api/jsonstorage/?id=f80dee6fccecd08530e12b496fae7ad9"
        )
        .then((response) => {
            let users = response.data;
            users.push(this.userData);
            this.axios({
                method: 'put',
                url: 'http://37.77.104.246/api/jsonstorage/?id=f80dee6fccecd08530e12b496fae7ad9',
                data:{
                    
                }
            }).then(()=>{
                this.$router.push('/login/');
            });
        });
    },
    reset() {
      this.userData.name = "";
      this.userData.email = "";
      this.userData.website = "";
      this.userData.login = "";
      this.userData.password = "";
      this.userData.city = "";
      this.userData.company = "";
      this.userData.photo = "";
      this.valid = false;
      this.checkboxReady = false;
    },
  },
  mounted(){
      this.reset();
  },
  watch: {
    $route() {
      this.reset();
    },
  },
};
</script>