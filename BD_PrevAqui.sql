DROP DATABASE IF EXISTS BD_PrevAqui;
CREATE DATABASE BD_PrevAqui;
USE BD_PrevAqui;
CREATE TABLE boletim_informativo (
    id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE noticia (
	id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100) NOT NULL,
       	resumo TEXT,
	conteudo TEXT,
	capa VARCHAR(255),
	data_publicacao DATETIME NOT NULL DEFAULT NOW(),
	usuario_id INT UNSIGNED
);

INSERT INTO noticia (titulo, conteudo) VALUES ('REGRAS PREVIDENCIÁRIAS PERMANENTES', 'As novas regras previdenciárias implementadas no Brasil em 2019 têm causado 
dúvidas entre os segurados, devido às exigências mais rigorosas para solicitar os benefícios da Previdência Social. Mudanças significativas na idade mínima, tempo de 
contribuição e cálculo do benefício tornaram mais difícil a obtenção de benefícios previdenciários.','As novas regras previdenciárias no Brasil, estão em vigor desde 2019, mas ainda geram dúvidas nos segurados.

Com a promulgação da chamada Reforma da Previdência, os trabalhadores no país estão sujeitos a exigências mais rígidas para solicitar os benefícios da Previdência Social.

Houve mudanças significativas na idade mínima, tempo de contribuição e cálculo do benefício, por exemplo, além da criação de regras de transições específicas.

Em resumo: no geral, ficou mais difícil de se conseguir um benefício previdenciário.

                    No caso de aposentadoria, as novas regras da Previdência prevêem aposentadoria no INSS e no serviço público federal para trabalhadores urbanos se cumpridos os seguintes requisitos:
 Mulheres • 62 anos de idade • mínimo de 15 anos de contribuição (INSS) • mínimo de 25 anos de contribuição (servidor público federal);
 
Homens   • 65 anos de idade • mínimo de 20 anos de contribuição (INSS) • mínimo de 25 anos de contribuição (servidor público federal);

Para se aposentar, homens que ingressarem no mercado de trabalho após a vigência das novas regras terão que contribuir por, no mínimo, 20 anos. Quem já contribui para a previdência deve ter, no mínimo, 15 anos de contribuição.

Trabalhadores Rurais e de Economia Familiar – 60 (sessenta) anos de idade, se homem, e 55 (cinquenta e cinco) anos de idade, se mulher, para os trabalhadores rurais e para os que exerçam suas atividades em regime de economia familiar, nestes incluídos o produtor rural, o garimpeiro e o pescador artesanal. 

Resta destacar que os professores terão o requisito da idade reduzido em 5 (cinco) anos, estando excluídos os professores da educação superior.

			
                    Além da aposentadoria tradicional, é importante lembrar que existem outros benefícios previdenciários disponibilizados pelo Governo Federal através do Instituto Nacional do Seguro Social (INSS).

Isso acontece porque, no decorrer da jornada trabalhista, é comum que o cidadão brasileiro possa enfrentar situações ocasionais que envolvam alguma doença, acidente de trabalho, maternidade, entre outras circunstâncias que podem resultar no afastamento temporário ou permanente do trabalhador. 

Sendo assim, há a possibilidade de solicitar o benefício equivalente à necessidade específica, diante das várias modalidades de aposentadorias, pensões e auxílios.

Como citado acima, além das aposentadorias, o Instituto Nacional do Seguro Social (INSS) também oferece alguns outros benefícios.

São eles: 

       Auxílio-doença 

O trabalhador ou trabalhadora que, por alguma razão referente à saúde, precisa se afastar das atividades laborais devido à incapacidade de executar os serviços, podem solicitar o auxílio-doença após 15 de afastamento, desde que cumpram os seguintes requisitos:

carência de 12 meses;
qualidade de segurado;
incapacidade temporária para o trabalho.

Antes da reforma da previdência (até 12/11/2019), o valor do auxílio-doença era equivalente a 91% da média dos 80% maiores salários de contribuição do segurado a partir de julho de 1994.

A partir da reforma, o valor deste benefício passou a ser equivalente a 91% da média de todos os salários de contribuição do segurado a partir de julho de 1994.

Ou seja, agora não há mais o descarte dos 20% menores salários de contribuição na hora de calcular o valor do auxílio-doença.

Essa diferença parece sutil. Todavia, pode diminuir bastante o valor do benefício de trabalhadores que hoje em dia têm um salário mais alto, porém chegaram a receber menos no passado.



          Salário-maternidade 

Este benefício é concedido após o nascimento do filho de uma funcionária, adoção, guarda judicial ou aborto espontâneo.

Para ter direito ao salário-maternidade é necessário cumprir 10 meses de carência, com exceção dos segurados empregados, empregados domésticos e trabalhadores avulsos.

No caso das desempregadas, é preciso comprovar a situação. 

Essa é uma regra que não sofreu alteração após a reforma da previdência.

Para a segurada empregada e para a avulsa, será mantida a totalidade de sua remuneração, que deve ser paga pela empresa e reembolsada pelo INSS através de créditos fiscais, pelo artigo 94 do decreto 3.048/99.

Por essa razão, o INSS não se utiliza do salário de benefício para calcular o salário maternidade, pois haverá reposição integral e substitutiva da própria remuneração.
               
</p>');


INSERT INTO noticia (titulo, conteudo) VALUES ("REGRAS PREVIDENCIÁRIAS DE TRANSIÇÃO", 'A reforma da Previdência estabeleceu regras de transição para os trabalhadores que já estavam contribuindo para o sistema previdenciário antes da entrada em vigor das novas normas. Essas regras têm como objetivo suavizar a transição para as novas regras de aposentadoria.','<p> As regras previdenciárias de transição são um conjunto de normas que foram criadas para amenizar o impacto da Reforma da Previdência para aqueles que já contribuíam com a Previdência Social antes da mudança da lei.
Essas regras são um meio termo para os segurados que estavam contribuindo, mas ainda não possuem os requisitos para se aposentar.
As regras de transição servem para fazer uma transição entre a antiga e a nova lei, fazendo com que as pessoas que já trabalhavam antes da mudança da lei possam se aposentar com alguns termos da regra anterior e cumprindo algumas exigências da nova norma, vamos conhecer como são essas regras:

                    1 Idade mínima e tempo de contribuição: 

As novas regras da Previdência prevêem aposentadoria no INSS e no serviço público federal para trabalhadores urbanos passaram a ser consideradas se cumpridos os seguintes requisitos mínimos:
Mulheres • 62 anos de idade • mínimo de 15 anos de contribuição (INSS) • mínimo de 25 anos de contribuição (servidor público federal)
Homens • 65 anos de idade • mínimo de 20 anos de contribuição (INSS) • mínimo de 25 anos de contribuição (servidor público federal)
Para se aposentar pelo INSS, homens que ingressarem no mercado de trabalho após a vigência das novas regras terão que contribuir por, no mínimo, 20 anos. Quem já contribui para a previdência deve ter, no mínimo, 15 anos de contribuição.
Como é hoje? Nas regras previdenciárias atualmente em vigor, é possível se aposentar pelo INSS tanto por idade (65 anos para homens e 60 para mulheres) quanto por tempo de contribuição (35 anos para homens e 30 para mulheres). Outra regra existente é a de pontuação 86/96, em que soma-se idade e anos de contribuição até atingir o mínimo de 86 para mulheres e 96 para homens. As novas regras previdenciárias acabam com a aposentadoria apenas por tempo de contribuição.
No caso dos servidores públicos federais é exigida uma idade mínima de 55 anos para mulheres e 60 anos para homens, com no mínimo 30 e 35 anos de contribuição, respectivamente. Servidores que ingressaram até dezembro de 1998 podem se aposentar a partir de 48 anos, no caso das mulheres e 53, no caso dos homens.

                    2 Alíquotas de contribuição: 

As alíquotas de contribuição de trabalhadores da iniciativa privada e servidores públicos agora serão progressivas de acordo com faixas salariais, de maneira similar ao que acontece com o Imposto de Renda:
Regime Geral (INSS) • Até um salário mínimo: 7,5% • De um salário mínimo a R$ 2.000: 9%
• De R$ 2.000 a R$ 3.000: 12% • De R$ 3.000 até o limite do INSS (atualmente R$ 5.839,45): 14% • Não haverá cobrança adicional nas faixas salariais acima do teto do INSS. As alíquotas vão de 7,5% a 14% para quem trabalha no setor privado. Mas, como o cálculo divide os salários em faixas que recebem descontos proporcionais, a alíquota máxima efetiva deve ser de 11,68% para quem recolhe sobre o teto do valor de contribuição.
Regime Próprio (Servidores públicos)
• Para quem recebe até um salário mínimo: 7,5% • De um salário mínimo a R$ 2.000: 9% • De R$ 2.000 a R$ 3.000: 12% • De R$ 3.000 ao teto do INSS (R$ 5.839,45): 14% • Do teto a R$ 10.000: 14,5% • De R$ 10.000 a R$ 20.000: 16,5% • De R$ 20.000 a R$ 39.000: 19% • Acima de R$ 39.000: 22% Assim como no caso da iniciativa privada, a taxação é feita sobre as faixas de valores do salário, portanto a alíquota máxima efetiva para os servidores públicos deve ser de 16%.
Como é hoje? São três as alíquotas para trabalhadores do setor privado: 8% de contribuição para salários de até R$ 1.751,81; 9% de R$ 1.751,82 a R$ 2.919,72; e 11% de R$ 2.919,73 até R$ 5.839,45 (teto do INSS). No serviço público, a alíquota é de 11% da remuneração.

                    3 Regra de cálculo de benefícios do INSS

Com a reforma, a regra para o cálculo dos benefícios do INSS vai funcionar da seguinte maneira:

          Homens e mulheres

• Ao atingir o tempo mínimo de contribuição de 15 anos para mulher e 20 anos, homem, o trabalhador pode se aposentar ganhando 60% da média dos salários de contribuição (remuneração que servia de base para o recolhimento ao INSS). • Essa parcela aumenta 2% a cada ano a mais de contribuição ao INSS até atingir 100% da média com 35 anos de contribuição, para mulheres, e 40 anos, para homens.
• O benefício será calculado considerando a média de todas as contribuições feitas ao INSS
Como é hoje? Nas regras atuais, o valor do benefício na aposentadoria por idade começa em 70% da média dos salários de contribuição e soma 1% a cada ano a mais trabalhado, até o limite de 100%.
Já quem se aposenta por tempo de contribuição tem o valor do benefício reduzido pelo fator previdenciário. Há também a opção de aposentadoria com o valor integral a partir da regra 86/96: somando idade e tempo de contribuição, mulheres devem acumular 86 anos e homens, 96.
Hoje o INSS calcula o benefício a partir da média dos 80% maiores salários do trabalhador, descartando os 20% menores. Com a reforma, o cálculo será feito pela média de todas as contribuições.

		4 Regra de cálculo de benefícios de servidores federais

Também foram alteradas as regras para a aposentadoria de servidores públicos federais:
         Homens e mulheres

As regras referentes ao valor do benefício variam de acordo com a data em que o servidor ingressou no setor público federal:
 Quem entrou antes de 2003: poderá receber a aposentadoria integral (o valor do benefício será igual ao do último salário recebido) e ter paridade (a aposentadoria será reajustada junto com os reajustes nos salários dos servidores na ativa) se cumprir o pedágio de trabalhar o dobro do tempo que faltaria para o servidor se aposentar segundo as regras atuais.

 Quem entrou entre 2003 e 2013: o valor do benefício será de, no mínimo, 60% da média das contribuições feitas a partir de julho de 1994. Serão acrescidos 2% ao valor da aposentadoria até o máximo de 100% para cada ano de contribuição que superar 20 anos de recolhimento, limitado ao teto do salário do funcionalismo público.

 Quem ingressou após 2013: também vale a regra acima. Mas a média das contribuições não vai poder superar o teto do INSS.
Servidores municipais e estaduais não são afetados pela PEC 6/2019 em relação aos benefícios.
Como é hoje? Atualmente, os homens que são servidores públicos precisam ter 60 anos de idade mínima para se aposentar, e as mulheres, 55 anos, com mínimo de 30 e 35 anos de contribuição respectivamente. Quem ingressou até 2003 a regra atual prevê direito à integralidade e à paridade. Quem ingressou entre 2003 e 2013, a aposentadoria é calculada pela média dos 80% dos maiores salários, com reajuste pela inflação. Para ingressantes após 2013, a aposentadoria equivale à média dos 80% maiores salários, limitado ao teto no INSS.

                    5 Aposentadoria rural

A reforma da Previdência não alterou as principais regras do segurado especial rural, que são os produtores rurais em regime de economia familiar, extrativistas e pescadores.
Homens • 60 anos de idade • 15 anos de tempo de contribuição
Mulheres • 55 anos de idade • 15 anos de tempo de contribuição

                    6 Aposentadoria especial

A reforma da Previdência prevê aposentadoria especial de trabalhadores expostos a substâncias nocivas dentro de um sistema de pontos. A pontuação vai considerar a idade e o tempo de contribuição, que varia de acordo com o tipo de agente nocivo que foram expostos (15, 20 ou 25 anos).
Ou seja, aqueles que hoje se aposentariam com 15 anos de contribuição precisariam também somar 66 pontos para se aposentar (por exemplo, 51 anos de idade e 15 de contribuição ou 46 anos de idade e 20 de contribuição); já a aposentadoria aos 20 anos de contribuição exigiria 76 pontos e, por fim, 25 anos exigiriam 86 pontos.
Como é hoje? Trabalhadores nessas condições podem se aposentar por tempo de contribuição (com 15, 20 ou 25 anos, dependendo do tipo de agente a que foram expostos).

                    7 Professores

A reforma da Previdência mudou as regras de aposentadoria para quem ainda vai ingressar na carreira de professor da rede particular.
Homens: • Idade mínima de 60 anos • 30 anos de contribuição
Mulheres: • Idade mínima de 57 anos • 30 anos de contribuição
Para os professores que já estão na ativa, as idades mínimas são diferentes: 55 anos para homens e de 52 para as mulheres. Além disso, esses profissionais deverão pagar o pedágio de 100%, explicado abaixo, no tópico sobre regras de transição.
Como é hoje? Antes da reforma, os professores de escolas particulares não tinham idade mínima para se aposentar, precisando apenas comprovar o tempo mínimo de contribuição (25 anos para as mulheres, 30 para os homens).

				    8 Policiais federais e agentes de segurança

Policiais federais, rodoviários federais, ferroviários federais, agentes penitenciários e socioeducativos, policiais civis do Distrito Federal e policiais legislativos federais devem cumprir os seguintes requisitos na hora de se aposentar, segundo o texto da reforma da Previdência:
Homens em atividade • 53 anos de idade mínima; • Pedágio de 100% sobre o tempo restante de contribuição de acordo com as regras atuais.
Mulheres em atividade • 52 anos de idade mínima; • Pedágio de 100% sobre o tempo restante de contribuição de acordo com as regras atuais.
Homens que ainda não entraram em carreira • 55 anos de idade mínima; • 30 anos de contribuição; • 20 anos de contribuição em cargo estritamente policial.
Mulheres que ainda não entraram em carreira • 55 anos de idade mínima; • 25 anos de contribuição; • 15 anos de contribuição em cargo estritamente policial.
Como é hoje? Atualmente, não há idade mínima e policiais podem se aposentar após 30 anos de contribuição (sendo 20 dedicados à atividade policial), no caso dos homens, e 25 anos (com 15 anos dedicados à atividade policial), no caso das mulheres. É importante ressaltar também que, hoje, agentes penitenciários e socioeducativos não integram nenhum tipo de regime especial.

                     9 Parlamentares

Parlamentares que já estejam inscritos no sistema de aposentadoria especial terão que cumprir pedágio de 30% do tempo de contribuição faltante de acordo com as regras atuais. A idade mínima também foi aumentada: agora é necessário atingir 65 anos, no caso dos homens, e 62 anos, no caso das mulheres.
A reforma da Previdência extingue o Plano de Seguridade Social dos Congressistas, que atualmente permite que um parlamentar se aposente com benefícios integrais depois de 35 anos de mandato ou 60 anos de idade (os números são válidos tanto para homens quanto para mulheres). Com a reforma, os novos deputados e senadores a serem eleitos para ocupar cargos obedecerão às regras do Regime Geral de Previdência Social.
Como é hoje? Nas regras atuais, a alíquota de contribuição é de 11% do valor do subsídio parlamentar, que é de R$ 33.763.

                    10 Pensão por morte

O valor da pensão por morte será igual a 50% da aposentadoria do segurado morto acrescido de 10% para cada dependente até o limite de 100%. Essa regra vale tanto para os servidores públicos quanto para os trabalhadores do setor privado. O benefício não pode ser inferior a um salário mínimo se ele for a única fonte de renda do dependente.
A pensão por morte é o benefício pago aos dependentes do segurado (cônjuge, filhos menores de 21 anos ou inválidos, pais economicamente dependentes e irmãos menores de 21 anos não emancipados) após a sua morte. Quem já recebe esse tipo de pensão não terá o valor de seu benefício alterado.
Como é hoje? Antes da reforma, a pensão por morte equivalia a 100% da aposentadoria que o segurado recebia ou teria direito a receber. A duração do benefício varia de acordo com a idade do dependente que o recebe e é vitalícia, no caso de cônjuge, se ele ou ela tem idade a partir de 44 anos.
11 Benefício de Prestação Continuada
A reforma da Previdência prevê o pagamento de BPC (Benefício de Prestação Continuada), benefício mensal de um salário mínimo pago a idosos e deficientes pobres, àqueles que tiverem renda familiar per capita de até meio salário mínimo (R$ 499, em 2019).
Como é hoje? A Lei Orgânica da Assistência Social, de 1993, estabelece que têm direito ao BPC idosos e deficientes com renda familiar per capita de até um quarto do salário mínimo (que seria R$ 249,50). A regra, porém, foi considerada inconstitucional pelo STF (Supremo Tribunal Federal) em 2013. Na decisão, os ministros estipularam o patamar de meio salário mínimo para concessão do benefício.</p>

12 Abono salarial (PIS/PASEP)
As regras do abono salarial não foram mexidas. Trabalhadores que recebem até dois salários mínimos (hoje, R$ 1.996), estão inscritos no PIS/Pasep há pelo menos cinco anos e trabalharam ao menos um mês no ano anterior ganham do governo um abono de até um salário mínimo (R$ 998). O benefício é pago em proporção ao tempo trabalhado no ano anterior – 12 meses dão direito ao valor integral.
As mudanças que propunham restringir o pagamento do abono foram excluídas na tramitação da reforma no Senado. Na proposta enviada ao Congresso pelo governo Bolsonaro, o abono ficaria restrito a quem ganha até um salário mínimo. No Senado, a restrição do benefício foi mantida no relatório do senador Tasso Jereissati (PSDB-CE), mas foi retirada na votação dos destaques (alterações propostas por senadores).
13 Regras de transição
A regras de transição vão até 2032 e valem apenas para quem já está no mercado de trabalho. No caso de trabalhadores do setor privado, são cinco opções. Para os servidores públicos federais, só duas dessas regras são válidas.
• Tempo de contribuição e idade mínima: será possível se aposentar aos 56 anos, no caso das mulheres, e 61 anos, no caso dos homens. A partir da data de promulgação da reforma, esses patamares serão acrescidos gradualmente de mais seis meses, até que a idade de 65 anos para homens e 62 anos para mulheres seja atingida em 2033. Nesse caso, é importante ressaltar que os tempos mínimos de contribuição, de 35 anos para os homens e 30 anos para mulheres, devem ser respeitados.
• Idade mínima: a regra vale para homens com 65 anos e ao menos 15 de contribuição e as mulheres com 60 anos e 15 de contribuição. A partir de 2020, o tempo de contribuição dos homens vai crescer seis meses por ano, chegando a 20 anos em 2029. Já a contribuição das mulheres permanece em 15 anos, mas a idade mínima vai crescer seis meses a cada ano a partir de 2020, chegando a 62 em 2023.
• Pedágio de 50%: quem poderia se aposentar em até dois anos segundo as regras atuais terá que cumprir mais 50% do tempo que resta para atingir o mínimo (35 anos para homens e 30 anos para mulheres).
• Pedágio de 100% (válido também para servidores): quem já poderia se aposentar por tempo de contribuição terá que optar por cumprir 100% a mais do que restar, a partir da data de promulgação da reforma, para atingir o mínimo (35 para homens e 30 para mulheres). Nesse caso, a remuneração recebida passa a ser o valor integral.
• Sistema de pontuação: há, por fim, um sistema de pontuação que soma a idade e o tempo de contribuição e tende a beneficiar quem começou a trabalhar mais cedo. Para mulheres, a soma deve ser de 86 pontos; para homens, de 96. Ao longo do período de transição, esses valores aumentam até chegar a 100 para mulheres e 105 para homens em 2032. Nesse caso, professores terão direito a uma redução de cinco pontos.
• Sistema de pontuação para servidores federais: Essa regra é específica para servidores, não vale no INSS, que atende trabalhadores da iniciativa privada. Eles têm outras regras.
Para conseguir a aposentadoria, a soma da idade com o tempo de contribuição deve dar 96 pontos, no caso dos homens, ou 86 pontos, no das mulheres.
Essa pontuação vale apenas para este ano. Ela vai subir um ponto por ano, até chegar a 105 pontos para os homens, em 2028, e 100 pontos para as mulheres, em 2033.
Além disso, há idade e tempo de contribuição mínimos para conseguir se enquadrar nessa regra.
Em 2019, homens precisam ter pelo menos 61 anos, e mulheres 56. Essa idade mínima vai aumentar em 2022: homens precisarão de 62 anos e mulheres, de 57.
O período mínimo de contribuição não muda ao longo do tempo. Homens devem cumprir 35 anos de contribuição e mulheres, 30 anos. Ambos precisam de 20 anos no serviço público e cinco no cargo que vão se aposentar.
2) Pedágio de 100%: Essa regra vale tanto para servidores, quanto para profissionais da iniciativa privada:
Homens conseguem se aposentar a partir dos 60 anos, e mulheres, dos 57, mas precisam pagar um "pedágio". Ele é de 100% do tempo que falta para chegar aos 35 anos de contribuição (homens) ou 30 anos (mulheres) na data que a reforma começar a valer.
Por exemplo: se no dia em que a reforma entrar em vigor faltar dois anos conseguir se aposentar, precisará trabalhar quatro anos.
Valor da aposentadoria:
Se alcançar os requisitos de uma das regras, o servidor que entrou no serviço público até 31 de dezembro de 2003 pode garantir uma aposentadoria com valor maior.
Ele alcança a paridade e a integralidade, ou seja, aposentadoria igual ao seu último salário e que é ajustada conforme o aumento da remuneração dos servidores na ativa. Para isso, porém, precisam ter pelo menos 65 anos de idade (homem), 62 anos (mulher).
O cálculo dos que entraram a partir de 2004 depende da regra em que se enquadraram. Quem entrar na regra de pontos terá o valor calculado da mesma forma que os demais trabalhadores.
Nela, o valor da aposentadoria parte de 60% da média de contribuições, com dois pontos percentuais a mais por ano que contribuir além de 20 anos.
Esse cálculo também vale para quem optou por fundo de previdência complementar.
Na regra do pedágio de 100%, o valor da aposentadoria é de 100% da média das contribuições.');

INSERT INTO noticia (titulo, conteudo) VALUES ('A HISTÓRIA DA PREVIDÊNCIA NO BRASIL', 'A história da Previdência Social no Brasil remonta ao século XIX, com a criação de benefícios
 para grupos específicos, como oficiais da Marinha e professores. Em 24 de janeiro de 1923, foi promulgada a Lei Eloy Chaves, considerada marco inicial da Previdência no país. Ao longo do tempo,
 outras leis e regulamentações foram implementadas para ampliar a proteção social. A Previdência Social passou por transformações e expansões ao longo dos anos, sendo atualmente regida pela 
 Constituição Federal de 1988.',' <p>
                    Em 24 de janeiro de 2023, o Brasil comemorou o centenário da sanção da Lei Eloy Chaves, considerada o marco da Previdência Social no país. O Decreto Legislativo nº
4.682, de 24 de janeiro de 1923, sancionado pelo então Presidente da República, Arthur da Silva Bernardes,criou, em cada empresa de estrada de ferro do Brasil, uma
Caixa de Aposentadoria e Pensões para seus empregados.

                    A nova Lei tratava do direito dos ferroviários a pensão, aposentadoria, assistência médica e auxílio farmacêutico. Um conjunto de benefícios mais abrangente do que
outras iniciativas, de natureza previdenciária, citadas por historiadores e estabelecidas antes e depois da Proclamação da República, em 15 de novembro de 1889.
Um dos registros citados é o Plano de Beneficência dos Órfãos e Viúvas dos Oficiais da Marinha, de 23 de setembro de 1795. O mesmo benefício foi estendido ao
Exército em 1827, com o chamado meio soldo. Da mesma forma, em 1821, a Carta de Lei assinada por Dom João VI, datada de 29 de setembro, e publicada pela
Chancelaria-Mor, no dia 6 de outubro, concedeu aposentadoria a mestres e professores que já tinham 30 anos de serviço, com o vencimento de todo o seu ordenado.
Esse Decreto foi publicado em 19 de janeiro de 1822, na Gazeta do Rio, o primeiro jornal impresso do Brasil:
"Os professores, e Mestres Regios, de hum e outro
sexo, de primeiras letras, Grammatica Latina
e Grega, Rhetorica, e Filosofia, que por espaço
de trinta annos, contínuos, ou interpolados,
houverem regido louvavelmente sem nota,
suas respectivas Cadeiras, serão jubilados com
vencimento de todo o seu Ordenado (...)"
Outorgada por D. Pedro I, em 25 de março de 1824, a
Carta Imperial, primeira Constituição do Brasil, não
falava em aposentadoria ou pensão especificamente,
mas previa um tipo de assistência sob a forma genérica
de "socorros públicos":
“art. 179. A inviolabilidade dos Direitos Civis, e
Políticos dos Cidadãos Brazileiros, que tem por base a
liberdade, a segurança individual, e a propriedade, é
garantida pela Constituição do Império, pela maneira
seguinte: (...)
XXXI. A Constituição também garante
os socorros públicos. (...)” 

Em 1835, foi criado o Montepio Geral de Economia dos Servidores do Estado, fato que é apontado como marco inicial da Previdência Complementar no Brasil. Mas a questão também é
controversa e alguns historiadores apontam essa demarcação para um alvará português expedido em novembro de 1684.
Outro registro antecedente é o Decreto nº 9.912-A, de 26 de março de 1888, assinado pela Princesa Imperial Regente, Isabel, em nome do Imperador. A medida concedeu o direito à aposentadoria
aos empregados dos Correios. O benefício era concedido aos trabalhadores que alcançassem 30 anos de serviço e idade mínima de 60 anos.
Ainda em 1888, a Lei nº 3397, de 24 de novembro, criou uma Caixa de Socorros em cada Estrada de Ferro do Império. No dia 20 de julho de 1889, foi criado o Fundo de Pensão do pessoal das Oficinas
da Imprensa Nacional. No mesmo ano, no dia 15 de novembro, foi proclamada a República.
Em 1911, a Caixa de Pensões dos Operários da Casa da Moeda do Brasil foi criada e, no ano seguinte, outra Caixa foi constituída para o pessoal das Capatazias da Alfândega do Rio de Janeiro.
Quatro anos antes da Lei Eloy Chaves, em 1919, foi editada a primeira legislação que tratava de acidentes de trabalho. Era a Lei nº 9.517, que tornou compulsório o seguro contra acidentes que
levassem à morte ou à incapacidade para o trabalho, instituindo uma indenização a ser paga pela empresa.

         A LEI ELOY CHAVES 

Os 100 anos transcorridos desde a sanção da Lei Eloy Chaves promoveram um natural distanciamento do panorama que levou à aprovação do marco inicial da Previdência Social no Brasil. Os
relatos nem sempre clareiam as motivações que levaram Eloy Chaves, político e empresário do ramo elétrico, a travar uma verdadeira batalha pela aprovação do Projeto de Lei de sua autoria,
envolvendo a categoria dos ferroviários, que foi apresentado à Câmara dos Deputados em 5 de outubro de 1921.

No fim da década de 1910, o Brasil experimentava os dissabores vividos, internacionalmente, por todos os países, após a primeira Grande Guerra Mundial. A economia, baseada na exportação
cafeeira, entrou em declínio e o país, que havia recebido uma forte corrente imigratória, começou a enfatizar o crescimento industrial.

Na ocasião, o Brasil estava diante de um cenário de muita pressão social e demandas por melhores condições de trabalho. O país estava apenas começando a tratar dos primeiros projetos voltados para
os direitos trabalhistas e sociais. O movimento reivindicatório dos trabalhadores, em boa parte, foi suscitado em virtude de pleitos inspirados pelas ideias de proteção social, trazidas pelos imigrantes.
O período entre 1915 e 1917 foi de grande mobilização dos trabalhadores em busca de direitos. Eloy Chaves ocupava, então, o cargo de secretário de Justiça de São Paulo e participou de algumas das
negociações que levaram ao fim do principal movimento paredista daquele período: a greve de 1917.

No entanto, a insatisfação dos trabalhadores continuava e as preocupações com os acontecimentos daquela época fizeram com que, após a sua eleição para deputado federal pelo PRP, em 1919,
Eloy Chaves passasse a buscar mecanismos para solucionar os desajustes sociais, que motivavam o descontentamento dos trabalhadores.

Há relatos de que os ferroviários faziam, repetidas vezes, listas de coleta de dinheiro para socorrer as esposas que haviam perdido seus companheiros. Mas essa boa vontade não resolvia os problemas
dessas famílias.

Nessa mesma época, o engenheiro da ferrovia São Paulo Railway Company, Willian John Sheidon, chegou ao Brasil, retornando de uma viagem ao Chile. No caminho, havia passado pela Argentina,
de onde trouxe um exemplar da Lei que criava a Caja de Jubilaciones, norma reguladora das aposentadorias e pensões dos ferroviários daquele país. Essa Lei foi traduzida e publicada pelo Jornal
O Estado de S. Paulo, em 1921.

A Lei da Argentina foi tema de uma reunião entre os dirigentes da Companhia Paulista durante uma visita ao trecho da Serra do Mar da São Paulo Railway Company. Depois, em junho de 1921,
um outro encontro tratou de levar o assunto a Eloy Chaves.

Os ferroviários eram a categoria que mais amplamente participava da base eleitoral de Eloy Chaves, na região de Jundiaí, sede da Companhia Paulista de Estradas de Ferro. Havia grande insatisfação
nos redutos onde se concentrava essa classe, naquela época, e uma greve nos transportes ferroviários, como já ocorrera anteriormente, além de prejuízos à economia, acabaria por atingir outros setores
de atividade, pela impossibilidade de locomoção dos trabalhadores.

Cabe aqui uma observação sobre o cenário com que Eloy deparava-se ao adotar a criação de Caixas de Aposentadorias e Pensões, justamente para os trabalhadores das estradas de ferro. Em maio de
1906, 3.500, dos 3.800 funcionários da Companhia Paulista, entraram em greve, reivindicando redução da jornada de trabalho para oito horas e em protesto contra o tratamento que recebiam
de seus superiores, entre eles, Francisco Paes Leme de Monlevade. Além disso, reclamavam da obrigatoriedade de se inscrever e contribuir para a Sociedade Beneficente dos Empregados, criada
pela Companhia Paulista.

Essa Sociedade Beneficente tinha o objetivo de prestar serviços de saúde, pagar aos trabalhadores pensão por velhice, doença ou incapacidade do associado, além de conceder auxílio para o funeral
dos sócios e uma ajuda para a família dos membros falecidos. O custeio desses benefícios era feito por meio de contribuições mensais dos trabalhadores e uma subvenção anual, paga pela Companhia.
O problema era a falta de regulação e fiscalização. Os trabalhadores reclamavam da obrigatoriedade das taxas e da baixa qualidade dos serviços prestados.

Havia inúmeras dessas instituições avulsas, no início da década de 1910. A própria Companhia Paulista tinha várias delas, com diferentes funções. A preocupação social justificada pela empresa,
no entanto, não era vista da mesma forma pelos trabalhadores, obrigados a uma contribuição compulsória, retirada de seus baixos salários e sem a contrapartida prometida. Além disso, há
publicações que relacionam a estabilidade do trabalhador no emprego à filiação a essas Caixas.

Essas contribuições deixaram de ser obrigatórias, por ordem da Justiça, que também concedeu outras reivindicações aos operários no fim da greve. A Sociedade Beneficente dos Empregados
da Companhia Paulista foi extinta em 1925, em função da criação da Caixa de Aposentadorias e Pensões, decorrente da Lei Eloy Chaves.
Por outro lado, o desagrado dos trabalhadores com Francisco Paes Leme de Monlevade estava relacionado ao seu empenho na eletrificação da estrada de ferro e à implantação de outras modernizações,
que logo foram associadas às demissões realizadas pela Companhia.

Eloy Chaves era tido como uma pessoa agregadora e conciliadora. Ciente dos problemas decorrentes da greve de 1906 e, considerando que os empregados da Paulista eram, em sua maioria, seus eleitores,
Eloy conversou com Francisco Paes Leme de Monlevade para, juntos, trabalharem as ideias que fundamentaram o Projeto de Lei. Depois disso, procuraram Adolfo Pinto, inspetor-geral da Companhia
Paulista, e os três passaram a estudar a organização da Caixa dos Ferroviários da Argentina.

Mais tarde, durante a tramitação do projeto, na Câmara, optou-se pela multiplicidade das Caixas, que obedeceriam às regras gerais da Lei, mas considerando as especificidades de cada Ferrovia. Isso porque,
na Argentina, só havia uma caixa para todas as estradas de ferro, modelo que não caberia ao Brasil.

Em seu discurso de apresentação do Projeto, na Câmara dos Deputados, Eloy Chaves afirmou: "À áspera luta de classes figurada e aconselhada pelos espíritos extremados ou desvairados
por estranha e complicadas paixões, eu anteponho, confiado no seu êxito final, a colaboração íntima e pacífica de todos, em benefício da pátria comum e dentro da ordem. “(...)
“Estamos em novos tempos; as classes menos favorecidas aspiram mui justamente um maior quinhão de vida e conforto. Cumpre atendê-las com espírito liberal e amigo” (...)

“Em uma terra destas em que as barreiras, que separam os homens, pouco a pouco se vão esboroando e em que cada um, pelo seu trabalho e esforço pode ascender aos mais altos
destinos, não é ser otimista anunciar dias melhores para os que, penosamente, cumprem na vida o áspero e nobre dever que Deus a todos impôs: trabalhar."

Nos meses seguintes, enquanto o projeto passava pela Comissão Especial de Legislação Social, Eloy Chaves aproveitou para ampliar suas pesquisas, de forma a aprimorar o texto. Eloy também
trabalhava na defesa do projeto, argumentando com seus pares, que ainda não estavam convencidos da aprovação da proposta. Além disso, fez consultas e enviou carta circular às classes ferroviárias,
pedindo que encaminhassem observações sobre o projeto. Tudo isso dotou a Comissão de bastante subsídios para o relator.

A tramitação do projeto na Comissão teve sua velocidade coordenada, de forma que não retornasse ao plenário em meio a outros temas polêmicos, que pudessem colocar em risco uma votação favorável.
Em 23 de novembro de 1922, o projeto retornou ao Plenário com alterações importantes: a redução da idade mínima para aposentadoria de 55 para 50 anos de idade, após somados 30 anos de serviço,
e a indenização por acidente de trabalho, com ônus para as empresas de estradas de ferro. Também juntaram ao projeto os mesmos direitos aos trabalhadores da Controladoria Geral das Estradas de
Ferro, uma instância administrativa criada pelas empresas.

O projeto foi discutido e debatido e, em 26 de dezembro, encaminhado ao Senado. No dia seguinte, a Comissão de Legislação e Justiça aprovou o texto em regime de urgência e sem emendas.
A tramitação do projeto, considerada rápida para os padrões da época, recebeu muitas críticas dos opositores da proposta, mas as consultas e os debates promovidos por Eloy Chaves e seus pares,
durante o curso da matéria, não deixaram muito espaço para argumentos contrários.

No dia 30 de dezembro, a proposta foi aprovada e convertida no Decreto Legislativo nº 4.682, depois sancionado pelo então presidente Arthur Bernardes, em 24 de janeiro de 1923.


<strong>   AS CAIXAS DE APOSENTADORIAS E PENSÕES  </strong> 

A Lei Eloy Chaves estabelecia que as Caixas de Aposentadoria e Pensões dos Ferroviários – CAPs, como mais tarde ficariam conhecidas, deveriam formar um fundo com a contribuição de 3% dos vencimentos
dos empregados, mais 1% da renda bruta anual da empresa, além do valor que somasse um aumento de 1,5%, aplicado sobre as tarifas da estrada de ferro. Para completar o custeio, havia também
recolhimento sobre os aumentos conferidos aos funcionários, multas, donativos e fundos acumulados. O custeio e a gestão das CAPs eram totalmente privados, sem a participação do governo, conforme Eloy
Chaves defendia.

As Caixas de Aposentadorias e Pensões (CAPs), rapidamente se proliferaram. Em 1924, apenas um ano após a edição da Lei Eloy Chaves, havia 26 delas em funcionamento. No dia 20
de dezembro de 1926, a Lei 5.109 estendeu o sistema das CAPs aos trabalhadores portuários e marítimos, que só viriam a ser instaladas cinco manos depois. A Lei também criou, no âmbito do
Conselho Nacional do Trabalho, uma instância de Recurso às decisões das CAPs. Ainda em 1926, é criado o Instituto de Previdência dos Funcionários Públicos da União
(Decreto nº 5.128), que, em 1938, se transformaria no IPASE (Decreto-lei nº 288).


<strong> A CRIAÇÃO DOS IAPS  </strong> 

Nos anos 1930, o sistema previdenciário é reestruturado, mantendo as bases corporativas, de modo a responder ao dinamismo político-econômico do início do processo
de industrialização. Nesse contexto, Institutos de Aposentadorias e Pensões, restritos a trabalhadores urbanos, disseminaram-se.

As Caixas de Aposentadoria e Pensões (CAPs), criadas e mantidas por empresas, foram gradativamente substituídas pelos Institutos de Aposentadoria e Pensões (IAPs), que
eram instituições previdenciárias organizadas por categorias e com cobertura nacional.

<strong> A CONSTITUIÇÃO FEDERAL DE 1934  </strong> 

A Constituição Federal de 1934 estabeleceu a forma tripartite de custeio, que integrava as contribuições obrigatórias do empregado, empregador e ente público (União). Nesse formato, o Estado marcava presença no custeio da
Previdência Social.

Assim, de acordo com o art. 121, § 1º, alínea “h”, da CF/1934, a legislação do trabalho deve observar a instituição de previdência mediante contribuição igual, da União, do empregador e do empregado, a favor da velhice, da
invalidez, da maternidade e nos casos de acidentes de trabalho ou de morte.

<strong>   CONSTITUIÇÃO FEDERAL DE 1946 </strong>

Em relação à legislação do Trabalho e da Previdência Social, a Constituição Federal de 1946, promulgada em 18 de setembro, trouxe novas disposições, tais como o direito da gestante ao descanso antes e depois do parto, sem prejuízo
do emprego, nem do salário; assistência sanitária, inclusive hospitalar e médica preventivas, tanto ao trabalhador quanto à gestante, além de assistência aos desempregados.

Houve, ainda, a obrigatoriedade da instituição do seguro pelo empregador contra acidentes de trabalho e o preceito relativo à Previdência, mediante contribuição da União, do empregador e do empregado, em favor da maternidade
e contra as consequências da doença, da velhice, da invalidez e da morte.

Em 1949, é criado o Serviço de Assistência Médica Domiciliar e de Urgência (SAMDU), pelo Decreto número 27.664, de 30 de dezembro. O custeio do serviço era feito mediante a cotização dos Institutos e Caixas de cada localidade, proporcionalmente
ao número de seus segurados. A fiscalização e o orçamento de cada SAMDU eram fixados anualmente pelo Ministro do Trabalho, Indústria e Comércio, ouvido o Departamento Nacional da Previdência Social

<strong>   LEI ORGÂNICA DE PREVIDÊNCIA SOCIAL – LOPS  </strong>

Em 26 de agosto de 1960, foi editada a Lei nº 3.807, a primeira Lei Orgânica da Previdência Social – a LOPS, que nasceu a partir de um projeto de 1947, o qual tramitou no
Congresso Nacional por, aproximadamente, 14 anos.

Com a aprovação da lei, todos os órgãos de execução previdenciária passaram a cumprir a mesma norma. Consolidava-se a unificação das leis de Previdência Social. Até
então, cada Instituto e cada Caixa eram regidos por normas próprias. A unificação da gestão demoraria um pouco mais e seria implantada somente alguns anos depois,
com a criação do Instituto Nacional de Previdência Social – INPS, em 1966, e a sua respectiva instalação em 1967.

Segundo o art. 1º, a Previdência Social, organizada na forma da LOPS, tem por fim assegurar aos seus beneficiários os meios indispensáveis de manutenção, por motivo
de idade avançada, incapacidade, tempo de serviço, prisão ou morte daqueles de quem dependiam economicamente, bem como a prestação de serviços que visem à proteção de sua saúde e concorram para o
seu bem-estar.

Vale destacar que uma das medidas mais importantes constante da lei unificada foi o teto do valor das contribuições e dos benefícios, fixado em cinco salários mínimos. É comum que pessoas que não conhecem
bem o assunto se refiram à Previdência Social como uma instituição que, ao longo da história, não se preocupou com a questão atuarial e os problemas demográficos.

No entanto, trata-se de um engano, já que a Previdência, desde o seu início, sempre contou com estudos técnicos de natureza doutrinária e atuarial, para que tivesse bases sólidas.

<strong>   A CRIAÇÃO DO INPS  </strong>

O Instituto Nacional de Previdência Social – INPS foi criado pelo Decreto-Lei nº 72, de 21 de novembro de 1966, que determinou, ainda, a unificação dos Institutos de Aposentadoria e Pensões. Criado como órgão da administração indireta da União, com personalidade jurídica
de natureza autárquica, o INPS, nessa condição, possuía domínio pleno de seus bens, serviços e ações, além das regalias, privilégios e imunidades concedidos à União.

Pela primeira vez, o Brasil contava com um único órgão que centralizava todas as ações de previdência no âmbito do Ministério do Trabalho e Previdência Social: o INPS. Dessa forma, integravam o sistema previdenciário: o Departamento Nacional de Previdência Social – DNPS,
o Conselho de Recursos da Previdência Social – CRPS, as Juntas de Recurso da Previdência Social – JRPS e o Serviço Atuarial – SA.

<strong>    CRIAÇÃO DO MINISTÉRIO DA PREVIDÊNCIA E ASSISTÊNCIA SOCIAL E DA DATAPREV</strong> 

Em 1974, foi criado o Ministério da Previdência e Assistência Social, por meio da Lei n° 6.036, de 1° de maio, desmembrado do Ministério do Trabalho e Previdência Social. Por sua vez, a Lei
nº 6.062, de 25 de junho de 1974, dispôs sobre esse desmembramento e deu outras providências.

A Empresa de Processamento de Dados da Previdência Social – DATAPREV foi criada também em 1974, pela Lei nº 6.125, de 4 de novembro. Posteriormente, foi denominada Empresa de Tecnologia
e Informações da Previdência Social. A DATAPREV foi instituída como uma empresa pública vinculada ao Ministério da Previdência e Assistência Social, com personalidade jurídica de direito privado, patrimônio próprio e autonomia administrativa e financeira.
Além disso, a Lei nº 6.125, de 4 de novembro de 1974, elencou as atribuições da DATAPREV: a análise de sistemas, a programação e execução de serviços de tratamento da informação e o processamento
de dados por meio de computação eletrônica, bem como a prestação de outros serviços correlatos.

<strong> CONSTITUIÇÃO FEDERAL DE 1988 </strong> 

O processo de redemocratização passa a demandar uma nova ordem constitucional. As eleições para a Assembleia Nacional Constituinte aconteceram em novembro de 1986. Em fevereiro de 1987, a Constituinte é instalada e,
no dia 5 de outubro de 1988, é apresentada ao País a nova Constituição. Na Carta Magna, os direitos individuais foram largamente ampliados e as liberdades públicas ganharam vigor nunca antes experimentado. Os direitos dos
trabalhadores urbanos e rurais foram contemplados com 34 itens.

A nova Constituição apresenta um conceito inédito: o de seguridade social. No Título VIII, Da Ordem Social, ficou estabelecido que essa ordem tem como base o primado do trabalho e, como objetivo, o bem-estar e a justiça
social. A seguridade é vista como um conjunto de ações de iniciativa dos poderes públicos, com a participação da sociedade, estruturada em três grandes segmentos: Previdência Social, Saúde e Assistência Social.

<strong> A CRIAÇÃO DO INSS   </strong> 

A história do INSS começou um pouco antes da comemorada data de 27 de junho de 1990, quando o Decreto nº 99.350 efetivou a fusão do Instituto de Administração Financeira da Previdência e Assistência Social (IAPAS) com o Instituto Nacional de Previdência Social (INPS), criando uma
nova autarquia, o Instituto Nacional do Seguro Social (INSS).

O INSS, como Autarquia Federal vinculada ao recém-criado Ministério do Trabalho e da Previdência Social (MTPS), foi criado pelo Decreto nº 99.350/90, após a fusão do IAPAS com o INPS. Além disso, o Decreto
definiu, ainda, a estrutura do Instituto, composta por uma Direção Central, formada por 1 Presidente e 4 Diretorias, além de 7 Superintendências Regionais.

Entre as atribuições do INSS, na época, também figurava a competência para executar as atividades e programas relacionados ao emprego, apoio ao desempregado, identificação profissional, segurança e saúde
do trabalhador.

       REFORMA DA PREVIDÊNCIA – EC 20 

Em 16 de dezembro de 1998, entraram em vigor as mudanças da Emenda Constitucional nº 20. Para assegurar a aprovação do texto Reforma da Previdência, algumas medidas foram fixadas, de forma a garantir alguns direitos para quem já estava filiado a algum regime
de Previdência Social, público ou privado.

Dessa forma, quem havia preenchido os requisitos para se aposentar, na data da promulgação da Emenda Constitucional, ainda que de forma proporcional, poderia, a qualquer tempo, se utilizar das regras anteriores à
Emenda Constitucional ou optar pelas regras de transição, se considerasse mais vantajoso.

A aposentadoria integral de quem ingressou no mercado de trabalho após a Reforma, ocorreria aos 35 anos de contribuição e 60 anos de idade, para os homens e aos 30 anos de contribuição para as mulheres, independentemente
da idade, chamada de aposentadoria por tempo de contribuição. Também era possível aposentar-se por idade, uma vez cumprida a carência de 15 anos de contribuição, aos atingir 60 anos de idade no caso das mulheres e 65 anos de idade no caso dos homens.

Para mulheres seria aos 30 anos de contribuição e 55 anos de idade. No texto da EC 20 é possível perceber a mudança no conceito de tempo de serviço para tempo contribuição.

O limite de idade da Emenda foi reduzido em cinco anos para os trabalhadores rurais, de ambos os sexos, que exerciam suas atividades em regime de economia familiar, direitos que foram estendidos também aos garimpeiros e pescadores artesanais.

Também seria possível a aposentadoria proporcional aos 30 anos de serviço para homens e 25 para mulheres para os segurados filiados até a data de publicação da EC nº 20, de 1998.
Os que estavam no regime, na data em que a Reforma entrou em vigor, mas ainda não haviam completado todo o tempo de contribuição para se aposentar, passariam pela regra de transição. Assim, no caso das aposentadorias
integrais, o requerente teria que cumprir um adicional de 20% do tempo que faltava para se aposentar pela regra anterior à reforma. Nas aposentadorias proporcionais esse pedágio seria de 40%.

         EMENDA CONSTITUCIONAL Nº 41  

Em 19 de dezembro de 2003, é aprovada a Emenda Constitucional nº 41, de 19 de dezembro. A principal modificação dessa Reforma foi a alteração do art. 40 da Constituição Federal, instituindo a cobrança de contribuição previdenciária dos servidores públicos inativos.
A EC 41 também alterou o cálculo dos benefícios, que passou a ser feito pela média das remunerações do servidor e não pelo último salário, como era antes. A Emenda também modificou a pensão por morte, que deixava de ter o mesmo valor da remuneração ou do provento do
servidor e passava a ser equivalente à remuneração ou ao provento do servidor falecido, até o limite estabelecido no Regime Geral de Previdência Social, sendo acrescido de 70% da parcela excedente a este limite, se for o caso.

       EMENDA CONSTITUCIONAL Nº 103  

Em 13 de novembro de 2019 foi publicada a Emenda Constitucional nº 103, com alterações no Regime Geral de Previdência Social (RGPS) e no Regime Próprio de Previdência Social (RPPS) da União, estabelecendo as regras atuais do Sistema de Previdência Social, como também,
as regras de transição para os trabalhadores que já vinham contribuindo para o sistema antes da emenda, cujos temas estão sendo tratados à parte nesse site.


</p>');



