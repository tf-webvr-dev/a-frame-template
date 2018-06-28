<template>
    <a-scene>
        <a-assets>
            <!-- Sound. -->
            <audio id="click-sound" src="static/sound/click.wav"></audio>
            <!-- Images. -->
            <img id="city" src="static/image/city.jpg">
        </a-assets>

        <a-sky id="image-360" radius="10" src="#city"></a-sky>
      
        <!-- Camera + Cursor. -->
        <a-camera gamepad-controls 
            sound="src: static/click.wav; on: gamepadbuttondown:0">
            <a-cursor id="cursor">
                <a-animation
                    begin="click"
                    easing="ease-in"
                    attribute="scale"
                    fill="backwards"
                    from="0.1 0.1 0.1"
                    to="1 1 1"
                    dur="150">
                </a-animation>
                <a-animation
                    begin="cursor-fusing"
                    easing="ease-in"
                    attribute="scale"
                    from="1 1 1"
                    to="0.1 0.1 0.1"
                    dur="1500">
                </a-animation>
            </a-cursor>
        </a-camera>
    </a-scene>    
</template>

<script>
export default {
  name: 'GamePad',
  data () {
    return {
    }
  }
}
</script>
