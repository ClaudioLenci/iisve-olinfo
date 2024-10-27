import olinfoImg from "@/assets/olinfo.svg";
import mascotteImg from "@/assets/mascotte.png";

export function Title() {
  return (
    <div className="flex flex-col gap-y-12">
      <div className="flex justify-center md:gap-x-32 sm:gap-x-16 gap-x-8 md:h-96 sm:h-60 h-50 md:w-[50vw] sm:w-[70vw] w-[90vw] m-auto">
        <div className="flex justify-center basis-1/2 bg-[radial-gradient(circle,_rgba(51,51,51,1)_20%,_rgba(38,38,38,1)_35%)]">
          <img src={olinfoImg} className="h-full py-5" />
        </div>
        <div className="flex justify-center basis-1/2 bg-[radial-gradient(circle,_rgba(51,51,51,1)_20%,_rgba(38,38,38,1)_35%)]">
          <img src={mascotteImg} className="h-full" />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col justify-center gap-2 text-4xl font-bold">
        <h1 className="text-center">Olimpiadi di Informatica</h1>
        <h1 className="text-center">@</h1>
        <h1 className="text-center">IISVE</h1>
      </div>
    </div>
  );
}
