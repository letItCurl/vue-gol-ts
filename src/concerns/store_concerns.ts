export function backConcern(state: any, astroWorld: any){
    const time = astroWorld.history.length;
    if(time > 1){
        const back = astroWorld.history[time-2]
        state.map = [...back]
        astroWorld.map = [...back]
        astroWorld.history.pop()
        return true
    }else{
        astroWorld.history.pop()
        return false
    }
} 