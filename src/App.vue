<template>
  <div class="computer d-flex justify-content-center">
    <div id="monitor">
      <div id="bezel">
        <!-- Filter -->
        <div id="crt" class="off" onClick="handleClick(event)">
          <!-- Scanline -->
          <div class="scanline"></div>
          <!-- Screen -->
          <div class="terminal">
            <div class="container p-0">
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
                <div class="col-6">
                  <Windows />
                </div>
                <div class="col-6">
                  <div class="row d-flex align-items-end flex-column m-2">
                    <div class="col-2">
                      <img
                        class="img-fluid"
                        src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/d7e4e1e509c728d.png"
                        alt=""
                      />
                      <p class="text-center bg-white">Github</p>
                    </div>
                    <div class="col-2">
                      <img
                        class="img-fluid"
                        src="http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/0baeb31aedf8e64.png"
                        alt=""
                      />
                      <p class="text-center bg-white">LinkedIn</p>
                    </div>
                    <div class="col-2"></div>
                    <div class="col-2"></div>
                    <div class="col-2"></div>
                    <div class="col-2"></div>
                  </div>
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
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),

      async boot() {
        clear();
        await typer("Hello world");

        login();
      },
      async main() {
        let command = await input();
        await parse(command);

        main();
      },
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
  margin: 5%;
  border-radius: 0.8em / 10%;
  background-color: grey;
  overflow: hidden;
  border: 2em #e8e3c9 inset;
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
