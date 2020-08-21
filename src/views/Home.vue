<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Calculator />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// typescript에서 component는 하나의 클래스로 취급한다.
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Calculator from "@/components/Calculator.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    Calculator
  }
});
</script>
