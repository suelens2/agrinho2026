function calcularImpacto() {
    // Pega o valor digitado pelo usuário
    const hectaresInput = document.getElementById('hectares').value;
    const hectares = parseFloat(hectaresInput);

    // Validação simples para garantir que o usuário digitou um número válido
    if (isNaN(hectares) || hectares <= 0) {
        alert("Por favor, insira um número válido de hectares.");
        return;
    }

    // Cálculos fictícios baseados em dados de sustentabilidade reais médios:
    // Exemplo: Economia de 20.000 litros de água por hectare/ano com irrigação inteligente
    // Exemplo: Redução de 150kg de CO2 por hectare/ano usando plantio direto
    const aguaEconomizada = hectares * 20000;
    const co2Evitado = hectares * 150;

    // Atualiza os valores na tela com formatação numérica brasileira
    document.getElementById('res-agua').innerText = aguaEconomizada.toLocaleString('pt-BR');
    document.getElementById('res-co2').innerText = co2Evitado.toLocaleString('pt-BR');

    // Remove a classe 'hidden' para mostrar o resultado com a animação
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.classList.remove('hidden');
}