<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello world to Vue app" />
    <ToDoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ToDoList from '@/components/ToDoList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
    ToDoList,
  },
});
</script>
