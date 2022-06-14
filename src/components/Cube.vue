<template>
  <div class="containerr">
    <div class="cube">
      <div class="face front d-flex justify-contnet-center">
        <img
          class="img-fluid"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/2048px-.NET_Core_Logo.svg.png"
        />
      </div>
      <div class="face back d-flex justify-content-center">
        <img
          class="img-fluid c-badge"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--IMy76vSA--/c_limit,f_auto,fl_progressive,q_80,w_375/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/33/csharp-badge.png"
        />
      </div>
      <div class="face right d-flex justify-content-center">
        <img
          class="img-fluid badgetd w-90 h-99"
          src="https://www.nicepng.com/png/detail/142-1423886_html5-css3-js-html-css-javascript.png"
        />
      </div>
      <div class="face left d-flex justify-content-center">
        <img
          class="img-fluid badget"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
        />
      </div>
      <div class="face bottom d-flex justify-content-center p-3">
        <img
          class="img-fluid"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
        />
      </div>
      <div class="face top d-flex justify-content-center">
        <img
          class="img-fluid"
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--JEjbOLD1--/c_limit,f_auto,fl_progressive,q_80,w_375/https://dev-to-uploads.s3.amazonaws.com/uploads/badge/badge_image/23/node-sticker.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.badget {
  transform: scaleX(-1);
}

.badgetd {
  transform: scaleX(-1);
}
.c-badge {
  transform: scaleY(-1);
}

.containerr {
  width: 200px;
  height: 200px;
  perspective: 1000px;
}

.cube {
  transform-style: preserve-3d;
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 20vh;
  animation: spin 5000ms linear;
}

.face {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 2px 10px black;
}

.top {
  transform: rotateX(90deg) translateZ(100px);
}
.bottom {
  transform: rotateX(-90deg) translateZ(100px);
}

.right {
  background-color: whitesmoke;
  transform: rotateY(90deg) translateZ(100px);
}
.left {
  transform: rotateY(-90deg) translateZ(100px);
}

.front {
  transform: rotateX(0deg) translateZ(100px);
}
.back {
  transform: rotateX(-180deg) translateZ(100px);
}

.right {
  animation: breakRight 1500ms linear;
  animation-fill-mode: both;
  animation-delay: 5000ms;
  /*background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png");
  background-position: center;
  background-size: 50%;
  background-repeat: no-repeat;
  background-*/
}
.back {
  animation: breakBack 1500ms linear;
  animation-fill-mode: forwards;
  animation-delay: 5000ms;
}

.left {
  animation: breakLeft 1500ms linear;
  animation-fill-mode: forwards;
  animation-delay: 5000ms;
}

.front {
  animation: spinT 1500ms linear;
  animation-fill-mode: forwards;
  animation-delay: 5000ms;
}

.bottom {
  animation: spinBottom 1500ms linear;
  animation-fill-mode: forwards;
  animation-delay: 5000ms;
}

.top {
  animation: spinTop 2000ms linear;
  animation-fill-mode: forwards;
  animation-delay: 5000ms;
}

img {
  margin: 10%;
}

@keyframes spin {
  from {
    transform: rotateX(0deg) rotateY(0deg);
    margin-top: 0;
  }
  to {
    transform: rotateX(360deg) rotateY(360deg);
    margin-top: 15em;
  }
}

@keyframes spinT {
  0% {
    transform: translateY(0%);
  }
  50% {
  }
  100% {
    transform: translateY(-5%) translateZ(-200px);
    width: 100vw;
    height: 100vh;
  }
}

@keyframes spinTop {
  0% {
  }

  100% {
    transform: translateY(-50%) translateZ(-200px) rotateZ(90deg)
      translateY(-90em);
    width: 13em;
  }
}

@keyframes spinBottom {
  50% {
    transform: translateY(50%) translateZ(-200px) rotateX(-90deg);
  }
  100% {
    transform: translateY(-2%) translateZ(-200px) rotateX(0deg);
    margin-left: 14.5em;
    margin-top: 0.3em;
    width: 13em;
  }
}

@keyframes breakRight {
  20% {
    transform: rotateY(90deg) translateZ(100px);
    width: 10%;
    height: 10%;
  }
  80% {
    transform: rotateY(180deg) translateZ(-200px);
    margin-left: 15em;
  }
  100% {
    transform: rotateY(180deg) translateZ(50px);
    margin-top: 24em;
    width: 20em;
  }
}

@keyframes breakLeft {
  20% {
    transform: rotateY(-90deg) translateZ(100px);
  }
  80% {
    transform: rotateY(-180deg) translateZ(90px);
    margin-left: 15em;
  }
  100% {
    transform: rotateY(-180deg) translateZ(150px);
    margin-left: 14.2em;
    margin-top: 13em;
    width: 13em;
  }
}

@keyframes breakBack {
  20% {
  }
  80% {
  }
  100% {
    margin-top: 11.75em;
    width: 13em;
  }
}
</style>
