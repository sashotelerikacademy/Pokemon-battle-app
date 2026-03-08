# Pokemon Battle React App

## Overview

Pokemon Battle is a React application that simulates battles between two randomly selected Pokémon.
The application fetches Pokémon data from the public PokéAPI and compares their stats to determine a winner.

The goal of the project is to demonstrate understanding of:

* React components
* React Hooks
* API requests
* State management
* Conditional rendering
* Separation of logic

---

## Features

* Fetch random Pokémon from PokéAPI
* Display Previous vs Current Pokémon
* Automatic battle result calculation
* Score tracking
* Type match counter
* Reset score functionality
* Styled UI with CSS
* Hover effects and animations

---

## Technologies Used

* React
* JavaScript (ES6+)
* CSS
* PokéAPI

---

## Project Structure

```
src
│
├── components
│   ├── PokemonBattle.jsx
│   ├── PokemonCard.jsx
│   └── LoadButton.jsx
│
├── services
│   └── api.js
│
├── utils
│   └── battleLogic.js
│
├── App.jsx
└── main.jsx
```

---

## How the Application Works

1. The user clicks **Load Random Pokemon**.
2. The app fetches a random Pokémon from the PokéAPI.
3. The previous Pokémon becomes the **Previous** card.
4. The new Pokémon becomes the **Current** card.
5. The battle logic compares both Pokémon.
6. The winner receives a score point.
7. If both Pokémon share a type, the **Type Match** counter increases.

---

## API

The application uses the public API:

https://pokeapi.co/

Endpoint used:

```
https://pokeapi.co/api/v2/pokemon/{id}
```

---

## Future Improvements

* Add Pokémon abilities comparison
* Add battle animations
* Add loading spinner
* Add sound effects
