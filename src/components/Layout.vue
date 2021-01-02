<template>
  <v-app>
    <Header />

    <Sidebar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
export default {
  name: "Layout",

  components: {
    Sidebar,
    Header,
  },
  created() {
    this.$store.commit("SET_LAYOUT", "principal-layout");
  },
  data: () => ({
    //
  }),
};
</script>
