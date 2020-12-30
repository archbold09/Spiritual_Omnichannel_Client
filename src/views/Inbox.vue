<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <Table/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Table from '../components/inbox/Table'
export default {
  name: "Inbox",
  components:{
    Table
  }
};
</script>
