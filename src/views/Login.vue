<template>
  <v-app>
    <v-main>
      <v-container fill-height>
        <v-row justify="center">
          <v-col cols="6">
            <v-sheet color="grey lighten-3" elevation="3">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <form>
                      <v-text-field
                        v-model="email"
                        :error-messages="emailErrors"
                        label="E-mail"
                        required
                        @input="$v.email.$touch()"
                        @blur="$v.email.$touch()"
                        outlined
                        dense
                        prepend-inner-icon="mdi-account"
                      ></v-text-field>
                      <v-text-field
                        v-model="password"
                        :error-messages="passwordErrors"
                        label="Contraseña"
                        required
                        @input="$v.password.$touch()"
                        @blur="$v.password.$touch()"
                        outlined
                        dense
                        prepend-inner-icon="mdi-key"
                      ></v-text-field>
                      <v-btn class="mr-4" @click="logIn">
                        Iniciar sesión
                      </v-btn>
                    </form>
                  </v-col>
                </v-row>
              </v-container>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Spiritual Omnichannel</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import API from "../api";
export default {
  validations: {
    email: { required, email },
    password: { required },
  },

  data: () => ({
    email: "",
    password: "",
  }),

  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Contraseña requerida.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("E-mail invalido.");
      !this.$v.email.required && errors.push("E-mail requerido.");
      return errors;
    },
  },

  methods: {
    async logIn() {
      if (this.$v.email.$invalid || this.$v.password.$invalid) {
        alert("Complete todos los campos.");
      } else {
        try {
          const response = await API.post("/users/login", {
            email: this.email,
            password: this.password,
          });
          if (!response.data.status) {
            alert(response.data.message);
          } else {
            this.$store.commit("setToken", response.data.token);
            this.$store.commit("setToken", response.data.setUser);
            API.defaults.headers.common["Authorization"] = response.data.token;
            this.$router.push("/dashboard/home");
          }
        } catch (error) {
          console.error(error);
          alert("Error al iniciar sesión.");
        }
      }
    },
    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
    },
  },
};
</script>
