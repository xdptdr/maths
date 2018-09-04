---
layout: post
title:  "Trigonometric functions"
date:   2018-08-27 11:08:46 +0200
categories: jekyll update
---

Hi guys.

In this article, we present the six usual trigonometric functions, their derivatives, and the derivatives of their inverse.

$$
\DeclareMathOperator{\arccot}{arccot}
\DeclareMathOperator{\arcsec}{arcsec}
\DeclareMathOperator{\arccsc}{arccsc}
\DeclareMathOperator{\arccsch}{arccsch}
\sinh x
$$

$$\arccsch x$$


Sine and cosine

$$\sin x$$

$$\cos x$$

Tangent

$$\tan x=\frac{\sin x}\cos{x}$$

Cotangent

$$\cot x=\frac{1}{\tan x}$$

Secant

$$\sec x=\frac{1}{\cos x}$$

Cosecant

$$\csc x=\frac{1}{\sin x}$$

## Derivatives

### Derivative of the sine

$$\sin^\prime x=\lim_{h\to0}\frac{\sin(x+h)-\sin x}{h}$$

Using $$\sin(a+b)=\sin a\cos b+\cos a\sin b$$, we get

$$\sin^\prime x=\lim_{h\to0}\frac{\sin x\cos h+\cos x\sin h-\sin x}{h}$$

Then rearranging

$$\sin^\prime x=\sin x\left(\lim_{h\to0}\frac{\cos h-1}{h}\right)+\cos x\left(\lim_{h\to0}\frac{\sin h}{h}\right)$$

Using $$\displaystyle\lim_{x\to0}\frac{\sin x}{x}=1$$ and $$\displaystyle\lim_{x\to0}\frac{\cos x-1}{x}=0$$, we get

$$\fbox{$\sin^\prime x=\cos x$}$$

### Derivative of the cosine

To compute the derivative of the cosine, we use the identity $$\cos^2 x+\sin^2 x=1$$

$$\cos^\prime x=\frac{d\sqrt{1-\sin^2 x}}{dx}$$

This is only valid for those $$x$$ for which $$\cos x$$ is positive. Applying the chain rule, we get

$$\cos^\prime x=\frac{1}{2\sqrt{1-\sin^2 x}}\left(-2\sin x\right)\cos x$$

Simplifying, we get

$$\fbox{$\cos^\prime x=-\sin x$}$$

If $$\cos x$$ is negative, then $$\cos x=-\sqrt{1-\sin^2 x}$$, and

$$\cos^\prime x=-\frac{1}{2\sqrt{1-\sin^2 x}}(-2\sin x)\cos x$$

which yields

$$\cos^\prime x=-\frac{1}{2(-\cos x)}(-2\sin x)\cos x$$

After simplification, we get the same result

$$\fbox{$\cos^\prime x=-\sin x$}$$

### Derivative of the tangent

To derive the tangent, we simply use the derivation of quotients

$$\tan^\prime x=\frac{d}{dx}\left(\frac{\sin x}{\cos x}\right)=\frac{\sin^\prime x\cos x-\sin x\cos^\prime x}{\cos^2 x}=\frac{\cos^2 x+\sin^2 x}{\cos^2 x}=\frac{1}{\cos^2 x}=\sec^2 x$$

$$\fbox{$\tan^\prime x=\sec^2 x$}$$

### Derivative of the cotangent

To derive the tangent, we use the derivation of the inverse

$$\cot^\prime x=\frac{d}{dx}\left(\frac{1}{\tan x}\right)=-\tan^\prime x\frac{1}{\tan^2 x}=-\sec^2 x\frac{\cos^2 x}{\sin^2 x}=-\frac{1}{\sin^2 x}=-\csc^2 x$$

$$\fbox{$\cot^\prime x=-\csc^2 x$}$$

### Derivative of the secant

To derive the secant, we use the derivation of the inverse

$$\sec^\prime x=\frac{d}{dx}\left(\frac{1}{\cos x}\right)=-\cos^\prime x\frac{1}{\cos^2 x}=\frac{\sin x}{\cos^2 x}=\sec x\tan x$$

$$\fbox{$\sec^\prime x=\sec x\tan x$}$$

### Derivative of the cosecant

To derive the cosecant, we use the derivation of the inverse

$$\csc^\prime x=\frac{d}{dx}\left(\frac{1}{\sin x}\right)=-\sin^\prime x\frac{1}{\sin^2 x}=-\frac{\cos x}{\sin^2 x}=-\csc x\cot x$$

$$\fbox{$\csc^\prime x=-\csc x\cot x$}$$

## Derivatives of the inverse trigonometric functions

To derive the inverse function, we use the following identity

$$\left(f^{-1}\right)^\prime(x)=\frac{1}{f^\prime(f^{-1}(x))}$$

### Derivative of the inverse sine

$$\arcsin^\prime x=\frac{1}{\sin^\prime(\arcsin x))}=\frac{1}{\cos(\arcsin x))}$$

