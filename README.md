# Hi There!

Thanks for taking the time to check out my little demo project.

My approach when building this was that I wanted the following:

- A simple, clean and easy to use UI
- Usage of Atomic Design principles
- Usage of Typescript for type safety

I've used the following technologies:

- React
- Typescript
- TailwindCSS
- Redux Toolkit
- Material UI where needed (mainly for things like the date picker and icons)

Data is stored locally via Redux and local state instead of building out a whole backend in Node.
You are, afterall, interested in my frontend skills.😊

Furthermore, it's worth nothing that usually in my role as Lead Engineer, I'm responsible for demoing the product to clients/stakeholders. 
Knowing this, I specifically priortised the style/UI of the app in my earlier commits, followed by the functionality, as the style/UI is usually what clients/stakeholders want to see first.

It's also worth noting that whilst my skills are specialised in frontend across an array of JS Frameworks, I'm also interested in building up experience on the backend regardless of the language (ideally Node, C# or Java). 💪

Thanks for your time, and I look forward to hearing from you!
Jamie Bohanna

## Running the app

Nothing special, just fire off `npm run start` and you're good to go!

## Project structure

📁 src
┣ 📁 components
┃ ┣ 📁 atoms
┃ ┃ ┣ 📜 addNewInput.tsx
┃ ┃ ┣ 📜 menuItem.tsx
┃ ┃ ┣ 📜 menuTag.tsx
┃ ┃ ┗ 📜 task.tsx
┃ ┣ 📁 molecules
┃ ┃ ┣ 📜 listMenu.tsx
┃ ┃ ┣ 📜 settingsMenu.tsx
┃ ┃ ┣ 📜 tagsMenu.tsx
┃ ┃ ┗ 📜 taskMenu.tsx
┃ ┗ 📁 organisms
┃   ┣ 📜 editTask.tsx
┃   ┣ 📜 sideMenu.tsx
┃   ┗ 📜 toDoList.tsx
┣ 📁 interfaces
┃ ┣ 📜 addNewInputProps.ts
┃ ┣ 📜 filterBy.ts
┃ ┣ 📜 listType.ts
┃ ┣ 📜 menuItemProps.ts
┃ ┣ 📜 menuTagProps.ts
┃ ┗ 📜 taskType.ts
┣ 📁 pages
┃ ┗ 📁 dashboard
┃   ┗ 📜 dashboard.tsx
┣ 📁 slices
┃ ┗ 📁 tasks
┃   ┗ 📜 taskSlice.ts
┣ 📜 App.css
┣ 📜 App.test.tsx
┣ 📜 App.tsx
┣ 📜 index.css
┣ 📜 index.tsx
┣ 📜 logo.svg
┣ 📜 react-app-env.d.ts
┣ 📜 reportWebVitals.ts
┣ 📜 setupTests.ts
┗ 📜 store.ts
