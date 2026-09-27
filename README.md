# 🏋️ FitLog

FitLog is a workout tracking and planning web application built with Next.js and TypeScript.

Users can explore a workout library, view detailed workout information, add exercises to their daily plan, save workouts for later, mark exercises as completed, and remove exercises from their plan.

The application is designed with a responsive dark fitness-themed interface and provides workout information such as muscle groups, equipment, difficulty, duration, calories, ratings, and instructions.

---

## 🔗 Live Site

**Live Project:** [https://fitlog-by-ifti.vercel.app/](https://fitlog-by-ifti.vercel.app/)

**GitHub Repository:** [https://github.com/IFTI737/Fitlog-ifti](https://github.com/IFTI737/Fitlog-ifti)

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| Next.js | React framework and application routing |
| TypeScript | Type safety and structured development |
| Tailwind CSS | Styling and responsive UI |
| React Toastify | Success, error, and information notifications |
| Context API | Global workout plan and saved workout state |
| Next.js Image | Optimized workout images |
| Next.js Link | Client-side navigation |
| REST API | Fetching workout data |
| Vercel | Deployment and hosting |

---

## ✨ Features

### 1. 🏋️ Explore Workout Library

Users can browse all available workouts from the workout API.

Each workout card displays:

- Workout image
- Muscle groups
- Difficulty
- Workout name
- Equipment
- Duration
- Calories burned
- Rating

Users can click a workout card to open its complete details.

---

### 2. 📋 Workout Details

Each workout has a dedicated details page.

The details page includes:

- Large workout image
- Workout name
- Description
- Muscle group tags
- Equipment
- Difficulty
- Duration
- Calories burned
- Sets
- Reps
- Rating
- Step-by-step instructions

Users can also add the workout to their daily plan or save it for later.

---

### 3. 📝 Manage Today's Plan

Users can create their daily workout plan by adding exercises from the workout library.

The plan includes:

- Maximum of 5 exercises
- Total exercise count
- Total workout minutes
- Total calories
- View Details option
- Mark as Done option
- Remove exercise option

When an exercise is marked as done, it is removed from the current plan and the plan summary updates automatically.

---

### 4. ⭐ Save Workouts for Later

Users can save workouts that they want to keep for later.

The Saved section allows users to:

- View saved workouts
- Open workout details
- Remove saved workouts
- See the total number of saved exercises
- See total duration and calories for saved workouts

The summary changes automatically when switching between Today's Plan and Saved.

---

### 5. 🔔 Interactive Notifications

FitLog uses toast notifications to provide immediate feedback to the user.

Notifications are shown when:

- A workout is added to today's plan
- A workout is already in the plan
- The 5-workout limit is reached
- A workout is saved
- A workout is already saved
- A workout is marked as done
- A workout is removed from the plan
- A saved workout is removed

---

### 6. 📊 Workout Sorting

The My Plan page provides sorting options for workout lists.

Users can sort workouts by:

- Duration
- Calories
- Rating

The default sorting option is Duration.

---

### 7. 📱 Responsive Design

FitLog is designed to work across different screen sizes.

The interface adapts for:

- Desktop
- Tablet
- Mobile

Workout cards, navigation, workout details, plan cards, buttons, and other sections adjust according to the screen size.

---

### 8. ⏳ Loading States

Loading skeletons are included to provide visual feedback while pages are loading.

Loading states are available for:

- Home page
- Workout details
- My Plan page

The skeleton UI follows the same dark visual style as the main application.

---

### 9. 🚫 Custom 404 Page

FitLog includes a custom 404 page for invalid or unavailable routes.

If a workout ID does not exist, the application displays the custom not-found page instead of showing an empty workout page.

---

## 📡 API

FitLog uses the provided FitLog REST API to retrieve workout information.

### Base API

```text
https://api.abcz.workers.dev/api/fitlog
```

### Get All Workouts

```text
GET /api/fitlog
```

### Get Workout by ID

```text
GET /api/fitlog/:id
```

The API data is used throughout the application for the workout library and individual workout details.

---

## 📁 Project Structure

```text
fitlog-ifti/
│
├── src/
│   │
│   ├── app/
│   │   ├── exercise/
│   │   │   └── [id]/
│   │   │       ├── loading.tsx
│   │   │       └── page.tsx
│   │   │
│   │   ├── my-plan/
│   │   │   ├── loading.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   ├── assets/
│   │   ├── banner.png
│   │   └── logo.png
│   │
│   ├── components/
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── WorkoutCard.tsx
│   │   │   └── WorkoutLibrary.tsx
│   │   │
│   │   ├── my-plan/
│   │   │   ├── EmptyPlan.tsx
│   │   │   ├── PlanSummary.tsx
│   │   │   ├── PlanTabs.tsx
│   │   │   ├── PlanWorkoutCard.tsx
│   │   │   └── SortDropdown.tsx
│   │   │
│   │   ├── shared/
│   │   │   ├── Footer.tsx
│   │   │   └── Navbar.tsx
│   │   │
│   │   └── workout/
│   │       ├── WorkoutActions.tsx
│   │       ├── WorkoutDetails.tsx
│   │       ├── WorkoutInstructions.tsx
│   │       └── WorkoutStats.tsx
│   │
│   ├── context/
│   │   └── FitLogContext.tsx
│   │
│   ├── lib/
│   │   └── fitlog.ts
│   │
│   └── types/
│       └── fitlog.ts
│
├── .env
├── package.json
├── README.md
└── ...
```

---

## 🧠 State Management

FitLog uses React Context API to manage workout-related state globally.

The global context manages:

* Today's Plan
* Saved Workouts
* Completed Workout IDs
* Adding workouts
* Removing workouts
* Saving workouts
* Marking workouts as done

This allows components such as the Navbar, workout details page, and My Plan page to stay synchronized.

For example, when a workout is added to Today's Plan, the plan counter in the Navbar updates automatically.

---

## 🔄 Workout Flow

The main workout flow of the application is:

```text
Workout Library
      ↓
Select Workout
      ↓
Workout Details
      ↓
 ┌───────────────┐
 │               │
Add to Plan    Save
 │               │
 ↓               ↓
Today's Plan    Saved
 │               │
 ├── View Details
 ├── Mark as Done
 └── Remove
```

---

## 📌 Assignment Requirements Covered

The project includes the required functionality:

* Responsive layout
* Navbar with live Plan and Saved counters
* Hero section
* Workout library
* Workout cards
* Workout details page
* Add to Plan functionality
* Save functionality
* Maximum 5 exercises in Today's Plan
* My Plan page
* Today's Plan and Saved tabs
* Dynamic summary statistics
* Workout sorting
* Mark as Done
* Remove workout
* Toast notifications
* Loading states
* Custom 404 page
* Responsive mobile/tablet/desktop layouts
* API integration
* Deployment-ready Next.js application

---

## 👤 Author

**Iftekhar Bin Shoib**

CSE Student | Full-Stack Developer | AI/ML Enthusiast

* GitHub: [@IFTI737](https://github.com/IFTI737)
* Live Project: [FitLog](https://fitlog-by-ifti.vercel.app/)
