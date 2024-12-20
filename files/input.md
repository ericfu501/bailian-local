根据dwThrs[16]，计算每个推力器的喷气脉宽TimePulse[16]；//TimePulse[16]的单位：ms
Tout[i]=0；//i=0,1,2，Tout[i]为临时变量
Fout[i]=0；//i=0,1,2，Fout[i]为临时变量
dleta_m10=0；//dleta_m10临时变量
FOR1 j=0;j<16;j++
FOR2 i=0;i<3;i++
$$Tout[i]+= m_PulseThruster_Torque[j][i] TimePulse[j]0.001；$$
$$Fout[i]+= m_PulseThruster_Force[j][i]* TimePulse[j]0.001；$$
END2
$$dleta_m10 = dleta_m10 + 10/(Isp109.80665) TimePulse[j]0.001；$$
END1
IF1 bMode=AFM andbFiring＝TRUE
dleta_m10=dleta_m10+490/(Isp4909.80665)∆ts；
END1
mSat=mSat-dleta_m10；//计算10N产生的质量消耗
IF1 mSat<2500or mSat>5600
mSat=2500.0；
END1
TjetX=Tout[0]/∆ts；TjetY=Tout[1]/∆ts；TjetZ=Tout[2]/∆ts；
FjetX=Fout[0]/∆ts；FjetY=Fout[1]/∆ts；FjetZ=Fout[2]/∆ts；
IF1 fabs(TjetX)>50.0 or fabs(TjetY)>50.0 or fabs(TjetZ)>50.0
TjetX=0.0；TjetY=0.0；TjetZ=0.0；
END1
IF1 fabs(FjetX)>50.0 or fabs(FjetY)>50.0 or fabs(FjetZ)>600.0
FjetX=0.0；FjetY=0.0；FjetZ=0.0；
END1
$${m_Orb.dV}{jetx}={m_Orb.dV}{jetx}+FjetX/mSat∆ts/1000；$$//mSat卫星质量
$${m_Orb.dV}{jety}={m_Orb.dV}{jety}+FjetY/mSat∆ts/1000；$$
$${m_Orb.dV}{jetz}={m_Orb.dV}{jetz}+FjetZ/mSat*∆ts/1000；$$