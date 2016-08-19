# JSGMF
A blank slate; JSGMF is for people who want to make a game in javascript with little hand holding to gain an experience about creating core systems or people who like to see all of the standard library in from of them.
### A setup for making games with JavaScript.
<i><b>and a bunch of other useful crap which you can use on its own.</b></i>
## How it Works

#### When the games starts:
1. The <b>index.html</b> file links <b>ALL</b> libraries (including Engine; JSGMF)
2. <b>index.html</b> links the <b>Definitions.js</b> File which defines game settings (such as name)
3. The <b>Main.js</b> file Initializes libraries and then starts the JSGMF engine.
4. The <code>game_init()</code> function is called (defined automatically by <b>lib/Events.js</b>)

<br />
#### Then, every frame:
1. The <code>game_update()</code> function is called
2. The <code>game_draw()</code> function is called

## Scripts
Write all related code (i.e. "player" or "enemy") in scripts in the <code>scr</code>
folder. In the script, define functions prefixed with <code>init\_</code>,
<code>update\_</code> & <code>draw\_</code> to have them automatically added to the
event.

## Some Tips
* Make sure all functions are prefixed correctly with
<code>init\_</code>, <code>update\_</code> & <code>draw\_</code>
* Put simple definitions with little dynamic code inside the <b>obj</b> folder.
* Put external libraries or scripts that could be used in other games inside the <b>lib</b> folder.
* Due to the game only being able to save data in cookies, note that there is a soft limit of 50 cookies (restricted by browsers not engine).
* If like me, you have some grudges against javascript, use [coffeescript](http://coffeescript.org).
* Decide beforehand on whether you will insert semicolons, [there is a good video by funfunfunction](https://www.youtube.com/watch?v=Qlr-FGbhKaI) on this.
* If you have any problems/questions contact me [here](mailto:sheeplovedemocracy@gmail.com)


## Other Features
* A sprite & image system, check out <b>lib/SpriteController.js</b> for that.<br>
  It basically lets you load sprites into <b>obj/Sprites.js</b> and use them without
  much<br>configuration.
* An input system, in <b>lib/Inputs.js</b> similiar to the sprite system, you use  
  <b>obj/Inputs.js</b> to define inputs and then the library to access & parse it.
* Gamepad support! through a combination of <b>Imperium</b> & <b>Input</b>.
* Cookie saving! Use <b>Oven</b> for that.
* A chainable GUI generator library.

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
