import React, { useState, createContext, useContext } from 'react';

import { Cotainer, Inner, Button, Overlay, Close } from './styles/player';
import ReactDOM from 'react-dom';

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
    const [ShowPlayer, setShowPlayer] = useState(false);
    return (
        <PlayerContext.Provider value={{ ShowPlayer, setShowPlayer }}>
            <Cotainer {...restProps}>{children}</Cotainer>
        </PlayerContext.Provider>
    )
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
    const { ShowPlayer, setShowPlayer } = useContext(PlayerContext)
    return ShowPlayer ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
            <Inner>
                <video id="netflix-player" controls>
                    <source src={src} type="video/mp4" />
                </video>
                <Close />
            </Inner>
        </Overlay>,
        document.body
    )
        : null;
};

Player.Button = function PlayerButton({ ...restProps }) {
    const { setShowPlayer } = useContext(PlayerContext);

    return (
        <Button onClick={() => setShowPlayer((ShowPlayer) => !ShowPlayer)} {...restProps}>
            Play
        </Button>
    );
};