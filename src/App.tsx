import { Title } from "@/components/title";
import Materials from "@/components/materials";
import LessonList from "@/components/lessons";
import { DiscordInvite } from "@/components/discord-invite";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <div className="bg-light-black text-text-white min-h-screen font-primary">
        <Title />
        <div className="h-12" />
        <Materials />
        <div className="h-12" />
        <LessonList />
        <div className="h-12" />
        <DiscordInvite />
        <div className="h-12" />
      </div>
      <Analytics />
    </>
  );
}

export default App;
