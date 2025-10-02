import WarpDriveShader from "@/components/ui/warp-drive-shader";
import { Button } from "@/components/ui/button";
import RotatingGradientRight from "@/components/ui/rotating-gradient-right";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";
import { Feature } from "@/components/ui/feature-with-image";
import WobbleCardDemo from "@/components/wobble-card-demo";
import CodeBlockDemo from "@/components/code-block-demo";

const Index = () => {
  return (
    <>
      <div className="app-container">
        <WarpDriveShader />
        <div className="overlay-content">
          <div className="space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white">Campus Loop</h1>
              <p className="text-xl md:text-2xl text-white/80 font-light">where every student's journey comes full circle</p>
            </div>
            <div className="flex justify-center pt-8">
              <button className="scroll-btn">
                <div className="scroll-indicator"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <RotatingGradientRight />
      <MacbookScrollDemo />
      <Feature />
      <WobbleCardDemo />
      <CodeBlockDemo />
    </>
  );
};
export default Index;