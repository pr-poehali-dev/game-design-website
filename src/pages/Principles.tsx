import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";

const Principles = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Заголовок */}
        <div className="bg-gradient-to-b from-primary/20 to-background pt-12 pb-6">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Принципы геймдизайна
            </h1>
            <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
              Фундаментальные принципы, на которых строится создание качественных и вовлекающих игровых проектов
            </p>
          </div>
        </div>

        {/* Основной контент */}
        <div className="container mx-auto px-4 py-12">
          {/* Базовые принципы */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Базовые принципы геймдизайна</h2>
            <Separator className="mb-8 bg-primary/30" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 border border-border/60 hover:border-primary/60 transition-all hover:shadow-md hover:shadow-primary/20">
                <h3 className="text-xl font-semibold mb-3">Ясность действий</h3>
                <p className="text-muted-foreground mb-4">
                  Игроки должны понимать, что делать дальше, как работают механики и что ведет к успеху. Интуитивность и понятный фидбек — ключи к успеху.
                </p>
                <Button variant="link" className="pl-0 flex items-center text-primary">
                  Подробнее <ChevronRight size={16} className="ml-1" />
                </Button>
              </Card>
              
              <Card className="p-6 border border-border/60 hover:border-primary/60 transition-all hover:shadow-md hover:shadow-primary/20">
                <h3 className="text-xl font-semibold mb-3">Баланс сложности</h3>
                <p className="text-muted-foreground mb-4">
                  Идеальный баланс между сложностью и доступностью создает состояние потока. Игроки не должны скучать, но и не должны быть перегружены.
                </p>
                <Button variant="link" className="pl-0 flex items-center text-primary">
                  Подробнее <ChevronRight size={16} className="ml-1" />
                </Button>
              </Card>
              
              <Card className="p-6 border border-border/60 hover:border-primary/60 transition-all hover:shadow-md hover:shadow-primary/20">
                <h3 className="text-xl font-semibold mb-3">Значимый выбор</h3>
                <p className="text-muted-foreground mb-4">
                  Хороший геймдизайн предлагает игрокам делать выбор, который имеет видимые последствия и влияет на игровой процесс или нарратив.
                </p>
                <Button variant="link" className="pl-0 flex items-center text-primary">
                  Подробнее <ChevronRight size={16} className="ml-1" />
                </Button>
              </Card>
            </div>
          </section>
          
          {/* Диаграмма */}
          <section className="mb-16 bg-secondary/30 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Основные элементы игрового опыта</h2>
            
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Механики</h3>
                <ul className="space-y-2 pl-5">
                  <li className="list-disc">Правила игры</li>
                  <li className="list-disc">Действия игрока</li>
                  <li className="list-disc">Системы наград</li>
                  <li className="list-disc">Способы взаимодействия</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Динамика</h3>
                <ul className="space-y-2 pl-5">
                  <li className="list-disc">Возникающий геймплей</li>
                  <li className="list-disc">Социальные взаимодействия</li>
                  <li className="list-disc">Конкуренция и сотрудничество</li>
                  <li className="list-disc">Адаптация к действиям игрока</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Эстетика</h3>
                <ul className="space-y-2 pl-5">
                  <li className="list-disc">Визуальный стиль</li>
                  <li className="list-disc">Звуковой дизайн</li>
                  <li className="list-disc">Сторителлинг</li>
                  <li className="list-disc">Атмосфера и настроение</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Эмоции</h3>
                <ul className="space-y-2 pl-5">
                  <li className="list-disc">Удовлетворение</li>
                  <li className="list-disc">Азарт и интерес</li>
                  <li className="list-disc">Исследование и открытия</li>
                  <li className="list-disc">Социальная связь</li>
                </ul>
              </div>
            </div>
          </section>
          
          {/* Цитаты известных геймдизайнеров */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Мудрость от мастеров</h2>
            <Separator className="mb-8 bg-primary/30" />
            
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="italic text-lg mb-2">
                  "Хороший геймдизайн — это не о том, чтобы делать правильный выбор. Это о том, чтобы делать выбор со значимыми последствиями."
                </p>
                <p className="font-semibold">— Сид Мейер</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="italic text-lg mb-2">
                  "Геймдизайн не о красивой графике. Он о создании опыта, который заставляет игрока чувствовать что-то особенное."
                </p>
                <p className="font-semibold">— Хидэо Кодзима</p>
              </div>
              
              <div className="border-l-4 border-primary pl-6 py-2">
                <p className="italic text-lg mb-2">
                  "Лучшие игры — это те, которые легко изучить, но трудно освоить. Они должны вознаграждать первое взаимодействие с игрой и постоянно вознаграждать мастерство."
                </p>
                <p className="font-semibold">— Нолан Бушнелл</p>
              </div>
            </div>
          </section>
          
          {/* Призыв к действию */}
          <section className="bg-gradient-to-r from-primary/40 to-secondary/40 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Готовы углубиться в мир геймдизайна?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Присоединяйтесь к нашим мастер-классам, чтобы научиться применять эти принципы в разработке собственных игр!
            </p>
            <Button size="lg" className="animate-pulse">
              Записаться на мастер-класс
            </Button>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Principles;
