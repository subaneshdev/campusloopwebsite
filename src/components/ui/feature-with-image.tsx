import { Badge } from "@/components/ui/badge";
import MacbookScrollDemo from "@/components/macbook-scroll-demo";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40 bg-black dark:bg-black relative -mt-40 pt-60">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
          <div className="bg-transparent rounded-md w-full aspect-video h-full flex-1 relative">
            <MacbookScrollDemo />
          </div>
          <div className="flex gap-4 pl-0 lg:pl-20 flex-col flex-1">
            <div>
              <Badge variant="secondary">Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left text-white">
                Campus Nexus — The Future of Campus Management
              </h2>
              <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-white/80 text-left">
                Empower your institution with Campus Nexus: the all-in-one, AI-powered ERP platform designed for today's campuses and tomorrow's leaders. From seamless admissions and personalized learning to smart finance, integrated placements, and holistic analytics—Campus Nexus unifies every process into a secure, scalable, mobile-first ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };