from scipy.stats import norm, expon, laplace
import argparse
import numpy as np 
import matplotlib.pyplot as plt

parser = argparse.ArgumentParser(description='statistics for argparse')  # examplify running by py stats_norm.py -i f1.jpg -m 2 -g 3 -s -6 -e 3 -xt TOY -yt SHOP
parser.add_argument('--filepath', '-i', help='filepath属性，必要参数', required=True)  # 必须是文件名 图片或文档
parser.add_argument('--output', '-o',  help='file_out 输出文件属性，非必要参数', default='out_stat.jpg') #必须图片名
parser.add_argument('--mu', '-m', help='mu属性，非必要参数', default=0)  # 均值
parser.add_argument('--sigma', '-g',  help='sigma属性，非必要参数', default=1)  # 标准差
parser.add_argument('--start', '-s',  help='start_point属性，非必要参数', default=-5) # 起点
parser.add_argument('--end', '-e',  help='end_point属性，非必要参数', default=5) # 终点
parser.add_argument('--xtitle', '-xt',  help='x_title属性，非必要参数', default='X AXIS') # X轴标题
parser.add_argument('--ytitle', '-yt',  help='y_title属性，非必要参数', default='Y AXIS') # Y轴标题
args = parser.parse_args()

mu = int(args.mu)  #均值
sigma = int(args.sigma)  #标准差
start = int(args.start)  #起点
end = int(args.end)  #终点
x_title = args.xtitle
y_title = args.ytitle
output = args.output

# mu = 0  
# sigma = 1  
x = np.arange(start, end, 0.1) # form -5 to 5, increase by 0.1
y = norm.pdf (x, mu, sigma)  # x is horizontal ordinate, norm could be rid by laplace, f, t, gamma, poisson, and as notice below.
#y = laplace.pdf (x, mu, sigma)
plt.plot (x, y)
plt.xlabel(x_title)
plt.ylabel(y_title)

plt.savefig(output)
# plt.show()


# stats连续型随机变量的公共方法
# 名称	备注
# rvs	产生服从指定分布的随机数
# pdf	概率密度函数
# cdf	累计分布函数
# sf	残存函数（1-CDF）
# ppf	分位点函数（CDF的逆）
# isf	逆残存函数（sf的逆）
# fit	对一组随机取样进行拟合，最大似然估计方法找出最适合取样数据的概率密度函数系数。

# 可能用到的分布对照表
# 名称	含义
# beta	beta分布
# f	F分布
# gamma	gam分布
# poisson	泊松分布
# hypergeom	超几何分布
# lognorm	对数正态分布
# binom	二项分布
# uniform	均匀分布
# chi2	卡方分布
# cauchy	柯西分布
# laplace	拉普拉斯分布
# rayleigh	瑞利分布
# t	学生T分布
# norm	正态分布
# expon	指数分布