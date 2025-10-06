import * as AN from "./src/Rendering.js";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Screen.getMode();


const FRAME_WIDTH = 32;
const FRAME_HEIGHT = 44;
const MAP_INIT_x = 0;
const MAP_INIT_y = 0;

Screen.setVSync(true); // makes framerate stable
Screen.setFrameCounter(true); // toggles frame counting and FPS collecting.
const pad = Pads.get(0);
const player ={
  posx:0,
  posy:0,
  height:8,
  width:8,
  Sprite:null,
  frame:0,
  frameTimer:0,
  locked:false
};

const sheet = new Image("./assets/roguebitassets.png",RAM);
const map = [
 [1,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,5],
 [2,0,7,0,7,0,7,0,0,0,7,0,7,0,7,0,7,0,0,6],
 [2,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,0,6],
 [2,0,7,0,0,0,7,0,7,0,0,0,7,0,0,0,7,0,0,6],
 [2,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,0,6],
 [2,0,0,0,7,0,0,0,7,0,7,0,7,0,7,0,7,0,0,6],
 [2,0,7,0,7,0,7,0,7,0,7,0,0,0,7,0,7,0,0,6],
 [2,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,0,6],
 [2,0,0,0,0,0,7,0,0,0,7,0,7,0,0,0,7,0,0,6],
 [2,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,0,6],
 [2,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,0,6],
 [2,0,0,0,7,0,0,0,7,0,0,0,7,0,0,0,0,0,0,6],
 [2,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,7,0,0,6],
 [3,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,4],


]




Screen.display(() => {
  AN.mapdrawer(map,sheet);
  



  //PD.drawplayer(player);
  //draw()
  //drawmap()
  //drawplayer()
  //handleinput()
  //update()
});
