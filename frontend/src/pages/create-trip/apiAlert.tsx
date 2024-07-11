import { LoaderCircle } from "lucide-react";
import { Button } from "../../components/button";

export function ApiAlert() {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[450px] text-center rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5 border border-red-600 flex flex-col items-center">
        <h2 className="text-center text-red-600 font-semibold">
          Api não conectada!
        </h2>
        <p>
          Vá para{" "}
          <a
            className="underline hover:text-zinc-300"
            href="https://github.com/leoFagundes/nlw-rocketseat-planner"
          >
            {" "}
            https://github.com/leoFagundes/nlw-rocketseat-planner
          </a>{" "}
          e rode o "nlw-journey-nodejs"
        </p>
        <Button onClick={() => window.location.reload()} variant={"secondary"}>
          <LoaderCircle /> Tentar novamente
        </Button>
      </div>
    </div>
  );
}
