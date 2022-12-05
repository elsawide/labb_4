<script>
export default {};
</script>
<style>
#button-container {
  display: flex;
  justify-content: flex-end;
  padding: 25px;
}
</style>
<template>
  <nav>
    <div id="button-container">
      <button>
        <RouterLink to="/">Home</RouterLink>
      </button>
      <button>
        <RouterLink to="/users">Users</RouterLink>
      </button>
    </div>
  </nav>
</template>
