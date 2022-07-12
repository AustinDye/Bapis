<template>
  <div class="computer d-flex justify-content-center">
    <div id="monitor">
      <div id="bezel">
        <!-- Filter -->
        <div id="crt" class="off">
          <div class="scanline"></div>
          <!-- Screen -->
          <div class="terminal">
            <div>
              <div class="bg-white d-flex justify-content-start topbar">
                <div class="row">
                  <div class="col-4 d-flex">
                    <i class="mdi mdi-apple mdi-24px mx-2"></i>
                    <p class="fs-3 my-0 pb-0">Home</p>
                  </div>
                  <div class="col-4">
                    <p class="fs-3 ps-2 my-0 pb-0">Skills</p>
                  </div>
                  <div class="col-4">
                    <p class="fs-3 my-0 pb-0">About</p>
                  </div>
                </div>
              </div>
              <div class="row window-row">
                <div class="col-12">
                  <Windows />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "./AppState";
import { fakeWebService } from "./services/FakeWebServices";
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
};
</script>
<style lang="scss">
#crt:before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    to bottom,
    rgba(18, 16, 16, 0) 50%,
    rgba(0, 0, 0, 0.082) 50%
  );
  background-size: 100% 5px;
  z-index: 2;
  pointer-events: none;
}

.scanline {
  width: 100%;
  height: 100px;
  z-index: 8;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.671),
    rgba(255, 255, 255, 0.009) 100%
  );
  opacity: 0.1;
  position: absolute;
  bottom: 100%;
  animation: scanline 4s linear infinite;
}
#monitor {
  position: relative;
  width: 100vw;
  font-family: "VT323", monospace;
  margin: 1%;
  border-radius: 0.8em / 10%;
  background-color: grey;
  overflow: hidden;
  border: 1em #e8e3c9 inset;
}
.computer {
  background-color: #f9f4d9;
  width: 100vw;
  height: 100vh;
}
.topbar {
  border-bottom: 3px black solid;
}
//ez scanline
@keyframes scanline {
  0% {
    bottom: 100em;
  }
  80% {
    bottom: 80%;
  }
  100% {
    bottom: -10em;
  }
}
</style>
