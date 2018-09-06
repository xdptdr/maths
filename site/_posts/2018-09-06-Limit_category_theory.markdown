---
layout: post
title:  "Limit (category theory)"
date:   2018-09-06 08:00:00 +0200
---

[Wikipedia link][wplink]{:target="_blank"}

$$
\DeclareMathOperator{\ob}{ob}
\DeclareMathOperator{\hom}{hom}
$$In category theory, limits captures essential properties of universal constructions such as products, pullbacks, and inverse limits.

The dual notion of colimit generalizes disjoint unions, direct sums, coproducts, pushouts and direct limits.

Limits exist at the same level of abstraction as universal properties and adjoint functors.

## Definition

A diagram to a category $$C$$ is a functor $$F:J\to C$$, where $$J$$ is an index category.

A diagram is small when $$J$$ is small.

A diagrma is finite when $$J$$ is finite.

*Limits*

Let $$F:J\to C$$ be a diagram from $$J$$ to a category $$C$$.

A cone to $$F$$ is an object $$N\in\ob(C)$$ with a family $$\psi_X:N\to F(X)$$ of arrows indexed by $$X=\ob{J}$$ such that for every arrow $$f\in\hom_J(X,Y)$$, $$F(f)\circ\psi_X=\psi_Y$$

A limit of $$F:J\to C$$ is a cone $$(L,\varphi)$$ to $$F$$ such that for any other cone $$(N,\psi)$$ to $$F$$, there's a unique arrow $$u:N\to L$$ such that for all $$X\in\ob(J)$$, $$\varphi_X\circ u=\psi_X$$

In other words, the cone $$(N,\psi)$$ factors throught the cone $$(L,\varphi)$$ with the unique factorization $$u$$, which is called the mediating arrow.

Limits are referred to as universal cones, because they are characterized by a universal property.

A limit allows any other cone to factory through it, but is sufficiently specific that only one factorization is possible for every cone.

Limits are the terminal objects in the category of cones to $$F$$.

Some diagrams may not have a limit, but when a diagram does have a limit, it is unique up to isomorphism.

*Colimits*

A co-cone of a diagram $$F:J\to C$$ is an object $$N\in\ob(C)$$ with a family of arrows $$\psi_X\in\hom_C(F(X),N)$$ for every $$X\in\ob(J)$$ such that for every $$Y\in\ob(J)$$ and $$f\in\hom_J(X,Y)$$, $$\psi_Y\circ F(f)=\psi_X$$

A colimit of $$F:J\to C$$ is a co-cone $$(L,\varphi)$$ of $$F$$ such that for every other co-cone $$(N,\psi)$$ of $$F$$, there is a unique $$u\in\hom_C(L,N)$$ such that $$u\circ\phi_X=\psi_X$$ for all $$X\in\ob(J)$$.

Colimits are universal co-cones, which are the inital objects of the category of co-cones from $$F$$, and are unique up to isomorphism.

## Examples

*Limits*

If J is the empty category, there is only one diagram of shape J. A cone to the empty diagram is essentially just an object from $$C$$. The limit of $$F$$ is an object that is uniquely factored through by every other object. Such an object is a terminal object.

If J is a discrete category, then the diagram is a family of objects of $$C$$, and the limit is called the product of these objects. The cone contains the projections of the product. If the diagram is to a constant functor, the limit is the $$J$$th power.

If $$J$$ has two objects $$a$$ and $$b$$ and two arrows $$a\to b$$ and $$b\to a$$, the limit is the equalizer of two parallel arrows in $$C$$.

If one of the arrow is the zero morphism, the equalizer is a kernel.

Let $$F$$ be a digram which picks out three objects $$X$$, $$Y$$ and $$Z$$ in $$C$$, with morphisms $$f:X\to Z$$ and $$g:Y\to Z$$. Then the limit of F is a pullback or a fiber product.

If $$J$$ is a directed set and $$F:J^\mathrm{op}\to C$$ is a diagram, the limit is the inverse limit or projective limit.

If $J$ has an initial object $$i$$, the limit is an object isomorphic to $$F(i)$$

Limits of functions are special case of limits of filters.

Let $$X$$ be a topological space $$X$$. $$F$$ the set of filters on $$X$$, $$x\in X$$ a point, $$V(x)\in F$$ the neighborhood filter of $$x$$, $$A\in F$$ a particular filter and $$F_{x,A}=\{G\in F\mid V(x)\cup A\subset G\}$$ the set of filters finer than $$A$$ and that converge to $$x$$.

Make $$F$$ a small and thin category by adding an arrow $$A\to B$$ if and only if $$A\subseteq B$$.

Then injection $$I_{x,A}:F_{x,A}\to F$$ is a functor and the following equivalence holds:

$$x$$ is a topological limit of $$A$$ iff $$A$$ is a categorical limit of $$I_{x,A}$$.

*Colimits*

Initial objects are colimits of empty diagrams.

Coproducts are colimits of diagrams indexed by discrete categories.

Copowers are colimits of constant diagrams from discrete categories.

Coequalizers are colimits of parallel pairs of morphisms.

Cokernels are coequalizers of a morphism and a parallel zero morphism.

Pushouts are colimits of a pair of morphism with common domain.

Direct limits are colimits of diagrams indexed by directed sets.

## Properties

*Existence of limits*

TODO...






[wplink]: https://en.wikipedia.org/wiki/Limit_(category_theory)


