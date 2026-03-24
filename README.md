# ☕ Chai CSS

I built this project to understand how utility-first CSS frameworks like Tailwind actually work under the hood.

Instead of using a build step or generating a big CSS file, this works directly in the browser. You just write classes with a `chai-` prefix, and the engine scans the DOM, converts those classes into real CSS, and injects styles instantly.

No config, no npm, no setup.

---

## 🚀 Why I made this

I didn’t want to just use Tailwind — I wanted to understand it.

So I built a small engine from scratch that:

- Reads every element in the DOM  
- Finds classes starting with `chai-`  
- Parses them into meaningful parts  
- Maps them to real CSS values  
- Injects styles dynamically into the page  

This helped me understand how utility-first CSS and JIT-style systems actually work internally.

---

## ⚙️ How it works

At a high level:

1. The engine scans the DOM using `querySelectorAll("*")`  
2. It filters classes with the `chai-` prefix  
3. Each class is parsed into:
   - property  
   - value  
   - optional shade (for colors)  
4. It resolves those values using predefined maps (spacing, colors, etc.)  
5. Finally, it generates CSS rules and injects them into a `<style>` tag  

Everything happens at runtime.

---

## ✨ Features

- Utility-first CSS system  
- No build tools required  
- Works directly in the browser  
- Supports spacing, colors, flexbox, typography, shadows, etc.  
- Dynamic CSS generation (only what you use)  
- Simple and extendable architecture  

---

## 📦 Example

```html
<div class="chai-flex chai-p-5 chai-bg-purple chai-rounded-lg">
  Hello World
</div>
```
## 🎯 What I learned

- How Tailwind-like systems are structured
- How class parsing works internally
- Mapping design tokens (spacing, colors) to CSS
- Runtime vs build-time tradeoffs
- DOM traversal and performance considerations

## ⚠️ Limitations (for now)
- No responsive system (like md:)
- No hover/focus states
- No grid column system
- Runs at runtime (not optimized for production yet)

## 🚀 Future improvements
- Add responsive variants
- Add pseudo-class support (hover, focus)
- Build CLI version (like real Tailwind)
- Optimize performance

## 👨‍💻 Author

Built by me as a learning + exploration project.

