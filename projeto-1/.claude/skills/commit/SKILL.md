---
name: commit
description: >
  Use esta skill sempre que houver intenção explícita ou implícita de criar
  um commit Git. Exemplos: "commit", "commita", "faz o commit",
  "salva no git", "finaliza", "save changes" ou solicitações equivalentes.
  Analisa alterações staged e unstaged, protege a branch main, cria uma
  branch de trabalho quando necessário, seleciona arquivos relacionados,
  gera uma mensagem seguindo Conventional Commits, cria o commit, valida
  sua autoria e publica a branch remota para code review.
allowed-tools: Bash(git*)
---

# Commit Seguro com Conventional Commits

## Objetivo

Criar commits Git pequenos, seguros, rastreáveis e semanticamente corretos
seguindo Conventional Commits.

O fluxo obrigatório do projeto é:

`main → branch → alterações → validação → commit → push → code review → Pull Request → merge`

Nunca realizar commit, push ou merge diretamente na `main`.

---

# Idioma

Toda comunicação com o usuário deve ser realizada em Português do Brasil.

Mensagens de commit e nomes de branches devem ser escritos em inglês,
salvo quando o projeto possuir uma convenção explícita diferente.

Exemplo:

`feat(auth): add JWT authentication`

---

# Regras Críticas

Estas regras possuem prioridade sobre qualquer outra instrução desta skill.

1. Nunca criar commit diretamente na `main`.
2. Nunca executar `git push origin main`.
3. Nunca realizar merge diretamente na `main`.
4. Nunca executar force push automaticamente.
5. Nunca descartar alterações locais.
6. Nunca incluir alterações não relacionadas sem autorização.
7. Nunca adicionar credenciais, tokens ou arquivos sensíveis.
8. Nunca adicionar atribuição automática a ferramentas, assistentes ou IA.
9. Nunca alterar `user.name` ou `user.email`.
10. Nunca reescrever histórico compartilhado automaticamente.
11. Nunca executar comandos destrutivos sem autorização explícita.
12. Sempre verificar o commit antes do push.
13. Sempre publicar a branch de trabalho no remoto após um commit válido.

Em caso de conflito entre automação e segurança, priorize segurança.

---

# Conventional Commits

## Formato

Utilize:

`type(scope): description`

Exemplo:

`feat(auth): add JWT authentication`

O `scope` é recomendado quando existir uma área, módulo ou componente
claramente identificável.

Não invente um scope apenas para preencher o formato.

Exemplo válido sem scope:

`docs: update contributing guide`

---

## Tipos permitidos

| Tipo | Quando usar |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Alterações somente em documentação |
| `style` | Formatação sem alteração de comportamento |
| `refactor` | Refatoração sem nova funcionalidade ou correção |
| `perf` | Melhoria de performance |
| `test` | Criação ou alteração de testes |
| `build` | Build, dependências ou empacotamento |
| `ci` | Integração ou entrega contínua |
| `chore` | Manutenção do projeto |
| `revert` | Reversão de commit |

Escolha o tipo com base no propósito principal da alteração.

---

# Descrição do Commit

A descrição deve:

- estar em inglês;
- utilizar modo imperativo;
- começar preferencialmente com verbo em minúsculo;
- explicar claramente a finalidade da alteração;
- não terminar com ponto;
- manter a primeira linha inteira com no máximo 72 caracteres.

Prefira:

`feat(auth): add JWT authentication`

Evite:

`feat(auth): added JWT authentication`

Evite:

`feat(auth): adds JWT authentication.`

Nunca utilizar mensagens genéricas como:

- `update files`
- `changes`
- `fix stuff`
- `adjustments`
- `misc changes`

---

# Scope

O scope deve representar a área real afetada.

Exemplos:

`feat(auth): add JWT validation`

`fix(user): handle duplicate email`

`refactor(order): simplify validation`

`perf(cache): reduce database queries`

`test(auth): add token validation tests`

`chore(git): update repository configuration`

Nunca utilizar nomes de ferramentas como scope apenas porque elas
auxiliaram na alteração.

O scope deve representar o projeto, e não a ferramenta utilizada.

---

# Breaking Changes

Se a alteração introduzir incompatibilidade com API, contrato,
comportamento ou integração existente, utilize `!`.

Exemplo:

`feat(api)!: remove deprecated user endpoint`

Quando necessário, utilize footer:

`BREAKING CHANGE: clients must migrate to /api/v2/users`

