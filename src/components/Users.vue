<template>
  <h1>Users</h1>
  <AsyncUser
    v-for="user in users.data"
    :key="user.id"
    :user="user"
  >{{ user.first_name }} {{ user.last_name }}</AsyncUser>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import Loading from "./Loading.vue";
import useUsers from "@/hooks/useUsers.ts";
/**
 * webpackChunkName
 * 코드가 웹팩에 의해 스플리트될 때 호출된 파일의 이름을 붙여주는 기능
 */
const AsyncUser = defineAsyncComponent({
  loader: () => import("./User.vue" /* webpackChunkName: "user" */),
  loadingComponent: Loading, // 로딩시 사용되는 컴포넌트 <Suspense>가 정의 되어있어야 동작한다.
  delay: 200,
  suspensible: false
});

export default defineComponent({
  name: "Users",

  async setup() {
    const { users, error, load } = useUsers();

    await load();

    return { users, error };
  },

  components: {
    AsyncUser
  }
});
</script>
