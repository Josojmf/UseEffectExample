import { Signal } from "@preact/signals";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const InputComponent: FunctionComponent<{ id: Signal<string> }> = (
  { id },
) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(id.value);
       }}
    >
      <label>
        Name:
        <input type="text" name="id" onChange={(e) => id.value = e.currentTarget.value} />

      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
export default InputComponent;
