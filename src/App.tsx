import { Title } from "@/components/title";
import Materials from "./components/materials";
import LessonList from "./components/lessons";

function App() {
  return (
    <>
      <div className="bg-light-black text-text-white min-h-screen font-primary">
        <Title />
        <div className="h-12" />
        <Materials />
        <div className="h-12" />
        <LessonList />
      </div>
    </>
  );
}

export default App;
