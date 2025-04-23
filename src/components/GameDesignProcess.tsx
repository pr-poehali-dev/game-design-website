import {
  LightbulbIcon,
  ScrollText,
  Workflow,
  Layers,
  TestTube,
  BarChart3
} from "lucide-react";

const processes = [
  {
    icon: <LightbulbIcon className="h-8 w-8 text-primary" />,
    title: "Концепция",
    description: "Разработка идеи игры, целевой аудитории и ключевого геймплея.",
    number: "01"
  },
  {
    icon: <ScrollText className="h-8 w-8 text-primary" />,
    title: "Документация",
    description: "Создание дизайн-документа с детальным описанием игровых механик и систем.",
    number: "02"
  },
  {
    icon: <Workflow className="h-8 w-8 text-primary" />,
    title: "Прототипирование",
    description: "Построение рабочего прототипа для проверки основных игровых механик.",
    number: "03"
  },
  {
    icon: <Layers className="h-8 w-8 text-primary" />,
    title: "Итерация",
    description: "Улучшение дизайна на основе тестирования и обратной связи.",
    number: "04"
  },
  {
    icon: <TestTube className="h-8 w-8 text-primary" />,
    title: "Тестирование",
    description: "Проведение пользовательских тестов для выявления проблем и улучшения опыта.",
    number: "05"
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-primary" />,
    title: "Балансировка",
    description: "Настройка сложности, наград и прогрессии для оптимального игрового опыта.",
    number: "06"
  }
];

const GameDesignProcess = () => {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Процесс геймдизайна</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Эффективный геймдизайн следует структурированному процессу, который помогает превратить идеи в увлекательные игры.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div 
              key={index} 
              className="bg-background/70 backdrop-blur-sm border border-border/40 rounded-xl p-6 relative overflow-hidden group"
            >
              <span className="absolute -right-2 -top-2 text-7xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                {process.number}
              </span>
              
              <div className="relative z-10">
                <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                  {process.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameDesignProcess;
