---
layout: post
title:  "Type theory"
date:   2018-09-05 08:00:00 +0200
---

[Wikipedia link][type_theory]{:target="_blank"}

A type theory is a class of formal systems.

Some type theories can serve as alternatives to set theory as a foundation of mathematics.

Type theory is used in mathematics, logic, and computer science.

In type theory, every term has a type, and operations are restricted to terms of a certain type.

Type theory is closely related to type systems in programming languages.

Type theory addresses some paradoxes in some formal logics and some rewrite systems.

The following type theories can serve as mathematical foundations:
* Alonzo Church's typed $$\lambda$$-calculus
* Per Marin-Löf's intuitionistic type theory

## History

Gottlob Frege's version of naive set theory is afflicted with Russell's paradox.

Russell proposed various theories of type to address the paradox.

By 1908, Russell had a ramified theory of types with an axiom of reducibility.

These are featured in Whitehead and Russel's Principa Mathematica, which was published between 1910 and 1913.

The idea is to create a hierarchy of types, then assign each mathematical entity to a type.

New types are built exclusively for already defined types, i.e. there are no recursive or mutually recursive types.

In 1920s, Leon Chwistek and Frank P. Ramsey propose the theory of simple types, which collapses the hierarchy of types and do not require the axiom of reducibility.

Type theory is usually used in context with a term rewrite system.

Alonzo Church's simply typed lambda calculus is such a rewrite system.

Church's theory of types helps the formal system avoid the Kleene-Rosser paradox which afflicts untyped lambda calculus.

Church's simply typed lambda calculus was referred to as higher-order logic.

Per Martin-Löf's intuitionistic type theory has been the foundation used in some areas of constructive mathematics.

And also for the proof assistant Agda.

Thierry Coquand's calculus of constructions is used by Coq and others.

Homotopy type theory is an active area of research.

## Basic concepts

Each term has a type.

There are conversion rules and reduction rule.

Functions have a special reduction rule which substitutes the arguments.

Multiple argument functiosn can be defined using currying.

## Difference from set theory

Set theory is built on top of logic, and requires a separate system like predicate logic.

In type theory, logical concepts can be encoded as types in the theory itself.

In type theory, terms belong to only one type.

Set theory encode numbers as sets, type theory encode numbers as functions using Church encoding or as inductive types.

Set theory allows the set builder notation.

Type theory is connected to constructive mathematics through the BHK interpretation, and to logic with the Curry Howard isomorphism.

Some type theories are closely connected to category theory.

## Optional features

*Normalization*

A system of type theory is strongly normalizing if reductions performed in any order reach a normal form.

If some order of redutions loop, the system is said to be weakly normalizing.

Two terms are convertible if they both reduce to another term.

Confluent and weakly normalizing systems can test if two terms are convertible.

*Dependent types*

Dependent types play a central role in intuitionistic type theory and in the design of functional programming languages such as
* Idris
* ATS
* Agda
* Epigram

*Equality types*

Equality is different from convertibility, and is often denoted propositional equality.

In intuitinstic type theory, the equality type is known as $$I$$. A term of type $$I A a b$$ is interpreted as meaning that $$a$$ is equal to $$b$$.

Although the type $$I nat 3 4$$ is well defined, there is no term of that type.

Equality starts with reflexivity : if $$x$$ is a term of type $$X$$, then there exists a term of type $$I X x x$$. More complicated equalities are created by performing reductions on one side but not on the other. In such a system, the equality type denotes that two values ar convertible by reductions. 

Inequality is usually mapped to the function that sends to the bottom type which has no values, as in the Brouwer-Heyting-Kolmogorov interpretation.

Homotopy type theory differs from intuitionistic type theory mostly by its handling of the equality type.

*Inductive types*

Inductive types are defined with a set of base types and a set of type constructors.

Certain recursive functions called on inductive types are guaranteed to terminate.

Coinductive types are infinite data types created with functions that generate the next elements.

Induction-induction declares an inductive type and a family of types that depend on the inductive type.

Induction-recursion allows the type and recursive functions operating on it to be defined at the same time.

*Universe types*

Many type theories have a universe type, which contains all other types but not itself.

The type of the universe type is often of another different universe type, leading to a hieararchy of univere types.

The hiearchy is infinite, but since statements are finite, they can only refer to a finite number of universe levels.

Type universes are tricky, and some intuitionistic type theories suffered from Girard's paradox.

*Computational component*

Many systems of type theory are also programming languages. Examples include:
* simply-typed lambda calculus
* intuitionistic type theory
* the calculus of constructions

The computation is the reductions of terms using rewriting rules.


Systems of type theory which have a well-behaved computational component have a simple connection to constructive mathematics through the BHK interpration.

Non-constructive mathematics can be introduced with operators on continuations, such as call with current continuation, buth they usually break canonicity or parametricity.

## Type theories

* Simply typed lambda calculus
* Intuitionistic type theory
* System F
* LF
* Calculus of constructions
* Automath
* ST type theory
* Combinatory logic
* Lambda cube
* Pure type system
* Homotopy type theory

## Practical impact

*Programming languages*

Static program analysis using type systems has a connection to type theory.

Agda is a programming language which uses intuitionitic type theory for its type system.

ML was developed for manipulating type theories.

ML's type system was influenced by the type theories developped with ML.

LCF as something to do with ML.

*Mathematical foundations*

Automath used type theory to encode mathematics on a computer.
Martin-Löf developped intuitionistic type theory to encode all mathematics and serve as a new foundation for mathematics.
Homotopy type theory something something.

Practitioners of category theory have some difficulties whith Zermelo-Fraenkel set theory.
Lawvere proposed the Elementary Theory of the Category of Sets (ECTS).
Homotopy theory something something.
The connections between dependent types, such as the identity type, and algebraic topoplogy (mainly homotopy) seems interesting.

*Proof assistants*

Most research is driven by proof checkers, assistants, and automated theorem provers.

LF is used by Twelf.

Type theories in higher-order logic are used by the HOL family of provers and PVS.

Intuitinistic type theory is used by Agda.

Computational type theory is used by NuPRL.

The calculus of constructions is used by Coq and Matita.

LEGO and Isabelle support multiple type theories.

Isable also supports ZFC.

Mizar only supports set theory.

*Linguistics*

Type theory is used in formal theories of semantics of natural languages, such as Montague grammar.

Categorical grammars and pregroup grammars use type constructors to define the types of words.

Natural language quantifiers, such as everybody and nobody, are typed as functions from sets of entities to truth-values.

*Social sciences*

Gregory Bateson's notions of double bind and logical level in social sciences is based on Russell's theory of types.

*Relation to category theory*

A category can be interpreted as a type theory by identifying the objects with types (and its arrows as what ?).

Cartesian closed categories correspond to the typed $$\lambda$$-calculus.

C-monoids correspond to untyped $$\lambda$$-calculus.

C-monoids are categories with products, exponentials, and a single non-terminal object.

Locally cartesian closed categories correspond to Martin-Löf type theories.

These results are part of categorical logic, which study the relationships between type theory and category theory.

[type_theory]: https://en.wikipedia.org/wiki/Type_theory


