<template>
  <div class="contact">
    <LinksName/>
    <CardContact/>
  </div>
</template>

<script>
import LinksName from "@/components/LinksName";
import CardContact from "@/components/CardContact";

export default {
  name: "Contact",
  components: {
    CardContact,
    LinksName
  }
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  margin-top: 50px;
}
</style>

