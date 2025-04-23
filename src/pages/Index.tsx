import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureSection from "@/components/FeatureSection";
import GameDesignProcess from "@/components/GameDesignProcess";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <FeatureSection />
        
        {/* Testimonials section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Мнения экспертов</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Узнайте, что говорят ведущие специалисты индустрии о ключевых аспектах геймдизайна.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-secondary/30 backdrop-blur-sm border border-border/40 rounded-xl p-8 relative">
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6">
                    "Хороший геймдизайн начинается с понимания игрока. Никогда не забывайте, что создаёте опыт, а не просто набор механик."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      ВК
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">Виктория Кравцова</div>
                      <div className="text-sm text-muted-foreground">Ведущий геймдизайнер, Pixonic</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/30 backdrop-blur-sm border border-border/40 rounded-xl p-8 relative">
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6">
                    "Итерация — ключ к успешному геймдизайну. Не бойтесь тестировать, ошибаться и переделывать, пока не достигнете совершенства."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      АН
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">Алексей Нестеров</div>
                      <div className="text-sm text-muted-foreground">Креативный директор, Nival</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-secondary/30 backdrop-blur-sm border border-border/40 rounded-xl p-8 relative">
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6">
                    "Самые запоминающиеся игры имеют простую основу, но глубокую систему. Стремитесь к простоте правил и богатству стратегий."
                  </blockquote>
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      МС
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">Мария Соколова</div>
                      <div className="text-sm text-muted-foreground">Игровой аналитик, MY.GAMES</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <GameDesignProcess />
        
        {/* Call to action */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать свой путь в геймдизайне?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
              Присоединяйтесь к нашему сообществу и получите доступ к ресурсам, инструментам и знаниям, необходимым для создания увлекательных игр.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full">
                Начать бесплатно
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                <Book className="mr-2 h-4 w-4" />
                Изучить материалы
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
