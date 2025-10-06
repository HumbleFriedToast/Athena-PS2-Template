
export function mapselector(image,map_id_x,map_id_y){
    image.startx = 8*map_id_x;
    image.starty = 8*map_id_y;
    image.endx= 8+8*map_id_x;
    image.endy = 8+8*map_id_y;
    image.width = 32;
    image.height = 32;
    return image;
}
export function mapdrawer(map,sprite){
    for(let i=0;i<map.length;i++){
        for(let j=0;j<map[i].length;j++){
            switch (map[i][j]){
                case 1:
                    var map_s = mapselector(sprite,1,1);
                    drawEntity(map_s,j*32,i*32);
                    break;
                case 2:
                    var map_s = mapselector(sprite,1,2);
                    drawEntity(map_s,j*32,i*32);
                    break;
                case 3:
                    var map_s = mapselector(sprite,1,3);
                    drawEntity(map_s,j*32,i*32);
                    break;
                case 4:
                    var map_s = mapselector(sprite,3,3);
                    drawEntity(map_s,j*32,i*32);
                    break;
                case 5:
                    var map_s = mapselector(sprite,3,1);
                    drawEntity(map_s,j*32,i*32);
                    break;
                case 6:
                    var map_s = mapselector(sprite,3,2);
                    drawEntity(map_s,j*32,i*32);
                    break;
                case 7:
                    var map_s = mapselector(sprite,2,1);
                    drawEntity(map_s,j*32,i*32);
                    break;
                case 8:
                    var map_s = mapselector(sprite,2,3);
                    drawEntity(map_s,j*32,i*32);
                    break;
                default:
                    break;
                    
                
            }
        }
}
}


 export function LoadSpriteRAM(sprite){
    const image = new Image(sprite,RAM);
    return image;  
};

export function drawEntity(Sprite,x,y){
    Sprite.draw(x,y);
};

export function ssselector(sprite,sprite_id){
    const image = new Image(sprite,RAM);
    image.startx = 32+8*sprite_id;
    image.starty = 32+8*sprite_id;
    image.endy = 40+8*sprite_id;
    image.endx = 40+8*sprite_id;
    image.width = 32;
    image.height = 32;
    return image;  
}