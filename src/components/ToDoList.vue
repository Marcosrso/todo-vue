<template>
  <p>Lista de tarefas</p>
  <ul>
    <li v-for="toDo in toDoList" :key="toDo.id">
      {{ toDo.title }}
      <button v-on:click="showToDo(toDo.title)">Detalhes da tarefa</button>
    </li>
  </ul>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

interface IToDo {
  id: string;
  title: string;
}

interface IToDoList {
  toDoList: IToDo[];
}

export default defineComponent({
  data: (): IToDoList => ({
    toDoList: [],
  }),
  mounted() {
    axios.get<IToDo[]>('tasks').then(res => {
      this.toDoList = res.data;
    });
  },
  methods: {
    showToDo(ToDoTitle: string) {
      alert(ToDoTitle);
    },
  },
});
</script>
