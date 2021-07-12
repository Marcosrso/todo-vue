<template>
  <p>Adicionar de tarefas</p>
  <input type="text" v-model="toDoTitle" placeholder="Nome da tarefa" />
  <button v-on:click="addToDo">Adicionar tarefa</button>
</template>
<script lang="ts">
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { defineComponent } from 'vue';

interface IToDoAdd {
  toDoTitle: string;
}

export default defineComponent({
  data(): IToDoAdd {
    return {
      toDoTitle: '',
    };
  },
  methods: {
    addToDo() {
      const newTask = {
        id: uuidv4(),
        title: this.toDoTitle,
        status: 'waiting',
      };

      axios.post('tasks', newTask).then(() => {
        this.toDoTitle = '';
      });
    },
  },
});
</script>
