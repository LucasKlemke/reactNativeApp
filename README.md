# Editor de Imagem em React Native

Bem-vindo ao projeto **Editor de Imagem**! Este é um aplicativo de edição de imagem desenvolvido em **React Native**, que permite aos usuários aplicar filtros, cortar imagens, ajustar brilho/contraste, e realizar outras operações básicas de edição.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🌟 Visão Geral

Este projeto é um editor de imagens móvel criado com **React Native**. Seu objetivo é oferecer uma interface intuitiva para editar fotos diretamente no celular, aplicando diferentes filtros e ajustes para melhorar a imagem.

## ✨ Funcionalidades

- Carregar uma imagem da galeria ou câmera.
- Aplicar filtros predefinidos (Preto e Branco, Sépia, etc).
- Ajustar o brilho, contraste e saturação.
- Cortar e redimensionar a imagem.
- Desfazer/Refazer alterações.
- Salvar a imagem editada na galeria.
- Compartilhar a imagem nas redes sociais.

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14+)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Gerenciador de pacotes como `npm` ou `yarn`

## 📦 Instalação

Siga estas etapas para configurar o ambiente de desenvolvimento local:

1. Clonar repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Instalar dependecnias

   ```bash
   npm install
   ```

3. Iniciar o app

   ```bash
    npx expo start
   ```

Na saída, você encontrará opções para abrir o aplicativo em

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/) (Requer dispositivo MACOS)
- [Expo Go](https://expo.dev/go)

Você pode começar a desenvolver editando os arquivos dentro do diretório **app**. Este projeto utiliza [file-based routing](https://docs.expo.dev/router/introduction).

## 🗂️ Estrutura do Projeto

Aqui está uma visão geral da estrutura do projeto:

```
/editor-de-imagem-react-native
├── android/             # Configurações do projeto Android
├── ios/                 # Configurações do projeto iOS
├── src/                 # Código-fonte do aplicativo
│   ├── components/      # Componentes reutilizáveis
│   ├── screens/         # Telas do aplicativo
│   ├── assets/          # Imagens, ícones e outros recursos
│   └── utils/           # Funções utilitárias e helpers
├── App.js               # Componente raiz do React Native
├── package.json         # Dependências e scripts do projeto
├── .gitignore           # Arquivos e pastas a serem ignorados pelo Git
└── README.md            # Documentação do projeto
```

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir com este projeto:

1. Faça um fork do repositório.
2. Crie uma branch para sua feature (`git checkout -b minha-feature`).
3. Faça commit das suas mudanças (`git commit -m 'Adiciona uma nova feature'`).
4. Envie para o repositório remoto (`git push origin minha-feature`).
5. Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT). Sinta-se à vontade para usar, modificar e distribuir conforme os termos da licença.









