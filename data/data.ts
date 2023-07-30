import moviewHome from '../assets/moviewHome.png';
import anindexHome from '../assets/anindexHome.png';
import binanceHome from '../assets/binanceHome.png';
import todolistapp from '../assets/todolistapp.png';
import connectHome from '../assets/connectHome.png';
import connectDemo from '../assets/connect-demo.gif';
import connchat from '../assets/connchat.png';
import planetProfile from '../assets/planet-profile.png';

import nextjsLogo from '../assets/nextjsLogo.svg';
import reactLogo from '../assets/react.svg';
import reactQuery from '../assets/reactQuery.svg';
import redux from '../assets/redux.svg';
import tsLogo from '../assets/tsLogo.svg';
import tailwindcss from '../assets/tailwindcss.svg';
import mongodb from '../assets/mongodb.svg';
import nodejs from '../assets/nodejs.svg';
import expressjs from '../assets/expressjs.svg';
import postman from '../assets/postman.svg';
import postgresql from '../assets/postgresql.png';

//Projects data
export const projects = [
    {
        title: 'PLANeT',
        inDev: false,
        techs: [
            {
                tech: 'React JS',
                color: 'cyan'
            },
            {
                tech: 'Tailwind CSS',
                color: 'sky'
            },
            {
                tech: 'React Query',
                color: 'violet'
            },
            {
                tech: 'Socket.io',
                color: 'yellow'
            },
            {
                tech: 'PostgreSQL',
                color: 'green'
            },
            {
                tech: 'Express JS',
                color: 'teal'
            },
            {
                tech: 'Node JS',
                color: 'emerald'
            },
        ],
        imageUrl: planetProfile,
        content: 'An e-commerce / social media platform, that let the user sell plants, post, and send a message in real time! Test account below.',
        // testAccount: {
        //     email: 'Email: test123@gmail.com',
        //     password: 'Password: 123123',
        // },
        githubLink: 'https://github.com/limnixon03292001/planet-capstone',
        liveDemoLink: 'https://planet-capstone.onrender.com/'
    },
    {
        title: 'Connect',
        techs: [
            {
                tech: 'React JS',
                color: 'cyan'
            },
            {
                tech: 'Tailwind CSS',
                color: 'sky'
            },
            {
                tech: 'Redux',
                color: 'violet'
            },
            {
                tech: 'MongoDB',
                color: 'green'
            },
            {
                tech: 'Express JS',
                color: 'teal'
            },
            {
                tech: 'Node JS',
                color: 'emerald'
            },
        ],
        imageUrl: connectHome,
        demoGif: connectDemo,
        content: 'This is one of my dream projects, building a social media just like Facebook. Connect is a full-stack social media application. Test account below.',
        testAccount: {
            email: 'Email: test123@gmail.com',
            password: 'Password: 123123',
        },
        githubLink: 'https://github.com/limnixon03292001/connect-mern',
        liveDemoLink: 'https://connect-app.onrender.com/'
    },
    {
        title: 'Moview',
        migrating: true,
        techs: [
            {
                tech: 'React JS',
                color: 'cyan'
            },
            {
                tech: 'Tailwind CSS',
                color: 'sky'
            },
            {
                tech: 'React Query',
                color: 'rose'
            },
            {
                tech: 'Typescript',
                color: 'cyan'
            }
        ],
        imageUrl: moviewHome,
        content: 'Moview is a platform that provides information about movies using The MovieDB (TMDb) API.',
        githubLink: 'https://github.com/limnixon03292001/Moview-app',
        liveDemoLink: 'https://moview-app-iota.vercel.app/'
    },
    {
        title: 'Anindex',
        techs: [
            {
                tech: 'Next JS',
                color: 'gray'
            },
            {
                tech: 'React JS',
                color: 'cyan'
            },
            {
                tech: 'CSS',
                color: 'green'
            },
            {
                tech: 'React Query',
                color: 'rose'
            },
        ],
        imageUrl: anindexHome,
        content: 'Anindex is a platform that provides information about anime shows. It uses an api called Jikan API.',
        githubLink: 'https://github.com/limnixon03292001/anindex-nextjs',
        liveDemoLink: 'https://anindex-nextjs.vercel.app/'
    },
    {
        title: 'Binance Clone',
        techs: [
            {
                tech: 'React JS',
                color: 'cyan'
            },
            {
                tech: 'Tailwind CSS',
                color: 'sky'
            },
            {
                tech: 'Typescript',
                color: 'cyan'
            }
        ],
        imageUrl: binanceHome,
        content: 'I created this website to improve and apply my Tailwind CSS skills.',
        githubLink: 'https://github.com/limnixon03292001/Binance-clone',
        liveDemoLink: 'https://binance-clone-pi.vercel.app/'
    },
    {
        title: 'Todo List',
        techs: [
            {
                tech: 'Next JS',
                color: 'gray'
            },
            {
                tech: 'React JS',
                color: 'cyan'
            },
            {
                tech: 'CSS',
                color: 'green'
            },
            {
                tech: 'Typescript',
                color: 'cyan'
            }
        ],
        imageUrl: todolistapp,
        content: "A simple to-do list application, this is one of my first projects in React JS. The data is stored locally using the browser's local storage.",
        githubLink: 'https://github.com/limnixon03292001/nextjs-todolist-app',
        liveDemoLink: 'https://nextjs-todolist-app.vercel.app/'
    },
  
]

//Skills data
export const skills = [
    {
        svgUrl: reactLogo,
        title: 'React JS',
        color: 'rgb(0, 216, 255)',
    },
    // {
    //     svgUrl: nextjsLogo,
    //     title: 'Next JS'
    // },
    {
        svgUrl: reactQuery,
        title: 'React Query',
        color: 'rgb(255, 65, 84)',
    },
    {
        svgUrl: redux,
        title: 'Redux',
        color: 'violet',
    },
    {
        svgUrl: tsLogo,
        title: 'Typescript',
        color: 'rgb(13, 129, 207)',
    },
    {
        svgUrl: tailwindcss,
        title: 'Tailwind CSS',
        color: 'rgb(56, 189, 248)',
    },
    {
        svgUrl: postgresql,
        title: 'PostgreSQL',
        color: 'rgb(51, 103, 145)',
    },
    {
        svgUrl: mongodb,
        title: 'Mongo DB',
        color: 'rgb(0, 237, 100)',
    },
    {
        svgUrl: expressjs,
        title: 'Express JS',
        color: 'white',
    },
    {
        svgUrl: nodejs,
        title: 'Node JS',
        color: 'rgb(83, 158, 67)',
    },
    {
        svgUrl: postman,
        title: 'Postman',
        color: 'rgb(255, 108, 55)',
    },
]