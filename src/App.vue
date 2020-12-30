<template>
  <v-app>
    <Header />

    <Sidebar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
export default {
  name: "App",

  components: {
    Sidebar,
    Header,
  },

  data: () => ({
    //
  }),
};
</script>
