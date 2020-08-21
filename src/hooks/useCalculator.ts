import {
  reactive,
  computed,
  toRefs
} from "vue";

// 함수와 상태값을 재사용하기위해 hooks 함수로 선언한 뒤 export한다.
export function useCalculator() {
  const state: any = reactive({
    num1: 0,
    num2: 0,
    // computed를 사용하면 template에서 이벤트가 일어날때 메소드를 사용하지 않고 값이 변경됨에 따라 연산할 수 있다.
    // input은 이미 이벤트를 가지고있기 때문에 따로 선언할 필요 없이 computed를 사용하여 input이벤트를 리스닝할 수 있다.
    result: computed(() => parseInt(state.num1) + parseInt(state.num2)),
  });

  return { ...toRefs(state) };
}