import todoImg from "/assets/to-do-app.png";
import quizzAppImg from "/assets/quizzical-app.png";
import personalDashboardImg from "/assets/personal-dashboard.png";
import vanLifeAppImg from "/assets/vanlife-app.png";
import picSomeImg from "/assets/pic-some-1.png";
import rolePlayingGameImg from "/assets/role-playing-game.png";
import movieWatchlistImg from "/assets/movie-watchlist.png";
import speedTypingGameImg from "/assets/speed-typing-game.png";

export default [
  {
    id: 1,
    title: "To Do App",
    description: `For quick and short notes, I created To Do App in React. You have option to
			choose priority for your notes and then sort them according that priority.
			Also, you can mark notes as checked and disable if they are finished or
			delete them if you dont need them anymore.`,
    imageUrl: todoImg,
    githubLink: "https://github.com/vujadin95/to-do-app",
    liveDemoLink: "https://vd-react-todo-app.netlify.app/",
  },
  {
    id: 2,
    title: "Quizz App",
    description: `A fun short quiz app that uses the free Trivia API to display questions.
					. You get five questions with four provided answers. When all questions are answered, the true ones are shown with green color and the wrong one are displayed in red.`,
    imageUrl: quizzAppImg,
    githubLink: "https://github.com/vujadin95/quizzical-app-react",
    liveDemoLink: "https://vd-react-quizzical.netlify.app/",
  },
  {
    id: 3,
    title: "Personal Dashboard",
    description: `Personal Dashboard is JavaScript project inspired by Momentum extension.
					It's personalised dashboard that display's background image from free API
					with weather information . Dashboard provides option to write checkable
					focus.`,
    imageUrl: personalDashboardImg,
    githubLink: "https://github.com/vujadin95/personal-dashboard",
    liveDemoLink: "https://vd-personal-dashboard.netlify.app/",
  },
  {
    id: 4,
    title: "Vanlife App",
    description: `Vanlife is app in which I have learned about new react routed dom v6. Doing this app I've learned how to use routing from v6 including shared layout page (header), nested routes with relative paths, dynamic paths, protected routes and other.`,
    imageUrl: vanLifeAppImg,
    githubLink: "https://github.com/vujadin95/vanlife-react-app",
    liveDemoLink: "https://vd-vanlife-app.netlify.app/",
  },
  {
    id: 5,
    title: "Pic Some App",
    description: `Pic Some App is app that is representation of a cart functionality for websites which are intended for online shopping. Here I used custom hover hook for displaying heart for liking the photo and plus sign for adding that photo to the cart.`,
    imageUrl: picSomeImg,
    githubLink: "https://github.com/vujadin95/shopping-cart-pic",
    liveDemoLink: "https://vd-pic-some-app.netlify.app/",
  },
  {
    id: 6,
    title: "Role Playing Game",
    description: `This small application is build in plain JavaScript using class component. I've created class component Character which I used for wizard and for all monsters.  `,
    imageUrl: rolePlayingGameImg,
    githubLink: "https://github.com/vujadin95/Role-Playing-Game",
    liveDemoLink: "https://vd-role-playing-game.netlify.app/",
  },
  {
    id: 7,
    title: "Movie Watchlist",
    description: `Movie Watchlist is app in which I leaded to use free API for movies. When user enter desired movie, input is used to find enetered movie in database and all available movies are displayed to the user. User have option to add particular movie to wishlist to which he can access by clicking the My Wishlist link. `,
    imageUrl: movieWatchlistImg,
    githubLink: "https://github.com/vujadin95/Movie-Watchlist",
    liveDemoLink: "https://vd-movie-watchlist.netlify.app/",
  },
  {
    id: 8,
    title: "Speed Typing Game",
    description: `To test how fast you can type, you can use my custom speed typing app. By default given time is 10s but you can change number of seconds entering in the field. After clicking start, focus is automatically enabled in textare. After time is out, you get displayed how much words have you typed in the textarea.`,
    imageUrl: speedTypingGameImg,
    githubLink: "https://github.com/vujadin95/speed-typing-game",
    liveDemoLink: "https://vd-speed-typing-game.netlify.app/",
  },
];
