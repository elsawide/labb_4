<script>
import LinkContainer from "./components/LinkContainer.vue";

export default {
  components: {
    LinkContainer,
  },
};
</script>
<style>
body {
  background-image: url("/assets/photos.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
#content-container {
  background-color: #ebe2e5;
  border-radius: 25px;
  margin: 7px;
}
</style>
<template>
  <div id="content-container">
    <RouterView />
    <LinkContainer />
  </div>
</template>
