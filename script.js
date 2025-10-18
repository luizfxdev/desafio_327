// Elementos do DOM
const portalNumbersInput = document.getElementById('portal-numbers');
const revealBtn = document.getElementById('reveal-btn');
const returnBtn = document.getElementById('return-btn');
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');
const themeAudio = document.getElementById('theme-audio');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');

// Controles de áudio
playAudioBtn.addEventListener('click', () => {
  themeAudio.play();
});

pauseAudioBtn.addEventListener('click', () => {
  themeAudio.pause();
});

// Função principal para resolver o desafio
function solvePortalChallenge(numbers) {
  // Validação da entrada
  if (!numbers || numbers.length === 0) {
    return {
      success: false,
      message: 'Por favor, insira os números dos portais.'
    };
  }

  // Remove duplicatas e ordena em ordem decrescente
  const uniqueNumbers = [...new Set(numbers)];
  const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);

  // Verifica se há pelo menos 3 números únicos
  if (sortedNumbers.length < 3) {
    return {
      success: false,
      message: 'É necessário ter pelo menos 3 números únicos para determinar o terceiro maior.'
    };
  }

  // O terceiro maior é o elemento no índice 2 (terceira posição)
  const thirdLargest = sortedNumbers[2];

  return {
    success: true,
    originalNumbers: numbers,
    uniqueNumbers: uniqueNumbers,
    sortedNumbers: sortedNumbers,
    thirdLargest: thirdLargest
  };
}

// Função para exibir o resultado detalhado
function displayResult(result) {
  if (!result.success) {
    resultContent.innerHTML = `
            <div class="error-message">
                <p>${result.message}</p>
            </div>
        `;
    resultSection.classList.add('show');
    return;
  }

  const steps = `
        <div class="calculation-step">
            <p><strong>Passo 1 - Números Originais:</strong></p>
            <p>Portais encontrados: [${result.originalNumbers.join(', ')}]</p>
        </div>

        <div class="calculation-step">
            <p><strong>Passo 2 - Remoção de Duplicatas:</strong></p>
            <p>Valores únicos: [${result.uniqueNumbers.join(', ')}]</p>
            <p>Total de valores únicos: ${result.uniqueNumbers.length}</p>
        </div>

        <div class="calculation-step">
            <p><strong>Passo 3 - Ordenação Decrescente:</strong></p>
            <p>Valores ordenados (do maior para o menor): [${result.sortedNumbers.join(', ')}]</p>
            <p>• 1º Maior: <strong>${result.sortedNumbers[0]}</strong></p>
            <p>• 2º Maior: <strong>${result.sortedNumbers[1]}</strong></p>
            <p>• 3º Maior: <strong>${result.sortedNumbers[2]}</strong></p>
        </div>

        <div class="calculation-step">
            <p><strong>Passo 4 - Identificação do Terceiro Maior:</strong></p>
            <p>O terceiro maior número é aquele na posição de índice 2 (terceira posição) do array ordenado em ordem decrescente.</p>
        </div>

        <div class="final-answer">
            🐉 Terceiro Maior Portal: ${result.thirdLargest} 🐉
        </div>
    `;

  resultContent.innerHTML = steps;
  resultSection.classList.add('show');
}

// Função para limpar e resetar o resultado
function clearResult() {
  resultSection.classList.remove('show');
  setTimeout(() => {
    resultContent.innerHTML = '';
  }, 300);
}

// Event listener para o botão REVELAR
revealBtn.addEventListener('click', () => {
  const inputValue = portalNumbersInput.value.trim();

  // Processa a entrada: divide por vírgula e converte para números
  const numbers = inputValue
    .split(',')
    .map(num => parseInt(num.trim()))
    .filter(num => !isNaN(num));

  // Resolve o desafio
  const result = solvePortalChallenge(numbers);

  // Exibe o resultado
  displayResult(result);
});

// Event listener para o botão RETORNAR
returnBtn.addEventListener('click', () => {
  clearResult();
  portalNumbersInput.value = '';
  portalNumbersInput.focus();
});

// Permite pressionar Enter no input para revelar
portalNumbersInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    revealBtn.click();
  }
});

// Acessibilidade: navegação por Tab
revealBtn.setAttribute('tabindex', '1');
returnBtn.setAttribute('tabindex', '2');
