<script setup lang="ts">
import { USER_NAMES } from "@/graphql/queries/User";
import { useQuery } from "@vue/apollo-composable";
import { computed, ref } from "vue";
const userListStatus = ref(useQuery(USER_NAMES));
const usersList = computed(() => {
  return userListStatus.value.result
    ? userListStatus.value.result.findAll
    : null;
});
</script>

<template>
  <main>
    <div v-for="userItem in usersList" :key="userItem.id">
      {{ userItem.firstName }}
    </div>
  </main>
</template>
