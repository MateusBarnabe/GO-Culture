# GO!Culture

Este é um aplicativo de exploração cultural construído com Next.js e Firebase, desenvolvido no Firebase Studio. Ele permite que os usuários descubram e capturem pontos de interesse cultural ao seu redor.

## Como Começar

Para rodar este projeto localmente, siga os passos abaixo.

### Pré-requisitos

Você precisará ter o [Node.js](https://nodejs.org/) (versão 20 ou superior) e o [npm](https://www.npmjs.com/) (ou um gerenciador de pacotes compatível) instalados em sua máquina.

### Instalação

1.  **Baixe ou clone os arquivos do projeto** para a sua máquina local.

2.  **Instale as dependências:**
    Navegue até o diretório raiz do projeto no seu terminal e execute o seguinte comando para instalar todas as dependências necessárias:
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    - Renomeie o arquivo `.env.local.example` (se existir) para `.env.local`.
    - Abra o arquivo `.env.local` e preencha as variáveis com as suas credenciais do Firebase e outras chaves de API necessárias.
    ```env
    # Credenciais do Firebase
    NEXT_PUBLIC_FIREBASE_API_KEY=SUA_API_KEY
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=SEU_AUTH_DOMAIN
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=SEU_PROJECT_ID
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=SEU_STORAGE_BUCKET
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=SEU_MESSAGING_SENDER_ID
    NEXT_PUBLIC_FIREBASE_APP_ID=SEU_APP_ID

    # Chave da API do Google Maps
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=SUA_CHAVE_DO_GOOGLE_MAPS
    ```

### Rodando o Servidor de Desenvolvimento

Após a instalação e configuração, inicie o servidor de desenvolvimento com o comando:

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o aplicativo em execução.
