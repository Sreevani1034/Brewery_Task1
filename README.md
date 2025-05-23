# ☕ Brewery Billing System (Terminal App)

A terminal-based billing system built using **TypeScript** for a coffee shop named **Brewery**.

---

##  Features

- Select items from a predefined menu
- Input quantity and cup size (for beverages)
- Calculates total and applies 10% discount if bill exceeds ₹1000
- Prints a detailed final bill
- Allows multiple customer billing (loop until "Paid")

---

## Tech Stack

- TypeScript
- Node.js
- prompt-sync (for input)

---

##  How to Run

1. **Install dependencies**

```bash
npm install prompt-sync
```

2. **Run using TypeScript**

```bash
tsc task.ts
node task.js
```

Or if already compiled:

```bash
node task.js
```

---

## File Structure

```
.
├── task.ts         # Main TypeScript file
├── task.js         # Compiled JavaScript file
├── .gitignore      # To ignore node_modules
├── README.md       # Project description
├── package.json    # NPM config file (if initialized)
```

---

##  Author

**Sreevani**

---

##  .gitignore Example

```
node_modules/
dist/
.DS_Store
```



