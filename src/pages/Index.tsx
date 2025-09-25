import WarpDriveShader from "@/components/ui/warp-drive-shader";
import { Button } from "@/components/ui/button";
import { EvervaultCard } from "@/components/ui/evervault-card";
const Index = () => {
  return <div className="app-container">
      <WarpDriveShader />
      <div className="overlay-content">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white">Campus Loop</h1>
            <p className="text-xl md:text-2xl text-white/80 font-light">where every student's journey comes full circle</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="h-96">
              <EvervaultCard text="Students" />
            </div>
            <div className="h-96">
              <EvervaultCard text="Connect" />
            </div>
            <div className="h-96">
              <EvervaultCard text="Learn" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Index;