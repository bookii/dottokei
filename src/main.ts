import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

const layout: Layout = import.meta.env.VITE_LAYOUT ?? "standard";

const app = mount(App, {
  target: document.getElementById("app")!,
  props: { layout: layout },
});

export default app;
