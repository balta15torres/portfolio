<template>
  <div class="about">
   <LinksName/>
   <div class="cardAbout__about">
   <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="300px"></v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">Baltasar Torres Garcia</div>
              
              <span class="grey--text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit voluptas atque blanditiis nostrum quam modi dolorem soluta itaque corrupti excepturi aperiam, qui eius rerum nulla temporibus tempore, aliquam voluptate recusandae!</span>
              
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
            <v-card-text v-show="show">asdfasdfasdfasf</v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>
    </v-layout>
    </div>
  </div>
</template>

<script>
import LinksName from "@/components/LinksName";
export default {
  name:"About",
  components:{
    LinksName
  },
  data() {
    return {
      show: false,
    };
  },
}
</script>

<style lang="scss">
.about{
text-align: center;
margin-top: 50px;
.cardAbout__about{
 margin-top: 100px;
}
}

</style>


