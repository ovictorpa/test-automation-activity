## Teste automatizado com Cypress
Esse repositório contem alguns testes automatizados de um fluxo específico de um e-commerce.
## Tecnologias utilizadas
- `JavaScript`
- `NodeJS`
- `Cypress`
- `Cucumber`
## Padrões adotados
- #### Cenários BDD : 
Os cenários de testes foram escritos e documentados em formato BDD, eles estão localizados em `cypress/integration/AddProduct.feature`.
- #### PageObjects :
O padrão page objects foi adotado com intuito de aplicar boas práticas da Engenharia de software no códigoe e estão localizados em `cypress/support/pageObjects`, os arquivos presentes nesse diretório correspondem aos scripts de teste utilizando o `cypress`.
## Inicializando os testes
1º
```
git clone https://github.com/ovictorpa/test-automation-activity.git
```
2º
```
npm install
```
3º
```
npm run cypress:open
```
ou
```
npx cypress open
```
