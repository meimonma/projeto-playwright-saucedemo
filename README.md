# Projeto de Teste Automatizado - SauceDemo com Playwright

Este projeto realiza a automação de testes no site [saucedemo.com](https://www.saucedemo.com/) utilizando o framework **Playwright**.

## 🌟 Objetivo

Demonstrar habilidades em automação de testes end-to-end para compor um portfólio voltado para uma vaga de QA (Quality Assurance).

## ⚖️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Playwright](https://playwright.dev/)
- JavaScript
- Git & GitHub

## ✅ Cenário de Teste Implementado

Fluxo completo de login no site SauceDemo, incluindo:

1. Acessar o site: `https://www.saucedemo.com/`
2. Preencher credenciais válidas (`standard_user` / `secret_sauce`)
3. Clicar em login
4. Validar se o usuário foi redirecionado para a página de produtos
5. Tirar um screenshot como evidência

## 📁 Estrutura do Projeto

```
projeto-playwright-saucedemo/
├── tests/
│   └── login.spec.js           # Teste principal de login
├── playwright.config.js        # Configuração do Playwright
├── package.json                # Dependências e scripts
├── .gitignore
└── README.md
```

## ⚙️ Como Executar Localmente

1. Clone este repositório

```bash
git clone https://github.com/seu-usuario/projeto-playwright-saucedemo.git
cd projeto-playwright-saucedemo
```

2. Instale as dependências

```bash
npm install
```

3. Execute o teste

```bash
npx playwright test
```

4. Visualize o passo a passo (modo trace)

```bash
npx playwright show-trace trace.zip
```

## 🚀 Em breve
- [ ] Testes com diferentes perfis de usuários
- [ ] Teste de fluxo de compra
- [ ] Teste negativo (login inválido)

---

Feito com ❤️ por [Mei Monma]


