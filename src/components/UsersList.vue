<script>
export default {
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        this.users = result;
      });
  },
  data() {
    return {
      users: null,
    };
  },
};
</script>

<style>
#outer-container {
  display: flex;
  flex-wrap: wrap;
  margin: 25px;
}

#user-info-container {
  border: solid 0.25px #241023;
  border-radius: 25px;
  display: flex;
  width: 250px;
  margin: 25px;
}
#inner-container {
  padding: 2px;
  margin: 2px;
}
#header {
  color: #241023;
  font-size: 125%;
  font-weight: bold;
}
#details-header {
  color: #241023;
  font-weight: bold;
}
#details-info {
  color: #a3320b;
}
</style>

<template>
  <div id="outer-container">
    <div id="user-info-container" v-for="user in users">
      <div id="inner-container">
        <p id="header">{{ user.username }}</p>
        <p id="details-header">
          CITY:
          <span id="details-info"> {{ user.address.city }}</span>
        </p>
        <p id="details-header">
          EMAIL: <span id="details-info">{{ user.email }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
