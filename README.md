# 🐉 O Despertar da Guardiã e do Dragão

[![GitHub](https://img.shields.io/badge/GitHub-luizfxdev-181717?style=for-the-badge&logo=github)](https://github.com/luizfxdev/desafio_327)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> Uma jornada épica através dos portais místicos, onde lógica e sangue frio são suas únicas armas contra o esquecimento.

---

## 📖 História do Desafio

Em terras místicas além das nuvens, uma **guardiã ancestral** e o seu **dragão branco** dominam o equilíbrio do tempo e da memória. Você, um viajante entre realidades, foi capturado nesta dimensão para provar seu valor. O dragão é implacável: só permite a passagem daqueles capazes de resolver enigmas utilizando lógica e sangue frio — mesmo diante do esquecimento.

### 🌟 O Enigma dos Portais

Na câmara da guardiã, você encontra uma fileira de **portais mágicos**, cada um brilhando com um número enigmático. Por influência do poder hipnotizante do olhar da guardiã, sua mente só retém os dois últimos números vistos a cada etapa do caminho, enquanto todos os outros se embaralham nas névoas da memória.

**Sua missão:** Decifrar, ao cruzar a linha dos três portais distintos, quem foi o **terceiro maior número** revelado até o momento, usando apenas seu instinto e fragmentos de memória limitada.

---

## 🎯 Descrição do Desafio

### Regras

1. **Entrada:** Uma lista de números inteiros representando cada número das portas que você enfrenta
   - Exemplo: `[4, 2, 9, 10, 5, 8]`

2. **Objetivo:** Determinar qual é o **terceiro maior número** visto até o momento
   - Deve haver pelo menos **três números diferentes** na entrada

3. **Restrição:** Você só consegue "lembrar" os dois últimos números da lista a cada iteração do loop
   - Otimize seu código adequadamente!

### Exemplo de Solução

**Entrada:** `4, 2, 9, 10, 5, 8`

**Processo:**
1. Números únicos: `[4, 2, 9, 10, 5, 8]`
2. Ordenação decrescente: `[10, 9, 8, 5, 4, 2]`
3. Terceiro maior: **`8`**

**Saída esperada:** `8`



## 📂 Estrutura do Projeto

```
desafio_327/
│
├── index.html          # Estrutura principal da aplicação
├── styles.css          # Estilos e design temático
├── script.js           # Lógica do desafio e validações
│
└── assets/
    ├── background.mp4  # Vídeo de fundo temático
    └── theme.mp3       # Música ambiente
```

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Design moderno com animações e efeitos visuais
- **JavaScript (ES6+)** - Lógica algorítmica e manipulação do DOM
- **Responsive Design** - Layout adaptativo para todos os dispositivos

---

## ✨ Funcionalidades

✅ Interface temática inspirada em anime/fantasy oriental  
✅ Vídeo de background imersivo em alta qualidade  
✅ Música ambiente com controles de play/pause  
✅ Botões com efeito glow animado  
✅ Validação completa de entrada  
✅ Exibição detalhada do passo a passo da solução  
✅ Design responsivo para mobile e desktop  
✅ Animações suaves e transições elegantes  
✅ Barra de rolagem customizada  
✅ Acessibilidade com suporte a teclado  

---

## 💻 Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/luizfxdev/desafio_327.git
cd desafio_327
```

### 2. Adicione os arquivos de mídia

Coloque seus arquivos na pasta `assets/`:
- `background.mp4` - Vídeo de fundo (recomendado: 1920x1080 ou superior)
- `theme.mp3` - Música ambiente

### 3. Abra no navegador

Abra o arquivo `index.html` em seu navegador preferido ou use um servidor local:

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server
```

Acesse: `http://localhost:8000`

---

## 📊 Exemplos de Teste

### Exemplo 1
**Input:** `4, 2, 9, 10, 5, 8`  
**Output:** `8`

### Exemplo 2
**Input:** `15, 22, 8, 15, 30, 22, 18, 12`  
**Output:** `18`

### Exemplo 3
**Input:** `100, 50, 75, 25, 90, 60, 85`  
**Output:** `85`

### Exemplo 4
**Input:** `7, 7, 7, 3, 3, 1, 9, 9, 5`  
**Output:** `5`

### Exemplo 5
**Input:** `42, 13, 67, 89, 23, 56, 34, 78, 12, 90`  
**Output:** `78`

---

## 🧠 Algoritmo e Complexidade

### Abordagem da Solução

```javascript
function solvePortalChallenge(numbers) {
    // 1. Remove duplicatas usando Set
    const uniqueNumbers = [...new Set(numbers)];
    
    // 2. Ordena em ordem decrescente
    const sortedNumbers = uniqueNumbers.sort((a, b) => b - a);
    
    // 3. Retorna o terceiro elemento (índice 2)
    return sortedNumbers[2];
}
```

### Complexidade

- **Tempo:** O(n log n) - devido à ordenação
- **Espaço:** O(n) - para armazenar números únicos

---

## 🎨 Design e Estilo

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| Carmesim | `#c41e3a` | Bordas e acentos principais |
| Vermelho Coral | `#ff4757` | Destaques e hover |
| Rosa Claro | `#ff6b81` | Textos destacados |
| Azul Escuro | `#1a1a2e` | Background dos botões |
| Preto Profundo | `#0f0f1e` | Background do container |

### Fontes

- Principal: `Segoe UI, Tahoma, Geneva, Verdana, sans-serif`

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Luiz Felipe**

[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github)](https://github.com/luizfxdev)
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=linkedin)](https://linkedin.com/in/luizfxdev)

---

## 🌟 Mostre seu Apoio

Se este projeto te ajudou de alguma forma, considere dar uma ⭐️!

---

<div align="center">

**🐉 Que a sabedoria da guardiã e a força do dragão estejam com você! 🐉**

*Desenvolvido com 💙 e ☕ por [Luiz Felipe](https://luizfxdev.com.br)*

</div>
