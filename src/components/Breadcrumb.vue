<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li
        v-for="(breadcrumb, index) in breadcrumbList"
        :key="index"
        class="breadcrumb-item"
        :class="{ active: !!breadcrumb.path }"
        aria-current="page"
      >
        <button
          v-if="!!breadcrumb.path"
          v-on:click="routeTo(index)"
          class="btn btn-link"
        >
          {{ breadcrumb.name }}
        </button>
        <div v-else>{{ breadcrumb.name }}</div>
      </li>
    </ol>
  </nav>
</template>
<script lang="ts">
import { Ibreadcrumb } from '@/types';
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      breadcrumbList: [] as Ibreadcrumb[],
    };
  },
  mounted() {
    this.updateList();
  },
  watch: {
    $route() {
      this.updateList();
    },
  },
  methods: {
    routeTo(routeIndex: number) {
      if (this?.breadcrumbList[routeIndex]?.path) {
        this.$router.push({
          path: this.breadcrumbList[routeIndex].path || '',
        });
      }
    },
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb as Ibreadcrumb[];
    },
  },
});
</script>
