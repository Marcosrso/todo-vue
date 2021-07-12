<template>
  <p>Adicionar de tarefas</p>
  <input type="text" v-model="toDo" placeholder="Nome da tarefa" />
  <button v-on:click="addToDo">Adicionar tarefa</button>
</template>
<script lang="ts">
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
      alert(this.toDoTitle);
    },
  },
});
</script>
