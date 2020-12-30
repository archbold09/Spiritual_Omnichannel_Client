<template>
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

    <v-btn class="mx-1" href="#" text icon>
      <v-avatar size="35">
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    baseSidebarState() {
      let sidebarState = this.$store.state.sidebar.baseSidebar;
      this.$store.commit("baseSidebarState", !sidebarState);
    },
  },
};
</script>
