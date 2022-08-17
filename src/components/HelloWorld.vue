<script lang="ts">
import { defineComponent } from "vue";
import { appStore, userStore } from "@/store";
export default defineComponent({
  setup() {
    const app = appStore();
    const user = userStore();
    console.log(app, "appStore");
  },
});
</script>
