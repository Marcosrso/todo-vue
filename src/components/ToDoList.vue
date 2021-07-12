<template>
  <p>Lista de tarefas</p>
  <ul>
    <li v-for="toDo in toDoList" :key="toDo.id">
      <input
        type="checkbox"
        :checked="toDo.status == 'completed'"
        v-on:change="fulfillTask(toDo.id, $event)"
      />
      {{ toDo.title }}
      <button v-on:click="deleteTask(toDo.id)">Remover da tarefa</button>
    </li>
  </ul>
</template>
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';

interface IToDo {
  id: string;
  title: string;
  status: 'completed' | 'waiting' | 'canceled';
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
      this.toDoList = res.data.filter(task => task.status !== 'canceled');
    });
  },
  methods: {
    deleteTask(taskId: string) {
      axios
        .patch(`tasks/${taskId}`, {
          status: 'canceled',
        })
        .then(() => {
          const taskIndex = this.toDoList.findIndex(task => task.id === taskId);
          if (taskIndex !== -1) {
            this.toDoList.splice(taskIndex, 1);
          }
        });
    },
    fulfillTask: (taskId: string, event: any) => {
      axios.patch(`tasks/${taskId}`, {
        status: event.target.checked ? 'completed' : 'waiting',
      });
    },
  },
});
</script>
