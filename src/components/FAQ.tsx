import { Card } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quanto tempo de carência tem o plano de saúde?",
    answer:
      "As carências variam por tipo de procedimento: consultas (24h emergencial), exames simples (30 dias), partos (300 dias), doenças preexistentes (24 meses CPT). Urgências e emergências têm atendimento após 24h de contratação.",
  },
  {
    question: "Posso migrar de operadora mantendo as carências cumpridas?",
    answer:
      "Sim! Através da portabilidade de carências (Lei 9.656/98), você pode trocar de operadora sem cumprir novamente os períodos de carência, desde que atenda aos requisitos: ter cumprido as carências no plano atual e respeitar o prazo de permanência mínima.",
  },
  {
    question: "O que é coparticipação?",
    answer:
      "É uma modalidade onde você paga uma mensalidade reduzida, mas compartilha os custos quando usa o plano (consultas, exames). Cada uso gera uma cobrança adicional, geralmente entre 10% a 40% do valor do procedimento. Ideal para quem usa pouco o plano.",
  },
  {
    question: "Como funciona a rede credenciada?",
    answer:
      "Cada operadora tem sua própria rede de médicos, hospitais e clínicas conveniadas. Você pode consultar a rede no site da operadora ou app. É importante verificar se seus médicos de preferência e hospitais próximos estão credenciados antes de contratar.",
  },
  {
    question: "Posso incluir dependentes depois de contratar?",
    answer:
      "Sim, mas com algumas regras: cônjuge e filhos podem ser incluídos a qualquer momento (com novas carências). Outros dependentes têm regras específicas. A inclusão pode alterar o valor da mensalidade.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dúvidas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Respostas para as perguntas mais comuns sobre planos de saúde
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {faq.question}
                  </h3>
                  {openIndex === index && (
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <div className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-primary" />
                  ) : (
                    <Plus className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou sua resposta?
          </p>
          <a
            href="#contato"
            className="text-primary font-semibold hover:underline"
          >
            Entre em contato conosco →
          </a>
        </div>
      </div>
    </section>
  );
};
