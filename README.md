# Portal Copeve

Esse é o repositório do código do portal Copeve criado pelos colaboradores da TI da Copeve.

## Setup Windows

Instale o Chocolatey

1) Abra o prompt em modo administrador
2) Execute o comando:
```batch
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Instale o NodeJS com o NPM

1) Abra o prompt em modo administrador
2) Execute o comando:
```batch
cinst nodejs.install
```
ou
```batch
choco install nodejs.install
```

Instale o VS Code

1) Siga os procedimentos do site:
```
https://code.visualstudio.com/download
```

Libere a execução de script

1) Abra o prompt em modo administrador
2) Execute o comando:
```batch
Set-ExecutionPolicy Unrestricted
```

Instale o Git

 1) Siga as instruções do site:
 ```batch
 https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Instalando-o-Git
 ```

Instale o Yarn

1) Abra o prompt em modo administrador
2) Execute o comando:
```batch
npm install --global yarn
```

Faça checkout nesse projeto

 1) no VSCode acesse o Source Control
 2) Faça o checkout

##### Bora Codar!