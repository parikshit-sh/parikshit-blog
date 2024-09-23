---
title: 'A Beginner’s Guide to Framer Motion'
description: 'Learn the basics of Framer Motion and how to create stunning animations with simple code examples.'
pubDate: 'Sep 23 2024'
heroImage: 'https://framerusercontent.com/images/E6jTNho0jrXgrW057WaiHrIHA0.webp'
layout: ../../layouts/BlogPost.astro

---


Animations can make your web applications feel more dynamic, engaging, and enjoyable to use. Framer Motion is a powerful React animation library that allows you to create smooth animations with ease. In this guide, we’ll cover the basics of Framer Motion, including scroll animations and advanced features, providing code snippets and examples to help you get started.

## What is Framer Motion?

Framer Motion is a production-ready motion library for React, designed to make animations simple and declarative. It integrates seamlessly with React components, allowing you to animate with minimal code and a straightforward API.

## Getting Started with Framer Motion
<br></br>

### **Installation**

To start using Framer Motion, you’ll need to install it via npm or yarn: <br> </br>

```bash
npm install framer-motion
# or
yarn add framer-motion
```
<br></br>
### **Basic Animation Example**
Let’s create a simple animation that scales a box when clicked.
<br></br>

```javascript
import { motion } from 'framer-motion';

function ScaleBox() {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#00bcd4',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
    >
      Hover Me
    </motion.div>
  );
}

export default ScaleBox;

```
 <h1 class="text-xl font-semibold py-4">Syntax Breakdown</h1>

- **motion.div**: This replaces the standard HTML div with a motion-enabled component.
- **initial**: Sets the starting state of the animation.
- **whileHover**: Defines the state when the element is hovered.
<br></br>
 <h1 class="text-xl font-semibold py-4">Adding Transitions</h1>

Framer Motion allows you to add transitions to your animations easily. Here’s how you can add a duration to control the speed of the animation:
<br></br>

```js
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Fading In
</motion.div>

```
<h1 class="text-xl font-semibold py-4">Key Properties in Transition </h1>
duration: Controls how long the animation takes (in seconds).
delay: Adds a delay before the animation starts.
ease: Defines the easing curve (e.g., ease-in, ease-out, ease-in-out).

<h1 class="text-xl font-semibold py-4">Scroll Animations</h1>
Framer Motion offers an easy way to create scroll-based animations, making your app feel interactive as users scroll down the page. Here’s how you can implement a simple scroll animation:
<br></br>

```js
import { motion } from 'framer-motion';

function ScrollAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        height: '200px',
        backgroundColor: '#f09',
        margin: '20px',
        borderRadius: '8px',
      }}
    >
      Scroll to Animate
    </motion.div>
  );
}

export default ScrollAnimation;

```
<h1 class="text-xl font-semibold py-4">Explanation:</h1>
whileInView: This prop triggers the animation when the component enters the viewport, allowing you to create engaging scroll effects.
y: Controls vertical positioning; moving from 50 pixels down to its original position.
<br></br>

<h1 class="text-xl font-semibold py-4">Advanced Features</h1>
<h1 class="text-lg font-semibold p-2">Variants:</h1>
Variants in Framer Motion allow you to define multiple animation states for a component, making it easier to manage complex animations.

<h1 class="text-lg font-semibold p-2">Example of Variants</h1>

```js
import { motion } from 'framer-motion';

const boxVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1 },
};

function VariantBox() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={boxVariants}
      transition={{ duration: 0.5 }}
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#4caf50',
        borderRadius: '8px',
      }}
    >
      Animated Box
    </motion.div>
  );
}

export default VariantBox;

```
<h1 class="text-xl font-semibold py-4">Staggered Animations</h1>
You can also create staggered animations for a series of elements, making them animate one after another.
<h1 class="text-lg font-semibold p-2">Example of Staggered Animations</h1>

```js
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const childVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function StaggeredList() {
  return (
    <motion.ul variants={staggerContainer} initial="hidden" animate="visible">
      {['Item 1', 'Item 2', 'Item 3'].map((item, index) => (
        <motion.li key={index} variants={childVariant}>
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default StaggeredList;

```
<h1 class="text-xl font-semibold py-4">Conclusion</h1>
Framer Motion makes it incredibly easy to create beautiful, responsive animations in your React applications. With features like scroll animations, variants, and staggered animations, you can create dynamic user experiences that keep your audience engaged.

Whether you’re adding subtle hover effects or complex scroll interactions, Framer Motion is a fantastic tool for any React developer.


**Happy animating!**