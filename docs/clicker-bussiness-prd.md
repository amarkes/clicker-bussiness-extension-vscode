# Empresa Clicker - PRD para IA

Crie um jogo web completo utilizando React, Vite e JavaScript.

## Conceito

O jogador começa como um freelancer trabalhando sozinho em um pequeno escritório improvisado.

O objetivo é transformar seu trabalho individual em uma grande empresa de tecnologia, contratando funcionários, abrindo escritórios, aumentando a produtividade e gerando renda passiva.

O jogo deve ser inspirado em jogos Idle, Clicker e Tycoon.

---

# Mecânica Principal

## Início

O jogador inicia com:

- Nome da empresa
- 1 Freelancer (o próprio jogador)
- R$ 0
- 0 funcionários
- 1 projeto disponível

O freelancer gera dinheiro ao trabalhar manualmente.

Botão principal:

"Trabalhar"

Cada clique gera receita.

Exemplo:

- Clique inicial = R$ 1

---

# Projetos

Projetos possuem:

- Nome
- Valor
- Tempo de execução
- Dificuldade

Exemplos:

| Projeto | Valor |
|----------|---------|
| Landing Page | R$ 100 |
| Site Institucional | R$ 500 |
| E-commerce | R$ 2.000 |
| App Mobile | R$ 10.000 |
| Sistema SaaS | R$ 50.000 |

Projetos maiores exigem mais funcionários.

---

# Funcionários

O jogador pode contratar:

- Estagiário
- Desenvolvedor Júnior
- Desenvolvedor Pleno
- Desenvolvedor Sênior
- Tech Lead
- Gerente de Projetos
- Diretor de Tecnologia

Cada funcionário possui:

- Salário
- Produtividade
- Custo de contratação

Exemplo:

| Cargo | Contratação | Salário | Produção/s |
|---------|-------------|----------|------------|
| Estagiário | R$ 100 | R$ 5 | 1 |
| Júnior | R$ 500 | R$ 20 | 5 |
| Pleno | R$ 2.000 | R$ 100 | 20 |
| Sênior | R$ 10.000 | R$ 500 | 100 |

Funcionários trabalham automaticamente.

---

# Renda Passiva

Funcionários produzem dinheiro automaticamente.

Fórmula:

Receita por segundo = Soma da produtividade de todos os funcionários

O jogador continua ganhando dinheiro sem clicar.

---

# Escritórios

O jogador pode expandir a empresa.

Exemplo:

| Escritório | Custo |
|-------------|---------|
| Home Office | Inicial |
| Sala Comercial | R$ 5.000 |
| Coworking | R$ 50.000 |
| Escritório Próprio | R$ 500.000 |
| Andar Corporativo | R$ 5.000.000 |
| Sede Empresarial | R$ 50.000.000 |

Cada escritório:

- Aumenta produtividade
- Desbloqueia funcionários
- Desbloqueia novos projetos

---

# Upgrades

Exemplos:

## Ferramentas

- Notebook Melhor
- Monitor Ultrawide
- Internet Fibra
- Servidor Próprio
- IA para Desenvolvimento

## Benefícios

- Vale Alimentação
- Plano de Saúde
- Bônus

Benefícios aumentam eficiência.

---

# Clientes

Clientes podem aparecer aleatoriamente.

Exemplos:

- Startup
- Academia
- Restaurante
- Clínica
- Banco
- Governo

Cada cliente oferece contratos especiais.

---

# Eventos Aleatórios

A cada período existe chance de ocorrer:

Positivos:

- Cliente Grande
- Projeto Viral
- Investidor
- Funcionário Destaque

Negativos:

- Bug em Produção
- Funcionário Pediu Demissão
- Processo Judicial
- Crise Econômica

---

# Sistema de Prestígio

Quando atingir determinado patrimônio:

Exemplo:

R$ 1 bilhão

O jogador pode:

"Vender a Empresa"

Ao vender:

- Reinicia progresso
- Recebe Pontos de Prestígio

Pontos concedem bônus permanentes.

---

# Pesquisa e Tecnologia

Árvore de tecnologias:

- Automação
- Cloud Computing
- Inteligência Artificial
- Microserviços
- Big Data
- Robótica

Cada pesquisa melhora a empresa.

---

# Interface

Layout moderno estilo dashboard.

Painéis:

- Dinheiro atual
- Receita por segundo
- Funcionários
- Escritórios
- Projetos ativos
- Tecnologias
- Prestígio

Botão principal de trabalho deve ser o elemento mais visível da tela.

---

# Salvamento

Salvar automaticamente:

- localStorage

Salvar:

- Dinheiro
- Funcionários
- Escritórios
- Tecnologias
- Prestígio

---

# Requisitos Técnicos

- React
- Vite
- JavaScript
- Componentes reutilizáveis
- Estrutura organizada por features
- Código limpo
- Sem backend
- Responsivo para desktop e mobile

---

# Diferencial

O jogo deve transmitir claramente a sensação de evolução:

Freelancer → Agência → Software House → Startup → Unicorn → Multinacional de Tecnologia