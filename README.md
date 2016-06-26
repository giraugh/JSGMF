# JSGMF
A blank slate
### A setup for making games with JavaScript.
<i><b>and a bunch of other usefull crap which you can use on its own.</b></i>
## How it Works

#### When the games starts:
1. The <b>index.html</b> file links <b>ALL</b> libraries (including Engine; JSGMF)
2. <b>index.html</b> links the <b>Definitions.js</b> File which defines game settings (such as name)
3. The <b>Main.js</b> file Initializes libraries and then starts the JSGMF engine.
4. The <code>game_init()</code> function is called (defined in <b>scr/Init/Init.js</b>)

<br />
#### Then, every frame:
1. The <code>game_draw()</code> function is called
2. The <code>game_draw()</code> function calls the <code>game_update()</code> function first
3. Then the drawing code is executed.

## Some Tips
* Try to keep all event code in its folder but in different scripts,
  for example if you have a function <code>updatePlayer()</code> inside <code>game_update()</code>
  put it in its own script <b>UpdatePlayer.js</b> & Add it to the linked scripts in <b>index.html</b>
* Put simple definitions with no dynamic code inside the <b>obj</b> folder.
* Put files that are only relative to your game, but instantiated or static inside a <b>header</b>
  folder (which you have to create)
* Put external libraries or scripts that could be used in other games inside the <b>lib</b> folder.
* Decide before making your game whether you will support old versions of ECMAscript. (i.e do you use <code>let</code>)
* Decide beforehand on whether you will insert semicolons, [there is a good video by funfunfunction](https://www.youtube.com/watch?v=Qlr-FGbhKaI) on this.
* Consider also using [Electron](http://electron.atom.io/) if you want file system access, windows deployment & more freedom at the expense of having no web deployment.
* If you have any problems/questions contact me [here](mailto:sheeplovedemocracy@gmail.com)


## Other Features
* A sprite & image system, check out <b>lib/SpriteController.js</b> for that.<br>
  It basically lets you load sprites into <b>obj/Sprites.js</b> and use them without
  much<br>configuration.
* An input system, in <b>lib/Inputs.js</b> similiar to the sprite system, you use  
  <b>obj/Inputs.js</b> to define inputs and then the library to access & parse it.
* Gamepad support! through a combination of <b>Imperium</b> & <b>Input</b>.
* Cookie saving! Use <b>Oven</b> for that.

## Some Annoying Limitations
Unfortunately due to the nature of JavaScript and web development there is some stuff you cant do:
* You have absolutely no access to the file system! (Except Cookies)
* (Similar to above) You can only load Scripts, Images & Sounds.
* Tainted canvas's cannot be saved.
* no infinite while loops, they prevent animation frames (which JSGMF relies on) and make your game hang.

<b>Note: These are sweeping terms, and may only apply to some browsers, but as they apply to some,
its recommended that you just adhere to them in order to make your game more accessible.</b>


## Looking to the future!
In the future, possibly I will be making a new engine built on web-gl (which would allow for shaders and other cool stuff!)<br />
If you are looking for shaders/3d now, check out [Three.js](http://Threejs.org).
