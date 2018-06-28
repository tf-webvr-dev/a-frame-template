<template>
    <a-scene>
        <a-assets>
            <!-- Sound. -->
            <audio id="click-sound" src="static/sound/click.wav"></audio>
            <!-- Images. -->
            <img id="city" src="static/image/city.jpg">
        </a-assets>

        <a-box id="box"
            position="-1 0.5 -3"
            rotation="0 45 0"
            color="#4CC3D9"
            @click.native="clickBox()">
        </a-box>

        <a-sky id="image-360" radius="10" src="#city"></a-sky>

        <a-entity 
            laser-controls="hand:right"
            oculus-go-controls="hand:right; armModel:false">
        </a-entity>

    </a-scene>    
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
    }
  },
  methods: {
      clickBox(ev){
        ev.target.setAttribute('color', '#0F0')
        console.log("clickBox")
      }
  }
}
</script>