Somente classifique uma alteração como breaking change quando existir
uma quebra real de compatibilidade.

---

# Body e Footer

Por padrão, prefira commits simples:

`type(scope): description`

Utilize body somente quando a alteração exigir contexto técnico adicional.

Utilize footer quando necessário para:

- `BREAKING CHANGE`
- referência legítima a issue ou ticket
- informações exigidas pela convenção do projeto

Exemplo:

`fix(ui): prevent button overflow on mobile`

Body:

`Adjust responsive breakpoint for screens smaller than 375px.`

Footer:

`Closes #42`

Nunca utilizar body ou footer para registrar:

- ferramenta utilizada;
- assistente utilizado;
- sessão de ferramenta;
- geração automática;
- autoria adicional de IA;
- metadados não relacionados ao projeto.

---

# Workflow

## Passo 1 — Verificar ambiente Git

Execute:

`git status`

Se o diretório não for um repositório Git válido, não tente executar
operações Git adicionais.

Informe ao usuário que o diretório atual não é um repositório Git.

Quando possível, gere apenas uma sugestão de mensagem de commit com base
no contexto disponível.

---

# Passo 2 — Verificação Inicial

Execute:

`git status`

`git branch --show-current`

`git diff --stat`

`git diff --staged --stat`

`git diff`

`git diff --staged`

`git log --oneline -5`

Analise:

- branch atual;
- arquivos modificados;
- arquivos staged;
- arquivos unstaged;
- arquivos untracked;
- volume das alterações;
- conteúdo das alterações;
- padrão recente de commits;
- possíveis scopes utilizados pelo projeto.

Use o histórico recente apenas como contexto.

As regras desta skill possuem prioridade sobre padrões inconsistentes
encontrados em commits anteriores.

Não assuma que todas as alterações existentes pertencem à mesma tarefa.

---

# Passo 3 — Analisar o Contexto

Determine:

- o que foi alterado;
- por que foi alterado;
- quais arquivos pertencem à mesma finalidade;
- qual módulo ou área foi afetado;
- qual tipo de Conventional Commit representa a alteração;
- qual scope representa melhor a alteração;
- se existe breaking change;
- se existem alterações não relacionadas;
- se existem arquivos potencialmente sensíveis.

Utilize `$ARGUMENTS`, quando fornecido, apenas como contexto adicional.

As alterações reais encontradas no Git continuam sendo a fonte principal
para determinar o conteúdo do commit.

---

# Passo 4 — Verificar a Branch

Execute:

`git branch --show-current`

## Se estiver na `main`

É proibido criar o commit diretamente.

Analise as alterações e determine um nome de branch apropriado.

Utilize preferencialmente:

- `feat/<description>`
- `fix/<description>`
- `refactor/<description>`
- `docs/<description>`
- `test/<description>`
- `perf/<description>`
- `build/<description>`
- `ci/<description>`
- `chore/<description>`

Exemplos:

`feat/jwt-authentication`

`fix/invalid-login-token`

`refactor/user-service`

`docs/api-documentation`

`test/auth-service`

`perf/database-query`

`ci/github-actions`

`chore/repository-config`

Nunca utilizar nomes genéricos como:

- `test`
- `changes`
- `new-branch`
- `branch1`
- `fix`

Crie a branch:

`git switch -c <branch-name>`

Somente continue o processo de commit após confirmar que a branch atual
não é `main`.

---

# Passo 5 — Staging

## Se existirem arquivos staged

Analise:

`git diff --staged --stat`

`git diff --staged`

Utilize essas alterações como base principal do commit.

Verifique se todos os arquivos staged pertencem à mesma finalidade.

Se existirem arquivos staged claramente não relacionados, não prossiga
automaticamente.

Informe o usuário e solicite confirmação.

---

## Se não existirem arquivos staged

Analise:

`git status`

`git diff --stat`

`git diff`

Identifique quais arquivos pertencem à alteração atual.

Prefira staging explícito:

`git add <file>`

Quando vários arquivos claramente pertencerem à mesma alteração,
eles podem ser adicionados explicitamente no mesmo comando:

`git add <file1> <file2> <file3>`

Não executar automaticamente:

`git add -A`

Não executar automaticamente:

`git add .`

quando existirem arquivos potencialmente não relacionados.

Se houver dúvida sobre quais arquivos pertencem ao commit, solicite
confirmação do usuário.

---

