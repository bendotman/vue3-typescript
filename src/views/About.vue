<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div v-if="error">{{ error }}</div>
  <!-- async로 호출되는 setup()을 쓰는 자녀 객체는 다음과 같이 suspense를 걸어준다. -->
  <Suspense v-else>
    <!-- 
        - suspense가 사용될 때는 응답이 오는 동안 로딩상태를 표시할 수 있다.
        - #default template에 응답 후에 보여질 컴포넌트를 넣고, 
        - #fallback template에 로딩시 보여질 상태를 넣는다. 
    -->
    <template #default>
      <users />
    </template>
    <template #fallback>
      <div>Loading your amazing vuesers...</div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, ref, onErrorCaptured } from "vue";
import Users from "@/components/Users.vue";

export default defineComponent({
  name: "About",
  setup() {
    const error = ref();

    onErrorCaptured(e => {
      error.value = e;
    });

    return {
      error
    };
  },

  components: {
    Users
  }
});
</script>
