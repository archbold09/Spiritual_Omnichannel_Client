<template>
  <div>
    <v-app-bar fixed color="primary" dark app>
      <div class="d-flex align-center">
        <v-btn icon @click="baseSidebarState">
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn class="mx-2" href="#" text icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="mx-1" href="#" text icon v-bind="attrs" v-on="on">
            <v-avatar size="35">
              <v-img
                src="https://randomuser.me/api/portraits/men/85.jpg"
              ></v-img>
            </v-avatar>
          </v-btn>
        </template>
        <v-list dense>
          <v-subheader>Configuración</v-subheader>
          <v-list-item-group>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click="sheet = !sheet">
              <v-list-item-icon>
                <v-icon>mdi-logout-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Cerrar sesión</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" outlined color="red" @click="logOut">
          Cerrar sesión
        </v-btn>
        <div class="py-3 font-weight-black">¿Desea cerrar la sesión?</div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({
    sheet: false,
    items: [{ text: "Perfil", icon: "mdi-account-circle" }],
  }),
  methods: {
    ...mapMutations(["baseSidebarState"]),
    logOut() {
      this.$store.commit("setToken", null);
      this.$router.push("/login");
    },
  },
};
</script>