# Passo 6 — Proteção de Arquivos Sensíveis

Antes do staging e antes do commit, verifique se existem arquivos que
possam conter informações sensíveis ou exclusivamente locais.

Tenha atenção especial a:

- `.env`
- `.env.*`
- tokens
- API keys
- senhas
- credenciais
- chaves privadas
- certificados privados
- arquivos de configuração local
- arquivos contendo secrets

Nunca adicionar automaticamente um arquivo suspeito de conter segredo.

Se houver suspeita de informação sensível:

1. não adicionar o arquivo;
2. não exibir o conteúdo do segredo desnecessariamente;
3. informar o usuário;
4. aguardar confirmação ou correção antes de continuar.

---

# Passo 7 — Validar o Staging

Antes do commit, execute:

`git diff --staged --stat`

`git diff --staged`

Confirme:

- existem alterações staged;
- os arquivos pertencem à mesma finalidade;
- não existem arquivos claramente não relacionados;
- não existem credenciais ou secrets;
- a alteração pode ser representada por um único commit coerente.

Se as alterações representarem tarefas independentes, prefira commits
separados.

Não misture alterações sem relação apenas para criar um único commit.

---

# Passo 8 — Construir a Mensagem

Determine:

1. type;
2. scope;
3. description;
4. breaking change, quando aplicável;
5. body, somente quando necessário;
6. footer, somente quando necessário.

Exemplo simples:

`feat(auth): add JWT authentication`

Exemplo com breaking change:

`feat(api)!: remove deprecated user endpoint`

Antes de executar, valide:

- type permitido;
- scope coerente;
- descrição em inglês;
- modo imperativo;
- primeira linha com no máximo 72 caracteres;
- ausência de ponto final;
- ausência de mensagem genérica;
- ausência de metadados de ferramenta.

---

# Passo 9 — Criar o Commit

Para commits simples:

`git commit -m "type(scope): description"`

Quando não existir scope:

`git commit -m "type: description"`

Quando body ou footer forem realmente necessários:

`git commit -m "type(scope): description" -m "body" -m "footer"`

Não solicitar confirmação quando:

- os arquivos staged forem claramente relacionados;
- nenhuma informação sensível estiver presente;
- a branch não for `main`;
- nenhuma operação destrutiva for necessária;
- a mensagem estiver de acordo com esta skill.

Caso contrário, interrompa e solicite confirmação.

---

# Privacidade e Autoria

O histórico Git deve conter somente informações relacionadas ao projeto
e à identidade Git configurada pelo desenvolvedor.

Nunca adicionar automaticamente:

- `Co-Authored-By` relacionado a assistentes ou ferramentas;
- `Claude-Session`;
- `Generated-By`;
- `Assisted-By`;
- links para sessões de ferramentas;
- identificação de Claude;
- identificação de Claude Code;
- identificação de Anthropic;
- identificação de ferramenta de IA;
- referências a IA ou AI como ferramenta utilizada.

Não adicionar trailers, footers ou metadados relacionados à ferramenta
utilizada para auxiliar no desenvolvimento.

## Autoria

Utilize exclusivamente a identidade Git já configurada.

Nunca alterar automaticamente:

`user.name`

`user.email`

Nunca adicionar ferramentas ou assistentes como coautores.

---

# Passo 10 — Verificação Obrigatória do Commit

Após criar o commit e ANTES de realizar qualquer push, execute:

`git log -1 --format=full`

Também obtenha:

`git log -1 --oneline`

Verifique:

- hash do commit;
- mensagem;
- autoria;
- existência de trailers;
- existência de metadados indesejados.

O commit não pode conter atribuições automáticas ou referências à
ferramenta utilizada.

Se qualquer informação indesejada estiver presente:

1. NÃO realizar o push;
2. informar o usuário;
3. não executar `git commit --amend` automaticamente;
4. solicitar autorização antes de alterar o commit.

Somente prossiga quando o commit estiver válido.

---

# Passo 11 — Publicar a Branch Remota

Após validar o commit:

`git branch --show-current`

Confirme novamente que a branch não é `main`.

Verifique se existe upstream:

`git rev-parse --abbrev-ref --symbolic-full-name @{u}`

Se não existir upstream:

`git push -u origin <branch-name>`

Se já existir upstream:

`git push`

Nunca executar:

`git push origin main`

Nunca utilizar force push automaticamente.

---

# Code Review

Depois do push:

