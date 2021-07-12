<template>
  <p>Adicionar de tarefas</p>
  <input type="text" v-model="toDoTitle" placeholder="Nome da tarefa" />
  <button v-on:click="addToDo">Adicionar tarefa</button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

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
    ...mapActions(['insertTask']),
    addToDo() {
      this.insertTask(this.toDoTitle).then(() => {
        this.toDoTitle = '';
      });
    },
  },
});
</script>
