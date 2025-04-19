import DisabledButton from "./components/DisabledButton";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-neutral-900">
      <DisabledButton
        disabled={true}
        icon="send.png"
        description="send message"
      />
    </div>
  );
}
