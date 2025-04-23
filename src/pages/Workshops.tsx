import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const Workshops = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Мастер-классы и семинары</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Погрузитесь в мир геймдизайна с нашими интерактивными мастер-классами и профессиональными семинарами
              </p>
              <Button size="lg" className="rounded-full">Записаться на занятие</Button>
            </div>
          </div>
        </section>
        
        {/* Workshop Types Tabs */}
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-3">
                  <TabsTrigger value="upcoming">Ближайшие</TabsTrigger>
                  <TabsTrigger value="online">Онлайн</TabsTrigger>
                  <TabsTrigger value="offline">Офлайн</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="upcoming" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Workshop Card 1 */}
                  <Card className="bg-secondary/10 border border-border/40 hover:shadow-md transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="p-2 w-fit rounded-full bg-primary/10 text-primary mb-2">
                        <Users size={18} />
                      </div>
                      <CardTitle>Основы игровой механики</CardTitle>
                      <CardDescription>Практический мастер-класс по созданию базовых игровых механик</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>15 октября 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>18:00 - 21:00</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          <span>Онлайн (Zoom)</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Подробнее</Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Workshop Card 2 */}
                  <Card className="bg-secondary/10 border border-border/40 hover:shadow-md transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="p-2 w-fit rounded-full bg-primary/10 text-primary mb-2">
                        <Users size={18} />
                      </div>
                      <CardTitle>Нарративный дизайн</CardTitle>
                      <CardDescription>Искусство создания увлекательных игровых историй</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>22 октября 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>19:00 - 22:00</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          <span>Онлайн (Discord)</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Подробнее</Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Workshop Card 3 */}
                  <Card className="bg-secondary/10 border border-border/40 hover:shadow-md transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="p-2 w-fit rounded-full bg-primary/10 text-primary mb-2">
                        <Users size={18} />
                      </div>
                      <CardTitle>Балансировка игровой экономики</CardTitle>
                      <CardDescription>Семинар по созданию сбалансированной игровой экономики</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>29 октября 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>12:00 - 16:00</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          <span>Москва, ул. Игровая, 42</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Подробнее</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="online" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Online Workshop Card 1 */}
                  <Card className="bg-secondary/10 border border-border/40 hover:shadow-md transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="p-2 w-fit rounded-full bg-primary/10 text-primary mb-2">
                        <Users size={18} />
                      </div>
                      <CardTitle>Основы игровой механики</CardTitle>
                      <CardDescription>Практический мастер-класс по созданию базовых игровых механик</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>15 октября 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>18:00 - 21:00</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          <span>Онлайн (Zoom)</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Подробнее</Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Online Workshop Card 2 */}
                  <Card className="bg-secondary/10 border border-border/40 hover:shadow-md transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="p-2 w-fit rounded-full bg-primary/10 text-primary mb-2">
                        <Users size={18} />
                      </div>
                      <CardTitle>Нарративный дизайн</CardTitle>
                      <CardDescription>Искусство создания увлекательных игровых историй</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>22 октября 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>19:00 - 22:00</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          <span>Онлайн (Discord)</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Подробнее</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="offline" className="space-y-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Offline Workshop Card */}
                  <Card className="bg-secondary/10 border border-border/40 hover:shadow-md transition-all hover:-translate-y-1">
                    <CardHeader>
                      <div className="p-2 w-fit rounded-full bg-primary/10 text-primary mb-2">
                        <Users size={18} />
                      </div>
                      <CardTitle>Балансировка игровой экономики</CardTitle>
                      <CardDescription>Семинар по созданию сбалансированной игровой экономики</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>29 октября 2023</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-2 h-4 w-4" />
                          <span>12:00 - 16:00</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-2 h-4 w-4" />
                          <span>Москва, ул. Игровая, 42</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">Подробнее</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Registration Section */}
        <section className="py-16 bg-gradient-to-br from-primary/20 to-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Запишитесь на семинар</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Оставьте заявку, и мы свяжемся с вами для подтверждения участия и ответим на все вопросы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full">
                Записаться
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Получить программу
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Workshops;
