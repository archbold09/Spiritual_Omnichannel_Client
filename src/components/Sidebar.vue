<template>
  <v-navigation-drawer
    permanent
    app
    :expand-on-hover.sync="this.$store.state.sidebar.baseSidebar"
  >
    <v-list color="primary" dark>
      <v-list-item class="px-2">
        <v-list-item-content>
          <v-list-item-title class="subtitle text-center font-weight-black">
            SPIRITUAL <span class="font-weight-light">OMNICHANNEL</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="caption">
            SPIRITUAL OMNICHANNEL
          </v-list-item-title>
          <v-list-item-subtitle class="green--text">
            Online
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense>
      <!-- <v-subheader>REPORTS</v-subheader> -->

      <v-list-item link to="/">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>

      <!-- <v-subheader>REPORTS</v-subheader> -->

      <v-list-group :value="true" prepend-icon="mdi-account-network">
        <template v-slot:activator>
          <v-list-item-title>Social Networking</v-list-item-title>
        </template>

        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Mensajería</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(item, i) in socialNetworking.messenger.config"
            :key="i"
            :to="item.href"
            link
          >
            <v-list-item-title v-text="item.title"> </v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>
                Configuración
              </v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="(item, i) in socialNetworking.config"
            :key="i"
            :to="item.href"
            link
          >
            <v-list-item-title v-text="item.title"> </v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group>

      <!-- <v-list-group :value="true" prepend-icon="mdi-account-circle">
        <template v-slot:activator>
          <v-list-item-title>Users</v-list-item-title>
        </template>

        <v-list-group :value="true" no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Admin</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="([title, icon], i) in admins" :key="i" link>
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="([title, icon], i) in cruds" :key="i" link>
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list-group> -->
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      socialNetworking: {
        messenger: {
          config: [
            {
              title: "Entradas",
              icon: "mdi-message",
              href: "/inbox",
            },
            { title: "Archivados", icon: "mdi-archive", href: "#" },
            { title: "Papelera", icon: "mdi-delete", href: "#" },
          ],
          socialNetwork: [
            { title: "Facebook", icon: "mdi-facebook", href: "#" },
            { title: "Twitter", icon: "mdi-twitter", href: "#" },
            { title: "WhatsApp", icon: "mdi-whatsapp", href: "#" },
            { title: "Instagram", icon: "mdi-instagram", href: "#" },
          ],
        },

        config: [
          { title: "Contactos", icon: "mdi-contacts", href: "/contact" },
          { title: "Agentes", icon: "mdi-account-circle", href: "#" },
        ],
      },
      items: [
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me" },
        { title: "Click Me 2" },
      ],
      admins: [
        ["Management", "mdi-account-multiple-outline"],
        ["Settings", "mdi-cog-outline"],
      ],
      cruds: [
        ["Create", "mdi-plus-outline"],
        ["Read", "mdi-file-outline"],
        ["Update", "mdi-update"],
        ["Delete", "mdi-delete"],
      ],
    };
  },
};
</script>
