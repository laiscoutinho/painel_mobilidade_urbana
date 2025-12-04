# 📘 **Sistema de Mobilidade Urbana**

## 🚌 Visão Geral

Este repositório é a aplicação cliente, responsável por consumir os dados da API ([acesse aqui](https://github.com/niusdev/mock_API_mobi_urbana)) e exibir um painel de mobilidade urbana. O objetivo central é demonstrar consumo de dados em JSON.

---

# 📂 **Estrutura do Repositório**

```
/
└── panel/       → Painel Cliente
    ├── src/
    │   ├── components/
    │   │   ├── Map/           → veículos no mapa
    │   │   ├── ETA/           → previsão de chegada (ETA)
    │   │   │   └── ETAList/   → item para cada linha/parada/tempo
    │   │   ├── Anomalias/     → validação e inconsistências
    │   │   └── assets/        → menu/topo
    │   │       └── images/    → imagens utilizadas
    │   ├── services/          → integração com API
    │   ├── utils/             → funções de validação e cálculo
    │   ├── pages/             → Dashboard principal
    │   └── main.jsx
    └── package.json
```

---

# 🚀 **Como executar o Painel (pasta /panel)**

```bash
cd panel
npm install
npm run dev
```

Aplicação disponível em:

👉 **[http://localhost:5173](http://localhost:5173)**
*(ou porta exibida no terminal)*

---

# 📡 **Funcionalidades do Painel**

### ✔ **1. Previsão de Chegada (ETA)**

Consome `/previsaoChegada` e apresenta:

* linha
* parada
* horário previsto

### ✔ **2. Veículos no Mapa**

Usa `/veiculos` para mostrar:

* posição (lat/lng)
* status
* velocidade
* linha correspondente

Mapa implementado via **Leaflet**.

### ✔ **3. Detecção de Anomalias**

Validação automática dos dados recebidos:

* Coordenadas inválidas
* Velocidade incoerente (negativa, muito alta etc.)
* ETA no passado
* Dados inconsistentes

---

# 🔗 **Integração e Interoperabilidade**

O painel utiliza comunicação HTTP com a API mock via JSON, garantindo:

* padronização
* facilidade de consumo
* independência entre grupos
* rastreabilidade das inconsistências

As requisições são centralizadas em:

```
panel/src/services/api.js
```

---

# 📄 **Licença**

Projeto educacional — IFCE, Campus Tianguá.

---