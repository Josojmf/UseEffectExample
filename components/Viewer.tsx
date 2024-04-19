import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

const Viewer: FunctionComponent<{ id: Signal<string> }> = ({ id }) => {
  if (IS_BROWSER) return <div>{id.value}</div>;
  else return null;
};

export default Viewer;