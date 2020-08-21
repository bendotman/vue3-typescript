<template>
  <div>
    <h3>Simple Calculator</h3>
    <form>
      <input type="text" v-model="num1" />
      <span>+</span>
      <input type="text" v-model="num2" />
      <span>=</span>
      <span>{{ result }}</span>
    </form>
  </div>
</template>

<script lang="ts">
import { useCalculator } from "@/hooks/useCalculator.ts"; // hooks로 만든 후 importㅎ
export default {
  name: "Calculator",

  // setup은 하나의 vue객체의 변수와 메소드를 모두 포함하고있는 상태값이다.
  setup() {
    const { num1, num2, result } = useCalculator(); // hooks의 함수 사용

    return {
      num1,
      num2,
      result
    };
  }
};
</script>
