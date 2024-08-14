# Decodificador de Texto

Este projeto é um decodificador de texto que permite criptografar e descriptografar mensagens usando regras específicas. A aplicação foi desenvolvida com HTML, CSS e JavaScript.

## Funcionalidades

- **Criptografia de Texto**: Transforma o texto inserido de acordo com as seguintes regras:
  - A letra "e" é convertida para "enter".
  - A letra "i" é convertida para "imes".
  - A letra "a" é convertida para "ai".
  - A letra "o" é convertida para "ober".
  - A letra "u" é convertida para "ufat".

- **Descriptografia de Texto**: Reverte o texto criptografado de volta ao original usando as regras acima.

- **Verificação de Texto**: Antes de criptografar ou descriptografar, o sistema verifica se o texto está em letras minúsculas e sem acentos. Se o texto não atender a essas condições, uma mensagem de erro será exibida.

- **Copiar Texto**: Após criptografar ou descriptografar o texto, o usuário pode copiá-lo para a área de transferência com um botão "Copiar".

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilização da página, incluindo layout responsivo.
- **JavaScript**: Lógica para criptografia, descriptografia, verificação de texto e cópia para a área de transferência.
- **Bootstrap**: Framework CSS para estilização e design responsivo.

## Como Usar

1. **Inserir o Texto**: No campo de texto, digite a mensagem que deseja criptografar ou descriptografar. O texto deve estar em letras minúsculas e sem acentos.

2. **Escolher a Operação**:
   - Clique em "Criptografar" para transformar o texto inserido.
   - Clique em "Descriptografar" para reverter um texto criptografado.

3. **Copiar o Texto**: Após a criptografia ou descriptografia, o texto modificado aparecerá na área de resultado. Um botão "Copiar" será exibido abaixo do texto, permitindo que você copie o resultado para a área de transferência.

4. **Mensagens de Erro**: Se o texto inserido contiver letras maiúsculas ou acentos, uma mensagem de erro será exibida, e o processo de criptografia/descriptografia será interrompido.
