<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <h1 class="navbar-brand">
          <img src="/android-chrome-512x512.png" alt="Bootstrap" width="50px" height="50px">
          MBS
        </h1>
        <div class="navbar-nav py-1">
          <div class="btn-group">
            <button class="btn btn-light" @click="startOver" title="Empty bucket"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bucket" viewBox="0 0 16 16">
              <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"/>
            </svg></button>
            <button class="btn btn-light" @click="printBucket" title="Print"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
              <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
              <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
            </svg></button>
            <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasHistory" aria-controls="offcanvasHistory" title="History">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"></path>
                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"></path>
                <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"></path>
              </svg>
            </button>
            <button class="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSettings" aria-controls="offcanvasSettings" title="Settings">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
              </svg>
            </button>
          </div>
        </div>

        <div class="navbar-nav py-1">
          <form class="d-flex" @submit.prevent="addBlock">
            <input class="form-control me-2" v-model="newBlock.name" placeholder="Block name" required />
            <input class="form-control me-2" style="width: initial" size="1" v-model.number="newBlock.points" type="number" min="1" max="4" placeholder="Points (1-4)" required />
            <button class="btn btn-dark" type="submit" title="add block"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
              <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg></button>
          </form>
        </div>
      </div>
    </nav>
    <div class="offcanvas offcanvas-end text-bg-dark" data-bs-theme="dark" tabindex="-1" id="offcanvasHistory" aria-labelledby="offcanvasHistoryLabel">
      <div class="offcanvas-header">
        <h2 class="offcanvas-title" id="offcanvasHistoryLabel">Saved Buckets</h2>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="btn-group-vertical overflow-y-scroll w-100 h-80p" role="group" aria-label="Saved buckets">
          <button @click="loadBucket(bucket)" v-for="(bucket, index) in [...storedBuckets].reverse()" :key="index" type="button" class="btn btn-outline-info w-100">{{ bucket.date }}</button>
        </div>
      </div>
      <div class="offcanvas-footer">
        <div class="btn-group w-100" role="group" aria-label="History control buttons">
          <button class="btn btn-primary rounded-0" @click="saveBucket">Save Bucket</button>
          <button class="btn btn-danger rounded-0" @click="clearHistory">Clear History</button>
        </div>
      </div>
    </div>
    <div class="offcanvas offcanvas-end text-bg-dark" data-bs-theme="dark" tabindex="-1" id="offcanvasSettings" aria-labelledby="offcanvasSettingsLabel">
      <div class="offcanvas-header">
        <h2 class="offcanvas-title" id="offcanvasSettingsLabel">Settings</h2>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="mb-3">
          <label for="maxPoints" class="form-label">Max Points</label>
          <input v-model.number="maxPoints" type="number" class="form-control" min="1" placeholder="Max Points" />
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <h2>Bucket</h2>
          <div class="list-group bg-primary-subtle" :style="{ height: bucketHeight + 'px' }">
            <!-- Buffer block at the top -->
            <div v-if="remainingPoints > 0" class="list-group-item" :class="bufferBackgroundColor" :style="{ height: getBlockHeight(remainingPoints) + '%' }">
              <strong>Buffer:</strong> {{ remainingPoints }} points
            </div>

            <!-- Blocks in bucket 1 -->
            <div
                v-for="block in firstBucket"
                :key="block.id"
                class="list-group-item d-flex justify-content-between"
                :class="getBlockClass(block.points)"
                :style="{ height: getBlockHeight(block.points) + '%' }"
            >
              <input v-if="block.isEditing" v-model="block.name" @blur="block.isEditing = false" />
              <strong v-else @click="block.isEditing = true" role="button">{{ block.name }}</strong>
              <div class="btn-group btn-group-sm">
                <button class="btn btn-success" @click="changeBlockScore(block, 1)" :disabled="block.points === 1">1</button>
                <button class="btn btn-info" @click="changeBlockScore(block, 2)" :disabled="block.points === 2">2</button>
                <button class="btn btn-warning" @click="changeBlockScore(block, 3)" :disabled="block.points === 3">3</button>
                <button class="btn btn-danger" @click="changeBlockScore(block, 4)" :disabled="block.points === 4">4</button>
              </div>
            </div>
          </div>
        </div>
        <div  class="col" v-if="overflowBlocks.length > 0">
          <h2>Overflow</h2>
          <div class="list-group bg-danger-subtle" :style="{ height: bucketHeight + 'px' }">
            <div
                v-for="block in overflowBlocks"
                :key="block.id"
                class="list-group-item bg-danger d-flex justify-content-between"
                :class="`block-${block.points}`"
                :style="{ height: getBlockHeight(block.points) + '%' }"
            >
              <input v-if="block.isEditing" v-model="block.name" @blur="block.isEditing = false" />
              <strong v-else @click="block.isEditing = true">{{ block.name }}</strong>
              <div class="btn-group btn-group-sm">
                <button class="btn btn-success" @click="changeBlockScore(block, 1)" :disabled="block.points === 1">1</button>
                <button class="btn btn-info" @click="changeBlockScore(block, 2)" :disabled="block.points === 2">2</button>
                <button class="btn btn-warning" @click="changeBlockScore(block, 3)" :disabled="block.points === 3">3</button>
                <button class="btn btn-danger" @click="changeBlockScore(block, 4)" :disabled="block.points === 4">4</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newBlock: { name: '', points: 1 },
      blocks: [],
      maxPoints: JSON.parse(localStorage.getItem('maxPoints')) || 28, // Load from local storage or default to 28
      storedBuckets: JSON.parse(localStorage.getItem('buckets')) || [],
    };
  },
  watch: {
    maxPoints(newValue) {
      // Update local storage when maxPoints changes
      localStorage.setItem('maxPoints', JSON.stringify(newValue));
    },
  },
  computed: {
    bucketHeight() {
      // This defines the total height of the bucket (can be adjusted if needed)
      let height =  window.innerHeight - 150;
      if (height < 48 * this.maxPoints) {
        return 48 * this.maxPoints;
      }

      return height;
    },
    totalPoints() {
      return this.blocks.reduce((sum, block) => sum + block.points, 0);
    },
    remainingPoints() {
      return Math.max(this.maxPoints - this.firstBucketPoints, 0);
    },
    overflowBlocks() {
      let total = 0;
      // Instead of putting the largest blocks in the overflow, we start with the smallest.
      return this.orderedBlocks.filter(block => {
        // Add blocks to the overflow if adding them would exceed the max points
        if (total + block.points > this.maxPoints) {
          return true;
        }
        total += block.points;
        return false;
      });
    },
    bufferBackgroundColor() {
      if (this.remainingPoints >= 8) {
        return 'bg-success-subtle';
      }
      if (this.remainingPoints >= 4) {
        return 'bg-info-subtle';
      }
      if (this.remainingPoints >= 2) {
        return 'bg-warning-subtle';
      }
      return 'bg-danger-subtle';
    },
    firstBucketPoints() {
      // Points in the first bucket
      return Math.min(this.totalPoints, this.maxPoints);
    },
    firstBucket() {
      let total = 0;
      return this.orderedBlocks.filter(block => {
        // Keep adding blocks to the first bucket until the maxPoints is exceeded.
        if (total + block.points <= this.maxPoints) {
          total += block.points;
          return true;
        }
        return false;
      });
    },
    orderedBlocks() {
      // Sort blocks with lowest points at the top and highest at the bottom
      return [...this.blocks].sort((a, b) => a.points - b.points);
    },
  },
  methods: {
    startOver() {
      if (confirm("Are you sure you want to start over? This will clear the current bucket but not saved history.")) {
        // Clear current blocks but keep the saved history
        this.blocks = [];
      }
    },
    addBlock() {
      // Add block to the bucket
      this.blocks.push({ ...this.newBlock, id: Date.now(), isEditing: false });
      this.newBlock.name = '';
      this.newBlock.points = 1;
    },
    getBlockHeight(points) {
      // Calculate the height of each block based on its points and the maxPoints
      return (points / this.maxPoints) * 100;
    },
    getBlockClass(points) {
      switch (points) {
        case 1:
          return 'bg-success text-white';
        case 2:
          return 'bg-info';
        case 3:
          return 'bg-warning';
        case 4:
          return 'bg-danger text-white';
      }
    },
    changeBlockScore(block, newScore) {
      block.points = newScore;
    },
    printBucket() {
      window.print();
    },
    saveBucket() {
      const bucket = { blocks: this.blocks, date: new Date().toLocaleString() };
      this.storedBuckets.push(bucket);
      localStorage.setItem('buckets', JSON.stringify(this.storedBuckets));
    },
    loadBucket(bucket) {
      this.blocks = bucket.blocks;
    },
    clearHistory() {
      if (confirm("Are you sure you want to clear all history?")) {
        this.storedBuckets = [];
        localStorage.removeItem('buckets');
        localStorage.removeItem('maxPoints');
        this.maxPoints = 28; // Reset to default max points
      }
    },
  },
};
</script>
