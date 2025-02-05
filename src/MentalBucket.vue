<script>

export default {
  data() {
    return {
      level: 0,
      timeouts: []
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
    }
  },

  watch: {
    currentLevel (newLevel) {
      this.changeLevel(newLevel);
    },

    blocks (newBlocks) {
      console.debug(newBlocks);
    }
  },
  mounted() {
    this.changeLevel(this.currentLevel);
  },

  methods: {
    changeLevel(newLevel) {
      if (newLevel > this.maxLevel) {
        newLevel = this.maxLevel;
      } else if (newLevel < 0) {
        newLevel = 0;
      }
      const water = document.querySelector('.bucket-' + this.index +' .water');
      const tapWaterFlow = document.querySelector('.bucket-' + this.index +' .tap-water-flow');
      const valveWaterFlow = document.querySelector('.bucket-' + this.index +' .valve-water-flow');

      this.clearAllTimeouts();

      // Handle water animations
      tapWaterFlow.removeAttribute('style');
      valveWaterFlow.removeAttribute('style');
      let originalLevel = this.level;

      if (newLevel > this.level) {
        valveWaterFlow.style.height = 0;

        this.addTimeout(setTimeout(() => tapWaterFlow.style.transition = 'height 1s ease, top 1s ease', 100));
        this.addTimeout(setTimeout(() => tapWaterFlow.style.height = `${645 - (100 / this.maxLevel * originalLevel * 4.5)}%`, 100));
        this.addTimeout(setTimeout(() => tapWaterFlow.style.height = `${645 - (100 / this.maxLevel * newLevel * 4.5)}%`, 1000));
        this.addTimeout(setTimeout(() => water.style.opacity = 100, 1000));
        this.addTimeout(setTimeout(() => tapWaterFlow.style.top = `${745 - (100 / this.maxLevel * newLevel * 4.5)}%`, 1800));
        this.addTimeout(setTimeout(() => tapWaterFlow.style.height = '0', 1800));
        this.addTimeout(setTimeout(() => water.style.height = `${95 / this.maxLevel * newLevel}%`, 1000));
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
      }

      this.level = newLevel;
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
      <div :class="currentLevel > 0 ? '' : 'empty'" class="water"></div>
      <div class="bucket-valve">
        <div class="valve-water-flow"></div>
      </div>
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
  left: 33%;
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
  width: 15em;
  height: 20em;
  background: #d3d3d3;
  background: linear-gradient(to right, #333 0%, #d3d3d3 50%, #999 80%);
  border-radius: 0 0 1em 1em;
}

.bucket::before {
  content: "";
  position: absolute;
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
</style>
