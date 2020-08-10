import React from 'react';
//import Card from './Card';
import Card from './Card.css'
const CardList = ({ robots }) => {
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                        // <Card
                        //     key={i}
                        //     id={user.id}
                        //     name={robots[i].name}
                        //     email={user.email}

                        // />
                        <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5'>
                            <img src={`https://robohash.org/${user.id}`} alt='robots' />
                            <div>
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                            </div>
                        </div>

                    );
                })
            }
        </div>
    );

}

export default CardList;