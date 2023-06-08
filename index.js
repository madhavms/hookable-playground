import { createHooks, Hookable } from "hookable";

class HookableComponent extends Hookable {
  async mount(data) {
    await this.callHook("beforeMount", data);
    console.log("App mounted");
    await this.callHook("afterMount", data);
  }

  beforeMount(fn) {
    this.hook("beforeMount", async (data) => await fn(data));
  }

  afterMount(fn) {
    this.hook("afterMount", async (data) => await fn(data));
  }
}

const Component = new HookableComponent();

const beforeMountFn = (data) => {
  console.log("Data beforeMount:", data);
};
const afterMountFn = (data) => {
  console.log("Data afterMount:", `Mr.${data}`);
};

Component.beforeMount(beforeMountFn);
Component.afterMount(afterMountFn);

Component.mount("Madhav");
