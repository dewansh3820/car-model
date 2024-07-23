

AFRAME.registerComponent("car", {
    schema: {
      modelRef: { type: "string", default: "../future_car/scene.gltf" }
    },
    init: function() {
      // Do something when component first attached.
      this.el.setAttribute("gltf-model", this.data.modelRef);
      const position = { x: 0, y: 35, z: 175 };
      const rotation = { x: 0, y: -224, z: 0 };
      const scale = { x:10, y:10, z:10 };
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", rotation);
      this.el.setAttribute("scale", scale)
    },

    update: function() {

      

      window.addEventListener("click",e=>{
        this.data.clickCounter = this.data.clickCounter + 1

        if (this.data.clickCounter === 1){
          const rotation = {x:0, y:-311 , z:0}
          this.el.setAttribute("rotation", rotation)
        }

        else if (this.data.clickCounter === 2){
          const rotation = {x:0, y:-270 , z:20}
          this.el.setAttribute("rotation", rotation)
        }else if (this.data.clickCounter === 3){
          const rotation = {x:0, y:-400 , z:0}
          this.el.setAttribute("rotation", rotation)
        }else {
          const rotation = {x:0, y:-224, z:0}
          this.el.setAttribute("rotation", rotation)
          this.data.clickCounter = 0
        }


      })

    }
})