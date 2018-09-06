---
layout: post
title:  "Fixed-point combinator"
date:   2018-09-06 08:00:00 +0200
---

[Wikipedia link][wplink]{:target="_blank"}

$$\DeclareMathOperator{\fix}{fix}$$Fixed point combinators occurs in combinatory logic in computer science.

A fixed point combinator is a higher-order function.

For any function $$f$$, if $$f$$ has an attractive fixed point, the fixed-point combinator returns the fixed-point of $$f$$.

The output of a fixed point combinator is a solution to the equations $$x=f\,x$$.

If $$\fix$$ is a fixed-point combinator, then for any function $$f$$, it satisfies the equation $$\fix f=f(\fix f)$$.

In lambda calculus, the fixed-point combinator $$Y$$ is defined as

$$Y=\lambda f.(\lambda x.f(x\,x))(\lambda x.f(x\,x))$$

The Y combinator can be used to formally defined recursive functions in functional programming.

Curry's paradox states that untyped lambda calculus is unsound as a deductive system, because the Y combinator allows an anonymous expression to represent zero or many values, which is inconsistent with mathematical logic.

The Y combinator usually does not terminate when applied to a function of one variable.

The Y combinator can be used to implement recursion with functions of two variables, where the second variable can be used as a counter, so that the resulting function behaves like classical loops in imperative programming languages.

In lambda calculus, recursion can only be achieved by passing functions as parameters.

## Overview

The fixed point combinator is used in general mathematics, untyped lambda calculus, typed lambda caculus, functional programming and imperative programming.

When the function refers to its parameters ins such way that other calls to the functions are invoked, the computation may never get started.

The type return by the combinator is the type returned by the function being fixed.

In untyped lambda calculus, the function can be expressed using Church encoding, in which case some lambda terms are considered as values defining functions, and performing the computation with beta-reductions yields a lambda term which is the fixed point value.

Mathematicians and programmers interprets fixed-point combinators differently, because mathematicians see expressing satisfying the fixed point equation, while programmers regards it as a way of implementing recursion.

*Values and domains*

This expression seems important but makes no sense to me.

$$f\,x=\frac{-1}{x}\land Y\,f=x$$

Beta-reduction of the lambda terms may loop forever, never reaching a normal form.

*Function versus implementation*

Mathematics define functions according to their extensional properties, which means that two functions are equal when they compute the same values.

In programming, function equality is an intensional property, and two different functions (implementations) will be considered as equal in mathematics.

A lambda calulus function is an implementation of a mathematical function.

In lambda calculus, there are several combinators which satisfy the fixed-point equation.

*What is a combinator*

Combinator logic is a higher-order function theory.

A combinator is a closed lambda expression.

Combinators may be combined in a number of interesting ways.

## Usage


A mathematical definition of the $$Y$$ combinator is

$$Y\,f=f(Y\,f)$$

Applied to one-variable, this yields

$$Y\,f\,x=f(Y\,f)\,x$$

*The factorial function*

$$F f n = (\mathrm{IsZero}\,n)\,1\,(\mathrm{multiply}\,n\,(f(\mathrm{pred}\,n)))$$

Then 

$$\fix F\,n = F\,(\fix F)\, n=(\mathrm{IsZero}\,n)\,1\,(\mathrm{multiply}\,n\,((\fix F)\,(\mathrm{pred}\,n)))$$

Define $$\mathrm{fact}=\fix F$$ and

$$\mathrm{fact}\,n = F\,(\fix F)\, n=(\mathrm{IsZero}\,n)\,1\,(\mathrm{multiply}\,n\,(\mathrm{fact}\,(\mathrm{pred}\,n)))$$

## Fixed point combinators in lambda calculus

Haskell B. Curry defined the $$Y$$ combinator as

$$Y=\lambda f.(\lambda x.f(x\, x))\,(\lambda x.f(x\, x))$$

Beta reduction gives:

$${}$$$$Y\,g=\lambda f.(\lambda x.f(x\, x))\,(\lambda x.f(x\, x))\,g$$<br/>
$${}$$$$Y\,g=(\lambda x.g(x\, x))\,(\lambda x.g(x\, x))$$<br/>
$${}$$$$Y\,g=g((\lambda x.g(x\, x))\,(\lambda x.g(x\, x)))$$<br/>
$${}$$$$Y\,g=g(Y\,g)$$

*Equivalent definition of a fixed-point combinator*

$${}$$$$x=f\, x\land y\,f=x$$<br/>
$${}$$$$\mathrm{let}\,x=f\,x\,\mathrm{in}\,y\,f=x$$
$${}$$$$y\,f=\mathrm{let}\,x=f\,x\,\mathrm{in}\,x$$
$${}$$$$y=\lambda f.\mathrm{let}\,x=f\,x\mathrm{in}x$$

In the previous, the following relations have been used:

