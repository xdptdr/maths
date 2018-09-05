---
layout: post
title:  "Category theory and related domains"
date:   2018-09-05 08:00:00 +0200
---

## Category theory

[Wikipedia link][category_theory]{:target="_blank"}

A category is a labeled directed graph, whose nodes are called objects, and whose labelled directed edges are called arrows.
The arrows are also called morphisms.

The arrows can be composed associatively.
There is an identity arrow for each object.

Sets, rings and groups can be formalized in the language of category theory.

Category theory was introduced by Samuel Eilenberg and Saunders Mac Lane.
They defined the concepts of categories, functors, and natural transformations
They did it in 1942-45.
They were studying algebraic topology.
The goal was to understand the processes that preserve mathematical structure.

Category theory has practical applications in programming language theory.
The usage of monads in functional programming uses category theory.

Category theory can be used as an axiomatic foundation for mathematics.

In the categories of sets, the objects are sets and the arrows are the functions from one set to another.

In theoretical computer science, there is the category of types and the category of database schemas.

In mathematical physics, there is the category of vector spaces.

In linear algebra, there is the categories of matrices.

Robert Rosen's metabolism-repair model of autonomous living organisms uses category theory.

In the category of groups, the objects are groups and the arrows are group homomorphisms.

In topology, in the category of topological spaces, the objects are topological spaces and the arrows are continuous maps.

In manifold theory, the arrows are smooth functions.

In the category of homotopies between pointed topological spaces, the arrows are not structure preserving set functions.

The theory of allegories replaces functions with relations.

In the category of categories, the objects are categories and the arrows are functors.

Diagram chasing is a visual method of arguing with abstract arrows joined in diagrams.

Functors can dfined categorical diagrams and sequences.

A functor associates to every object of one category an object from another category, and to every morphism of one category a morphism from another category.

The idea of the category of categories first surfaced in algebraic topology.

Some topological questions can be translated into algebraic questions.

The fundamental group of a topological space can be expressed as functors to the category of groupoids.

The fundamental groupoid of a topological space can be expressed as functors to the category of groupoids.

Some diagrammatic or sequential constructions are often naturally related.

Natural transformations map functors to other functors.

An arrow between two functors is a natural transformation if it satisfies naturality or commutativity conditions. $$
\DeclareMathOperator{\ob}{ob}
\DeclareMathOperator{\hom}{hom}
\DeclareMathOperator{\mor}{mor}
$$

Let $$C$$ be a category. Its objects are denoted $$\ob(C)$$ and its arrows are denoted $$\hom(C)$$.

For $$a\in C$$ and $$b\in C$$, $$\hom(a,b)$$ denotes the arrows from $$a$$ to $$b$$. They can also be denoted $$\hom_C(a,b)$$, $$\mor(a,b)$$ or $$C(a,b)$$

A category theory also has a composition operation $$\circ$$ which is such that for $$a\in\ob(C)$$, $$a\in\ob(C)$$, $$c\in\ob(C)$$, $$f\in\hom(a,b)$$ and $$g\in\hom(b,c)$$,

$$g\circ f\in\hom(a,c)$$

The composition operation is associative and for each $$a\in\ob(C)$$, there is a unique $$1_a\in\hom(a,a)$$ which is such that for every $$b\in C$$ and $$f\in\hom(a,b)$$,

$$1_b\circ f=f=f\circ 1_a$$

Relation among arrows are often depicted using commutative diagrams.

Special morphisms include:
* monomorphisms: $$f\circ g_1=f\circ g_2\Rightarrow g_1=g_2$$
* epimorphisms: $$g_1\circ f=g_2\circ f\Rightarrow g_1=g_2$$
* isomorphisms: There is $$g$$ such that $$f\circ g=1_b$$ and $$g\circ g=1_a$$
* endomorphisms: These are those which belong ot $$\hom(a,a)$$
* automorphisms: These are the endormorphisms which are also isomorphisms
* retractions: If there is $$g$$ such that $$f\circ g=1_b$$
* sections: If there is $$g$$ such that $$g\circ f=1_a$$

Retractions are a subset of the epimorphisms.

Sections are a subset of the monomorphisms.

Isomorphisms are epimorphisms which are also sections.

Isomorphisms are monomorphisms which are also retractions.

Functors are arrows in the category of (small) categories.

Let $$C$$ and $$D$$ be categories.

