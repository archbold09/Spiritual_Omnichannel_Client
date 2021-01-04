<template>
  <v-app>
    <Header />

    <Sidebar />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
export default {
  name: "LayoutDashboard",
  components: {
    Sidebar,
    Header,
  },
};
</script>
