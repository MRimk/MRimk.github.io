---
name: Inference of Traffic Policing Rate
year: 2025
type: Master's Semester Project
image: /images/xtopo.png
pdf: /pdfs/Inference_Of_Traffic_Policing_Rate.pdf
link: https://github.com/MRimk/Traffic-Policing-Inference-Simulation
---

_This project was done with NAL lab EPFL under supervision of Mahdi Hosseini and Pavlos Nikolopoulos._

**Abstract**

Traffic differentiation (TD) is when ISPs apply different traffic management techniques to incoming traffic, based on its source and/or content. ISPs may prioritize certain traffic by sending them through faster-dedicated routes, or they may throttle them using shapers and policers. ISPs may deploy TD practices with good intentions, for example, to prevent video traffic from congesting their network; or they may do so to serve a business need.

Nonetheless, the user, who either supects that the traffic might be policed, or knows their traffic is being policed using Wehe application Wehe, might want to use the full capacity of the throttled rate. Using the maximum capacity of a known link rate is a problem that can be solved by configuring TCP receive window, adjusting TCP congestion control mechanism or asking the sender to send at a given rate. However, we are going focus on another part of this issue - inferring the bottleneck rate from the recorded network traffic flow.

The goal of this project is to investigate the accuracy and reliability of various policing rate estimation methods that are already created and used, and to create our own methods. We focus on both sender-side estimation and receiver-side estimation, as there can be an advantage of knowing the bottleneck rate for both. On both sides we show how different token bucket configurations affect the estimation accuracy by keeping the rate the same, and varying the burst length and queue size of the policer. In addition to that, we test two different network topologies: simple sender and receiver, and cross traffic topology with background traffic.
