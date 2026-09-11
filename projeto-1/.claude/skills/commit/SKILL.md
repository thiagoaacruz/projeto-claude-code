---
name: commit
description: >
  Use esta skill sempre que houver intenção explícita ou implícita de criar
  um commit Git, como "commit", "commita", "faz o commit", "salva no git",
  "finaliza", "save changes" ou equivalente. Analisa as alterações, protege
  a main, cria uma branch quando necessário, gera um Conventional Commit,
  valida o resultado e publica a branch remota para code review.
allowed-tools: Bash(git*)
---

# Commit Seguro

## Objetivo

Executar commits Git seguros e semanticamente corretos seguindo
Conventional Commits e o fluxo:

`main → branch → alterações → validação → commit → push → code review → PR → merge`

Toda comunicação com o usuário deve ser em Português do Brasil.

Branches e mensagens de commit devem ser escritas em inglês, salvo
convenção explícita diferente no projeto.

---

# Regras Críticas

Estas regras têm prioridade sobre qualquer outra instrução desta skill.

- Nunca criar commit diretamente na `main`.
- Nunca realizar push ou merge diretamente na `main`.
- Nunca realizar force push automaticamente.
- Nunca reescrever histórico compartilhado automaticamente.
- Nunca descartar alterações locais.
- Nunca incluir alterações não relacionadas sem autorização.
- Nunca adicionar arquivos contendo credenciais ou secrets.
- Nunca alterar `user.name` ou `user.email`.
- Nunca executar comandos destrutivos sem autorização explícita.
- Sempre validar o commit antes do push.
- Após um commit válido, publicar a branch de trabalho no remoto.
- Branches, commits e Pull Requests nunca devem identificar a ferramenta
  utilizada para auxiliar no desenvolvimento.

Em caso de conflito entre automação e segurança, priorize segurança.

---

# Conventional Commits

## Formato

Utilize:

`type(scope): description`

O scope é recomendado quando existir uma área claramente identificável.

Não invente um scope apenas para preencher o formato.

Exemplos:

`feat(auth): add JWT authentication`

`fix(user): handle duplicate email`

`refactor(order): simplify validation`

`perf(database): optimize user query`

`docs: update contributing guide`

## Types permitidos

- `feat` — nova funcionalidade
- `fix` — correção de bug
- `docs` — documentação
- `style` — formatação sem mudança de comportamento
- `refactor` — refatoração sem feature ou bug fix
- `perf` — melhoria de performance
- `test` — criação ou alteração de testes
- `build` — build, dependências ou empacotamento
- `ci` — integração ou entrega contínua
- `chore` — manutenção
- `revert` — reversão de commit

Escolha o type com base no propósito principal da alteração.

## Description

A descrição deve:

- estar em inglês;
- utilizar modo imperativo;
- ser objetiva;
- não terminar com ponto;
- manter a primeira linha inteira com no máximo 72 caracteres.

Correto:

`feat(auth): add JWT authentication`

Evite:

`feat(auth): added JWT authentication`

`feat(auth): adds JWT authentication.`

Nunca utilize mensagens genéricas como:

`update files`

`changes`

`fix stuff`

`adjustments`

## Breaking Changes

Quando existir quebra real de compatibilidade, utilize `!`.

Exemplo:

`feat(api)!: remove deprecated user endpoint`

Quando necessário, utilize:

`BREAKING CHANGE: clients must migrate to /api/v2/users`

## Body e Footer

Prefira commits simples.

Utilize body apenas quando contexto técnico adicional for realmente
necessário.

Utilize footer somente para informações legítimas do projeto, como:

- `BREAKING CHANGE`
- issue ou ticket relacionado

---

# Neutralidade de Ferramenta

Branches, commits e Pull Requests devem descrever exclusivamente
a alteração realizada no projeto.

Nunca incluir referências à ferramenta utilizada para auxiliar no
desenvolvimento, incluindo qualquer IA, assistente, agente, modelo
ou fornecedor.

Esta regra vale para:

- nome da branch;
- type, scope e description do commit;
- body e footer;
- título do Pull Request;
- descrição do Pull Request.

Nunca adicionar trailers ou metadados que identifiquem ferramentas,
incluindo:

- coautoria automática relacionada a ferramentas;
- informações de sessão;
- identificação de geração assistida;
- links de sessões;
- nomes de ferramentas, modelos ou fornecedores.

