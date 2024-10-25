import olinfoImg from "@/assets/olinfo.png";
import mascotteImg from "@/assets/mascotte.png";

export function Logo() {
  return (
    <div className="flex justify-center gap-x-32 h-80">
      <div>
        <img src={olinfoImg} className="h-full" />
      </div>
      <div>
        <img src={mascotteImg} className="h-full" />
      </div>
    </div>
  );
}
