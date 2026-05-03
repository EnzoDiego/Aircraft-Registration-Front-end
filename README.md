# ✈️ Sistema de Cadastro de Aeronaves

Aplicação fullstack para gerenciamento de aeronaves, com funcionalidades completas de **CRUD (Create, Read, Update, Delete)**.

O projeto é dividido em:

* 🔹 Frontend em **React**
* 🔹 Backend em **Spring Boot**
* 🔹 Banco de dados **PostgreSQL**

---

## 🚀 Funcionalidades

* ✅ Cadastrar aeronaves
* ✅ Listar aeronaves
* ✅ Editar informações
* ✅ Excluir registros
* ✅ Interface responsiva com Bootstrap

---

## 🖥️ Tecnologias Utilizadas

### 🔹 Frontend

* React
* Axios
* React Router DOM
* Bootstrap

### 🔹 Banco de Dados

* PostgreSQL

---

## 📂 Estrutura do Projeto

### 📁 Frontend

```
src/
 ├── components/
 │    ├── AircraftForm.jsx
 │    ├── AircraftList.jsx
 │    └── Navbar.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    └── Listing.jsx
 │
 ├── routes/
 │    └── AppRoutes.jsx
 │
 ├── services/
 │    └── api.js
```

---

## 🔗 Endpoints da API

| Método | Rota            | Descrição          |
| ------ | --------------- | ------------------ |
| GET    | /aeronaves      | Listar aeronaves   |
| POST   | /aeronaves      | Criar aeronave     |
| PUT    | /aeronaves/{id} | Atualizar aeronave |
| DELETE | /aeronaves/{id} | Deletar aeronave   |

## 📸 Interface

* Formulário para cadastro e edição
* Tabela com listagem de aeronaves
* Botões de ação (Editar / Excluir)

---

## 🧠 Aprendizados

Este projeto demonstra conceitos importantes como:

* Integração entre frontend e backend
* Consumo de APIs com Axios
* Gerenciamento de estado com React Hooks
* Estruturação de aplicações fullstack

---

## 📌 Melhorias Futuras

* 🔍 Filtro e busca de aeronaves
* 📄 Paginação
* 🔔 Notificações (toast)
* 🔐 Autenticação de usuários
* 🎨 Interface estilo dashboard

---

## 👨‍💻 Autor

Desenvolvido por Enzo Borges 


