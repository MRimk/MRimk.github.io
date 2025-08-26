---
name: Localizing Traffic Differentiation Using TCP BBR
year: 2024
type: Master's Semester Project
image: /images/bbr.png
pdf: /pdfs/Localizing_Traffic_Differentiation_with_TCP_BBR.pdf
link: https://github.com/nal-epfl/diff-localization-bbr
---

_This project was done with NAL lab EPFL under supervision of Zeinab Shmeis._

**Abstract**

Transparency is important. Without knowledge of an ISP's TD policies, users lack the information necessary to make informed choices when selecting an internet service provider.

To guarantee transparency, Shmeis et al. proposed a tool (WeHeY) to localize traffic differentiation to a particular ISP. In their approach, they test if the loss time-series observed by two flows sent simultaneously to the same destination is correlated. If it is, then the two flows must have traversed the same bottleneck queue inside the ISP's network. Hence, that ISP deplays throttling.

Up till now, WeHeY was proven to work well with UDP traffic and TCP traffic that uses TCP Cubic as the congestion control algorithm but not TCP BBR.
WeHeY was designed with TCP Cubic because it is the most used by systems today; however, people are transitioning more to BBR because it makes better use of bandwidth and is less aggressive. Hence, we think it is valuable to evaluate \wehey's performance under BBR as well. While the two are designed to handle network congestion, they identify and react to congestion differently.

The goal of this project is to evaluate and improve the current localization method with TCP BBR. First, we will compare the performance metrics (e.g., loss and delay) of TCP flows when using BBR v.s. Cubic. Then, we will show how loss trend correlation is affected when using TCP BBR; we study the correlation under two scenarios: (1) traffic traverses a shared policer, and (2) traffic traverses separate policers. Lastly, we will look if there is a better metric than loss to localize differentiation with TCP BBR.
