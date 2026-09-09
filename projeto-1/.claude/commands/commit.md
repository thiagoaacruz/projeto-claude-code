---

description: Cria um commit semântico baseado nas mudanças atuais e publica a branch remota para code review
allowed-tools: Bash(git*)
-------------------------

# Criar Commit Semântico

Analise o estado atual do repositório e crie um commit seguindo **Conventional Commits**.

O projeto segue obrigatoriamente o fluxo:

`main → branch → alterações → validação → commit → push da branch → code review → Pull Request → merge`

## Regras de Commit

* Prefixos permitidos:

  * `feat`
  * `fix`
  * `chore`
  * `docs`
  * `refactor`
  * `test`
  * `style`

* Formato:

  `tipo(escopo): descrição curta em inglês`

* A primeira linha deve ter no máximo 72 caracteres.

* A mensagem deve descrever claramente o objetivo da alteração.

* Não utilizar mensagens genéricas como:

  * `update files`
  * `changes`
  * `fix stuff`
  * `adjustments`

* Se existir `$ARGUMENTS`, utilize-o como contexto adicional para entender a intenção das alterações.

---

## Regra de Branch

Antes de realizar qualquer commit, execute:

`git branch --show-current`

### Se a branch atual for `main`

É proibido criar o commit diretamente na `main`.

Siga obrigatoriamente:

1. Analise as alterações existentes.

2. Determine o tipo da alteração.

3. Crie um nome apropriado para a branch.

4. Crie e altere para a nova branch:

   `git switch -c <nome-da-branch>`

5. Continue o processo de staging e commit somente na nova branch.

### Padrão de nomes

Utilize:

* `feat/nome-da-feature`
* `fix/nome-do-problema`
* `refactor/nome-da-refatoracao`
* `docs/nome-da-documentacao`
* `test/nome-do-teste`
* `chore/nome-da-tarefa`

Exemplos:

* `feat/autenticacao-jwt`
* `fix/login-invalid-token`
* `refactor/user-service`
* `docs/update-api-documentation`
* `test/auth-service`

Nunca utilizar nomes genéricos como:

* `teste`
* `alteracao`
* `nova-branch`
* `fix`
* `branch1`

---

## Proteção da Main

Nunca executar:

`git push origin main`

Também é proibido:

* criar commit diretamente na `main`
* realizar push diretamente na `main`
* realizar merge diretamente na `main`
* realizar force push na `main`
* alterar o histórico da `main`

A integração com a `main` deve ocorrer exclusivamente através de **Pull Request (PR)**.

---

## Verificação Inicial

Antes de realizar qualquer alteração Git, execute:

`git status`

`git branch --show-current`

`git diff`

`git diff --staged`

Analise:

* branch atual
* arquivos modificados
* arquivos staged
* arquivos unstaged
* arquivos untracked

Não assuma que todas as alterações existentes pertencem à mesma tarefa.

---

## Staging

### Se existirem arquivos staged

Analise-os com:

`git diff --staged`

Utilize essas alterações como base principal para o commit.

### Se não existirem arquivos staged

1. Execute `git status`.

2. Analise os arquivos modificados e untracked.

3. Identifique quais arquivos pertencem à alteração atual.

4. Não execute `git add -A` automaticamente se houver alterações potencialmente não relacionadas.

5. Prefira adicionar explicitamente:

   `git add <arquivo>`

6. Se houver dúvida sobre quais arquivos devem entrar no commit, solicite confirmação do usuário.

---

## Criação do Commit

Depois de analisar as alterações staged:

1. Determine o tipo do commit.
2. Determine o escopo.
3. Gere a mensagem seguindo Conventional Commits.
4. Verifique se todas as alterações staged pertencem à mesma finalidade.
5. Execute:

   `git commit -m "tipo(escopo): descrição"`

Exemplo:

`git commit -m "feat(auth): add JWT authentication"`

---

## Publicação da Branch Remota

Após criar o commit com sucesso, a branch de trabalho deve estar disponível no repositório remoto para permitir **code review por outros desenvolvedores**.

### Regra obrigatória

Depois do commit:

1. Verifique novamente a branch atual:

   `git branch --show-current`

2. Confirme que a branch atual **não é `main`**.

3. Verifique se a branch já possui upstream remoto:

   `git rev-parse --abbrev-ref --symbolic-full-name @{u}`

4. Se a branch ainda não existir no remoto ou não possuir upstream, publique-a:

   `git push -u origin <nome-da-branch>`

5. Se a branch já possuir upstream configurado, publique o novo commit com:

   `git push`

6. Nunca publicar diretamente na `main`.

### Objetivo

A branch remota deve permitir que outro desenvolvedor possa:

* acessar as alterações
* realizar checkout da branch
* analisar o código
* executar testes
* realizar code review
* colaborar na mesma branch quando necessário
* preparar ou revisar o Pull Request

### Fluxo

`branch local`

↓

`commit`

↓

`git push -u origin <branch>`

↓

`origin/<branch>`

↓

`Code Review`

↓

`Pull Request`

↓

`main`

---

## Code Review

Após publicar a branch remota:

* Não realizar merge automático na `main`.
* Não excluir a branch remota.
* Não realizar force push.
* Manter a branch disponível para revisão.
* Alterações solicitadas durante o code review devem gerar novos commits na mesma branch.
* Após novos commits, realizar `git push` para atualizar a branch remota.

Exemplo:

`feat/autenticacao-jwt`

↓

`commit 1`

↓

`push`

↓

`code review`

↓

`ajustes solicitados`

↓

`commit 2`

↓

`push`

↓

`novo code review`

↓

`Pull Request aprovado`

↓

`merge na main`

---

## Comandos Git Proibidos

Não executar automaticamente:

`git push --force`

`git push -f`

`git reset --hard`

`git clean -fd`

`git clean -fdx`

`git branch -D`

`git checkout -- .`

`git restore .`

Esses comandos podem destruir alterações locais ou modificar o histórico compartilhado.

Se alguma dessas operações for realmente necessária, explique o motivo e solicite confirmação explícita do usuário.

---

## Preservação de Alterações

Nunca descarte alterações existentes somente para permitir o commit.

Se forem encontradas alterações que aparentemente não pertencem à tarefa:

* não remover
* não sobrescrever
* não resetar
* não incluir automaticamente no commit

Informe o usuário antes de prosseguir.

---

## Validação Final

Após o commit e o push, execute:

`git status`

Verifique:

* branch atual
* commit criado
* branch remota publicada
* upstream configurado
* alterações locais restantes

Informe ao usuário:

* nome da branch
* mensagem do commit
* hash do commit
* arquivos incluídos
* branch remota publicada
* se existem alterações restantes
* que a branch está disponível para code review

---

## Definition of Done

O comando somente é considerado concluído quando:

* o commit foi criado em uma branch diferente da `main`
* o commit segue Conventional Commits
* nenhuma alteração foi descartada
* nenhuma alteração não relacionada foi incluída sem autorização
* a branch foi publicada no repositório remoto
* o upstream da branch está configurado
* a branch está disponível para code review
* nenhum push direto para `main` foi realizado
* nenhum merge automático na `main` foi realizado

---

## Contexto adicional

Contexto adicional do usuário: $ARGUMENTS
