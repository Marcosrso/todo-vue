<template>
  <ToDoAdd />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ToDoAdd from '@/components/ToDoAdd.vue';

export default defineComponent({
  name: 'Tarefas',
  components: {
    ToDoAdd,
  },
});
</script>