Therefore, when $$\cos x$$ is positive, 

$$\arcsin^\prime (\sin x)=\frac{1}{\cos(\arcsin (\sin x)))}=\frac{1}{\cos x}=\frac{1}{\sqrt{1-\sin^2 x}}$$

Substituting $$\sin x$$ with $$x$$, we get

$$\fbox{$\arcsin^\prime x=\frac{1}{\sqrt{1-x^2}}$}$$

$$\cos x$$ is positive from $$-\pi/2$$ to $$\pi/2$$, but on this interval, $$\sin x$$ goes from $$-1$$ to $$1$$, i.e. $$\sin x$$ spans the whole range of the sine function, which is the whole domain of the inverse sine function.

Therefore, we do not need to consider the case where $$\cos x$$ is negative because we assume the range of $$\arcsin$$ to be $$[-\pi/2,\pi/2]$$.

### Derivative of the inverse cosine

$$\arccos^\prime x=\frac{1}{\cos^\prime(\arccos x))}=-\frac{1}{\sin(\arccos x))}$$

Therefore, when $$\sin x$$ is positive,

$$\arccos^\prime (\cos x)=-\frac{1}{\sin(\arccos (\cos x)))}=-\frac{1}{\sin x}=-\frac{1}{\sqrt{1-\cos^2 x}}$$

Substituting $$\cos x$$ with $$x$$, we get

$$\fbox{$\arccos^\prime x=-\frac{1}{\sqrt{1-x^2}}$}$$

$$\sin x$$ is positive on $$[0,\pi]$$, and on this interval, $$\cos x$$ goes from $$1$$ to $$-1$$, so we do not need to consider the case where $$\sin x$$ is negative when we define the range of $$\arccos x$$ to be $$[0,\pi]$$.

### Derivative of the inverse tangent

$$\arctan^\prime x=\frac{1}{\tan^\prime(\arctan x)}=\frac{1}{\sec^2(\arctan x)}$$

Therefore,

$$\arctan^\prime (\tan x)=\frac{1}{\sec^2(\arctan (\tan x))}=\frac{1}{\sec^2 x}$$

Now, we need to express $$\tan x$$ as a function of $$\sec^2 x$$

$$\tan^2 x=\frac{\sin^2 x}{\cos^2 x}=\sec^2 x\sin^2 x=\sec^2 x(1-\cos^2 x)=\sec^2 x\left(1-\frac{1}{\sec^2 x}\right)=\sec^2 x-1$$

Which yields

$$\sec^2 x=1+\tan^2 x$$

Therefore

$$\arctan^\prime (\tan x)=\frac{1}{\sec^2 x}=\frac{1}{1+\tan^2 x}$$

Substituting $$\tan x$$ with $$x$$, we get

$$\fbox{$\arctan^\prime x=\frac{1}{1+x^2}$}$$

### Derivative of the inverse cotangent

The computation is quite similar to that of the inverse tangent.

$$\arccot^\prime x=\frac{1}{\cot^\prime(\arccot x)}=-\frac{1}{\csc^2(\arccot x)}$$

Therefore

$$\arccot^\prime (\cot x)=-\frac{1}{\csc^2(\arccot (\cot x))}=-\frac{1}{\csc^2 x}$$

We need to express $$\csc^2 x$$ as a function of $$\cot x$$.

$$\cot^2 x=\frac{\cos^2 x}{\sin^2 x}=\csc^2 x\left(1-\frac{1}{\csc^2 x}\right)=\csc^2 x-1$$

which yields

$$\csc^2x=1+\cot^2 x$$

Therefore

$$\arccot^\prime (\cot x)=-\frac{1}{\csc^2 x}=-\frac{1}{1+\cot^2 x}$$

and substituting $$\cot x$$ with $$x$$, we get

$$\fbox{$\arccot^\prime x=-\frac{1}{1+x^2}$}$$

### Derivation of the inverse secant

$$\arcsec^\prime x=\frac{1}{\sec^\prime(\arcsec x)}=\frac{1}{\sec(\arcsec x)\tan(\arcsec x)}$$

Therefore

$$\arcsec^\prime (\sec x)=\frac{1}{\sec(\arcsec (\sec x))\tan(\arcsec (\sec x))}=\frac{1}{\sec x\tan x}$$

We need to rewrite $$\sec x\tan x$$ as a function of $$\sec x$$ only. Assuming $$\sin x$$ positive,

$$\sec x\tan x=\sec x\frac{\sin x}{\cos x}=\sec^2 x\sin x=\sec^2 x\sqrt{1-\cos^2 x}=\sec^2 x\sqrt{1-\frac{1}{\sec^2 x}}$$

Therefore,

$$\arcsec^\prime (\sec x)=\frac{1}{\sec^2 x\sqrt{1-\frac{1}{\sec^2 x}}}$$

and substituting $$\sec x$$ with $$x$$, we get

$$\fbox{$\arcsec^\prime x=\frac{1}{x^2 \sqrt{1-\frac{1}{x^2}}}$}$$

