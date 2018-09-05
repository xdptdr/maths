---
layout: post
title:  "Domain theory"
date:   2018-09-05 08:00:00 +0200
---

## Domain theory

[Wikipedia link][domain_theory]{:target="_blank"}

Domain theory focuses on partially ordered sets with additional properties.

Partially ordered sets are also called posets.

The posets with additional properties are called domains.

Domain theory is a branch of order theory.

Domain theory is used in computer science to specify denotational semantics of functional programming languages.

Domain theory formalizes the concepts of approximation and convergence, and has close relations to topology.

Metric spaces are an alternative approach to denotational semantics.

The study of domains was initiated by Dana Scott in the late 1960s.

The goal was a denotational semantics of the lambda calculus.

Lambda calculus allows the definition of functions, functions which take functions as input and fixed-point combinators.

The $$Y$$ combinator is the most well known fixed-point combinator.

Fixed-point combinators are such that for any function $$f$$, $$f(Y(f))=Y(f)$$.

To formulate a denotational semantics for lamda calculus, the usual steps involve constructing a model for the lamda calculus, which links the syntactic system to the notational system.

An example of such a model is the combinator calculus.

In the combinator calculus, the elements are functions from functions to functions.

For the elements to be of arbitrary domain and range, there could be only partial functions.

Scott formalizes the notion of incomplete information to represent computations that have not yet returned a result.

To each domain of computation, an undefined output is added which represents the result of a computation that never ends.

The domain of computation is equipped with an ordering relation in which the undefined result is the least element.

In lambda calculus, the set of functions which have least fixed points, together with an appropriate ordering, is a domain in the sense of the domain theory.

These domains contain their own function spaces, i.e. all the functions can be applied to themselves.

The domains of computation are partially ordered, and represents in this way a hierarchy of information.

Higher elements are more specific and contain more information.

Lower elements represent incomplete knowledge or intermediate results.

Computation is modeled by applying monotone functions on elements of the domain to refine a result.

Reaching a fixed point = finishing the computation.

Fixed points of monotone functions can be guaranteed to exist, and, with additional restrictions, they can be approximated from below.

Domains often do not have a greatest element.

A directed subset is a non-empty subset of the order in which any two elements have an upper bound which is also in the subset.

Directed subsets can be viewed as consistent specifications.

Directed subsets can be compared with the notion of convergent sequence in analysis, where each element is more specific than the preceding one.

In the theory of metric spaces, sequences play a role that is in many aspects analogous to the role of directed sets in domain theory.

The limit of a directed set is its least upper bound.

There are directed set with no least upper bound.

Directed-complete partial orders are orders in which all directed set have a least upper bound, i.e. they are such that all consistent specifications converge.

There is a least element, which represents the state of no information.

Scott-continous functions are monotonic functions maps directed sets to directed sets and preserve directed suprema.

Compact elements cannot be obtained as a limit of a directed set in which they already occur.

An algebraic poset has a base of compact elements.

An $$\omega$$-continous poset has a countable base.

An  $$\omega$$-algebraic order has a countable base of finite elements.

A flat domain is made of incomparable elements with a bottom element which is smaller than all other elements.

Domains of special interest are:
* continuous posets
* algebraic posets
* continuous cpos
* algebraic cpos
* continuous lattices
* algebraic lattices
* Scott domains
* SFP-domains
* L-domains
* bifinite domains

A poset is a dcpo iff every chain has a supremum.

Kleene fixed-point theorem : Continuous functions have a least fixed point, which is the least upper bound of all finite iterations of $$f$$ on the least element.

[domain_theory]: https://en.wikipedia.org/wiki/Domain_theory
