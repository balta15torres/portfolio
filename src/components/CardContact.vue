<template>
  <div class="CardContact">
    <div class="CardContact__title">
      <h3>CONTACT</h3>
    </div>
    <div class="CardContact__card">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <div class="effect thurio">
              <div class="buttons">
                <a href="#" class="fb" title="Join us on Facebook">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#" class="tw" title="Join us on Twitter">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#" class="g-plus" title="Join us on Google+">
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>
                <a href="#" class="insta" title="Join us on Instagram">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#" class="in" title="Join us on Linked In">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
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
  .CardContact__title {
    display: flex;
    justify-content: center;
    align-items: center;
    background: $grey-navbar;
    color: white;
    height: 50px;
    width: 500px;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    margin: 15px auto;
  }
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
        
        i {
          position: relative;
          z-index: 3;
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
        i {
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
      i {
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

