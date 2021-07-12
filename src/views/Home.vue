<template>
  <div class="home">
    <ToDoAdd />
    <ToDoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToDoList from '@/components/ToDoList.vue';
import ToDoAdd from '@/components/ToDoAdd.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ToDoList,
    ToDoAdd,
  },
});
</script>
