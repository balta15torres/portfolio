<template>
  <div class="CardContact">
    <div class="CardContact__card">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <div class="effect thurio">
              <div class="buttons">
                <a href="https://www.facebook.com/baltasar.t.garcia" target="_blank" class="fb" title="Join us on Facebook">
                  <img src="/icons/facebook.svg" alt="">
                </a>
                <a href="#" target="_blank" class="tw" title="Join us on Twitter">
                  <img src="/icons/twitter.svg" alt="">
                </a>
                <a href="#" target="_blank" class="g-plus" title="Join us on Google+">
                  <img src="/icons/gmail.svg" alt="">
                </a>
                <a href="#" target="_blank" class="insta" title="Join us on Instagram">
                  <img src="/icons/instagram.svg" alt="">
                </a>
                <a href="https://es.linkedin.com/in/baltasar-torres-garcia" target="_blank" class="in" title="Join us on Linked In">
                  <img src="/icons/linkedin.svg" alt="">
                </a>
              </div>
            </div>
            <v-card-title primary-title>
              <div>
                <div class="headline">afkisdjaisjdf</div>
                <span class="grey--text">kjahogfhjasoigfj</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
              </v-btn>
            </v-card-actions>

            <v-slide-y-transition>
              <v-card-text v-show="show">{{msg}}}</v-card-text>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardContact",
  data() {
    return {
      show: false,
      msg: "aihsbgfihasctvgforghfeoygijhhhhhhhhhhhhhhhhrereuoreougdasugh"
    };
  }
};
</script>

<style lang="scss">
.CardContact {
  margin-top: 50px;
  
  .CardContact__card {
    margin-top: 100px;
    .effect {
      padding: 50px 0px 70px 0px;
      .buttons {
        margin-top: 50px;
        margin-bottom: 40px;
        display: flex;
        justify-content: center;
      }
    }
    .effect {
      a {
        text-decoration: none !important;
        width: 90px;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-right: 50px;
        font-size: 25px;
        overflow: hidden;
        position: relative;
        color: $grey-navbar; //or change to your own color
        border: 2px solid white; //or change to your own color
        
        img {
          position: relative;
          z-index: 3;
          width: 90px;
        }
        &:last-child {
          margin-right: 0px;
        }
        &:before {
          content: "";
          display: inline-block;
          height: 100%;
          vertical-align: middle;
        }
        img {
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
  .effect.thurio {
    background-color: $grey-navbar;
    a {
      transition: border-radius 0.2s linear 0s;
      transform: rotate(45deg);
      img {
        transition: transform 0.01s linear 0s;
        transform: rotate(-45deg);
      }
      &:hover {
        border-radius: 0px;
      }
    }
  }
}
</style>

