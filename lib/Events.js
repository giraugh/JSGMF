function game_init() {
   let keys = Object.keys(window)
   for (i=0;i<keys.length;i++) {
      let key = keys[i]
      if (key.indexOf("init_") != -1) {
         if (typeof window[key] === "function")
            window[key]()
      }
   }
}

function game_draw(ctx) {
   let keys = Object.keys(window)
   for (i=0;i<keys.length;i++) {
      let key = keys[i]
      if (key.indexOf("draw_") != -1) {
         if (typeof window[key] === "function")
            window[key](ctx)
      }
   }
}

function game_update() {
   let keys = Object.keys(window)
   for (i=0;i<keys.length;i++) {
      let key = keys[i]
      if (key.indexOf("update_") != -1) {
         if (typeof window[key] === "function")
            window[key]()
      }
   }
}
