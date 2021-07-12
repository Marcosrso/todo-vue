<template>
  <p>Lista de tarefas</p>
  <ul>
    <li v-for="toDo in toDoList" :key="toDo.id">
      <input
        type="checkbox"
        :checked="toDo.status == 'completed'"
        v-on:change="changeTaskStatus(toDo.id, $event)"
      />
      {{ toDo.title }}
      <button v-on:click="removeTask(toDo.id)">Remover da tarefa</button>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';

export default defineComponent({
  computed: mapState({
    toDoList: 'tasks',
  }),
  mounted() {
    this.getTasks();
  },
  methods: {
    ...mapActions(['getTasks', 'deleteTask', 'updateTask']),
    removeTask(taskId: string) {
      this.deleteTask(taskId);
    },
    changeTaskStatus(taskId: string, event: Event) {
      const e = event.target as HTMLInputElement;
      const task = { taskId, isCompleted: e.checked };
      this.updateTask(task);
    },
  },
});
</script>
