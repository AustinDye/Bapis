<template>
  <div class="window" id="system-window" data-is-open="data-is-open">
    <div class="title-bar">
      <button class="close"><span class="hidden">Close</span></button>
      <h1 class="title">Austin Dye</h1>
      <button class="resize"><span class="hidden">Resize</span></button>
    </div>
    <div class="details-bar">
      <span>35 GitHub Repos</span><span>231 GitHub Commits</span
      ><span>123 Other Data</span>
    </div>
    <div class="window__pane">
      <ul class="files">
        <li>Vue.js</li>
        <li>Javascript</li>
        <li>HTML 5</li>
        <li>CSS 3</li>
        <li>Node.js</li>
        <li>C#</li>
        <li>.NET</li>
        <li>SQL</li>
        <li>BootStrap 5</li>
        <li>MongoDB</li>
      </ul>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
$monospace: "Inconsolata", Menlo, Chicago, monospace;
$base_font_size: 18px;
$title_font_size: 1.3rem;
$ui_line_size: 2px;
$pad_sm: 0.2rem;
$pad_md: 0.4rem;
$pad_lg: 1rem;

@mixin hidden {
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}

@mixin chequeredBG($color, $size) {
  // Squares gradient background - thanks @leaverou 🙌
  // http://lea.verou.me/css3patterns/
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
  font-size: $base_font_size;
  letter-spacing: -0.025em;
  min-height: 100vh;
  // -webkit-font-smoothing: none;
}

.desktop {
  @include chequeredBG(#94bee2, 3px);
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
    border: $ui_line_size solid black;
    cursor: default;

    &[data-is-open] {
      @include chequeredBG(#000, 3px);
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
      margin-top: -2px; // not sure why this fudge is needed??

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
  border-bottom: $ui_line_size solid #000;
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
    padding: $pad_sm $pad_md * 2;
    margin: 0;
    margin-bottom: 0.1rem; // line-height fudge
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
  width: 600px;
  min-width: 320px;
  min-height: 100px;
  resize: both;
  overflow: hidden;

  background-color: #fff;
  border: 0.1em solid #000;

  &[data-is-open] {
    display: flex;
  }

  &__pane {
    overflow-y: scroll;
    padding: 1rem 2rem;
    margin-bottom: 1rem;

    &::-webkit-scrollbar {
      width: 22px;
      background-color: #fff;
    }

    &::-webkit-scrollbar-track {
      @include chequeredBG(#000, 4px);
      width: 10px;
      border-left: 4px solid black;
    }

    &::-webkit-scrollbar-thumb {
      width: 20px;
      box-sizing: content-box;
      background-color: #fff;
      border: $ui_line_size solid black;
      border-right: none;
    }
  }

  &.resized {
    max-width: 90%;
    width: 90vw;
    height: 90vh;
  }
}

.title-bar {
  flex: none;

  display: flex;
  align-items: center;
  height: 1.5rem;
  margin: $pad_sm/2 0;
  padding: $pad_sm $pad_sm/2;

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
  // painting larger and then scaling down avoids subpixel alignment issues with the linear-gradient at small sizes

  $scale: 0.5;
  $button_scaled_line_size: $ui_line_size * (1 / $scale);

  position: relative;
  display: block;
  width: 20px * (1 / $scale);
  height: 20px * (1 / $scale);
  margin: 0 $pad_sm;
  border: $button_scaled_line_size solid #000;
  outline: clamp($ui_line_size, $button_scaled_line_size, $ui_line_size * 3)
    solid #fff;
  background-color: #fff;
  cursor: pointer;

  transform: scale($scale);

  span {
    @include hidden();
  }

  &.close {
    @mixin bg_crossed_lines($w: 30%, $h: $button_scaled_line_size) {
      $line: #000 0%, #000 100%;
      $debugline: red 0%, red 100%;

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
      // horizontal & vertical crosshairs
      @include bg_crossed_lines();
    }

    &::after {
      // diagonal (rotated) crosshairs
      $s: 1.1;
      $height: $button_scaled_line_size / $s;

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
    $h: $button_scaled_line_size;

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
  padding: $pad_md $pad_md * 2;

  border: 0.1rem solid black;
  border-width: 0.1rem 0;

  font-size: 1rem;
}
</style>