$${}$$$$f\,x=y\Leftrightarrow f=\lambda x.y$$<br/>
$${}$$$$(\exists x E\land F)\Leftrightarrow\mathrm{let}\,x\,\colon\,E\,\mathrm{in}\,F$$<br/>
$${}$$$$x\notin\mathrm{FV}(E)\land x\in\mathrm{FV}(F)\rightarrow\mathrm{let}\,x\,\colon\,G\,\mathrm{in}\,E\,F=E(\mathrm{let}\,x\,\colon\,G\,\mathrm{in}\,F)$$<br/>

It seems that the language and the symbolism in this section come from various different formalisms.

*Derivation of the Y combinator*

Try to make sense of the following.

$${}$$$$\lambda f.\mathrm{let}\,x=f\,x\,\mathrm{in}\,x$$<br/>
$${}$$$$\lambda f.\mathrm{let}\,y\,z=f(y\,z)\,\mathrm{in}\,y\,z$$<br/>
$${}$$$$\lambda f.\mathrm{let}\,y\,z=f(y\,z)\,\mathrm{in}\,y\,y$$<br/>
$${}$$$$\lambda f.\mathrm{let}\,y\,z=f(z\,z)\,\mathrm{in}\,y\,y$$<br/>
$${}$$$$f\,x=y\Leftrightarrow f=\lambda x.y$$<br/>
$${}$$$$\lambda f.\mathrm{let}\,y=\lambda z.f(z z)\,\mathrm{in}\,y\,y$$<br/>
$${}$$$$n\notin\mathrm{FV}(E)\rightarrow(\mathrm{let}\,n=E\,\mathrm{in}\,L\Leftrightarrow(\lambda n.L)\,E)$$<br/>
$${}$$$$\lambda f.(\lambda y.y\,y)\,(\lambda z.f\,(z\,z))$$<br/>
$${}$$$$\lambda f.(\lambda z.f(z\,z))\,(\lambda z.f\,(z\,z))$$<br/>

*Other fixed-point combinators*

The set of fixed-point combinators of untyped lambda calculus is recursively enumerable.

In SKI-calculus: $$Y=S(K(SII))(S(S(KS)K)(K(SII)))$$

John Tromp's SK-calculus: $$Y^\prime=SSK(S(K(SS(S(SSK))))K)$$

$${}$$$$Y'=(\lambda x.\lambda y.xyx)(\lambda y.\lambda x.y(xyx))$$

$${}$$$$X=\lambda f.(\lambda x.xx)(\lambda x.f(xx))$$

Turing fixed-point combinator $$\Theta=(\lambda x.\lambda y.(y(xxy)))(\lambda x.\lambda y.(y(xxy)))$$

$${}$$$$\Theta_v=(\lambda x.\lambda y.(y(\lambda z.xxyz)))(\lambda x.\lambda y.(y(\lambda z.xxyz)))$$

For mutual recursion, there is a poyvariadic fix-point combinator which is denoted $$Y^\ast$$

*Strict fixed point combinator*

The Z combinator work in strict eager languages, where applicative evaluatoin order is applied.

$$Zgv=g(Zg)v$$

$$Z=\lambda f.(\lambda x.f(\lambda v.xxv))(\lambda x.f(\lambda v.xxv))$$

*Non-standard fixed-point combinators*

Some terms in untyped lambda calculus have the same Böhm tree as fixed point combinator, i.e. they have the same infinite extensions.

Some non-standard fixed-point combinators fail to satisfy the fixed-point equation.

Example: $$N=BM(B(BM)B)$$ with $$B=\lambda x,y,z.x(yz)$$ and $$M=\lambda x.xx$$

The set of non-standard fixed-point combinators is not recursively enumerable.

## Implementation in other languages

The structure of the Y combinator is contrained by the limitations of lambda calculus.

*Lazy functional implementation*

Haskell allow the definition of fixed points of data constructors with lazy datatypes.

{% highlight haskell %}
fix :: (a -> a) -> a
fix f = f (fix f)
{% endhighlight %}

*Strict functional implementation*

{% highlight haskell %}
let rec fix f x = f (fix f) x
{% endhighlight %}

*Imperative language implementation*

{% highlight cpp %}
template <typename R, typename D> class fixer {
public:
  R fix(D x) { return f(x); }
private:
  virtual R f(D) = 0;
};

class fact : public fixer<long,long> {
  virtual long f(long x) {
    if(x==0) { return 1; }
    return x * fix(x-1);
  }
};
long result = fact().fix(5);
{% endhighlight %}

## Typing

In polymorphic lambda calculus such as System F, a polymorphic fixed-point combinator has type $$\forall a.(a\to a)\to a$$ with $$a$$ a type variable.

An simply typed lambda calculus, fixed-point combinators cannot be typed, and something can be done when extending the calculus with recursive types.

Interesting examples in Haskell and Ocaml omitted.


[wplink]: https://en.wikipedia.org/wiki/Fixed-point_combinator


