import { useSignal } from "@preact/signals";
import Input from "../components/InputComp.tsx";
import InputForm from "../islands/InputForm.tsx";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
    <InputForm name={""} />
    </div>
  );
}
