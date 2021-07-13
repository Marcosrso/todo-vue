<template>
  <div><Breadcrumb /></div>
  <div class="mb-5">
    <div class="row align-items-center justify-content-between mb-4">
      <div class="col text-start">
        <h4>Lista de tarefas</h4>
      </div>
      <div class="col text-end">
        <router-link to="/tarefas/adicionar">
          <button class="btn btn-primary">Adicionar tarefa</button>
        </router-link>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li
        v-for="toDo in toDoList"
        :key="toDo.id"
        class="
          list-group-item
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <div>
          <div class="form-check">
            <input
              id="taskCheckbox"
              class="form-check-input"
              type="checkbox"
              :checked="toDo.status == 'completed'"
              v-on:change="changeTaskStatus(toDo.id, $event)"
            />
            <label class="form-check-label" for="taskCheckbox">{{
              toDo.title
            }}</label>
          </div>
        </div>
        <button v-on:click="removeTask(toDo.id)" class="btn btn-danger">
          <i class="bi bi-trash"></i>
        </button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import Breadcrumb from '@/components/Breadcrumb.vue';

export default defineComponent({
  name: 'ToDoList',
  components: { Breadcrumb },
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
