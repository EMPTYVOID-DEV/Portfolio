In the ever-evolving landscape of web development, **Component-Driven Development (CDD)** has emerged as a powerful paradigm, shaping how we construct and organize our applications. As I delve into certain practices and insights in this post, it's crucial to note that these are not rigid, must-follow rules. I am by no means an expert, but rather, I share what I personally find beneficial in the realm of CDD.

![](/images/CDD.png)

## Terminology

Before discussing ways to create more reusable components, let's establish some key terms.

### Tree Hierarchy

Component-driven development revolves around crafting reusable components and connecting them to form a tree hierarchy. Your application will consist of multiple pages, with each page serving as the root for a component tree.

### Degree of Reusability

The most reusable components in the tree are found at the leaves. However, as components are combined, the degree of reusability diminishes due to the accumulation of logic and UI elements. Page entries, in particular, are often not reusable in other pages with different contexts.

### The Need for UI Packages

In some instances, the complexity of certain components, such as a **rich text editor**, makes it impractical to build and maintain them for just one project. This is where the next level of **Component-Driven Development** comes into play – building a standalone package.

## Re-usability patterns

What i am about to explain is not necessarily a set of patterns but it will help you create more re-usable components.

### Single responsibility

Let be clear here i am not a big fun of uncle bob solid principles but components that respect single responsibility are more re-usable .

For example this svelte component

```html
<script lang="ts">
	import { quadInOut } from 'svelte/easing';
	export let speed = 2;
	export let durationPerWord = 120;
	function write(node: HTMLSpanElement) {
		const child = node.childNodes.item(0);
		const text = child.textContent;
		const duration = (text.length / speed) * durationPerWord;
		return {
			duration,
			easing: quadInOut,
			tick: (t: number) => {
				const currentIndex = Math.floor(t * text.length);
				child.textContent = text.substring(0, currentIndex);
			}
		};
	}
</script>

<div transition:write>
	<slot />
</div>
```

This is component has one job only which is applying text writing animation to whatever it receives as slot.

Of course the definition of one job may differ from an app to another.

### General UI

A significant factor that can greatly enhance component usability is the concept of **"general UI."** This idea revolves around ensuring that your component seamlessly fits into various layouts without causing any disruptions or complications.

Things you can do :

- Respect global styles.
- Self responsiveness.
- Dynamic height and width.

### Customization Limit

We often use props to customize the logic and UI of our components, but having too many props can make debugging and refactoring challenging. One way to address this issue is by employing the **strategy pattern**.

The concept involves creating different components that handle the same problem but may utilize different logic or have distinct UI appearances. Subsequently, a strategy component is defined to manage the usage of one of these components.

### Logic portals

The concept here revolves around keeping your component logic as pure as possible. When your component needs to interact with external resources, such as a **global store** or an **API**, it should do so through a portal.

This portal can take the form of a function, a class, or any suitable structure. The rationale behind this approach is that it makes debugging and adding new features much more straightforward within a large component system.

### Typescript

The adoption of **TypeScript** is crucial for error prevention and simplifying the linkage of components. However, there is a challenge: strongly typed component systems may introduce chaos when implementing a major update.

[In one of my packages](/projects/altron) , I employed a strategy of **strongly typing the outside and loosely typing the inside**. The package entry has strongly typed props, while some of the internal logic is loosely typed. This approach enabled me to add features without the complexities often associated with **TypeScript**, especially during major updates.

### Testing

Testing constitutes a pivotal aspect in every realm of development. While I personally may not be a fan of **Test-Driven Development (TDD)**, I find value in creating tests for my components, especially during major releases. Fortunately, there are various testing options available, including **React Testing Library**, **Cypress**, **Vitest**, and many more.

### General stuff

I have some general ideas that can enhance your **CDD**.

- **The usage of CSS variables**: This can revolutionize your development approach by providing a flexible and easily maintainable way to handle styles.
- **Storing state inside the component tree**: Storing your data within the component tree is highly beneficial and can prevent numerous bugs. For React developers, exploring tools like **Jotai** is recommended, while Svelte developers can utilize stores with context.
- **Using a global design system**: Incorporating a global design system, encompassing colors and fonts, is crucial for ensuring consistency in your website layout. This practice contributes to a unified and polished user experience.
