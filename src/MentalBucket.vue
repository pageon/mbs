<script>

const COLOURS = [
  'var(--bs-success)', // 1
  'var(--bs-info)',    // 2
  'var(--bs-warning)', // 3
  'var(--bs-danger)'   // 4
]

export default {
  data() {
    return {
      level: 0,
      timeouts: [],
      scrollLocked: false,
      lockScrollY: 0
    }
  },
  props: {
    currentLevel: {
      type: Number,
      default: 0
    },
    blocks: {},
    maxLevel: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    },
    showIndicator: {
      type: Boolean,
      default: true
    },
    overflow: {
      type: Boolean,
      default: false
    },
  },

  computed: {
    indicatorSegments() {
      const totalPoints = this.blocks.points;
      return [1, 2, 3, 4].map(i => ({
        key: i,
        color: COLOURS[i - 1],
        height: totalPoints > 0 ? (this.blocks[i] / totalPoints) * 100 : 0
      }));
    }
  },

  watch: {
    currentLevel (newLevel) {
      this.changeLevel(newLevel);
    },

    maxLevel () {
      this.changeLevel(this.currentLevel);
    },
  },
  mounted() {
    this.changeLevel(this.currentLevel);
  },

  methods: {
    changeLevel(newLevel) {
      if (newLevel === this.level) {
        return;
      }

      if (newLevel > this.maxLevel) {
        newLevel = this.maxLevel;
      } else if (newLevel < 0) {
        newLevel = 0;
      }
      const container = document.querySelector('.bucket-' + this.index);
      const water = document.querySelector('.bucket-' + this.index +' .water');
      const tapWaterFlow = document.querySelector('.bucket-' + this.index +' .tap-water-flow');
      const valveWaterFlow = document.querySelector('.bucket-' + this.index +' .valve-water-flow');

      this.clearAllTimeouts();

      const isStacked = window.matchMedia('(max-width: 767px)').matches;

      // Handle water animations
      tapWaterFlow.removeAttribute('style');
      valveWaterFlow.removeAttribute('style');
      let originalLevel = this.level;

      if (isStacked) {
        this.lockScroll();
        container.classList.add('fullscreen-active');
        requestAnimationFrame(() => container.classList.add('fullscreen-visible'));
      }

      if (newLevel > this.level) {
        valveWaterFlow.style.height = 0;

        this.addTimeout(setTimeout(() => tapWaterFlow.style.transition = 'height 1s ease, top 1s ease', 100));
        this.addTimeout(setTimeout(() => tapWaterFlow.style.height = `${645 - (100 / this.maxLevel * originalLevel * 4.5)}%`, 100));
        this.addTimeout(setTimeout(() => tapWaterFlow.style.height = `${645 - (100 / this.maxLevel * newLevel * 4.5)}%`, 1000));
        this.addTimeout(setTimeout(() => water.style.opacity = 100, 1000));
        this.addTimeout(setTimeout(() => tapWaterFlow.style.top = `${745 - (100 / this.maxLevel * newLevel * 4.5)}%`, 1800));
        this.addTimeout(setTimeout(() => tapWaterFlow.style.height = '0', 1800));
        this.addTimeout(setTimeout(() => water.style.height = `${95 / this.maxLevel * newLevel}%`, 1000));
        if (isStacked) {
          this.addTimeout(setTimeout(() => container.classList.remove('fullscreen-visible'), 1800));
          this.addTimeout(setTimeout(() => {
            container.classList.remove('fullscreen-active');
            this.unlockScroll();
          }, 2200));
        }
      } else {
        tapWaterFlow.style.height = '0';
        this.addTimeout(setTimeout(() => valveWaterFlow.style.transition = 'height 1s ease, top 1s ease', 100));
        this.addTimeout(setTimeout(() => valveWaterFlow.style.height = '5em', 100));
        this.addTimeout(setTimeout(() => water.style.height = `${95 / this.maxLevel * newLevel}%`, 100));
        this.addTimeout(setTimeout(() => valveWaterFlow.style.height = '0', 1100));
        this.addTimeout(setTimeout(() => valveWaterFlow.style.top = '6.65em', 1100));
        if (newLevel === 0) {
          this.addTimeout(setTimeout(() => water.style.opacity = 0, 1100));
        }
        if (isStacked) {
          this.addTimeout(setTimeout(() => container.classList.remove('fullscreen-visible'), 1100));
          this.addTimeout(setTimeout(() => {
            container.classList.remove('fullscreen-active');
            this.unlockScroll();
          }, 1500));
        }
      }

      this.level = newLevel;
    },

    lockScroll() {
      if (this.scrollLocked) {
        return;
      }
      this.scrollLocked = true;
      this.lockScrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.lockScrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
    },

    unlockScroll() {
      if (!this.scrollLocked) {
        return;
      }
      this.scrollLocked = false;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      window.scrollTo(0, this.lockScrollY);
    },

    clearAllTimeouts() {
      this.timeouts.forEach(timeout => clearTimeout(timeout));
      this.timeouts = [];
    },

    addTimeout(timeout) {
      this.timeouts.push(timeout);
    }
  },
}
</script>

