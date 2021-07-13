<template>
  <div><Breadcrumb /></div>
  <div class="mb-5">
    <div class="row mb-4">
      <div class="col text-start">
        <h4>Adicionar tarefa</h4>
      </div>
    </div>
    <form v-on:submit="checkForm">
      <div class="form-group text-start">
        <label for="taskName">Nome da tarefa</label>
        <input
          type="text"
          id="taskName"
          class="form-control"
          v-model="toDoTitle"
          v-on:keypress="onKeypressInput"
          placeholder="Digite aqui o nome da tarefa"
        />
        <small
          v-if="inputError && toDoTitle.length === 0"
          class="form-text text-danger"
          >Digite um nome para a tarefa
        </small>
        <small
          v-if="inputError && toDoTitle.length === 1"
          class="form-text text-danger"
          >Digite um nome maior para a tarefa
        </small>
      </div>
      <div class="col text-end">
        <button type="submit" class="btn btn-primary my-1">
          Adicionar tarefa
        </button>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import Breadcrumb from '@/components/Breadcrumb.vue';

interface IToDoAdd {
  toDoTitle: string;
  inputError: boolean;
}

export default defineComponent({
  name: 'ToDoAdd',
  components: { Breadcrumb },
  data(): IToDoAdd {
    return {
      toDoTitle: '',
      inputError: false,
    };
  },
  methods: {
    ...mapActions(['insertTask']),
    addToDo() {
      this.insertTask(this.toDoTitle).then(() => {
        this.toDoTitle = '';
      });
    },
    onKeypressInput() {
      if (this.toDoTitle.trim().length && this.inputError) {
        this.inputError = false;
      }
    },
    checkForm(event: Event) {
      event.preventDefault();
      if (this.toDoTitle.trim().length > 1) {
        this.addToDo();
      } else {
        this.inputError = true;
      }
    },
  },
});
</script>
