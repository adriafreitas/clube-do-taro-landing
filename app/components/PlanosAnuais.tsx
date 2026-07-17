"use client";

const planos = [
  {
    nome: "Plano Bronze Anual",
    descricao: "Plano Anual do Clube do Tarô",
    valor: "R$ 298,86",
    periodo: "/anual",
    link: "https://invoice.infinitepay.io/plans/adriafreitas/o99vCY8Esy",
  },
  {
    nome: "Plano Prata Anual",
    descricao: "Plano Anual Prata",
    valor: "R$ 491,00",
    periodo: "/anual",
    link: "https://invoice.infinitepay.io/plans/adriafreitas/IBW6bjC0KT",
  },
  {
    nome: "Plano Ouro Anual",
    descricao: "Plano Anual Ouro",
    valor: "R$ 754,80",
    periodo: "/anual",
    link: "https://invoice.infinitepay.io/plans/adriafreitas/IF7YpWElDp",
  },
  {
    nome: "Plano Diamante Anual",
    descricao: "Plano Anual Diamante",
    valor: "R$ 1.672,80",
    periodo: "/anual",
    link: "https://invoice.infinitepay.io/plans/adriafreitas/7Cdzp9q2Aj",
  },
];

export default function PlanosAnuais() {
  return (
    <section
      id="planos-anuais"
      className="py-24 bg-gradient-to-b from-[#1a0826] to-[#12051b]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
            Planos Anuais
          </h2>

          <p className="text-gray-300 mt-4 text-lg">
            Economize pagando uma única vez e tenha acesso durante todo o ano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {planos.map((plano) => (
            <div
              key={plano.nome}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#4B1E6D] mb-2">
                  {plano.nome}
                </h3>

                <p className="text-gray-500 mb-8">
                  {plano.descricao}
                </p>

                <div className="mb-8">
                  <span className="text-4xl font-extrabold text-[#4B1E6D]">
                    {plano.valor}
                  </span>

                  <span className="text-gray-500">
                    {" "}
                    {plano.periodo}
                  </span>
                </div>
              </div>

              <a
                href={plano.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full bg-[#4B1E6D] hover:bg-[#6C2EA0] text-white font-semibold py-4 rounded-xl transition-all duration-300">
                  FAZER PARTE
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}