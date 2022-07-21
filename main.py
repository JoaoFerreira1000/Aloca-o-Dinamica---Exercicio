from IPython.display import display
import IPython

import pandas as pd
import csv

nt = pd.read_csv('notas_alunos.csv', sep=";")
print(nt)
print()

media = (nt['nota1'] + nt['nota2']) / 2
nt['media'] = media

nt.loc[nt['falta'] <= 5, 'situacao'] = 'APROVADO'
nt.loc[nt['falta'] > 5, 'situacao'] = 'REPROVADO'
nt.loc[nt['media'] >= 7, 'situacao'] = 'APROVADO'
nt.loc[nt['media'] < 7, 'situacao'] = 'REPROVADO'
media_geral = nt['media'].median()
maior_media = nt['media'].max()
maior_falta = nt['falta'].max()
print(f' A maior quantidade de faltas é {maior_falta}')
print(f' A media geral é de {media_geral}')
print(f' A mairo media é de {maior_media}')
print()
print(nt)

nt.to_csv('alunos_situacao.csv', index=False)