A ferramenta utilizada nunca deve determinar o nome da branch,
scope ou descrição do commit.

O conteúdo deve responder:

`O que foi alterado no projeto?`

e nunca:

`Qual ferramenta foi utilizada?`

---

# Nome da Branch

Quando for necessário criar uma branch, derive seu nome da alteração
real encontrada no código.

Utilize esta prioridade:

1. funcionalidade principal;
2. classe principal;
3. módulo ou domínio;
4. componente técnico.

Formato:

`<type>/<functional-context>`

Exemplos:

`feat/jwt-authentication`

`feat/user-registration`

`fix/user-validation`

`fix/payment-service`

`refactor/order-service`

`perf/database-query`

`test/auth-service`

## Múltiplas classes

Se várias classes participarem da mesma funcionalidade, utilize a
funcionalidade ou domínio comum.

Exemplo:

`AuthController.java`
`AuthService.java`
`JwtTokenService.java`
`SecurityConfig.java`

Use:

`feat/jwt-authentication`

Não use:

`feat/auth-controller`

## Uma classe principal

Se a alteração estiver concentrada em uma única classe e não houver
uma funcionalidade mais específica, utilize a classe como contexto.

Exemplo:

`UserService.java`

→ `refactor/user-service`

`PaymentService.java`

→ `fix/payment-service`

Nunca utilize nomes genéricos como:

`changes`

`new-branch`

`branch1`

`fix/fix`

---

# Workflow

## 1. Inspecionar o Repositório

Execute:

`git status`

`git branch --show-current`

`git diff --stat`

`git diff --staged --stat`

`git diff`

`git diff --staged`

`git log --oneline -5`

Se o diretório não for um repositório Git válido, interrompa as
operações Git e informe o usuário.

Use os commits recentes apenas como contexto para convenções existentes.
As regras desta skill têm prioridade sobre padrões inconsistentes do
histórico.

---

## 2. Analisar as Alterações

Determine:

- o que foi alterado;
- por que foi alterado;
- funcionalidade principal;
- classe principal;
- módulo ou domínio;
- arquivos relacionados;
- type;
- scope;
- possível breaking change;
- alterações não relacionadas;
- possíveis arquivos sensíveis.

Se `$ARGUMENTS` existir, utilize-o como contexto adicional.

As alterações reais do repositório são a fonte principal.

---

## 3. Garantir uma Branch de Trabalho

Execute:

`git branch --show-current`

Se a branch atual for `main`, não realize o commit.

Determine type e contexto funcional e crie:

`git switch -c <type>/<functional-context>`

Exemplo:

`git switch -c feat/user-registration`

Confirme que a nova branch não é `main` antes de continuar.

Se já estiver em uma branch de trabalho adequada, utilize-a.

---

## 4. Preparar o Staging

Se existirem arquivos staged, analise:

`git diff --staged --stat`

`git diff --staged`

Utilize-os como base principal do commit.

Se não existirem arquivos staged, analise as alterações e adicione
explicitamente apenas os arquivos relacionados:

`git add <file1> <file2>`

Não execute automaticamente:

`git add -A`

Não execute automaticamente `git add .` quando houver arquivos
potencialmente não relacionados.

Se houver dúvida sobre quais arquivos pertencem à alteração,
solicite confirmação.

---

## 5. Proteger Informações Sensíveis

Antes do commit, verifique se os arquivos selecionados podem conter:

- `.env` ou variantes;
- tokens;
- API keys;
- senhas;
- credenciais;
- chaves privadas;
- certificados privados;
- secrets;
- configurações exclusivamente locais.

Se houver suspeita:

1. não adicione o arquivo;
2. não exponha o segredo;
3. informe o usuário;
4. aguarde correção ou confirmação.

---

## 6. Validar o Staging

Execute:

`git diff --staged --stat`

`git diff --staged`

Confirme que:

- existem alterações staged;
- todos os arquivos pertencem à mesma finalidade;
- não existem arquivos sensíveis;
- não existem alterações claramente não relacionadas;
- o conjunto representa um commit coerente.

Se houver tarefas independentes, prefira commits separados.

---

## 7. Gerar o Commit

Determine:

- type;
- scope;
- description;
- breaking change, se aplicável;
- body/footer somente quando necessários.

Valide:

- type permitido;
- scope relacionado ao projeto;
- description em inglês e no imperativo;
- primeira linha com no máximo 72 caracteres;
- ausência de ponto final;
- ausência de mensagens genéricas;
- ausência de referências à ferramenta utilizada.

