# HTML

É uma linguagem de marcação que tem as responsabilidades:

- Conteúdo;
- Semântico (tags)
- Estrutura

* `<h1>` - heading 1 - 6
  Defini títulos

- `<a>` - Link (a - anchor)
  Defini navegação para o usuário.

- `<nav>`
  Defini um grupo de navegação

<br/>

# CSS

## float

- Left, Right, Top, Bottom e z-index
- Novo Contexto;
- Nunca esconde conteúdo;
- O tamanho do elemento passa a ser o conteúdo;
- O pai passa a ignorar o elemento (precisa recalcular usando `overflow: hidden`);

## overflow

- `hidden`

  - Se existe largura e altura definidas e o conteúdo desse elemento é maior que o elemente, esse conteúdo não é exibido;
  - Se não possui largura e altura definidas mostra o conteúdo que não estava enxergando Ex: `float`.

- `clear`

  - Observa se existe algum elemente flutuando (`float`), caso encontre não fica ao lado, quebra a linha e fica abaixo.
  - Pode ser:
    - Right -> confere o lado esquerdo
    - Left -> confere o lado direito
    - Both -> confere os dois lados

- `display`

  - `inline`
    - Deixa elementos na mesma linha;
    - Não deixa colocar width nem height;
    - Fica com o comportamento de uma palavra (conteúdo);
  - `block`
    - Não deixa na mesma linha;
    - Deixa definir width e height;
  - `inline-block`
    - Deixa elementos na mesma linha;
    - Deixa definir width e height;
    - Fica com o comportamento de uma palavra (conteúdo);

- `line-height`

  - Defini o tamanho da linha;
  - Quando o elemento tiver uma linha e for necessário alinha verticalmente pelo centro, basta colocar o mesmo tamanho do `width` no ``line-height;
  - Quando o elemento possuir mais de uma linha, esse não é uma propriedade boa para ser utilizada.

- `position`

  - `absolute`

    - Cria novo contexto;
    - O conteúdo define width e height;
    - Move em relação a página:

      - `top` e `bottom` mexem com o eixo Y;
      - `left` e `right` mexem com o eixo X;

    - `transform`
      - Pega valor do elemento, onde pode descontar ou aumentar
        - `translateX`
        - `translateY`
        - `translate(X, Y)`

  - `vertical-align`

    - Só funciona quando existem dois elementos `inline-block` um ao lado do outro;
    - `baseline` - alinha pela base (padrão);
    - `top` - alinha pelo topo;
    - `middle` - alinha pelo centro;

  - `box-sizing`
    - `content-box` - o conteúdo é a caixa, o que coloca é extra (padrão);
    - `border-box` - considera a borda como parte da caixa;

## Seletores

Padrão: o de baixo sobreescreve o de cima.

# Especificidade

- Seletor id => 100
- Seletor class / pseudo selectores => 10
- Seletor tag => 1

- !important => sobreescreve (gambiarra, em poucas situações não é)
