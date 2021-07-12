<template>
  <p>Lista de tarefas</p>
  <ul>
    <li v-for="toDo in toDoList" :key="toDo.id">{{ toDo.title }}</li>
  </ul>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    toDoList: [{ id: 'asdasd', title: 'Teste' }],
  }),
});
</script>
