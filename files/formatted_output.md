$$
Flg=1;\\
t_{goNum1}=0;\\
r_{L} =[H_{f}, X_{f}];\\
r_{fG} =[h_{f}, 0];\\
IF1(t_{go}>10 && n_{QPGNum}==0)\\
t_{gopst}=t_{go}-T;\\
r_{G}=r-r_{L};\\
v_{G}=v;\\
a=a_{fG}[0];\\
b=-(3 \cdot v_{fG}[0] + v_{G}[0]);\\
c=4 \cdot (r_{fG}[0] - r_{G}[0]);\\
tt=(-b + \sqrt{\max(b^{2} - 4 \cdot a \cdot c, 0)}) / 2.0 / a;\\
t_{go1}=\max(tt, T);\\
t_{QPG1}=0;\\
C_{QPG0}=12 \cdot (r_{fG} - r_{G}) / t_{go1}^{2} - 6 \cdot (v_{fG} + v_{G}) / t_{go1} + a_{fG};\\
C_{QPG1}=-48 \cdot (r_{fG} - r_{G}) / t_{go1}^{3} + 6 \cdot (5 \cdot v_{fG} + 3 \cdot v_{G}) / t_{go1}^{2} - 6 \cdot a_{fG} / t_{go1};\\
C_{QPG2}=36 \cdot (r_{fG} - r_{G}) / t_{go1}^{4} - 12 \cdot (2 \cdot v_{fG} + v_{G}) / t_{go1}^{3} + 6 \cdot a_{fG} / t_{go1}^{2};\\
IF2(\left| t_{gopst} - t_{go1} \right| > dt_{go})\\
t_{goNum1}=t_{goNum} + 1;\\
ELSE2\\
t_{goNum1}=0;\\
ENDIF2\\
IF3(t_{goNum1} > N_{tgo})\\
t_{goNum1}=0;\\
Flg=0;\\
ENDIF3\\
ELSE1\\
t_{go1}=t_{go} - T;\\
t_{QPG1}=t_{QPG} + T;\\
ENDIF1\\
a_{G}=C_{QPG0} + C_{QPG1} \cdot t_{QPG1} + C_{QPG2} \cdot t_{QPG1}^{2};\\
n_{QPGNum1}=n_{QPGNum} + 1;\\
IF4(n_{QPGNum1} > n)\\
n_{QPGNum1}=0;\\
ENDIF4\\
a_{jet}[0]=a_{G}[0] + g_{M};\\
a_{jet}[1]=a_{G}[1];\\
C_{0}=C_{QPG0};\\
C_{1}=C_{QPG1};\\
C_{2}=C_{QPG2};\\
$$