export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Realizadora</h3>
            <p className="text-primary-foreground/90 text-sm">
              Corretora especializada em planos de saúde com atendimento humanizado.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#servicos">Planos</a></li>
              <li><a href="#depoimentos">Cases</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/90 text-sm">
              <li>(11) 98765-4321</li>
              <li>contato@realizadora.com.br</li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/politica-privacidade">Política de Privacidade</a></li>
              <li><a href="/termos-uso">Termos de Uso</a></li>
              <li><a href="/lgpd">LGPD</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center space-y-2">
            <p className="text-xs text-primary-foreground/80">
              Realizadora Corretora de Seguros LTDA - CNPJ: XX.XXX.XXX/XXXX-XX
            </p>
            <p className="text-xs text-primary-foreground/80">
              Registro ANS: XXXXXX | Registro SUSEP: XXXXXX
            </p>
            <p className="text-xs text-primary-foreground/80">
              Responsável Técnico: [Nome Completo] - Registro CRS: XXXXX
            </p>
            <p className="text-xs text-primary-foreground/60 mt-4">
              © 2024 Realizadora. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};