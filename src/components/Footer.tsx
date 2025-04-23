import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border/40">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold text-xl">GD</div>
              <span className="ml-2 text-xl font-semibold">GameDesign</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Ваш надежный путеводитель в мире геймдизайна и разработки игр.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold mb-4">Обучение</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/tutorials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Руководства
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Курсы
                  </Link>
                </li>
                <li>
                  <Link to="/workshops" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Мастер-классы
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-4">Ресурсы</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Инструменты
                  </Link>
                </li>
                <li>
                  <Link to="/templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Шаблоны
                  </Link>
                </li>
                <li>
                  <Link to="/examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Примеры
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold mb-4">О нас</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    О проекте
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} GameDesign. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
