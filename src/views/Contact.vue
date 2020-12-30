<template>
  <div class="mt-3">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-btn class="mx-3" color="primary">Agregar contacto</v-btn>
        </v-col>
        <v-col cols="12" sm="4">
          <v-sheet rounded="lg">
            <v-container fluid>
              <v-row>
                <v-col v-for="card in cards" :key="card" cols="12">
                  <v-card>
                    <v-subheader class="font-weight-bold subtitle">{{
                      card
                    }}</v-subheader>

                    <v-list two-line>
                      <template v-for="n in 6">
                        <v-list-item :key="n">
                          <v-list-item-avatar>
                            <v-img
                              src="https://avatars0.githubusercontent.com/u/90624?v=4&s=460"
                            ></v-img>
                          </v-list-item-avatar>

                          <v-list-item-content>
                            <v-list-item-title class="font-weight-bold"
                              >Contacto {{ n }}</v-list-item-title
                            >
                          </v-list-item-content>
                          <v-list-item-action>
                            <v-tooltip bottom>
                              <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on">
                                  <v-icon color="primary">
                                    mdi-eye
                                  </v-icon>
                                </v-btn>
                              </template>
                              <span>Ver información</span>
                            </v-tooltip>
                          </v-list-item-action>
                        </v-list-item>

                        <v-divider
                          v-if="n !== 10"
                          :key="`divider-${n}`"
                          inset
                        ></v-divider>
                      </template>
                    </v-list>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="6">
          <v-sheet class="px-3" rounded="lg">
            <v-card>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-subheader class="font-weight-bold subtitle">
                      Interacciones</v-subheader
                    >
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-avatar
                            class="hidden-sm-and-down"
                            color="grey darken-1 shrink"
                            size="32"
                          >
                            <v-img
                              src="https://avatars0.githubusercontent.com/u/9061?v=4&s=460"
                            ></v-img>
                          </v-avatar>
                          <span class="ml-3 subtitle">Jhon Doe</span>
                          <v-timeline dense clipped>
                            <v-timeline-item
                              fill-dot
                              class="white--text mb-12"
                              color="primary"
                            >
                              <template v-slot:icon>
                                <span>JD</span>
                              </template>
                              <v-text-field
                                v-model="input"
                                hide-details
                                flat
                                label="Leave a comment..."
                                solo
                                @keydown.enter="comment"
                              >
                                <template v-slot:append>
                                  <v-btn
                                    class="mx-0"
                                    depressed
                                    @click="comment"
                                  >
                                    Post
                                  </v-btn>
                                </template>
                              </v-text-field>
                            </v-timeline-item>

                            <v-slide-x-transition group>
                              <v-timeline-item
                                v-for="event in timeline"
                                :key="event.id"
                                class="mb-4"
                                color="pink"
                                small
                              >
                                <v-row justify="space-between">
                                  <v-col cols="7" v-text="event.text"></v-col>
                                  <v-col
                                    class="text-right"
                                    cols="5"
                                    v-text="event.time"
                                  ></v-col>
                                </v-row>
                              </v-timeline-item>
                            </v-slide-x-transition>

                            <v-timeline-item class="mb-6" hide-dot>
                              <span>TODAY</span>
                            </v-timeline-item>

                            <v-timeline-item class="mb-4" color="white" small>
                              <template v-slot:icon>
                                <v-avatar>
                                  <v-icon size="30">mdi-whatsapp</v-icon>
                                </v-avatar>
                              </template>
                              <v-row justify="space-between">
                                <v-col cols="7">
                                  Mensaje enviado
                                </v-col>
                                <v-col
                                  class="text-right caption primary--text"
                                  cols="5"
                                >
                                  4/21/2020 :: 23:10:00
                                </v-col>
                              </v-row>
                            </v-timeline-item>

                            <v-timeline-item class="mb-4" color="white" small>
                              <template v-slot:icon>
                                <v-avatar>
                                  <v-icon size="30">mdi-facebook</v-icon>
                                </v-avatar>
                              </template>
                              <v-row justify="space-between">
                                <v-col cols="7">
                                  Comento tu post
                                </v-col>
                                <v-col
                                  class="text-right caption primary--text"
                                  cols="5"
                                >
                                  4/29/2020 :: 23:10:00
                                </v-col>
                              </v-row>
                            </v-timeline-item>

                            <v-timeline-item class="mb-4" color="white" small>
                              <template v-slot:icon>
                                <v-avatar>
                                  <v-icon size="30">mdi-twitter</v-icon>
                                </v-avatar>
                              </template>
                              <v-row justify="space-between">
                                <v-col cols="7">
                                  Reacciono a tu publicacion
                                </v-col>
                                <v-col
                                  class="text-right caption primary--text"
                                  cols="5"
                                >
                                  3/10/2020 :: 23:10:00
                                </v-col>
                              </v-row>
                            </v-timeline-item>

                            <v-timeline-item class="mb-4" color="white" small>
                              <template v-slot:icon>
                                <v-avatar>
                                  <v-icon size="30">mdi-instagram</v-icon>
                                </v-avatar>
                              </template>
                              <v-row justify="space-between">
                                <v-col cols="7">
                                  Respondio tu historia
                                </v-col>
                                <v-col
                                  class="text-right caption primary--text"
                                  cols="5"
                                >
                                  9/21/2020 :: 23:10:00
                                </v-col>
                              </v-row>
                            </v-timeline-item>
                          </v-timeline>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-sheet>
        </v-col>

        <v-col cols="12" sm="2">
          <v-card>
            <v-sheet rounded="lg">
              <v-subheader class="font-weight-bold subtitle">
                Perfil
              </v-subheader>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <div class="text-center">
                      <v-avatar
                        class="hidden-sm-and-down mr-1"
                        color="grey darken-1 shrink"
                        size="40"
                      >
                        <v-img
                          src="https://avatars0.githubusercontent.com/u/9061?v=4&s=460"
                        ></v-img>
                      </v-avatar>
                      <span class="body-1 font-weight-bold">Jhon Doe</span>
                    </div>
                    <div class="text-left my-3">
                      <v-chip color="secondary font-weight-black"
                        >INFORMACIÓN</v-chip
                      >
                    </div>
                    <v-sheet elevation="2" rounded="lg" class="my-2">
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <p class="font-weight-black">
                              <v-icon size="20">mdi-email</v-icon>
                              Email
                            </p>
                            <span>example@gmail.com</span>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-sheet>
                    <v-sheet elevation="2" rounded="lg" class="my-2">
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <p class="font-weight-black">
                              <v-icon size="20">mdi-phone</v-icon>
                              Número de contacto
                            </p>
                            <span>+51 30002000200</span>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-sheet>
                    <v-sheet elevation="2" rounded="lg" class="my-2">
                      <v-container>
                        <v-row>
                          <v-col cols="12">
                            <p class="font-weight-black">
                              <v-icon size="20">mdi-account-network</v-icon>
                              Social
                            </p>
                            <div class="text-center">
                              <v-chip
                                class="ma-2"
                                color="secondary"
                                text-color="white"
                              >
                                <v-avatar left>
                                  <v-icon>mdi-facebook</v-icon>
                                </v-avatar>
                                Facebook
                              </v-chip>

                              <v-chip
                                class="ma-2"
                                color="secondary"
                                text-color="white"
                              >
                                <v-avatar left>
                                  <v-icon>mdi-whatsapp</v-icon>
                                </v-avatar>
                                WhatsApp
                              </v-chip>

                              <v-chip
                                class="ma-2"
                                color="secondary"
                                text-color="white"
                              >
                                <v-avatar left>
                                  <v-icon>mdi-twitter</v-icon>
                                </v-avatar>
                                Twitter
                              </v-chip>
                            </div>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-sheet>
                    <div class="text-center">
                      <v-btn color="primary" class="text-center">
                        Editar información
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data: () => ({
    links: ["Interacciones", "Perfil"],
    events: [],
    input: null,
    nonce: 0,
    cards: ["Contactos"],
  }),

  computed: {
    timeline() {
      return this.events.slice().reverse();
    },
  },

  methods: {
    comment() {
      const time = new Date().toTimeString();
      this.events.push({
        id: this.nonce++,
        text: this.input,
        time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents) => {
          return ` ${contents
            .split(" ")
            .map((v) => v.charAt(0))
            .join("")}`;
        }),
      });

      this.input = null;
    },
  },
};
</script>
