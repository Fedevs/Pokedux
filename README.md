# Pokedux
This project is a web application that simulates a Pokedex using the technologies of React, Redux, and React Router.

## Installation

To install this project on your local machine, follow these steps:

<a href="https://nodejs.org/es/download/" target="_blank">NODE - NPM</a>

```bash
git clone https://github.com/Fedevs/Pokedux.git # Clone the repo
cd Pokedux # Navigate to the project folder
npm install # Install dependencies
npm start # Start the development server
```
or

<a href="https://docs.docker.com/compose/gettingstarted/" target="_blank">DOCKER</a>

```bash
git clone https://github.com/Fedevs/Pokedux.git # Clone the repo
cd Pokedux # Navigate to the project folder
docker compose up # Build a container and run the app
```

Then you can open your browser to [http://localhost:3000/Pokedux](http://localhost:3000/Pokedux) to see the application in action.

## Deployment

This project was deployed using Github Pages, please consider its limitations.

[POKEDUX](https://fedevs.github.io/Pokedux/)

## Usage

The application simulates a Pokedex, allowing the user to view pokemons from any generation and choose their favourites:

- Searching for Pokemon by name.

![search](https://user-images.githubusercontent.com/86263343/223166205-a5f09a67-34de-4e14-9ad8-8a9603eb2150.png)

- Filtering Pokemon by generation.

![filter](https://user-images.githubusercontent.com/86263343/223166220-d265a1d2-e3af-4bd1-865d-07c2a4522bff.png)

- Clicking star on top right corner of each card to add to favourites (also to delete).

![favourites](https://user-images.githubusercontent.com/86263343/223166218-9d0d0e21-364d-4bb9-a526-8171859a999b.png)

- Switching between home and favourites with button next to search bar.

![GoFav](https://user-images.githubusercontent.com/86263343/223167456-2520e6f4-3ea2-4117-98e3-bb44f60a1cbb.png)

![GoHome](https://user-images.githubusercontent.com/86263343/223167199-bf076c1e-8689-4d2c-93d2-594478937a5b.png)

- Infinite scroll with skeleton loading.

![infiniteScroll](https://user-images.githubusercontent.com/86263343/223168813-c61b8c25-abd7-45a8-9094-8808ecc0d2f2.png)

- Empty state (When you search a pokemon which doesn't exist).

![empryState](https://user-images.githubusercontent.com/86263343/223169387-c032667b-91c5-4f24-878f-0de93193b0d2.png)

- Error page (When you try to go to an unexistant path).

![errorPage](https://user-images.githubusercontent.com/86263343/223169521-608972d0-daed-45ef-b21a-a728877f30a9.png)

- As it is a demo project, there's a logger middleware.

![logger](https://user-images.githubusercontent.com/86263343/223171073-8f3f6a9b-7ba0-4c26-84df-cc4a3e7f06db.png)

## Technologies used

[<img width="60" src="https://user-images.githubusercontent.com/86263343/213344497-5d8489bc-06af-423e-a588-c77cf1a1f57e.png"/>](https://reactjs.org/docs/getting-started.html) [<img width="60" src="https://user-images.githubusercontent.com/86263343/213344487-88d0022b-b542-439a-9784-ee57d2b1f343.png"/>](https://redux-toolkit.js.org/introduction/getting-started) [<img width="60" src="https://user-images.githubusercontent.com/86263343/216745349-788e5910-e504-4727-bc94-5cd773a02d2f.png"/>](https://reactrouter.com/en/main/start/tutorial) [<img width="60" src="https://user-images.githubusercontent.com/86263343/213885544-47015d45-a9b0-44f1-b6c4-ab44132809e3.svg"/>](https://docs.docker.com/compose/gettingstarted/)

## Contributions

If you would like to contribute to this project, please follow these steps:

1. Fork this repository.
2. Create a branch with your changes: git checkout -b my-branch
3. Make the changes you want.
4. Commit your changes: git commit -am 'my commit message'
5. Push your branch: git push origin my-branch
6. Create a Pull Request with your changes.

## Contact

You can find me on:

- [LinkedIn](https://www.linkedin.com/in/federicoponcela/?locale=en_US)
- [GitHub](https://github.com/Fedevs)
- [Mail](mailto:federicoponcela1@hotmail.com)


