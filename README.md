# MedGM - Quiz de Diagnóstico de Faturamento

Funil de captura e qualificação de leads para consultórios médicos.

## 🎨 Identidade Visual

- **Cores:**
  - Dourado: `#CAAA82`
  - Bege Claro: `#FFEBC3`
  - Preto: `#1A1A1A`

- **Fontes:**
  - Termina Regular (títulos)
  - Inter Regular (corpo)

## 📊 Fluxo do Quiz

1. Landing Page - Apresentação do diagnóstico
2. Especialidade Médica
3. Meta de Faturamento (12 meses)
4. Disponibilidade para Implementar Mudanças
5. **Captura de Leads** - Formulário (Nome, Email, Telefone, Instagram)
6. Taxa de Conversão de Agendamentos
7. **Insight 1** - Perda de oportunidades no processo
8. Roteiro de Atendimento
9. Frequência de Retorno de Pacientes
10. **Insight 2** - Maximização de valor dos pacientes atuais
11. Faturamento Mensal Atual
12. Percentual de Convênio
13. Controle de Métricas Comerciais
14. **Insight 3** - Dependência de convênio vs. particular
15. Quantidade de Leads Mensais
16. Maior Desafio Atual
17. **Página de Agendamento** - Booking

## 🚀 Deploy no GitHub Pages

### 1. Criar Repositório no GitHub

```bash
cd ~/medgm-quiz
git add .
git commit -m "Initial commit - MedGM Quiz Funnel"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/medgm-quiz.git
git push -u origin main
```

### 2. Ativar GitHub Pages

1. Vá em **Settings** do repositório
2. Menu lateral: **Pages**
3. Source: **Deploy from a branch**
4. Branch: **main** → Folder: **/ (root)**
5. Clique em **Save**

Seu quiz estará disponível em:
`https://SEU-USUARIO.github.io/medgm-quiz/`

### 3. Domínio Customizado (Opcional)

1. No GitHub Pages Settings, adicione seu domínio em **Custom domain**
2. No seu provedor de DNS, crie um registro:
   - **CNAME** apontando para `SEU-USUARIO.github.io`

## 📈 Tracking

### Meta Pixel
- ID: `1376176936827293`
- Eventos rastreados:
  - `PageView` - Todas as páginas
  - `InitiateCheckout` - Início do quiz
  - `Lead` - Página de captura
  - `QuizStepCompleted` - Cada etapa concluída
  - `Schedule` - Página de agendamento

### Formulário de Captura
- Form ID: `pdDLJ9xMhKhlWCS9hJVV`
- Campos: Nome, Email, Telefone, Instagram

### Booking/Agendamento
- Booking ID: `oI07yHfrYTP1X9bNFySH`

## 🔧 Tecnologias

- HTML5
- CSS3 (Design System MedGM)
- JavaScript Vanilla
- LocalStorage (salvar respostas)
- Meta Pixel
- B2Company Forms & Booking Widgets

## 📱 Responsivo

O quiz é totalmente responsivo e otimizado para:
- Desktop
- Tablet
- Mobile

## 🎯 Conversão

O funil está estruturado para:
1. Capturar atenção com insights relevantes
2. Coletar dados progressivamente
3. Educar sobre pontos de melhoria
4. Gerar urgência e valor
5. Converter em agendamento

---

**Desenvolvido por B2 Company**
Medical Growth & Management
