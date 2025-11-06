---
title: "A hybrid finite difference-finite element method to incorporate topography for 2D direct current (DC) resistivity modeling"
collection: publications
category: manuscripts
permalink: /publication/2010-Vachiratienchai
excerpt: 'This paper is about combine FDM and FEM technique to incorporate topography. KEY: Finite Element Aproximation, Poisson Equation, Mesh Generatioin, Memory consideratioin'
date: 2010-10-01
venue: 'Physics of the Earth and Planetary Interiors'
slidesurl: 'https://songkhun.github.io/files/slides2.pdf'
paperurl: 'https://doi.org/10.1016/j.pepi.2010.09.008'
citation: 'C. Vachiratienchai, S. Boonchaisuk, W. Siripunvaraporn, (2010). &quot;A hybrid finite difference-finite element method to incorporate topography for 2D direct current (DC) resistivity modeling
.&quot; <i>Physics of the Earth and Planetary Interiors</i>. 183(3-4):426-434.'
---

Finite difference (FD) and finite element (FE) approximations are two commonly used methods for solving Poisson's equation from a known electrical resistivity model. FD discretizes the model with rectangular blocks, while FE discretizes it with right triangular elements. The advantage of FD is that it requires less computational time and memory storage, while the advantage of FE is its ability to handle topography. Here we introduce a hybrid FD–FE algorithm which requires less computational resources than a typical FE algorithm but can still handle topography. The model is first discretized as FD rectangular blocks. Some of these FD rectangular blocks beneath topographical features are replaced with FE right triangular elements. A system of equations for the hybrid method is then formed according to the types of discretization used. The system is a linear combination of the FD and FE equations. All three methods are applied to several models with and without topography. Comparisons in terms of computational time, memory and accuracy show that, as expected, FD is a better choice when modeling without topography, whereas FE is more practical when modeling with topography. However, our developed hybrid FD–FE method is efficient in both circumstances. Without topography, it behaves exactly like FD. With topography, it is as accurate as FE but its speed and memory usage are slightly larger than FD. In addition, we describe a scheme for automatic mesh generation. This scheme has led to another variant method, a mixed grid hybrid method. Our hybrid scheme and the automatic grid generation can be used for slopes of up to 75°. This hybrid method can be further extended and implemented for 3D DC resistivity modeling for more efficient computation.
