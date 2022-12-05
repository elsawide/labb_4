<script>
export default {
  data() {
    return {
      dog: "assets/dog.jpg",
      likesDogs: false,
    };
  },
  methods: {
    dogsAreGreat() {
      this.likesDogs = true;
    },
  },
};
</script>

<style>
#home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#query-container {
  display: flex;
  align-items: center;
  padding: 25px;
}
#yes-button {
  height: fit-content;
  margin-left: 25px;
}
#dog-container {
  width: 250px;
  border: solid 0.25px #241023;
}
</style>

<template>
  <div id="home-container">
    <div id="query-container">
      <h3>Do you like dogs?</h3>
      <input
        id="yes-button"
        type="button"
        v-on:click="dogsAreGreat"
        value="YES!"
      />
    </div>
    <img id="dog-container" v-if="likesDogs" alt="" :src="dog" />
  </div>
</template>
