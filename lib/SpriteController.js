/*
This is the spritecontroller class
the engine creates one of these at runtime, it is called "SL".

Sprites are defined in obj/Sprites.js and you can access them like this:
   sprite = SL.Sprite(<SPRITENAME>);

to draw:
   sprite.draw(x,y,ctx);
or if manually:
   image = sprite.get();
or
   image = SL.get(<SPRITENAME>);
*/

class SpriteController {
  constructor () {
    this.Sprites = undefined;
    this.initialized = false;

    //Called in Main.js (Initialises Sprite Controller)
    this.init = function(x) {
      this.initialized = true;
      this.Sprites = x;
    }

    //Returns Sprite used like SL.Sprite(<SpriteName>)
    this.Sprite = function(x) {
      let obj = this.Sprites[x];

      //Add Sprite Functions
      obj.get = function() {
         let img = new Image();
         img.src = this.src;
         return img;
      }

      obj.getDrawArgs = function(x,y) {
         let args = {
            'sx': this.frameOffset[0],
            'sy': this.frameOffset[1],
            'sWidth': this.frameSize[0],
            'sWidth': this.frameSize[1],
            'scale': this.scale,
            'dWidth': this.frameOffset[0]*this.scale[0],
            'dHeight': this.frameOffset[1]*this.scale[1],
            'dx': x || 0,
            'dy': y || 0
         }
         return args;
      }

      obj.draw = function(x,y,ctx) {
         let img = new Image();
         img.src = this.src;

         let args = this.getDrawArgs(x,y);
         ctx.drawImage(img, args.sx, args.sy, args.sWidth, args.sHeight, args.dx, args.dy, args.dWidth, args.dHeight);
      }

      return obj;
    }

    //This is a shortcut, used like SL.get(<SpriteName>)
    this.get = function(x) {
      let spr = this.Sprites[x];
      let a = new Image();
      a.src = spr.src;
      return a;
   }

    //Used to add sprite after initialization
    this.addSprite = function(name,src,width,height) {
      this.Sprites[name] = {};
      this.Sprites[name].src = src;
      this.Sprites[name].width = width;
      this.Sprites[name].height = height;
      return this.Sprites[name];
    }
  }
}
