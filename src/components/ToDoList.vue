<template>
  <p>Lista de tarefas</p>
  <ul>
    <li v-for="toDo in toDoList" :key="toDo.id">
      {{ toDo.title }}
      <button v-on:click="showToDo()">Detalhes da tarefa</button>
    </li>
  </ul>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    toDoList: [{ id: 'asdasd', title: 'Teste' }],
  }),
  methods: {
    showToDo() {
      alert(this.toDoList[0].title);
    },
  },
});
</script>
