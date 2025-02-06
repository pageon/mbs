<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <h1 class="navbar-brand my-1">
          <img src="/android-chrome-512x512.png" alt="Bootstrap" width="50px" height="50px">
          {{ $t('MentalBucketSystem') }}
        </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button class="btn" @click="startOver" :title="$t('EmptyBucket')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bucket" viewBox="0 0 16 16">
                <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"/>
              </svg>&nbsp; {{ $t('EmptyBucket') }}</button>
            </li>
            <li class="nav-item">
              <button class="btn" @click="printBucket" :title="$t('Print')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-printer-fill" viewBox="0 0 16 16">
                <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
                <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
              </svg>&nbsp; {{ $t('Print') }}</button>
            </li>
            <li class="nav-item">
              <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasHistory" aria-controls="offcanvasHistory" :title="$t('History')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z"></path>
                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z"></path>
                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5"></path>
                </svg>&nbsp; {{ $t('History') }}
              </button>
            </li>
            <li class="nav-item">
              <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSettings" aria-controls="offcanvasSettings" :title="$t('Settings')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                  <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3q0-.405-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708M3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026z"/>
                </svg>&nbsp; {{ $t('Settings') }}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="offcanvas offcanvas-end text-bg-dark" data-bs-theme="dark" tabindex="-1" id="offcanvasHistory" aria-labelledby="offcanvasHistoryLabel">
      <div class="offcanvas-header">
        <h2 class="offcanvas-title" id="offcanvasHistoryLabel">{{ $t('SavedBuckets') }}</h2>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="btn-group-vertical overflow-y-scroll w-100 h-80p" role="group" aria-label="Saved buckets">
          <button @click="loadBucket(bucket)" v-for="(bucket, index) in [...storedBuckets].reverse()" :key="index" type="button" class="btn btn-outline-info w-100">{{ bucket.date }}</button>
        </div>
      </div>
      <div class="offcanvas-footer">
        <div class="btn-group w-100" role="group" aria-label="History control buttons">
          <button class="btn btn-primary rounded-0" @click="saveBucket">{{ $t('SaveBucket') }}</button>
          <button class="btn btn-danger rounded-0" @click="clearHistory">{{ $t('ClearHistory') }}</button>
        </div>
      </div>
    </div>
    <div class="offcanvas offcanvas-end text-bg-dark" data-bs-theme="dark" tabindex="-1" id="offcanvasSettings" aria-labelledby="offcanvasSettingsLabel">
      <div class="offcanvas-header">
        <h2 class="offcanvas-title" id="offcanvasSettingsLabel">{{ $t('Settings') }}</h2>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="mb-3">
          <label for="maxPoints" class="form-label">{{ $t('MaxPoints') }}</label>
          <input v-model.number="maxPoints" type="number" class="form-control" min="1" placeholder="Max Points" />
        </div>
        <div class="mb-3">
          <label for="bucketSize" class="form-label">{{ $t('BucketSize') }}</label>
          <input type="range" min="0.7" max="2" step="0.1" v-model.number="bucketSize" class="form-control" />
        </div>
        <div class="mb-3">
          <div class="form-check form-switch">
            <input type="checkbox" v-model="showIndicator" role="switch" class="form-check-input" />
            <label class="form-check-label" for="showIndicator">{{ $t('ShowIndicator') }}</label>
          </div>
        </div>
        <div class="mb-3">
          <label for="locale" class="form-label">{{ $t('Language') }}</label>
          <select class="form-select" v-model="locale">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ $t(locale) }}</option>
          </select>
        </div>
      </div>
      <div class="offcanvas-footer">
        <div class="btn-group w-100" role="group" aria-label="History control buttons">
          <button class="btn btn-success rounded-0" @click="exportConfig">{{ $t('ExportConfig') }}</button>
          <button class="btn btn-warning rounded-0" @click="importConfig">{{ $t('ImportConfig') }}</button>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row flex-md-row">
        <div class="col-12 col-md-6 col-xxl-5">
          <div class="row">
            <template v-for="(bucket, index) in buckets" :key="'bucket-' + index">
              <mental-bucket class="col mx-1" v-if="bucket.points > 0 || buckets.length === 1" :style="'font-size: ' + bucketSize * 10 + 'px'" :max-level="maxPoints" :current-level="bucket.points" :index="index" :blocks="bucket" :show-indicator="showIndicator"></mental-bucket>
            </template>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xxl-7 mt-3">
          <div class="card">
            <div class="card-header">
              <div v-if="remainingPoints > 0"><strong>{{ $t('Buffer') }}:</strong> <span class="badge" :class="bufferBackgroundColor">{{ remainingPoints }}</span> {{ $t('points') }}</div>
              <div v-if="remainingPoints <= 0"><strong>{{ $t('Overflow') }}:</strong> <span class="badge" :class="bufferBackgroundColor">{{ totalPoints - maxPoints }}</span> {{ $t('points') }}</div>
            </div>
            <div class="card-body">
              <form class="row" @submit.prevent="addBlock">
                <div class="my-1 col-9 col-xl-10 col-xxl-7">
                  <input class="form-control  col-12" v-model="newBlock.name" :placeholder="$t('BlockName')" required />
                </div>
                <div class="my-1 col-2 col-xl-2 col-xxl-2">
                  <input class="form-control  col-12" style="width: initial" size="1" v-model.number="newBlock.points" type="number" min="1" max="4" placeholder="Points (1-4)" required />
                </div>
                <div class="my-1 col-12 col-xxl-3">
                  <button class="btn btn-dark col-12" type="submit" :title="$t('AddBlock')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                  </svg>&nbsp;{{ $t('Add') }}</button>
                </div>
              </form>
            </div>
            <div class="list-group bg-primary-subtle">
              <div
                  v-for="block in orderedBlocks"
                  :key="block.id"
                  class="list-group-item d-flex justify-content-between"
                  :class="getBlockClass(block.points)"
              >
                <div>
                  <button class="btn btn-dark me-2" @click="deleteBlock(block)"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256">
                    <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M21,0c-1.64453,0 -3,1.35547 -3,3v2h-7.8125c-0.125,-0.02344 -0.25,-0.02344 -0.375,0h-1.8125c-0.03125,0 -0.0625,0 -0.09375,0c-0.55078,0.02734 -0.98047,0.49609 -0.95312,1.04688c0.02734,0.55078 0.49609,0.98047 1.04688,0.95313h1.09375l3.59375,40.5c0.125,1.39844 1.31641,2.5 2.71875,2.5h19.1875c1.40234,0 2.59375,-1.10156 2.71875,-2.5l3.59375,-40.5h1.09375c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-10v-2c0,-1.64453 -1.35547,-3 -3,-3zM21,2h8c0.5625,0 1,0.4375 1,1v2h-10v-2c0,-0.5625 0.4375,-1 1,-1zM11.09375,7h27.8125l-3.59375,40.34375c-0.03125,0.34766 -0.40234,0.65625 -0.71875,0.65625h-19.1875c-0.31641,0 -0.6875,-0.30859 -0.71875,-0.65625zM18.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM24.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM30.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953z"></path></g></g>
                  </svg></button>
                  <input v-if="block.isEditing" v-model="block.name" @blur="block.isEditing = false" />
                  <strong v-else @click="block.isEditing = true" role="button">{{ block.name }}</strong>
                </div>
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
   </div>
 </template>

 <script>
 import Storage from './storage';
 import Locale from './locale.js';
 import MentalBucket from "@/MentalBucket.vue";

 const DEFAULT_MAX_POINTS = 28;

 export default {
   components: {MentalBucket},
   data() {
     return {
       locale: Locale.defaultLocale(),
       newBlock: { name: '', points: 1 },
       blocks: [],
       maxPoints: Storage.get('maxPoints', DEFAULT_MAX_POINTS),
       bucketSize: Storage.get('bucketSize', 1.1),
       showIndicator: Storage.get('showIndicator', 1) === 1,
       storedBuckets: Storage.get('buckets', []),
     };
   },
   watch: {
     maxPoints(newValue) {
       Storage.set('maxPoints', newValue);
     },

     bucketSize(newValue) {
       Storage.set('bucketSize', newValue);
     },

     showIndicator(newValue) {
       Storage.set('showIndicator', newValue ? 1 : 0);
     },

     storedBuckets(newValue) {
       Storage.set('buckets', newValue);
     },

     locale(newValue) {
       Locale.changeLocale(newValue);
       document.title = Locale.get('MentalBucketSystem');
     },
   },
   computed: {
     totalPoints() {
       return this.blocks.reduce((sum, block) => sum + block.points, 0);
     },

     remainingPoints() {
       return Math.max(this.maxPoints - Math.min(this.totalPoints, this.maxPoints), 0);
     },

     bufferBackgroundColor() {
       if (this.remainingPoints >= 8) {
         return 'bg-success-subtle text-dark';
       }
       if (this.remainingPoints >= 4) {
         return 'bg-info-subtle text-dark';
       }
       if (this.remainingPoints >= 2) {
         return 'bg-warning-subtle text-dark';
       }
       if (this.remainingPoints > 0) {
         return 'bg-danger-subtle text-dark';
       }

       return 'bg-danger text-white';
     },

     orderedBlocks() {
       // Sort blocks with lowest points at the top and highest at the bottom
       return [...this.blocks].sort((a, b) => a.points - b.points);
     },

     reverseOrderedBlocks() {
       // Sort blocks with lowest points at the bottom and highest at the top
       return [...this.blocks].sort((a, b) => b.points - a.points);
     },

     buckets() {
       let buckets = [];
       let bucket = this.getBucketObject();
       buckets.push(bucket);
       let counter = 0;
       for (let block of this.reverseOrderedBlocks) {
         let points = block.points;
         let newCounter = counter + points;

         if (newCounter < this.maxPoints) {
           bucket[points.toString()] += block.points;
           counter = newCounter;
           bucket['points'] = counter;

           continue;
         }
         bucket[points.toString()] += (this.maxPoints - counter);
         bucket['points'] = this.maxPoints;

         bucket = this.getBucketObject();
         buckets.push(bucket);
         counter = newCounter - this.maxPoints;
         bucket[points.toString()] += counter;
         bucket['points'] = counter;
       }

       return buckets;
     },
   },

   methods: {
     getBucketObject() {
       return {'points': 0, '1': 0, '2': 0, '3': 0, '4': 0};
     },

     startOver() {
       if (confirm(Locale.get('StartOverConfirm'))) {
         // Clear current blocks but keep the saved history
         this.blocks = [];
       }
     },

     addBlock() {
       this.blocks.push({ ...this.newBlock, id: Date.now(), isEditing: false });
       this.newBlock.name = '';
       this.newBlock.points = 1;
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

     deleteBlock(block) {
       if (confirm(Locale.get('DeleteBlockConfirm'))) {
         const index = this.blocks.indexOf(block);
         this.blocks.splice(index, 1);
       }
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
       this.blocks = JSON.parse(JSON.stringify(bucket.blocks));
     },

     clearHistory() {
       if (confirm(Locale.get('ClearHistoryConfirm'))) {
         this.storedBuckets = [];
         Storage.remove('buckets');
         Storage.remove('maxPoints');
         this.maxPoints = DEFAULT_MAX_POINTS;
       }
     },

     exportConfig() {
       navigator.clipboard.writeText(Storage.export());
       alert(Locale.get('ConfigCopied'));
     },

     importConfig() {
       if (confirm(Locale.get('ImportConfigConfirm'))) {
         Storage.import(prompt(Locale.get('ImportConfigPrompt')));
         window.location.reload();
       }
     },
   },
 };
 </script>
