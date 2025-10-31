export const LegalInfo = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Informações Legais</h3>
          <div className="space-y-4 text-muted-foreground text-sm">
            <p>
              <strong>Registro ANS:</strong> [INSERIR NÚMERO] - Agência Nacional de Saúde Suplementar
            </p>
            <p>
              As informações apresentadas são meramente informativas. 
              A contratação está sujeita à análise e aprovação da operadora escolhida.
            </p>
            <p>
              <strong>Importante:</strong> Planos de saúde possuem períodos de carência 
              conforme legislação vigente (Lei 9.656/98). Consulte as condições específicas 
              de cada operadora.
            </p>
            <p className="text-xs">
              Os valores e coberturas estão sujeitos a alterações conforme regulamentação 
              da ANS e políticas comerciais das operadoras parceiras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};