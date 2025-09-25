import WarpDriveShader from "@/components/ui/warp-drive-shader";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="app-container">
      <WarpDriveShader />
      <div className="overlay-content">
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold text-cyber pulse-glow">
              WARP DRIVE
            </h1>
            <p className="text-xl md:text-2xl text-hologram">
              Interactive WebGL Shader Experience
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Move your mouse to navigate through the dimensional tunnel. 
              Experience the future of web graphics with real-time shader rendering.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="cyber-container text-primary-foreground bg-primary hover:bg-primary/90 shadow-glow-primary"
              >
                Enter Hyperspace
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="cyber-container border-primary text-primary hover:bg-primary/10"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="cyber-container p-6 float-animation" style={{ animationDelay: '0s' }}>
              <h3 className="text-neon text-xl font-semibold mb-2">Real-time Rendering</h3>
              <p className="text-muted-foreground">
                Experience buttery smooth 60fps WebGL shader animations
              </p>
            </div>
            <div className="cyber-container p-6 float-animation" style={{ animationDelay: '2s' }}>
              <h3 className="text-neon text-xl font-semibold mb-2">Interactive Controls</h3>
              <p className="text-muted-foreground">
                Mouse movement controls the tunnel navigation in real-time
              </p>
            </div>
            <div className="cyber-container p-6 float-animation" style={{ animationDelay: '4s' }}>
              <h3 className="text-neon text-xl font-semibold mb-2">Sci-Fi Aesthetics</h3>
              <p className="text-muted-foreground">
                Immersive cyberpunk design with glowing neon effects
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
