import {
  reactive,
  toRefs
  // ref
} from "vue";

export default function useUsers() {
  // const error = ref(null);
  // const users = ref(null);

  // state를 reactive하게 만들어서 반환한다.
  const state = reactive({
    users: null,
    error: null
  });

  const load = async () => {
    try {
      const usersResponse = await fetch("https://reqres.in/api/users");
      // users.value = await usersResponse.json();
      state.users = await usersResponse.json();
    } catch (e) {
      // error.value = e;
      state.error = e;
    }
  };
  // return 시에는 하나의 Object를 return해야 한다.
  return {
    ...toRefs(state),
    load
  };
  // {
  // users,
  // error,ac
  // load
  // };
}