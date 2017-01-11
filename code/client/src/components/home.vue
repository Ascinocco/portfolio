<template>
    <div>
        <div class="message">{{ msg }}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Home Page!'
    }
  }
}
</script>

<style>
.message {
  color: blue;
}
</style>