import { Children } from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
    {
        userName: 'eslansa',
        name: 'Eslan Sanchez Alvarez',
        isFollowing: true,
        img: 'eslansa.jpg'
    },
    {
        userName: 'liloh',
        name: 'Lianely Diaz Molina',
        isFollowing: false,
        img: 'lianely.jpg'
    },
    {
        userName: 'rych',
        name: 'Gil Ramses Manzano',
        isFollowing: true,
        img: 'rych.jpg'
    },
]

export function App() {

    return (
            <section className="App">
                {
                    users.map(user=> {
                        const {img, userName, name, isFollowing} = user
                    return (
                        <TwitterFollowCard
                        img={img}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                    })
                }
            </section>
    );
}
