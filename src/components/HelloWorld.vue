<script lang="ts">
import { defineComponent } from "vue";
import { appStore, userStore } from "@/store";
import { gotoLogin } from "@/api/requestList";
export default defineComponent({
  setup() {
    const app = appStore();
    const user = userStore();
    console.log(app, "appStore");
    console.log(import.meta.env, "11");
    const res = gotoLogin({ userName: "admin", password: "admin" });
  },
});
</script>
