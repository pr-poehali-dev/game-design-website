import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-secondary/50 backdrop-blur-md border-b border-border/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold text-xl">GD</div>
              <span className="ml-2 text-xl font-semibold">GameDesign</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/20 transition-colors">Главная</Link>
            <Link to="/workshops" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/20 transition-colors">Мастер-классы</Link>
            <Link to="/principles" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/20 transition-colors">Принципы</Link>
            <Link to="/tools" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/20 transition-colors">Инструменты</Link>
            <Link to="/resources" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-primary/20 transition-colors">Ресурсы</Link>
            <Button variant="default" size="sm">Начать обучение</Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border/40">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/20 transition-colors">Главная</Link>
            <Link to="/workshops" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/20 transition-colors">Мастер-классы</Link>
            <Link to="/principles" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/20 transition-colors">Принципы</Link>
            <Link to="/tools" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/20 transition-colors">Инструменты</Link>
            <Link to="/resources" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/20 transition-colors">Ресурсы</Link>
            <div className="px-3 py-2">
              <Button className="w-full" variant="default">Начать обучение</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
