import { Title } from "@/components/title";
import Materials from "./components/materials";

function App() {
  return (
    <>
      <div className="bg-light-black text-text-white min-h-screen font-primary">
        <Title />
        <div className="h-12" />
        <Materials />
      </div>
    </>
  );
}

export default App;