If we take the range of $$\sec x$$ to be $$[0,\pi/2]$$, then the case $$\sin x$$ negative never occurs.

### Derivation of the inverse cosecant

$$\arccsc^\prime x=\frac{1}{\csc^\prime(\arccsc x)}=-\frac{1}{\csc(\arccsc x)\cot(\arccsc x)}$$

Therefore

$$\arccsc^\prime (\csc x)=-\frac{1}{\csc(\arccsc (\csc x))\cot(\arccsc (\csc x))}=-\frac{1}{\csc x\cot x}$$

We need to rewrite $$\csc x\cot x$$ as a function of $$\csc x$$ only. Assuming $$\csc x$$ positive,

$$\csc x\cot x=\csc x\frac{\cos x}{\sin x}=\csc^2 x\cos x=\csc^2 x\sqrt{1-\sin^2 x}=\csc^2 x\sqrt{1-\frac{1}{\csc^2 x}}$$

Therefore

$$\arccsc^\prime (\csc x)=-\frac{1}{\csc^2 x\sqrt{1-\frac{1}{\csc^2 x}}}$$

And substituting $$\csc x$$ with $$x$$, we get

$$\fbox{$\arccsc^\prime x=-\frac{1}{x^2\sqrt{1-\frac{1}{x^2}}}$}$$

### Summary

So far, we know

$$\arcsin^\prime x=\frac{1}{\sqrt{1-x^2}}$$

$$\arccos^\prime x=-\frac{1}{\sqrt{1-x^2}}$$

$$\arctan^\prime x=\frac{1}{1+x^2}$$

$$\arccot^\prime x=-\frac{1}{1+x^2}$$

$$\arcsec^\prime x=\frac{1}{x^2 \sqrt{1-\frac{1}{x^2}}}$$

$$\arccsc^\prime x=-\frac{1}{x^2\sqrt{1-\frac{1}{x^2}}}$$

## Primitive of the inverse trigonometric functions

To compute the primitive of a function, we use the following identity, which we derive using integration by parts

$$\int f^{-1}(x)dx=x f^{-1}(x)-\int x \left(f^{-1}\right)^\prime(x)dx$$

For readability, we omit the integration constant in all the results.

### Primitive of the inverse sine

$$\int\arcsin x dx=x\arcsin x-\int x\arcsin^\prime x dx$$

$$\int x\arcsin^\prime x dx=\int\frac{x}{\sqrt{1-x^2}}dx$$

With $$u=1-x^2$$, we have $$du=-2xdx$$ and $$dx=-\frac{du}{2}$$, which yields

$$\int x\arcsin^\prime x dx=\int\frac{x}{\sqrt{1-x^2}}dx=-\frac{1}{2}\int\frac{du}{\sqrt{u}}=-\frac{1}{2}\left(\frac{2}{1}\sqrt{u}\right)=-\sqrt{u}=-\sqrt{1-x^2}$$

Therefore,

$$\fbox{$\int\arcsin x dx=x\arcsin x+\sqrt{1-x^2}$}$$

### Primitive of the inverse cosine

The computation is very similar to that of the inverse sine.

$$\int\arccos x dx=x\arccos x-\int x\arccos^\prime x dx$$

$$\int x\arccos^\prime x dx=-\int\frac{x}{\sqrt{1-x^2}}dx=\sqrt{1-x^2}$$

Therefore,

$$\fbox{$\int\arccos x dx=x\arccos x-\sqrt{1-x^2}$}$$

### Primitive of the inverse tangent

$$\int\arctan x dx=x\arctan x-\int x\arctan^\prime x dx$$

$$\int x\arctan^\prime x dx=\int \frac{x}{1+x^2} dx$$

With $$u=1+x^2$$, we have $$du=2 x dx$$ and $$x dx=\frac{du}{2}$$, which yields

$$\int \frac{x}{1+x^2} dx=\frac{1}{2}\int\frac{du}{u}=\frac{1}{2}\ln|u|=\frac{1}{2}\ln|1+x^2|=\ln\sqrt{1+x^2}$$

Therefore,

$$\fbox{$\int\arctan x dx=x\arctan x-\ln\sqrt{1+x^2}$}$$

### Primitive of the inverse cotangent

The computation is very similar to that of the inverse tangent.

$$\int\arccot x dx=x\arccot x-\int x\arccot^\prime x dx$$

$$\int x\arccot^\prime x dx=-\int\frac{x}{1+x^2}dx=-\ln\sqrt{1+x^2}$$

Therefore,

$$\fbox{$\int\arccot x dx=x\arccot x+\ln\sqrt{1+x^2}$}$$

### Primitive of the inverse secant

$$\int\arcsec x dx=x\arcsec x-\int x\arcsec^\prime x dx$$

$$\int x\arcsec^\prime x dx=\int\frac{x}{x^2 \sqrt{1-\frac{1}{x^2}}}dx=\int\frac{1}{x \sqrt{1-\frac{1}{x^2}}}dx$$

