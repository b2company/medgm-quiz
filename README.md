# MedGM - Quiz de Diagnóstico de Faturamento

Funil completo de captura e qualificação de leads para consultórios médicos em **página única (SPA)**.

## 🎨 Identidade Visual

- **Cores:**
  - Dourado: `#CAAA82`
  - Bege Claro: `#FFEBC3`
  - Preto: `#1A1A1A`

- **Fontes:**
  - Inter (Google Fonts)
  - Material Icons

## 📊 Estrutura do Quiz (17 Etapas)

| # | Etapa | Tipo | Comportamento |
|---|-------|------|---------------|
| 0 | Landing Page | Hero com CTA | Botão "Iniciar" |
| 1 | Especialidade Médica | Seleção única (10 opções) | Auto-advance |
| 2 | Faturamento Atual | Seleção única (5 opções) | Auto-advance |
| 3 | % Convênio + Insight | Seleção única (6 opções) + insight | Botão "Continuar" |
| 4 | Leads/Mês | Seleção única (6 opções) | Auto-advance |
| 5 | Taxa de Conversão + Insight | Seleção única (6 opções) + insight | Botão "Continuar" |
| 6 | Roteiro Secretária | Seleção única (5 opções) | Auto-advance |
| 7 | Retorno Pacientes + Insight | Seleção única (4 opções) + insight | Botão "Continuar" |
| 8 | Controle de Métricas | Seleção única (4 opções) | Auto-advance |
| 9 | Maior Desafio | Seleção única (7 opções) | Auto-advance |
| 10 | Meta de Faturamento | Input numérico | Botão "Continuar" |
| 11 | Disponibilidade | Seleção única (5 opções) | Auto-advance |
| 12 | Captura de Leads | Iframe formulário B2Company | Botão com delay 5s |
| 13 | Loading/Análise | Animação de carregamento | Auto-advance (~5s) |
| 14 | Resultado Diagnóstico | Cards de score + gargalo | Botão "Continuar" |
| 15 | Oferta/Presente | Card de presente VIP | Botão "Continuar" |
| 16 | Agendamento + Sales | Iframe booking + seção vendas | Scroll infinito |

## ✨ Funcionalidades

### Navegação
- ✅ Barra de progresso fixa no topo
- ✅ Botão "Voltar" em todas as etapas (exceto landing)
- ✅ Transições animadas entre etapas (fade in)
- ✅ Auto-advance em etapas de seleção simples
- ✅ Scroll to top automático em cada etapa

### Lógica de Scoring
Sistema dinâmico que calcula scores de 0-100 em 4 áreas:
- **Captação:** baseado em leads/mês + desafio
- **Conversão:** baseado em taxa conversão + roteiro secretária
- **Retenção:** baseado em retorno de pacientes
- **Gestão:** baseado em controle de métricas

Status gerados automaticamente:
- 0-25: Crítica (vermelho)
- 26-50: Irregular (laranja)
- 51-75: Regular (amarelo)
- 76-100: Boa/Excelente (verde)

**Gargalo:** identifica automaticamente a área com menor score e exibe mensagem personalizada.

### Tracking (Meta Pixel)
Eventos rastreados:
- `PageView` - Carregamento inicial
- `Lead` - Início do quiz
- `QuizStep` - Cada etapa concluída
- `CompleteRegistration` - Formulário de captura
- `ViewContent` - Visualização do resultado
- `Schedule` - Clique em agendamento

## 🔧 Tecnologias

- **HTML5** - Estrutura semântica
- **CSS3** - Design system MedGM, animações, responsivo
- **JavaScript Vanilla** - Lógica do quiz, scoring, navegação
- **Meta Pixel** - Tracking de conversão
- **B2Company Widgets** - Formulário de captura + Booking

## 📱 Responsivo - Otimizado para Mobile

- **Mobile-first design** - Todo o quiz foi otimizado prioritariamente para dispositivos móveis
- **Botões touch-friendly** - Altura mínima de 60px para fácil interação
- **Fontes otimizadas** - Tamanhos maiores para melhor legibilidade em telas pequenas
- **Espaçamentos confortáveis** - Padding e margins ajustados para navegação suave
- **Grid adaptativo** - Cards de resultado em coluna única no mobile
- **FAQ accordion** - Totalmente otimizado para interação touch

## 🚀 Deploy

**URL Atual:**
https://b2company.github.io/medgm-quiz/

**Repositório:**
https://github.com/b2company/medgm-quiz

### Atualizar Deploy

```bash
cd ~/medgm-quiz
git add .
git commit -m "Suas alterações"
git push
# GitHub Pages atualiza automaticamente em ~2 minutos
```

## 📝 Integrações

### Formulário de Captura (Etapa 12)
```html
<iframe src="https://admin.b2company.co/widget/form/pdDLJ9xMhKhlWCS9hJVV" ...>
```
**Campos:** Nome, Email, Telefone, Instagram

### Booking/Agendamento (Etapa 16)
```html
<iframe src="https://admin.b2company.co/widget/booking/oI07yHfrYTP1X9bNFySH" ...>
```
**Comportamento:** Exibido ao clicar no botão CTA

## 🎯 Conversão

Estrutura otimizada para conversão:
1. **Landing atrativa** - Hero com proposta de valor clara
2. **Qualificação progressiva** - Perguntas escalonadas
3. **Insights educativos** - 3 insights estratégicos ao longo do funil
4. **Resultado personalizado** - Diagnóstico baseado nas respostas
5. **Urgência e escassez** - Vagas limitadas, validade 24h
6. **Social proof** - Validação em consultórios de todo Brasil
7. **Sales page completa** - Sintomas, benefícios, FAQ
8. **CTA múltiplos** - Vários pontos de conversão

## 🔒 Pixel Token

```
EAAMReIU1qpEBQiCFAsiMaPZBLZAFlOfw3al9zjXe4hq6R0KzOkWkeS0FA81NRHF7UudsQehmxa0idgBb09GVHTQbbBXOcDU9p9KbkoXB5fW2zsbhOE6wlPuQCwNv1EaZApT7EoAOXZADk4eZCOgWEQpEZCfZBbViE5E7AFpQd4TxnMRr1xyaSPWPlY02fNrrjmd4wZDZD
```

## 🎨 Design System

### Cores
- Background: `#FAFAFA`
- Primária (Dourado): `#CAAA82`
- Secundária (Bege): `#F0E8DE`
- Texto principal: `#1A1A1A`
- Texto secundário: `#666`
- Botões hover: `#2A2A2A`

### Componentes
- Cards brancos com sombra suave
- Bordas arredondadas (12-24px)
- Hover effects com elevação
- Animações suaves (0.2-0.4s)
- Material Icons para ícones

---

**Desenvolvido por B2 Company**
Medical Growth & Management
