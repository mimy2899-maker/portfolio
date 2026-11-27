# 🛠️ Guia Rápido: Como Editar Seu Portfólio (Yasmim Soares)

Este guia foi feito para que você faça alterações manuais de forma rápida e segura no seu site, sem risco de quebrar o código.

---

## 📸 1. Como colocar as fotos reais das suas jaquetas

Já deixamos uma pasta pronta para você colocar suas fotos:
📂 `C:\Users\bella\.gemini\antigravity\scratch\yasmim-soares-portfolio\assets\jaquetas\`

### Passo a passo:
1. Pegue as fotos das suas jaquetas customizadas no seu computador ou celular.
2. Renomeie as fotos para:
   - `jaqueta-01.jpg` (para a Peça 01)
   - `jaqueta-02.jpg` (para a Peça 02)
   - `jaqueta-03.jpg` (para a Peça 03)
   - `jaqueta-04.jpg` (para a Peça 04)
3. Cole as fotos dentro da pasta `assets/jaquetas/`.
4. **Pronto!** Abra o site ou aperte <kbd>F5</kbd> no navegador. O site automaticamente detectará as fotos reais e as exibirá no Hall da Fama e dentro do modal de detalhes do processo.

*(Nota: Enquanto você não coloca as fotos JPG, o site usa as artes vetoriais estilizadas como fallback automático, sem nunca ficar com imagem quebrada).*

---

## ✉️ 2. Como alterar seu E-mail

Abra o arquivo `index.html` em qualquer editor (VS Code, Bloco de Notas, etc.) e procure por:

```html
<!-- ✏️ EDITAR AQUI: SEU E-MAIL PROFISSIONAL -->
<a href="mailto:yasmimsoares.dev@gmail.com" class="method-value" id="emailAddress">yasmimsoares.dev@gmail.com</a>
```

- Basta trocar `yasmimsoares.dev@gmail.com` pelo seu endereço de e-mail real (altere nos dois lugares: dentro do `href="mailto:..."` e no texto visível).

---

## 📱 3. Como alterar seu Número de WhatsApp / Telefone

No arquivo `index.html`, procure por:

```html
<!-- ✏️ EDITAR AQUI: SEU NÚMERO DE TELEFONE / WHATSAPP -->
<a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" class="method-value" id="phoneValue">
  (Clique para conversar no WhatsApp)
</a>
```

- Substitua `5500000000000` pelo seu número com DDD (Exemplo: se for DDD 11 número 98765-4321, fica: `https://wa.me/5511987654321`).
- Se quiser que o número apareça escrito na tela, troque o texto `(Clique para conversar no WhatsApp)` por `(11) 98765-4321`.

---

## 💼 4. Como colocar seu link do LinkedIn

No arquivo `index.html`, procure por:

```html
<!-- ✏️ EDITAR AQUI: SEU LINKEDIN -->
<a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" class="social-chip-btn">
```

- Adicione o seu perfil após a barra. Exemplo: `https://linkedin.com/in/yasmim-soares`.

---

## 🏷️ 5. Como alterar títulos ou descrições das jaquetas

No arquivo `index.html`, na seção `#beyond-code`, você pode mudar o nome de cada peça:
- Troque `Cyber Denim Jacket` pelo nome que você deu à sua peça.
- Troque o texto descritivo e as tags (`Denim 100%`, `Pintura Manual`, etc.) como preferir.

No arquivo `script.js` (no topo, na variável `jacketsData`), você também pode personalizar o texto detalhado e as 4 etapas do processo de cada jaqueta caso queira contar a história exata de como criou a sua peça!

---

## 🌐 6. Visualizar as alterações
Sempre que fizer uma alteração em `index.html`, `style.css` ou `script.js`, basta salvar o arquivo e apertar **<kbd>F5</kbd> (ou <kbd>Ctrl</kbd> + <kbd>F5</kbd>)** no navegador para ver o resultado na hora!
