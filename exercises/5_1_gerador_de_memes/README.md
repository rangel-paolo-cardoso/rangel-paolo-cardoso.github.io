# Boas vindas ao repositório do projeto Meme Generator!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-04-block5-project-meme-generator.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-04-block5-project-meme-generator`

2. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora, crie uma branch onde você vai guardar os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-meme-generator-project`

3. Crie na raiz do projeto os arquivos que você precisará desenvolver:
  * Verifique que você está na raiz do projeto
    * Exemplo: `pwd` -> o retorno vai ser algo tipo _/Users/joaozinho/code/**sd-04-block5-project-meme-generator**_
  * Crie os arquivos index.html, style.css e script.js
    * Exemplo: `touch index.html style.css script.js`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (devem aparecer listados os novos arquivos em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (devem aparecer listados os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-project-meme-generator`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-04-block5-project-meme-generator/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-04-block5-project-meme-generator/pulls) e confira que o seu _Pull Request_ está criado

---

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório. Este Pull Request deverá conter os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código HTML, CSS e JavaScript, respectivamente. Você pode adicionar outros arquivos se julgar necessário. ⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️

Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a monitoria. Lembre-se que você pode consultar nosso conteúdo sobre Git & GitHub sempre que quiser!

## Requisitos do projeto

A seguir, estão listados todos os requisitos do projeto. Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de ids que alguns elementos de seu projeto devem possuir**. O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução `1366 x 768` (1366 pixels de largura por 768 pixels de altura). Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração dessa resolução.

Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**. Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos. Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos.

Você deve criar um site que permita o upload de uma imagem e a inserção de um texto sobre ela, estilizado de forma apropriada. Em outras palavras, um meme generator. Abaixo seguem os requisitos:

### 1 - O site deve possuir uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida. As seguintes verificações serão feitas:
- A caixa onde o texto é inserido deve ter um id denominado 'text-input'.
- O elemento da imagem do meme deve ter um elemento pai com um id denominado 'meme-image-container'. Esse elemento é o container dentro do qual a imagem deverá aparecer.
- O elemento do texto deve estar totalmente contido dentro do container.
- Se não houver imagem inserida, ele deve ser inserido e estar visível dentro do container vazio onde a imagem aparecerá.

### 2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.
- O elemento da imagem deve possuir um id chamado 'meme-image'.
- O elemento onde é feito o upload da imagem deve ser identificado com o id 'meme-insert'
- A imagem deve estar totalmente contida dentro do elemento identificado com 'meme-image-container'
- O texto de quem usa deve ser inserido sobre a imagem escolhida.

### 3 - O site deve ter uma moldura no container. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco.
- A imagem deve estar totalmente contida dentro do elemento identificado com 'meme-image-container'.
- A estilização da modulra deve ser conforme especificada.

## Requisitos bônus:

### 4 - Permita a quem usa customizar o meme escolhido acrescentando a ele uma de três bordas. A página deve ter três botões, cada um colocando a própria borda ao redor do container. Um botão identificado com o id 'button1' deve estilizar o container da imagem com uma borda de 3 pixels, _dashed_ e vermelha. O botão com id 'button2' deve ser azul, borda _double_ de 5 pixels. O botão com id 'button3' deve ser verde com borda _groove_ com 6 pixels.
- As bordas devem ser acrescentadas ao container, identificado como 'meme-image-container'
- Os três botões devem ser elementos do tipo `button`
- Cada `button` deve ter o respectivo id e deve ser estilizado conforme especificado.

### 5 - Tenha um conjunto de quatro imagens pré prontas de memes famosos para o usuário escolher. Liste miniaturas das imagens e, mediante clique do usuário, essa imagem deve aparecer dentro da moldura para ser customizada. O elemento clicável deve ser identificado um um id denominado 'meme-1' para o primeiro meme, 'meme-2' para o segundo, e assim por diante. As imagens que identificam os memes devem ficar, dentro da aplicação, num diretório chamado 'imgs' com os respectivos nomes 'meme1.jpeg', 'meme2.jpeg' e assim por diante.
- As imagens devem aparecer dentro do container de forma idêntica às imagens enviadas por upload para a página.
- As regras de nomeação e armazenamento da imagem devem ser respeitadas.

### 6 - Limite o tamanho do texto que o usuário pode inserir. A quantidade máxima de caracteres deve ser 60.

## Dicas

- Para fazer este trabalho, você deverá atribuir ao texto que vai sobre a imagem o estilo `position: absolute;`. Leia mais sobre ele [aqui](https://www.w3schools.com/css/css_positioning.asp).
- Para receber os dados de quem usa o site, é preciso utilizar a tag [`<input>`](https://www.w3schools.com/tags/tag_input.asp). Ela faz parte do conteúdo sobre forms, que veremos mais adiante. Por hora, basta saber que você pode colocá-la dentro de um elemento `<form></form>` para que ela funcione. A partir daí, o desafio é fazer o resto! E [aqui](https://www.w3schools.com/html/html_form_input_types.asp) temos mais conteúdo sobre o `<input>`.
- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado na pasta `/projetos/meme-generator`.

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA COM O SEU NOME** ⚠

* ⚠ **PULL REQUESTS COM ISSUES NO CODE CLIMATE NÃO SERÃO AVALIADAS, ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠


* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO

Para **"entregar"** seu projeto, siga os passos a seguir:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas
  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**
  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**
  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-04`

Se ainda houver alguma dúvida sobre como entregar seu projeto, [aqui tem um video explicativo](https://vimeo.com/362189205).

⚠ Lembre-se que garantir que todas as _issues_ comentadas pelo CodeClimate estão resolvidas! ⚠

---

### REVISANDO UM PULL REQUEST

⚠⚠⚠

À medida que você e os outros alunos forem entregando os projetos, vocês serão alertados **via Slack** para também fazer a revisão dos _Pull Requests_ dos seus colegas. Fiquem atentos às mensagens do _"Pull Reminders"_ no _Slack_!

Os monitores também farão a revisão de todos os projetos, e irão avaliar tanto o seu _Pull Request_, quanto as revisões que você fizer nos _Pull Requests_ dos seus colegas!!!

Use o material que você já viu sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os projetos que chegaram para você.
