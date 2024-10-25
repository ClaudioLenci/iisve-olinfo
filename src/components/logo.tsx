import olinfoImg from "@/assets/olinfo.svg";
import mascotteImg from "@/assets/mascotte.png";

export function Logo() {
  return (
    <div className="flex justify-center gap-x-32 h-80 w-[50vw] m-auto">
      <div className="flex justify-center basis-1/2 bg-[radial-gradient(circle,_rgba(51,51,51,1)_20%,_rgba(38,38,38,1)_35%)]">
        <img src={olinfoImg} className="h-full py-5" />
      </div>
      <div className="flex justify-center basis-1/2 bg-[radial-gradient(circle,_rgba(51,51,51,1)_20%,_rgba(38,38,38,1)_35%)]">
        <img src={mascotteImg} className="h-full" />
      </div>
    </div>
  );
}
