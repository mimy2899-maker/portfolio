# Portfólio Profissional & Currículo Digital — Yasmim Soares

Website profissional de página única (Single Page Application) desenvolvido para **Yasmim Soares**, estudante de Desenvolvimento de Sistemas.

## 🏁 Inspiração Visual & Design System
O design foi concebido com base na estética do site oficial do piloto de Fórmula 1 **Lando Norris** ([landonorris.com](https://landonorris.com/)):
- **Dark Mode Profundo:** Tons de preto carbônico (`#07090E`) e azul-marinho profundo (`#0B1220`).
- **Destaques em Azul Elétrico:** `#398DFF` com reflexos neon e estados de hover dinâmicos.
- **Tipografia Editorial & Tecnológica:**
  - `Syne` para títulos impactantes;
  - `Space Grotesk` para subtítulos e cartões;
  - `JetBrains Mono` para códigos, telemetrias e tags;
  - `Plus Jakarta Sans` para máxima legibilidade textual.
- **Estética Editorial Esportiva:** Telemetria de cabeçalho, ticker infinito animado, badges de status, grid de fundo sutil e linhas de corte precisas.

---

## 🗂️ Estrutura das Seções

1. **Home / Hero:**
   - Destaque tipográfico para o nome **YASMIM SOARES** com efeito stroke.
   - Apresentação como Estudante de Desenvolvimento de Sistemas.
   - Status live de disponibilidade para estágio / júnior.
   - Botões de chamada para ação direta para os projetos e qualificações.
   - Ticker infinito animado com palavras-chave editoriais.

2. **About Me (Sobre):**
   - Perfil editorial com monograma e dados em estilo terminal/sys.log.
   - Manifesto pessoal autêntico sobre raciocínio lógico, aprendizado e a conexão entre tecnologia e trabalho manual.
   - Chips de áreas de interesse.

3. **Career (Carreira):**
   - **Objetivo Profissional:** Focado em desenvolvimento web e software júnior.
   - **Formação Acadêmica:** Curso Técnico em Desenvolvimento de Sistemas (em andamento).
   - **Competências Pessoais:** Resolução de problemas, atenção aos detalhes, autonomia e trabalho em equipe.
   - **Qualificações Técnicas:** Grid categorizado de Front-End, Back-End/Dados e Ferramentas.

4. **Projects (Projetos):**
   - Cards modernos com tags de status (`#PRJ-01`, etc.), tecnologias e links diretos para o GitHub de Yasmim Soares ([github.com/mimy2899-maker](https://github.com/mimy2899-maker)).
   - Card especial de ecossistema do GitHub.

5. **Beyond Code (Criatividade & Jaquetas):**
   - Área dedicada à customização de jaquetas, upcycling e trabalhos manuais.
   - Galeria editorial de peças com cards visuais e modal interativo que detalha materiais, conceitos e a conexão direta da disciplina manual com a qualidade de código.

6. **Contact (Contato):**
   - Telefone, e-mail profissional com botão inteligente de **Copiar E-mail**, localização e links para GitHub e LinkedIn.
   - Formulário de envio de mensagem direta com validação.

---

## 🚀 Como Executar Localmente

Como o projeto foi construído em **HTML5, CSS3 e JavaScript puro** (sem dependências externas pesadas nem build complexo):

1. Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
2. Se preferir usar um servidor local simples via terminal:
   ```bash
   # Com Python:
   python -m http.server 3000
   
   # Ou com extensão Live Server no VS Code
   ```

---

## 🎨 Como Personalizar Fotos e Informações

- **Fotos das Jaquetas / Trabalhos Manuais:**
  - No arquivo `index.html` (seção `#beyond-code`), substitua as classes `.craft-placeholder-art` por tags `<img>` apontando para suas fotos reais dentro de uma pasta `assets/`.
- **Links de Redes Sociais:**
  - Atualize os links de LinkedIn e telefone nos locais indicados com facilidade procurando por `href="https://linkedin.com/in/"` ou `href="tel:"`.
- **Novos Projetos do GitHub:**
  - Copie um bloco `<article class="project-card">` e adicione o link do novo repositório criado no GitHub `https://github.com/mimy2899-maker/...`.
