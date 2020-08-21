<template>
  <div>{{ user.first_name }} {{ user.last_name }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "User",
  props: {
    user: Object
  },
  setup(props) {
    return { props };
  }
});
</script>
