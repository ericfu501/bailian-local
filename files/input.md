（1）计算优化指标值①
$$i={PSONum%Num}_{PSO}$$
$$② 若{x}_{PSO}[i][0]>UB[0]或{x}_{PSO}[i][0]<LB[0]或{x}_{PSO}[i][1]>UB[1]或{x}_{PSO}[i][1]<LB[1]或{x}_{PSO}[i][2]>UB[2]或{x}_{PSO}[i][2]<LB[2]，则：$$
$${x}_{PSO}[i]={x}_{lst}[i]，{v}_{PSO}[i]={v}_{lst}[i]，Ji={J}_{lst}[i]$$
③ 否则：
$$u={x}_{PSO}[i]$$
调用4.6.16（粒子群优化指标计算）
$${x}_{lst}[i]={x}_{PSO}[i]，{J}_{lst}[i]=Ji$$
（2）寻找最优指标
① 若$$Ji<{J}_{p}[i]，则：{x}_{p}[i]={x}_{PSO}[i]，{J}_{p}[i]=Ji$$
② 若$$Ji<{J}_{g}，则：{x}_{g} ={x}_{PSO}[i]，{J}_{g} =Ji$$
3）更新粒子
$$若i={Num}_{PSO}-1，则：对于第k个粒子（{0~Num}_{PSO}-1）、第j维变量（0~2）$$
$$① {w}_{PSO}[k][j]={v}_{PSO}[k][j]/{2^k}_{PSO} + {K}_{p}·rand·({x}_{p}[k][j]-{x}_{PSO}[k][j])+{K}_{g}·rand·({x}_{g}[j]-{x}_{PSO}[k][j])$$
$$② {y}_{PSO}[k][j]={x}_{PSO}[k][j]+{w}_{PSO}[k][j]$$