<template>
  <div :class="'animation-container bucket-' + index">
    <div class="tap">
      <div class="tap-water-flow"></div>
    </div>
    <div class="bucket">
      <div class="bucket-handle"></div>
      <div :class="currentLevel > 0 ? '' : 'empty'" class="water">
        <div class="indicator" :class="{ 'indicator-hidden': !showIndicator }">
          <div
              v-for="segment in indicatorSegments"
              :key="segment.key"
              class="indicator-segment"
              :style="{ height: segment.height + '%', background: segment.color }"
          ></div>
        </div>
      </div>
      <div class="bucket-valve">
        <div class="valve-water-flow"></div>
      </div>
      <div class="overflow-label" v-if="overflow">{{ $t('Overflow') }}</div>
    </div>
  </div>
</template>

<style>
.animation-container {
  position: relative;
  width: 20em;
  height: 35em;
  box-sizing: border-box;
  font-size: 10px;
  min-width: 16em;
  max-width: 16em !important;
  margin-bottom: 6em;
}

.animation-container * {
  box-sizing: border-box;
}

/* Tap */
.tap {
  position: absolute;
  top: 4em;
  /* Anchored to .bucket with a fixed em offset (33% of the original 16em
     canvas) rather than a container-relative percentage, so it stays
     correctly aligned above the bucket regardless of container width. */
  left: calc((100% - 15em) / 2 + 5.28em);
  width: 2em;
  height: 4em;
  background: linear-gradient(#333 0%, #d3d3d3 50%, #999 80%);
  border-radius: 0.4em 0.4em 0 0;
  transform: skew(5deg, 1deg);
  z-index: 1;
}

.tap::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 1em;
  background: #999;
  bottom: -0.5em;
  border-radius: 50% 50% 100% 100%;
  border: 0.2em solid #555;
}

/* Bucket */
.bucket {
  position: absolute;
  bottom: 0;
  /* Centered rather than left (its static-position default) so the
     assembly isn't lopsided against the right-hand slack in the container. */
  left: calc((100% - 15em) / 2);
  width: 15em;
  height: 20em;
  background: #d3d3d3;
  background: linear-gradient(to right, #333 0%, #d3d3d3 50%, #999 80%);
  border-radius: 0 0 1em 1em;
}

.bucket::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2em;
  background: #999;
  top: -1em;
  border-radius: 50%;
  border: 0.2em solid #555;
}
.bucket::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 2em;
  background: transparent;
  top: -1em;
  border-radius: 50%;
  border: 0.2em solid #555;
}

/* Bucket handle */
.bucket-handle {
  position: absolute;
  width: 16em;
  height: 7em;
  top: -5.5em;
  left: -0.5em;
  border: 0.5em solid #555;
  border-bottom: none;
  border-radius: 100% 100% 0 0;
  z-index: 2;
}

/* Valve */
.bucket-valve {
  position: absolute;
  bottom: -0.5em;
  left: calc(20%);
  width: 2em;
  height: 2em;
  background: linear-gradient(to left, #333 0%, #777 50%, #999 80%);
  border-radius: 0.4em 0.4em 0 0;
  transform: skew(-15deg, 1deg);
}

.bucket-valve::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 1em;
  background: #999;
  bottom: -0.5em;
  border-radius: 50% 50% 100% 100%;
  border: 0.2em solid #555;
}

/* Water level */
.water {
  position: absolute;
  bottom: 4%;
  left: 5%;
  width: 90%;
  background: linear-gradient(#d0e4f7 0%, #73b1e7 50%);
  height: 0;
  transition: height 1s ease, opacity 1s ease;
  border-radius: 0 0 1em 1em;
  opacity: 0;
}

.water::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 1em;
  background: linear-gradient(to top, #c0d4e7 0%, #73b1e7 100%);
  top: -0.5em;
  border-radius: 100% 100% 50% 50% / 100% 100% 50% 50%;
}
.water.empty {
  transition: height 1s ease, opacity 0.5s ease;
}

/* Water Flow Effects */
.tap-water-flow, .valve-water-flow {
  position: absolute;
  background: #66b3ff;
  width: 1em;
  height: 0;
  z-index: 10;
}

.tap-water-flow {
  top: 4em;
  left: 0.5em;
}

.valve-water-flow {
  top: 1.65em;
  left: 50%;
  transform: translateX(-50%);
}

.indicator {
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: width 1s ease;
}

.indicator.indicator-hidden {
  width: 0;
}

.indicator-segment {
  width: 100%;
  transition: height 1s ease;
}

/* Marks a bucket as an overflow bucket, most important when it's the one
   shown fullscreen (mobile) since then it's the only bucket on screen. */
.overflow-label {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 1.6em;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-shadow: 0 0 0.3em rgba(0, 0, 0, 0.7), 0 0 0.6em rgba(0, 0, 0, 0.7);
  white-space: nowrap;
  pointer-events: none;
  z-index: 6;
}

/* Fullscreen visualisation while water is flowing, mobile only (stacked layout, <= 767px) */
@media (max-width: 767px) {
  .animation-container.fullscreen-active {
    position: fixed;
    inset: 0;
    margin: auto;
    max-width: none !important;
    max-height: 80vh;
    font-size: min(6vw, calc(80vh / 35)) !important;
    padding: 3em 2em 1em;
    opacity: 0;
    z-index: 1050;
    transition: opacity 0.4s ease;
  }

  .animation-container.fullscreen-active.fullscreen-visible {
    opacity: 1;
  }

  .animation-container.fullscreen-active::before {
    content: "";
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
}
</style>
