'use client';

import { useState } from 'react';
import { Check, Star, Shield, Users, TrendingUp, Heart, Smartphone, Award, Clock, Target } from 'lucide-react';

export default function KiwizeLandingPage() {
  const [selectedPlan, setSelectedPlan] = useState('premium');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#7ED957] rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">Kiwize</span>
            </div>
            <button className="bg-[#7ED957] hover:bg-[#6BC847] text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Baixar Agora
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#7ED957]/10 to-[#FFA64D]/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Perda de Gordura <span className="text-[#7ED957]">Fácil</span> e <span className="text-[#FFA64D]">Saudável</span> com Kiwize
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Registre suas refeições, acompanhe calorias, receba dicas nutricionais e gamificação para motivar seu progresso diário
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-[#7ED957] hover:bg-[#6BC847] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                🚀 Começar Agora - GRÁTIS
              </button>
              <button className="border-2 border-[#FFA64D] text-[#FFA64D] hover:bg-[#FFA64D] hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Ver Como Funciona
              </button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-[#FFA64D] fill-current" />
                <span>4.8/5 estrelas</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-5 h-5 text-[#7ED957]" />
                <span>+50.000 usuários</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-5 h-5 text-[#7ED957]" />
                <span>100% Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Motivação */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Transforme Sua Vida Hoje
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Seja Mais Forte</h3>
                <p className="text-gray-600">Cada dia é uma nova oportunidade de se tornar a melhor versão de si mesmo</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Foque no Resultado</h3>
                <p className="text-gray-600">Pequenos passos diários levam a grandes transformações</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🌟</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Brilhe Sempre</h3>
                <p className="text-gray-600">Sua jornada de saúde é única e especial - celebre cada conquista</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Como o Kiwize Funciona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              5 passos simples para transformar sua relação com a comida e alcançar seus objetivos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7ED957] rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Registre Refeições</h3>
              <p className="text-gray-600">Fotografe ou digite o que você come de forma rápida e intuitiva</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA64D] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Receba Calorias</h3>
              <p className="text-gray-600">Nosso sistema calcula automaticamente as calorias e macronutrientes</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7ED957] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Acompanhe Progresso</h3>
              <p className="text-gray-600">Visualize gráficos e estatísticas do seu progresso em tempo real</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA64D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Dicas Personalizadas</h3>
              <p className="text-gray-600">Receba sugestões nutricionais baseadas no seu perfil e objetivos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7ED957] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Gamificação</h3>
              <p className="text-gray-600">Ganhe pontos, conquistas e mantenha-se motivado todos os dias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gradient-to-br from-[#7ED957]/5 to-[#FFA64D]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher o Kiwize?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de 50.000 pessoas já transformaram suas vidas com nosso app
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-[#7ED957] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Perda de Gordura Real</h3>
              <p className="text-gray-600">Resultados comprovados em média de 2-4kg por mês</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-[#FFA64D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Motivação Diária</h3>
              <p className="text-gray-600">Sistema de gamificação que mantém você engajado</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-[#7ED957] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Facilidade Total</h3>
              <p className="text-gray-600">Apenas 2 minutos por dia para registrar suas refeições</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
              <div className="w-12 h-12 bg-[#FFA64D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Saudável</h3>
              <p className="text-gray-600">Sem dietas restritivas, foque em hábitos sustentáveis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Usuários Dizem
            </h2>
            <p className="text-xl text-gray-600">Histórias reais de transformação</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="flex text-[#FFA64D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Perdi 8kg em 3 meses usando o Kiwize! O app é super fácil de usar e as dicas nutricionais me ajudaram muito. Recomendo para todos!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#7ED957] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">M</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria Silva</p>
                  <p className="text-sm text-gray-600">Perdeu 8kg em 3 meses</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="flex text-[#FFA64D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Finalmente encontrei um app que não me faz sentir culpado! A gamificação é viciante e me motiva todos os dias. Já perdi 12kg!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#FFA64D] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">J</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">João Santos</p>
                  <p className="text-sm text-gray-600">Perdeu 12kg em 4 meses</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="flex text-[#FFA64D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Como mãe de 2 filhos, preciso de praticidade. O Kiwize me ajudou a perder peso sem complicação. Uso há 6 meses e amo!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#7ED957] rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ana Costa</p>
                  <p className="text-sm text-gray-600">Perdeu 6kg em 6 meses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section className="py-16 bg-gradient-to-br from-[#7ED957]/10 to-[#FFA64D]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Escolha Seu Plano
            </h2>
            <p className="text-xl text-gray-600">Comece grátis e evolua quando quiser</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Plano Free */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">R$ 0</div>
                <p className="text-gray-600">Para sempre</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#7ED957] mr-3" />
                  <span>Registro básico de refeições</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#7ED957] mr-3" />
                  <span>Contador de calorias</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#7ED957] mr-3" />
                  <span>Progresso básico</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#7ED957] mr-3" />
                  <span>Gamificação limitada</span>
                </li>
              </ul>
              
              <button className="w-full border-2 border-[#7ED957] text-[#7ED957] hover:bg-[#7ED957] hover:text-white py-3 rounded-full font-semibold transition-all duration-300">
                Começar Grátis
              </button>
            </div>
            
            {/* Plano Premium */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#7ED957] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#FFA64D] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  MAIS POPULAR
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Premium</h3>
                <div className="text-4xl font-bold text-[#7ED957] mb-2">R$ 19,90</div>
                <p className="text-gray-600">por mês</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#7ED957] mr-3" />
                  <span>Tudo do plano Free</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#7ED957] mr-3" />
                  <span>Dicas nutricionais personalizadas</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#7ED957] mr-3" />
                  <span>Relatórios detalhados</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#7ED957] mr-3" />
                  <span>Gamificação completa</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#7ED957] mr-3" />
                  <span>Suporte prioritário</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#7ED957] mr-3" />
                  <span>Receitas exclusivas</span>
                </li>
              </ul>
              
              <button className="w-full bg-[#7ED957] hover:bg-[#6BC847] text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Assinar Premium
              </button>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              💳 Pagamento seguro • 🔄 Cancele quando quiser • 📱 Disponível para iOS e Android
            </p>
          </div>
        </div>
      </section>

      {/* Garantia e Segurança */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Sua Satisfação é Garantida
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7ED957] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">7 Dias de Garantia</h3>
              <p className="text-gray-600">Não ficou satisfeito? Devolvemos 100% do seu dinheiro em até 7 dias</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FFA64D] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Suporte 24/7</h3>
              <p className="text-gray-600">Nossa equipe está sempre disponível para ajudar você a alcançar seus objetivos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#7ED957] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacidade Total</h3>
              <p className="text-gray-600">Seus dados são protegidos com criptografia de nível bancário</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-[#7ED957] to-[#FFA64D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Comece Hoje a Perder Gordura de Forma Saudável com Kiwize!
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Junte-se a mais de 50.000 pessoas que já transformaram suas vidas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#7ED957] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              🚀 Baixar Kiwize - GRÁTIS
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#7ED957] px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              💎 Assinar Premium
            </button>
          </div>
          <p className="text-white/80 mt-6 text-sm">
            ⭐ Avaliação 4.8/5 • 📱 +50.000 downloads • 🔒 100% seguro
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#7ED957] rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Kiwize</span>
              </div>
              <p className="text-gray-400">
                Transformando vidas através de hábitos saudáveis e sustentáveis.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Como Funciona</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Depoimentos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Kiwize. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}