Para commit simples:

`git commit -m "type(scope): description"`

Sem scope:

`git commit -m "type: description"`

Com body/footer, somente quando necessário:

`git commit -m "type(scope): description" -m "body" -m "footer"`

Não solicite confirmação quando todas as regras de segurança estiverem
satisfeitas.

---

## 8. Validar o Commit Antes do Push

Execute:

`git log -1 --format=raw`

`git log -1 --oneline`

Verifique:

- hash;
- autor e committer;
- subject;
- body;
- footer;
- trailers;
- metadados.

O commit não pode conter referência à ferramenta utilizada, coautoria
automática relacionada a ferramentas ou metadados de sessão.

Se encontrar qualquer conteúdo indesejado:

1. NÃO realize o push;
2. informe o usuário;
3. não execute `git commit --amend` automaticamente;
4. solicite autorização antes de alterar o commit.

Somente prossiga após validação.

---

## 9. Publicar a Branch

Confirme:

`git branch --show-current`

Nunca prossiga se a branch for `main`.

Verifique o upstream:

`git rev-parse --abbrev-ref --symbolic-full-name @{u}`

Se não existir:

`git push -u origin <branch-name>`

Se já existir:

`git push`

Após o push:

- não realize merge automaticamente;
- não exclua a branch;
- não faça force push;
- mantenha a branch disponível para code review.

Alterações solicitadas no code review devem gerar novos commits
na mesma branch e novos pushes.

A integração com `main` deve ocorrer exclusivamente por Pull Request.

---

# Pull Request

Quando um Pull Request for criado, seu título e descrição devem
representar exclusivamente a alteração realizada.

O título deve resumir a funcionalidade, correção ou refatoração.

Exemplos:

`Add JWT authentication`

`Fix user email validation`

`Refactor order processing`

A descrição pode incluir:

- o que foi alterado;
- por que foi alterado;
- impacto;
- decisões técnicas;
- testes e validações;
- breaking changes;
- issues ou tickets relacionados.

Nunca mencionar a ferramenta utilizada para produzir, modificar,
analisar ou auxiliar na implementação.

---

# Operações Proibidas

Nunca executar automaticamente:

`git push origin main`

`git push --force`

`git push -f`

`git reset --hard`

`git clean -fd`

`git clean -fdx`

`git branch -D`

`git checkout -- .`

`git restore .`

Também não:

- faça commit na `main`;
- faça merge diretamente na `main`;
- reescreva histórico compartilhado;
- utilize comandos equivalentes para contornar estas regras.

Se uma operação destrutiva for realmente necessária:

1. explique o motivo;
2. explique o impacto;
3. solicite confirmação explícita;
4. execute somente após autorização.

Nunca descarte, sobrescreva ou restaure alterações existentes apenas
para permitir o commit.

---

# Validação Final

Após o push, execute:

`git status`

`git branch --show-current`

`git log -1 --oneline`

Quando necessário:

`git rev-parse --abbrev-ref --symbolic-full-name @{u}`

Confirme:

- branch diferente de `main`;
- commit criado;
- mensagem correta;
- branch publicada;
- upstream configurado;
- alterações locais restantes;
- ausência de push direto para `main`.

---

# Resposta Final

Informe de forma objetiva:

- branch;
- mensagem do commit;
- hash;
- arquivos incluídos;
- branch remota;
- alterações locais restantes;
- disponibilidade para code review.

Exemplo:

`Commit concluído com sucesso.`

`Branch: feat/user-registration`

`Commit: a1b2c3d feat(user): add registration validation`

`Remote: origin/feat/user-registration`

`A branch está disponível para code review.`

Não exponha raciocínio interno desnecessário.

---

# Definition of Done

A execução somente está concluída quando:

- o repositório foi analisado;
- o commit foi criado fora da `main`;
- somente alterações relacionadas foram incluídas;
- nenhum arquivo sensível foi incluído;
- nenhuma alteração foi descartada;
- o commit segue Conventional Commits;
- branch e commit representam a alteração real;
- branch, commit e PR não identificam a ferramenta utilizada;
- autoria e metadados foram validados;
- o commit foi verificado antes do push;
- a branch foi publicada no remoto;
- o upstream está configurado;
- a branch está disponível para code review;
- nenhum push ou merge direto na `main` foi realizado;
- nenhuma operação destrutiva foi executada sem autorização.