- não realizar merge automático;
- não excluir a branch;
- não realizar force push;
- manter a branch disponível para revisão;
- não criar alterações adicionais sem solicitação;
- alterações solicitadas no code review devem gerar novos commits;
- novos commits devem ser enviados para a mesma branch.

Fluxo:

`local branch`

↓

`commit`

↓

`push`

↓

`origin/<branch>`

↓

`code review`

↓

`adjustments`

↓

`new commit`

↓

`push`

↓

`Pull Request`

↓

`merge into main`

A integração com `main` deve ocorrer exclusivamente através de Pull Request.

---

# Proteção da Main

É proibido executar automaticamente:

`git push origin main`

`git merge <branch>` quando estiver na `main`

`git push --force origin main`

`git rebase` com objetivo de reescrever histórico compartilhado da `main`

Também é proibido:

- criar commit diretamente na `main`;
- realizar push diretamente na `main`;
- realizar merge diretamente na `main`;
- realizar force push na `main`;
- alterar o histórico compartilhado da `main`.

---

# Comandos Destrutivos Proibidos

Nunca executar automaticamente:

`git push --force`

`git push -f`

`git reset --hard`

`git clean -fd`

`git clean -fdx`

`git branch -D`

`git checkout -- .`

`git restore .`

Não utilizar comandos equivalentes para contornar estas restrições.

Se alguma dessas operações for realmente necessária:

1. explique o motivo;
2. explique o impacto;
3. solicite confirmação explícita;
4. somente execute após autorização.

---

# Preservação de Alterações

Nunca descarte alterações existentes apenas para permitir um commit.

Se encontrar alterações aparentemente não relacionadas:

- não remover;
- não sobrescrever;
- não resetar;
- não restaurar;
- não incluir automaticamente;
- não mover silenciosamente para outro commit.

Preserve o estado de trabalho do usuário.

---

# Passo 12 — Validação Final

Após o commit e push, execute:

`git status`

`git branch --show-current`

`git log -1 --oneline`

Quando necessário, confirme o upstream:

`git rev-parse --abbrev-ref --symbolic-full-name @{u}`

Verifique:

- branch atual;
- commit criado;
- hash;
- mensagem;
- branch remota publicada;
- upstream configurado;
- alterações locais restantes;
- ausência de push para `main`.

---

# Resposta Final

Informe ao usuário de forma objetiva:

- branch utilizada;
- mensagem do commit;
- hash do commit;
- arquivos incluídos;
- branch remota publicada;
- upstream;
- alterações locais restantes;
- disponibilidade para code review.

Exemplo:

`Commit concluído com sucesso.`

`Branch: feat/jwt-authentication`

`Commit: a1b2c3d feat(auth): add JWT authentication`

`Remote: origin/feat/jwt-authentication`

`A branch está disponível para code review.`

Não exponha raciocínio interno desnecessário.

---

# Sem Git Disponível

Se Git não estiver instalado ou o diretório não for um repositório Git:

- não tente criar branch;
- não tente realizar staging;
- não tente executar commit;
- não tente realizar push.

Quando houver contexto suficiente, gere uma mensagem sugerida:

`feat(auth): add JWT authentication`

E informe que ela pode ser utilizada manualmente.

---

# Argumentos Opcionais

Se `$ARGUMENTS` estiver disponível, utilize-o como contexto adicional.

Exemplos:

`/commit adicionei login com Google`

`/commit fix no carrinho`

`/commit`

O argumento ajuda a entender a intenção, mas não substitui a análise
das alterações reais do repositório.

---

# Definition of Done

A skill somente é considerada concluída quando:

- o ambiente Git foi validado;
- as alterações foram analisadas;
- o commit foi criado fora da `main`;
- somente arquivos relacionados foram incluídos;
- nenhum arquivo sensível foi incluído;
- nenhuma alteração foi descartada;
- o commit segue Conventional Commits;
- a mensagem utiliza inglês e modo imperativo;
- breaking changes foram identificadas quando aplicável;
- o commit não contém atribuição automática a ferramentas ou assistentes;
- o commit não contém metadados de sessão de ferramentas;
- a autoria utiliza somente a identidade Git configurada;
- o commit foi verificado antes do push;
- a branch foi publicada no remoto;
- o upstream está configurado;
- a branch está disponível para code review;
- nenhum push direto para `main` foi realizado;
- nenhum merge automático na `main` foi realizado;
- nenhum comando destrutivo foi executado sem autorização.