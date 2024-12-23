$$
Tout[i]=0；//i=0,1,2，Tout[i]为临时变量\\
Fout[i]=0；//i=0,1,2，Fout[i]为临时变量\\
dleta_m10=0；//dleta_m10临时变量\\
FOR1 j=0;j<16;j++\\
FOR2 i=0;i<3;i++\\
Tout[i]+= m_Pulse*Thruster_Torque[j][i]*TimePulse[j]*0.001；\\
Fout[i]+=m_Pulse*Thruster_Force[j][i]*TimePulse[j]*0.001；\\
END2\\
dleta_m10 =dleta_m10 + 10/(Isp*109.80665) * TimePulse[j]*0.001；\\
END1\\
{Y}_{THRi}=0；//局部变量\\
IF1 dwThrpi&1//推力器正在正喷气\\
{Y}_{THRi}=-1；\\
END1\\
IF1 dwThrmi&1//推力器正在负喷气\\
{Y}_{THRi}=1；\\
END1\\
dwThrpi=dwThrmi=0；\\
hea=h1-h2；\\
FOR1 n=0;n<16;n++\\
fer={Y}_{i}-{R}_{PRMi}；\\
dwThrpi左移一位；\\
dwThrmi左移一位；\\
IF1 fer+{Y}_{THRi}*hea>=h1//超过正槛值\\
{Y}_{THRi}=1\\
dwThrmi=dwThrmi|0x1；\\
ELSEIF1 fer+{Y}_{THRi}*hea<=-h1 //超过负槛值\\
{Y}_{THRi}=-1\\
dwThrpi=dwThrpi|0x1；\\
ELSE2\\
{Y}_{THRi}=0；\\
END2\\
{R}_{PRMi}={R}_{PRMi}+0.002*({Y}_{THRi}-{R}_{PRMi})；\\
END1\\
$$