export function backConcern(state: any, astroWorld: any){
    const time = astroWorld.history.length;
    if(time > 0){
      const back = astroWorld.history[time-1]
      state.map = [...back]
      astroWorld.map = [...back]
      astroWorld.history = [...astroWorld.history.slice(0,time-1)]
    }
}