A functor $$F:C\to D$$ from $$C$$ to $$D$$ is such that
* For each $$x\in\ob(C)$$, $$F(x)\in\ob(D)$$
* Covariance : for each $$a\in\ob(C)$$ and $$b\in\ob(C)$$ and $$f\in\hom_C(a,b)$$,

$$F(f)\in\hom_D(F(a),F(b))$$

* Contravariance : for each $$a\in\ob(C)$$ and $$b\in\ob(C)$$ and $$f\in\hom_C(a,b)$$,

$$F(f)\in\hom_D(F(b),F(a))$$

* For each $$x\in\ob(C)$$, $$F(1_X)=1_{F(X)}$$
* For $$x\in\ob(C)$$, $$y\in\ob(C)$$, $$z\in\ob(C)$$, $$f\in\hom_C(x,y)$$, $$g\in\hom_C(y,z)$$

$$F(g\circ f)=F(g)\circ F(f)$$

A functor must be either covariant or contravariant.


A contravariant functor acts as a covariant functor from the opposite category $$C^{\mathrm{op}}$$ to $$D$$

A natural transformation is a relation between two functors.

Functors describe natural constructions.

Natural transformations describe natural homomorphisms.

The fact that two constructions (functors) describe the same result is expressed by a natural isomorphism between the two functors.

Let $$F$$ and $$G$$ be covariant functors between two categories $$C$$ and $$D$$, and $$\eta$$ be a natural transformation from $$F$$ to $$G$$. $$\eta$$ is such that:

* For each $$X\in\ob(C)$$, $$\eta_X\in\hom_D(F(X),G(X))$$ and for every $$Y\in\ob(C)$$ and $$f\in\hom_C(X,Y)$$,

$$\eta_Y\circ F(f)=G(f)\circ\eta_X$$

I.e computing in the world of $$F$$ then transforming to the world of $$G$$ is the same as transforming to the world of $$G$$ then computing in the world of $$G$$.

Two functors $$F:C\to D$$ and $$G:C\to D$$ are naturally isomorphic if there is a natural tranformation $$\eta:F\to G$$ such that for all $$x\in\ob(C)$$, $$\eta_x$$ is an isomorphism.

Categories include sets, groups and topologies.

Most categories include special objects, and the challenge is to define these special objects using only the concepts of category theory.

These characterizations define universal properties, which can be applied to any categories.

The concepts of limits and colimits are central for the definition of universal properties.

Two categories are equivalent if they are essentially the same.


Let $$C$$ and $$D$$ be categories. The functor category $D^C$ is the category whose objects are the functros from $$C$$ to $$D$$ and the arrows are the natural transformations of these functors.

The Yodena lemma describes reprentable functors in functor categories.

For every statement true in a category $$C$$, its dual is true in the dual category $$C^\mathrm{op}$$

A functor can be left or right adjoint to another functor that maps in the opposite direction.

A 2-category is a category with objects, morphisms, and morphisms between morphisms.

This idea can be generalized to $$n$$-categories, and even $$\omega$$-categories.

A monoidal category has only one object.

Higher-dimensional categories require exchange laws to hold.

Bicategories are a weaker notion of 2-category.

Higher-dimensional categories are part of higher-dimensional algebra.

In 1942-45, Samuel Eilenberg and Saunders Mac Lane introduced categories, functors, and natural transformations as part of their work in algebraic topology.

This allowed the transition from geometric homology to axiomatic homology theory.

The goal was to understand natural transformations.

Emmy Noether worked on formalizing abstract processes, and proposed with Mac Lane an axiomatic formalization of the relation between structures and the processes that preserve them.

The ideas underlying category theory were current in the 1930s in Poland.

Subsequent developments were powered by
* computational needs of homological algebra
* axiomatic needs of algebraic geometry

General category theory came later.

General category theory extends universal algebra.

General category theory has features allowing semantic flexibility and higher-order logic.

Topoi are categories which can serve as an alternative to axiomatic set theory as a foundation of mathematics.

Current work in topoi as a foundation of mathematics aims at justifying constructive mathematics.

Topos theory is a form of abstract sheaf theory.

Topos theory leads to pointless topology.

Categorical logic is based on type theory for intuitionistic logics.

Categorical logic has applications in functional programming and domain theory.

A cartesian closed category is taken as a non-syntactic description of a lambda calculus.

John Baez has a shown a link between Feynman diagrams and monoidal categories.

Topos theory has been applied to mathematical music theory by Guerino Mazzola.

------

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

-----


[category_theory]: https://en.wikipedia.org/wiki/Category_theory
[domain_theory]: https://en.wikipedia.org/wiki/Domain_theory
