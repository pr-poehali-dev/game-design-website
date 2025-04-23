import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background z-0"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNTkuNSA2MEw1OS41IDAuNUwwIDAuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjkyOTI5IiBzdHJva2Utb3BhY2l0eT0iMC4xIiAvPjwvc3ZnPg==')] opacity-20 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 relative z-10">
        <div className="text-center lg:text-left grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              Ваш путь в игровую индустрию
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animate-delay-100">
              Искусство <span className="text-primary">геймдизайна</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 animate-fade-in animate-delay-200">
              Познайте основы проектирования игр от концепции до реализации. Изучите принципы, инструменты и методологии, используемые ведущими геймдизайнерами в индустрии.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in animate-delay-300">
              <Button size="lg" className="rounded-full">
                Начать изучение
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Посмотреть примеры
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative bg-secondary/80 backdrop-blur-sm border border-border/40 rounded-xl overflow-hidden w-full max-w-md">
                <div className="aspect-[4/3] relative bg-gradient-to-br from-muted/50 to-secondary">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-2 p-6 w-full max-w-xs">
                      <div className="bg-background/20 backdrop-blur-sm rounded-md p-4 flex items-center justify-center aspect-square">
                        <span className="text-3xl">🎮</span>
                      </div>
                      <div className="bg-background/20 backdrop-blur-sm rounded-md p-4 flex items-center justify-center aspect-square">
                        <span className="text-3xl">🧩</span>
                      </div>
                      <div className="bg-background/20 backdrop-blur-sm rounded-md p-4 flex items-center justify-center aspect-square">
                        <span className="text-3xl">🎲</span>
                      </div>
                      <div className="bg-background/20 backdrop-blur-sm rounded-md p-4 flex items-center justify-center aspect-square">
                        <span className="text-3xl">🏆</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg">Создавайте удивительные игры</h3>
                  <p className="text-sm text-muted-foreground mt-2">Проектируйте увлекательный геймплей, захватывающие уровни и незабываемые игровые моменты</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
