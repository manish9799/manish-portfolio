import MovieFlix from './assets/MovieFlix.png'
import QuizApp from './assets/QuizApp.png'
import ExpenseTracker from './assets/ExpenseTracker.png'
// ============
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import bootstrapLogo from './assets/bootstrap-framework.png';
import jsLogo from './assets/javascript.png';
import jqueryLogo from './assets/jquery.png';
import reactLogo from './assets/react.png';
import reduxLogo from './assets/redux.png';
import muiLogo from './assets/material-mui.png';
import tailwindLogo from './assets/tailwind.png';
import gitLogo from './assets/github.png';

export let skills = [
    { name: 'HTML5', logo: htmlLogo },
    { name: 'CSS3', logo: cssLogo },
    { name: 'BootStrap', logo: bootstrapLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'JQuery', logo: jqueryLogo },
    { name: 'ReactJS', logo: reactLogo },
    { name: 'Redux', logo: reduxLogo },
    { name: 'Material UI', logo: muiLogo },
    { name: 'Tailwind', logo: tailwindLogo },
    { name: 'Github', logo: gitLogo },
];

export let projects = [
    {
        'name' : 'MovieFlix',
        'description':`MovieFlix is web application which provides a vast database of Movies and TV shows and its detailed information. 
                        
                        Get comprehensive details about each Movie or TV Shows, including plot summaries, cast and crew information. 
                        Watch trailers and clips to get a taste of what's in store before deciding what to watch. 
                        Implemented API Fetch methods and data crawling. 
                        Data are fetched from TMDB API`,
        'techStack':['Html','Css','JavaScript','React.JS','Material UI','Redux'],
        'deployLink':'https://manish9799.github.io/react-MovieFlix/',
        'githubLink':'https://github.com/manish9799/react-MovieFlix', 
        'image':MovieFlix,
    },
    {
        'name' : 'QUIZ-APP',
        'description':`Explore a wide range of quiz categories, from general knowledge and science to pop culture and history.  
                    Allow users to customize quiz category and difficulty. 
                    Display questions one at a time with options to select answers. 
                    Provide instant feedback after each question to indicate whether the answer was correct or incorrect. 
                     Calculate and display the total score at the end of the quiz`,
        'techStack':['Html','Css','JavaScript','React.JS','Material UI',],
        'deployLink':'https://manish9799.github.io/react-QuizApp/',
        'githubLink':'https://github.com/manish9799/react-QuizApp', 
        'image':QuizApp,
    },
    {
        'name' : 'EXPENSE TRACKER',
        'description':`Build a web application for managing and tracking daily Income and Expenses. This is single page web application consist of there part Income, Expense, Remaining Balance and Transactions list. Created a function to add expense / income to the list and update the total. Enabled users to delete transactions, which should also update the Balance. The data inserted by the user is stored in browser's local storage. So it remains there until the user clear/delete it`,
        'techStack':['Html','Css','JavaScript',],
        'deployLink':'https://manish9799.github.io/expense-tracker/',
        'githubLink':'https://github.com/manish9799/expense-tracker', 
        'image':ExpenseTracker,
    },
]

export let experiences = [
    {
        title: 'Frontend Developer',
        company: 'Freelance',
        city: 'Remote',
        duration: 'Jan 2024 - Present',
        description: 'Worked on various freelance projects with a focus on front-end development, utilizing HTML, CSS, JavaScript, and React.js. Partnered with a backend developer while I crafted responsive user interfaces to improve user experience. Implemented API integrations to dynamically retrieve and showcase data, facilitating smooth interactions between front-end and back-end systems. Focused on optimizing performance and applying user-centric design principles to create fast-loading and efficient websites.'
    },
    {
        title: 'Frontend Developer',
        company: 'HB WebSol',
        city: 'Indore',
        duration: 'Sep 2022 - Sep 2023',
        description: 'Worked on building and optimizing user interfaces using React.js, Redux, and Material-UI. Developed reusable components and implemented efficient state management with Redux, improving app performance. Collaborated with the back-end team for seamless integration and worked with the design team to deliver consistent UI/UX. Managed multiple projects simultaneously, efficiently prioritizing tasks and integrating APIs for smooth data flow between front-end and back-end systems.'
    },
    {
        title: 'Web Development Intern',
        company: 'Future Multimedia',
        city: 'Indore',
        duration: 'Jan 2022 - Aug 2022',
        description: 'Throughout my coaching and internship, I focused on front-end development while working closely with senior developers. I helped create responsive and user-friendly interfaces using HTML5, CSS3, JavaScript, and React.js. I also learned the basics of backend development, including Python and MongoDB, which gave me a better understanding of full-stack development..'
    }
];

