<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img :src="image" height="200px"></v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{title}}</div>
            <span class="grey--text">{{littleDescription}}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Ir a proyecto</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">{{description}}</v-card-text>
        </v-slide-y-transition>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      show: false
    };
  },
  props: {
    title: {
      type: String
    },
    image: {
      required: true
    },
    littleDescription: {
      type: String
    },
    description: {
      type: String
    }
  }
};
</script>

