<template>
  <p>Adicionar de tarefas</p>
  <input type="text" v-model="toDo" placeholder="Nome da tarefa" />
  <button v-on:click="addToDo">Adicionar tarefa</button>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      toDo: '',
    };
  },
  methods: {
    addToDo() {
      alert(this.toDo);
    },
  },
});
</script>
