import { 
  BookOpen, 
  Code, 
  Users, 
  TrendingUp, 
  LayoutPanelLeft, 
  Gamepad2
} from "lucide-react";

const features = [
  {
    icon: <BookOpen className="h-12 w-12 text-primary" />,
    title: "Фундаментальные принципы",
    description: "Изучите основные концепции и теории, лежащие в основе успешного геймдизайна."
  },
  {
    icon: <LayoutPanelLeft className="h-12 w-12 text-primary" />,
    title: "Проектирование уровней",
    description: "Освойте методы создания увлекательных и сбалансированных игровых уровней."
  },
  {
    icon: <Users className="h-12 w-12 text-primary" />,
    title: "Пользовательский опыт",
    description: "Научитесь разрабатывать игры с учетом психологии игроков и паттернов поведения."
  },
  {
    icon: <Gamepad2 className="h-12 w-12 text-primary" />,
    title: "Механики и динамики",
    description: "Разрабатывайте увлекательные игровые механики и системы взаимодействия."
  },
  {
    icon: <Code className="h-12 w-12 text-primary" />,
    title: "Прототипирование",
    description: "Создавайте рабочие прототипы для тестирования и итерации ваших игровых идей."
  },
  {
    icon: <TrendingUp className="h-12 w-12 text-primary" />,
    title: "Аналитика и метрики",
    description: "Используйте данные для оптимизации и улучшения игрового процесса."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ключевые аспекты геймдизайна</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Исследуйте различные аспекты создания игр и развивайте навыки, необходимые для разработки увлекательных игровых проектов.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-secondary/30 backdrop-blur-sm border border-border/40 rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
