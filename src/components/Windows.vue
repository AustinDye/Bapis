<template>
  <div class="window" id="system-window" data-is-open="data-is-closed">
    <div class="title-bar">
      <button class="close"><span class="hidden">Close</span></button>
      <h1 class="title">Austin Dye</h1>
      <button class="resize"><span class="hidden">Resize</span></button>
    </div>
    <div class="details-bar" @click="switchPage()">
      <span></span><span>https://github.com/AustinDye</span><span></span>
    </div>
    <div class="window_pane p-0" v-if="page">
      <GitHub />
    </div>
    <div class="window_pane p-0" v-else>
      <About />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { fakeWebService } from "../services/FakeWebServices";
export default {
  props: {},
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.info-box {
  outline: black 1.5px solid;
}

.public-bool {
  outline: #000 1px solid;
  border-radius: 0.5em;
}
//LETS PRACTICE SOME SASS
$monospace: "Inconsolata", Menlo, Chicago, monospace;
$fontSize: 18px;
$title_font_size: 1.3rem;
$listLine: 2px;
$pdSm: 0.2rem;
$pdMd: 0.4rem;
$pdLg: 1rem;

@mixin hidden {
  position: absolute !important;
  clip: rect(1px, 1px, 1px, 1px);
}

// Square Gradient found At http://lea.verou.me/css3patterns/
@mixin crossWeaveBG($color, $size) {
  $sq: $color;
  $sq_size: $size;

  background: linear-gradient(
      45deg,
      $sq 25%,
      transparent 25%,
      transparent 75%,
      $sq 75%,
      $sq
    ),
    linear-gradient(
      45deg,
      $sq 25%,
      transparent 25%,
      transparent 75%,
      $sq 75%,
      $sq
    );
  background-color: white;
  background-size: $sq_size $sq_size;
  background-position: 0 0, $sq_size/2 $sq_size/2;
}

html {
  font-family: $monospace;
  font-size: $fontSize;
  letter-spacing: -0.025em;
  min-height: 100vh;
}

.desktop {
  @include crossWeaveBG(#94bee2, 3px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: auto;
}

.desktop-icons {
  position: absolute;
  flex: none;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .icon {
    $size: 2rem;

    position: relative;
    display: block;
    width: $size;
    height: $size;
    margin: $size * 0.5 $size;
    border: $listLine solid black;
    cursor: default;

    &[data-is-open] {
      @include crossWeaveBG(#000, 3px);
      border-color: transparent;

      .icon-label {
        background-color: #000;
        color: #fff;
      }
    }

    &-label {
      display: inline-block;
      position: absolute;
      top: $size;
      left: 50%;
      padding: 0 0.25em;
      margin-top: -2px;

      max-width: $size + ($size * 2);
      overflow: hidden;
      transform: translateX(-50%);

      font-size: 0.75em;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;

      background-color: #fff;
      user-select: none;

      &[contenteditable] {
        user-select: auto;
      }
    }
  }
}

.menu-bar {
  background-color: #000;
  border-bottom: $listLine solid #000;
  overflow: hidden;
}

.menu-items {
  position: relative;
  display: flex;
  list-style: none;
  padding: 0 1em;
  margin: 0;
  background-color: #fff;
  border-radius: 0.5em 0.5em 0 0;
  cursor: default;

  li {
    padding: $pdSm $pdMd * 2;
    margin: 0;
    margin-bottom: 0.1rem;
    font-size: $title_font_size;
    font-weight: bold;
  }

  .apple {
    filter: grayscale(100%);
  }
}

.window {
  display: none;
  flex-direction: column;
  margin: 1rem;

  max-height: 83vh;
  max-width: 100vw;
  min-width: 80vw;
  min-height: 40vh;
  overflow: hidden;

  background-color: #fff;
  border: 0.1em solid #000;

  &[data-is-open] {
    display: flex;
  }

  &_pane {
    overflow-y: scroll;
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    //I cannot find the reference I used for this scrollbar, when I do I'll update this comment
    &::-webkit-scrollbar {
      width: 22px;
      background-color: #fff;
    }

    &::-webkit-scrollbar-track {
      @include crossWeaveBG(#000, 4px);
      width: 10px;
      border-left: 4px solid black;
    }

    &::-webkit-scrollbar-thumb {
      width: 20px;
      box-sizing: content-box;
      background-color: #fff;
      border: $listLine solid black;
      border-right: none;
    }
  }

  &.resized {
    max-width: 100%;
    width: 90vw;
    height: 90vh;
  }
}

.title-bar {
  flex: none;
  display: flex;
  align-items: center;
  height: 1.5rem;
  margin: $pdSm/2 0;
  padding: $pdSm $pdSm/2;

  $lines: 6;
  $p: 100% / 15;
  background: linear-gradient(#000 50%, transparent 50%);
  background-size: $p $p * 2;
  background-clip: content-box;

  cursor: move;

  .title {
    padding: 0 0.5em;
    margin: 0 auto;

    font-size: $title-font-size;
    font-weight: bold;
    line-height: 1.1;
    text-align: center;

    background: #fff;
    cursor: default;
  }
}

.title-bar button {
  // I have no idea what I am doing at this point
  $buttonLine: $listLine * (1 / 0.5);

  position: relative;
  display: block;
  width: 20px * (1 / 0.5);
  height: 20px * (1 / 0.5);
  margin: 0 $pdSm;
  border: $buttonLine solid #000;
  outline: clamp($listLine, $buttonLine, $listLine * 3) solid #fff;
  background-color: #fff;
  cursor: pointer;

  transform: scale(0.5);

  span {
    @include hidden();
  }

  &.close {
    @mixin bg_crossed_lines($w: 30%, $h: $buttonLine) {
      $line: #000 0%, #000 100%;
      background: linear-gradient($line) left center,
        linear-gradient($line) right center, linear-gradient($line) center top,
        linear-gradient($line) center bottom;
      background-size: $w $h, $w $h, $h $w, $h $w;
      background-repeat: no-repeat;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
    }

    &::before {
      @include bg_crossed_lines();
    }

    &::after {
      $s: 1.1;
      $height: $buttonLine / $s;
      @include bg_crossed_lines($w: 22.5%, $h: $height);
      transform: rotate(45deg) scale($s);
    }

    &:active {
      &::before,
      &::after {
        opacity: 1;
      }
    }
  }

  &.resize {
    $line: #000 0%, #000 100%;
    $w: 60%;
    $h: $buttonLine;
    background: linear-gradient($line) left ($w - 2%),
      linear-gradient(to bottom, $line) ($w - 2%) top;
    background-size: $w $h, $h $w;
    background-repeat: no-repeat;
    background-color: #fff;
    &:active {
      background: #fff;
    }
  }
}

.details-bar {
  flex: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: $pdMd $pdMd * 2;
  border: 0.1rem solid black;
  border-width: 0.1rem 0;
  font-size: 1rem;
}

.window_pane {
  background-color: #161b22;
  color: white;
}
</style>
