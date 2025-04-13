# Habits

# 📱 Habit Tracker — MVP Feature List

## ✅ Core Features (Included in MVP)

### 📋 Main Screen

- [x] Display list of habits
- [x] Ability to mark a habit as completed
- [x] Show current status of each habit (done / not done)

### ➕ Create/Edit Habit

- [x] Add a new habit (name only)
- [x] Delete a habit
- [x] Edit the name of a habit

### 📈 Habit Statistics

- [x] Show number of times the habit was completed
- [x] Simple progress visualization (e.g., a counter or text)
- [ ] _(Optional)_ Calendar view of habit completion (can be added later)

### 💾 Data Storage

- [x] Use `localStorage` or a basic backend to store user data

### 📱 Interface & UX

- [x] Mobile-first layout
- [x] Responsive design for tablets/desktops
- [x] Clean and minimal UI for easy usage

---

## 🧪 Features Not in MVP (Future Ideas)

- [ ] Notifications or reminders
- [ ] User login/authentication
- [ ] Cross-device syncing
- [ ] Custom icons/colors for habits
- [ ] Filtering, sorting, habit categories
- [ ] Fancy charts, animations, dark mode

---

## 🔁 Next Steps

- Build MVP with only the core features
- Test it with real users (yourself, friends)
- Get feedback and iterate

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
