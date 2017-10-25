import store from './store';

export const Play = () => {
    let SongList = [...store.getState().playList];
    let currentPlay = store.getState().currentPlay;
    SongList[currentPlay].isPlaying = true;
    store.setState ({
        playList: SongList
    });
}

export const Stop = () => {
    let SongList = [...store.getState().playList];
    let currentPlay = store.getState().currentPlay;
    SongList[currentPlay].isPlaying = false;
    store.setState ({
        playList: SongList
    });
}

export const Next = () => {
    Stop();
    let index = store.getState().currentPlay;
    let songs = store.getState().playList;
    const newPosition = index + 1;
    if(newPosition === songs.length ){
        store.setState({
            currentPlay: 0
        });
    } else {
        store.setState({
            currentPlay: newPosition
        });
    }
    Play();
}