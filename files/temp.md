（1）记号
u∈[1×3]，P∈[1×2]，V∈[1×2]
（2）初始化
① {T}_{1} =u[0]，{ω}_{2} =u[1]，{θ}_{2} =u[2]
② Tmpr={C}_{GI} ∙{r}_{I} ，P=[Tmpr[0] Tmpr[2]]，r0=P，rf=[{r}_{M} 0]
V=[0 0]，mm=mass
③ {h}_{break} ={r}_{tGx1} ，vfG[0]={v}_{tGx1} ，afG[0]={a}_{tGx1}
vfG[1]=0，afG[1]=0
④ 制导参数初始化：
{i}_{t}=0，tt=0
{ω}_{max}=|{ω}_{2}|，{F}_{max}=6∙F285
mode=1，{dt}_{go}=10，{N}_{tgo}=5，num=15
{t}_{go}=1000，{n}_{QPGNum}=0，{t}_{QPG}=0，{t}_{goNum}=0
{C}_{QPG0} =[0, 0]，{C}_{QPG1} =[0, 0]，{C}_{QPG2} =[0, 0]
FlgwMax=0
⑤ Ji=1e10