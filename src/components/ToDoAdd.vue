<template>
  <div><Breadcrumb /></div>
  <div class="mb-5">
    <h4>Adicionar tarefa</h4>
    <form>
      <div class="form-row">
        <div class="col-auto">
          <input
            type="text"
            class="form-control"
            v-model="toDoTitle"
            placeholder="Nome da tarefa"
          />
        </div>
      </div>
      <button class="btn btn-primary my-1" v-on:click="addToDo">
        Adicionar tarefa
      </button>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import Breadcrumb from '@/components/Breadcrumb.vue';

interface IToDoAdd {
  toDoTitle: string;
}

export default defineComponent({
  name: 'ToDoAdd',
  components: { Breadcrumb },
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
