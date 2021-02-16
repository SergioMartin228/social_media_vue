<template>
  <div>
    <v-row v-for="(user, i) in users" :key="i">
      <v-col>
        <v-card class="mx-auto" dark color="green" max-width="500" outlined
        v-if="String(user.id) != $store.state.userData.id">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">@{{user.username}}</div>
              <v-list-item-title class="headline mb-1">
                {{user.name}}
              </v-list-item-title>
              <v-list-item-subtitle
                >{{user.address.city}}</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-avatar
              tile
              size="80"
              center
            ><img :src="`https://randomuser.me/api/portraits/men/${user.id}.jpg`" alt=""></v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text :to="`user/${user.id}`"> Перейти в профиль </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      usersNum: 0,
      users: [],
    };
  },
  methods: {
    getAllUsers() {
      this.axios
        .get("http://jsonplaceholder.typicode.com/users")
        .then((response) => {
          this.users = response.data;
        });
    },
  },
  mounted() {
    this.getAllUsers();
  },
  watch: {
    $route() {
      this.getAllUsers();
    },
  },
};
</script>