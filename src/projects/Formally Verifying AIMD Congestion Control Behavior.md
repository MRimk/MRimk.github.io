---
name: Formally Verifying AIMD Congestion Control Behavior
year: 2025
type: Course Project
image: /images/ccac_path.png
pdf: /pdfs/Formally_Verifying_AIMD_CC_Behavior.pdf
link: https://gitlab.epfl.ch/decastel/aimd-coq
---

_This project was done for EPFL course CS-428 taught by Clément Pit-Claudel and Aurèle Barrière. It was completed together with Julien de Castelnau._

**Abstract**

Congestion control algorithms (CCAs) are a mechanism within TCP to regulate data transmission, with the primary goal of maximizing usable bandwidth and avoiding _congestive collapse_ due to packet delay/loss. Realizing and verifying generally effective CCAs is challenging, in large part due to the limited ability to simulate the wide range of conditions that can occur in real-world networks. In light of this, Arun et al. have introduced a formalization for CCAs, using SMT solvers to model properties such as steady-state packet loss or worst-case link utilization for a number of popular CCAs. However, they also make a number of claims on the properties of specific CCAs as well as of the model itself that are not machine checked, either being proven on paper or only conjectured to be true. In our project, we sought to bridge these gaps by mechanizing these proofs in a proof assistant. We focused in particular on verifying claims about Additive Increase/Multiplicative Decrease (AIMD), a classic congestion control scheme that still remains in use today. To this end, we successfully mechanized a number of properties/proofs from the paper. In addition, we identified an issue in the on-paper proof for a key property of the assumed network model, our counterexample for which we have also mechanized.
