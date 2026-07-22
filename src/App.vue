<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div class="container-fluid">
        <h1 class="navbar-brand my-1 mx-1 p-0">
          <img src="/android-chrome-512x512.png" alt="Bootstrap" width="40px" height="40px">
          {{ $t('MentalBucketSystem') }}
        </h1>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button class="btn" @click="startOver" :title="$t('EmptyBucket')">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bucket" viewBox="0 0 16 16">
                  <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"/>
                </svg>&nbsp; {{ $t('EmptyBucket') }}
              </button>
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
        <div class="list-group overflow-y-scroll w-100 h-80p border-0" aria-label="Saved buckets">
          <div class="list-group-item d-flex bg-dark rounded-0 p-0 border-start-0 border-end-0" v-for="item in reversedStoredBuckets" :key="item.index">
            <button class="btn btn-danger me-0 rounded-0 border-0" @click="deleteBucket(item.index)" :title="$t('Delete')">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                  <g transform="scale(5.12,5.12)">
                    <path d="M21,0c-1.64453,0 -3,1.35547 -3,3v2h-7.8125c-0.125,-0.02344 -0.25,-0.02344 -0.375,0h-1.8125c-0.03125,0 -0.0625,0 -0.09375,0c-0.55078,0.02734 -0.98047,0.49609 -0.95312,1.04688c0.02734,0.55078 0.49609,0.98047 1.04688,0.95313h1.09375l3.59375,40.5c0.125,1.39844 1.31641,2.5 2.71875,2.5h19.1875c1.40234,0 2.59375,-1.10156 2.71875,-2.5l3.59375,-40.5h1.09375c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-10v-2c0,-1.64453 -1.35547,-3 -3,-3zM21,2h8c0.5625,0 1,0.4375 1,1v2h-10v-2c0,-0.5625 0.4375,-1 1,-1zM11.09375,7h27.8125l-3.59375,40.34375c-0.03125,0.34766 -0.40234,0.65625 -0.71875,0.65625h-19.1875c-0.31641,0 -0.6875,-0.30859 -0.71875,-0.65625zM18.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM24.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM30.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953z"></path>
                  </g>
                </g>
              </svg>
            </button>
            <button @click="loadBucket(item.bucket)" data-bs-dismiss="offcanvas" type="button" class="btn btn-info flex-grow-1 text-start rounded-0">{{ item.bucket.date }}
            </button>
          </div>
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
          <label class="form-label d-block">{{ $t('BucketSize') }}</label>
          <button type="button" class="btn btn-outline-primary w-100" @click="openBucketSizeModal">
            {{ $t('ChangeBucketSize') }}
          </button>
        </div>
        <div class="mb-3">
          <div class="form-check form-switch">
            <input type="checkbox" v-model="showIndicator" role="switch" class="form-check-input" />
            <label class="form-check-label" for="showIndicator">{{ $t('ShowIndicator') }}</label>
          </div>
        </div>
        <div class="mb-3" v-if="showIndicator">
          <div class="form-check form-switch">
            <input type="checkbox" v-model="showBlockLabels" role="switch" class="form-check-input" id="showBlockLabels"/>
            <label class="form-check-label" for="showBlockLabels">{{ $t('ShowBlockLabels') }}</label>
          </div>
        </div>
        <div class="mb-3">
          <div class="form-check form-switch">
            <input type="checkbox" v-model="autoSaveOnNewDay" role="switch" class="form-check-input" id="autoSaveOnNewDay"/>
            <label class="form-check-label" for="autoSaveOnNewDay">{{ $t('AutoSaveOnNewDay') }}</label>
          </div>
        </div>
        <div class="mb-3">
          <div class="form-check form-switch">
            <input type="checkbox" v-model="limitHistoryItems" role="switch" class="form-check-input" id="limitHistoryItems"/>
            <label class="form-check-label" for="limitHistoryItems">{{ $t('LimitHistoryItems') }}</label>
          </div>
          <input v-if="limitHistoryItems" v-model.number="maxHistoryItems" type="number" class="form-control mt-2" min="1" :placeholder="$t('MaxHistoryItems')"/>
        </div>
        <div class="mb-3">
          <div class="form-check form-switch">
            <input type="checkbox" v-model="showPreviousBucketSuggestions" role="switch" class="form-check-input" id="showPreviousBucketSuggestions"/>
            <label class="form-check-label" for="showPreviousBucketSuggestions">{{$t('ShowPreviousBucketSuggestions') }}</label>
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

    <div class="modal fade" ref="onboardingModal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false"
         aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ isFullOnboarding ? $t('WelcomeTitle') : $t('NewSettingsTitle') }}</h5>
          </div>
          <div class="modal-body">
            <div class="mb-3" v-if="isFullOnboarding">
              <label class="form-label d-block">{{ $t('Language') }}</label>
              <div class="btn-group w-100" role="group" :aria-label="$t('Language')">
                <button
                    v-for="loc in $i18n.availableLocales"
                    :key="`onboarding-locale-${loc}`"
                    type="button"
                    class="btn"
                    :class="locale === loc ? 'btn-primary' : 'btn-outline-primary'"
                    @click="locale = loc"
                >{{ $t(loc) }}</button>
              </div>
            </div>
            <p v-if="isFullOnboarding">{{ $t('OnboardingExplanation') }}</p>
            <p v-else>{{ $t('NewSettingsExplanation') }}</p>
            <div class="mb-3" v-if="isFullOnboarding">
              <label for="onboardingMaxPoints" class="form-label">{{ $t('MaxPoints') }}</label>
              <input id="onboardingMaxPoints" v-model.number="maxPoints" type="number" class="form-control" min="1" />
            </div>
            <div class="mb-3" v-if="pendingOnboardingSettings.includes('showBlockLabels')">
              <label class="form-label d-block">{{ $t('OnboardingBlockLabelsQuestion') }}</label>
              <div class="btn-group w-100" role="group" :aria-label="$t('OnboardingBlockLabelsQuestion')">
                <button
                    type="button"
                    class="btn"
                    :class="!showBlockLabels ? 'btn-primary' : 'btn-outline-primary'"
                    @click="showBlockLabels = false"
                >{{ $t('OnboardingBlockLabelsWater') }}</button>
                <button
                    type="button"
                    class="btn"
                    :class="showBlockLabels ? 'btn-primary' : 'btn-outline-primary'"
                    @click="showBlockLabels = true"
                >{{ $t('OnboardingBlockLabelsBlocks') }}</button>
              </div>
            </div>
            <div class="mb-3" v-if="pendingOnboardingSettings.includes('autoSaveOnNewDay')">
              <div class="form-check form-switch">
                <input type="checkbox" v-model="autoSaveOnNewDay" role="switch" class="form-check-input" id="onboardingAutoSaveOnNewDay"/>
                <label class="form-check-label" for="onboardingAutoSaveOnNewDay">{{ $t('OnboardingAutoSaveQuestion') }}</label>
              </div>
            </div>
            <div class="mb-3" v-if="pendingOnboardingSettings.includes('showPreviousBucketSuggestions')">
              <div class="form-check form-switch">
                <input type="checkbox" v-model="showPreviousBucketSuggestions" role="switch" class="form-check-input" id="onboardingShowPreviousBucketSuggestions"/>
                <label class="form-check-label" for="onboardingShowPreviousBucketSuggestions">{{ $t('OnboardingSuggestionsQuestion') }}</label>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary w-100" @click="completeOnboarding">{{ $t('GetStarted') }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" ref="confirmModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            {{ confirmMessage }}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="resolveConfirm(false)">{{ $t('Cancel') }}</button>
            <button type="button" class="btn btn-danger" @click="resolveConfirm(true)">{{ $t('Confirm') }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" ref="configModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ configModalMode === 'import' ? $t('ImportConfig') : $t('ExportConfig') }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p v-if="configModalMode === 'import'">{{ $t('ImportConfigPrompt') }}</p>
            <textarea class="form-control" rows="6" v-model="configText" :readonly="configModalMode === 'export'"></textarea>
            <div v-if="configCopied" class="text-success mt-2">{{ $t('ConfigCopied') }}</div>
          </div>
          <div class="modal-footer">
            <button v-if="configModalMode === 'export'" type="button" class="btn btn-success" @click="copyConfigText">{{ $t('Copy') }}</button>
            <button v-if="configModalMode === 'import'" type="button" class="btn btn-warning" :disabled="!configText" @click="applyImportConfig">{{ $t('ImportConfig') }}</button>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('Cancel') }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" ref="bucketSizeModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t('BucketSize') }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <div class="bucket-size-preview">
              <mental-bucket :style="'font-size: ' + bucketSize * 10 + 'px'" :max-level="maxPoints" :current-level="buckets[0].points" :index="9999" :blocks="buckets[0]" :show-indicator="showIndicator" :show-block-labels="showBlockLabels"></mental-bucket>
            </div>
            <input type="range" min="0.7" max="2" step="0.1" v-model.number="bucketSize" class="form-range mt-3" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('Confirm') }}</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row flex-md-row">
        <div class="col-12 col-md-6 col-xxl-5 order-2 order-md-1">
          <div class="row justify-content-center">
            <template v-for="(bucket, index) in buckets" :key="'bucket-' + index">
              <mental-bucket class="col mx-1" v-if="bucket.points > 0 || buckets.length === 1" :style="'font-size: ' + bucketSize * 10 + 'px'" :max-level="maxPoints" :current-level="bucket.points" :index="index" :blocks="bucket" :show-indicator="showIndicator" :overflow="index > 0" :show-block-labels="showBlockLabels"></mental-bucket>
            </template>
          </div>
        </div>
        <div class="col-12 col-md-6 col-xxl-7 mt-3 order-1 order-md-2">
          <form class="row" @submit.prevent="addBlock">
            <div class="my-1 col-12 col-sm-7">
              <input class="form-control  col-12" v-model="newBlock.name" :placeholder="$t('BlockName')" required />
            </div>
            <div class="my-1 col-12 col-sm-5">
              <div class="btn-group w-100" role="group" :aria-label="$t('AddBlock')">
                <button class="btn btn-success" type="submit" @click="newBlock.points = 1" :title="$t('AddBlock')">1</button>
                <button class="btn btn-info" type="submit" @click="newBlock.points = 2" :title="$t('AddBlock')">2</button>
                <button class="btn btn-warning" type="submit" @click="newBlock.points = 3" :title="$t('AddBlock')">3</button>
                <button class="btn btn-danger" type="submit" @click="newBlock.points = 4" :title="$t('AddBlock')">4</button>
              </div>
            </div>
          </form>
          <div class="accordion" id="accordionBucket">
            <div class="accordion-item border-0">
              <h2 class="accordion-header">
                <button class="accordion-button bg-primary-subtle rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBucket" aria-expanded="true" aria-controls="collapseBucket">
                  <div v-if="remainingPoints > 0">
                    <strong>{{ $t('Buffer') }}:</strong> <span class="badge" :class="bufferBackgroundColor">{{remainingPoints }}</span> {{ $t('points') }}
                  </div>
                  <div v-if="remainingPoints <= 0">
                    <strong>{{ $t('Overflow') }}:</strong> <span class="badge" :class="bufferBackgroundColor">{{totalPoints - maxPoints }}</span> {{ $t('points') }}
                  </div>
                </button>
              </h2>
              <div id="collapseBucket" class="accordion-collapse collapse show" data-bs-parent="#accordionBucket">
                <div class="list-group bg-primary-subtle">
                  <div
                      v-for="block in orderedBlocks"
                      :key="block.id"
                      :class="getBlockClass(block.points) + ' list-group-item d-flex align-items-center'"
                  >
                    <button class="btn btn-dark me-2" @click="deleteBlock(block)">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="16" height="16" viewBox="0,0,256,256">
                        <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                          <g transform="scale(5.12,5.12)"><path d="M21,0c-1.64453,0 -3,1.35547 -3,3v2h-7.8125c-0.125,-0.02344 -0.25,-0.02344 -0.375,0h-1.8125c-0.03125,0 -0.0625,0 -0.09375,0c-0.55078,0.02734 -0.98047,0.49609 -0.95312,1.04688c0.02734,0.55078 0.49609,0.98047 1.04688,0.95313h1.09375l3.59375,40.5c0.125,1.39844 1.31641,2.5 2.71875,2.5h19.1875c1.40234,0 2.59375,-1.10156 2.71875,-2.5l3.59375,-40.5h1.09375c0.35938,0.00391 0.69531,-0.18359 0.87891,-0.49609c0.17969,-0.3125 0.17969,-0.69531 0,-1.00781c-0.18359,-0.3125 -0.51953,-0.5 -0.87891,-0.49609h-10v-2c0,-1.64453 -1.35547,-3 -3,-3zM21,2h8c0.5625,0 1,0.4375 1,1v2h-10v-2c0,-0.5625 0.4375,-1 1,-1zM11.09375,7h27.8125l-3.59375,40.34375c-0.03125,0.34766 -0.40234,0.65625 -0.71875,0.65625h-19.1875c-0.31641,0 -0.6875,-0.30859 -0.71875,-0.65625zM18.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM24.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953zM30.90625,9.96875c-0.04297,0.00781 -0.08594,0.01953 -0.125,0.03125c-0.46484,0.10547 -0.79297,0.52344 -0.78125,1v33c-0.00391,0.35938 0.18359,0.69531 0.49609,0.87891c0.3125,0.17969 0.69531,0.17969 1.00781,0c0.3125,-0.18359 0.5,-0.51953 0.49609,-0.87891v-33c0.01172,-0.28906 -0.10547,-0.56641 -0.3125,-0.76172c-0.21094,-0.19922 -0.49609,-0.29687 -0.78125,-0.26953z"></path></g>
                        </g>
                      </svg>
                    </button>
                    <input
                        v-if="block.isEditing"
                        v-model="block.name"
                        class="form-control form-control-sm flex-grow-1 me-2"
                        ref="blockNameInput"
                        @blur="block.isEditing = false"
                        @keyup.enter="block.isEditing = false"
                    />
                    <strong v-else class="flex-grow-1 me-2 text-truncate" @click="startEditingBlockName(block)" role="button">{{ block.name || $t('UnnamedBlock') }}</strong>
                    <div class="btn-group btn-group-sm flex-shrink-0">
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
          <div class="accordion mt-1" id="accordionSuggestions" v-if="showPreviousBucketSuggestions && previousBucketSuggestions.length">
              <div class="accordion-item border-0">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed bg-primary-subtle rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSuggestions" aria-expanded="true" aria-controls="collapseSuggestions">{{ $t('PreviousBucket') }} ({{ previousBucket.date }})</button>
                </h2>
                <div id="collapseSuggestions" class="accordion-collapse collapse collapsed" data-bs-parent="#accordionSuggestions">
                  <div class="accordion-body">
                    <div class="d-flex align-items-center">
                      <div class="previous-bucket-preview mt-2">
                        <mental-bucket :style="'font-size: ' + bucketSize * 6 + 'px'" :max-level="maxPoints" :current-level="previousBucketAggregate.points" :index="9998" :blocks="previousBucketAggregate" :show-indicator="showIndicator"></mental-bucket>
                      </div>
                      <div class="col ms-3">
                        <div class="btn-group-vertical">
                          <button v-for="item in previousBucketSuggestions" :key="item.name" type="button" :class="getBlockClass(item.points) + ' btn z-1 px-2 text-start'" @click="addSuggestedBlock(item)"><span class="badge text-bg-dark">+</span> {{ item.name || $t('UnnamedBlock') }}</button>
                        </div>
                      </div>
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
import Storage from './storage';
import Locale from './locale.js';
import MentalBucket from "@/MentalBucket.vue";
import {Modal, Collapse} from 'bootstrap';

const DEFAULT_MAX_POINTS = 16;

export default {
  components: {MentalBucket},
  data() {
    return {
      locale: Locale.defaultLocale(),
      newBlock: {name: '', points: 1},
      blocks: Storage.get('blocks', []),
      maxPoints: Storage.get('maxPoints', DEFAULT_MAX_POINTS),
      bucketSize: Storage.get('bucketSize', 1.1),
      showIndicator: Storage.get('showIndicator', 1) === 1,
      autoSaveOnNewDay: Storage.get('autoSaveOnNewDay', false),
      lastModifiedAt: Storage.get('blocksLastModifiedAt', null),
      limitHistoryItems: Storage.get('limitHistoryItems', false),
      maxHistoryItems: Storage.get('maxHistoryItems', 10),
      showBlockLabels: Storage.get('showBlockLabels', false),
      showPreviousBucketSuggestions: Storage.get('showPreviousBucketSuggestions', false),
      storedBuckets: Storage.get('buckets', []),
      isFullOnboarding: !Storage.get('onboarded', false),
      pendingOnboardingSettings: [],
      confirmMessage: '',
      confirmResolve: null,
      configModalMode: null,
      configText: '',
      configCopied: false,
    };
  },
  mounted() {
    const newSettingKeys = ['showBlockLabels', 'autoSaveOnNewDay', 'showPreviousBucketSuggestions'];
    this.pendingOnboardingSettings = this.isFullOnboarding
        ? newSettingKeys
        : newSettingKeys.filter(key => !Storage.has(key));
    if (this.isFullOnboarding || this.pendingOnboardingSettings.length) {
      Modal.getOrCreateInstance(this.$refs.onboardingModal).show();
    }
    this.updateManifestLink(this.locale);
    this.checkAutoSaveOnNewDay();
    // Android's WebView commonly resumes the same page instance instead of
    // reloading it when the app is reopened, so mounted() alone would only
    // ever check once per cold start - recheck whenever the app regains
    // the foreground too.
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeUnmount() {
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  },
  watch: {
    blocks: {
      handler(newValue) {
        Storage.set('blocks', newValue);
        this.lastModifiedAt = Date.now();
        Storage.set('blocksLastModifiedAt', this.lastModifiedAt);
      },
      deep: true,
    },

    maxPoints(newValue) {
      Storage.set('maxPoints', newValue);
    },

    bucketSize(newValue) {
      Storage.set('bucketSize', newValue);
    },

    showIndicator(newValue) {
      Storage.set('showIndicator', newValue ? 1 : 0);
    },

    autoSaveOnNewDay(newValue) {
      Storage.set('autoSaveOnNewDay', newValue);
    },

    limitHistoryItems(newValue) {
      Storage.set('limitHistoryItems', newValue);
      this.enforceHistoryLimit();
    },

    maxHistoryItems(newValue) {
      Storage.set('maxHistoryItems', newValue);
      this.enforceHistoryLimit();
    },

    showBlockLabels(newValue) {
      Storage.set('showBlockLabels', newValue);
    },

    showPreviousBucketSuggestions(newValue) {
      Storage.set('showPreviousBucketSuggestions', newValue);
    },

    storedBuckets: {
      handler(newValue) {
        Storage.set('buckets', newValue);
      },
      deep: true,
    },

    locale(newValue) {
      Locale.changeLocale(newValue);
      document.title = Locale.get('MentalBucketSystem');
      this.updateManifestLink(newValue);
    },
  },
  computed: {
    reversedStoredBuckets() {
      return this.storedBuckets.map((bucket, index) => ({bucket, index})).reverse();
    },

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
          bucket.items.push({name: block.name, score: points, points: block.points});
          counter = newCounter;
          bucket['points'] = counter;

          continue;
        }
        const amountInCurrentBucket = this.maxPoints - counter;
        if (amountInCurrentBucket > 0) {
          bucket[points.toString()] += amountInCurrentBucket;
          bucket.items.push({name: block.name, score: points, points: amountInCurrentBucket});
        }
        bucket['points'] = this.maxPoints;

        bucket = this.getBucketObject();
        buckets.push(bucket);
        counter = newCounter - this.maxPoints;
        if (counter > 0) {
          bucket[points.toString()] += counter;
          bucket.items.push({name: block.name, score: points, points: counter});
        }
        bucket['points'] = counter;
      }

      return buckets;
    },

    previousBucket() {
      return this.storedBuckets.length ? this.storedBuckets[this.storedBuckets.length - 1] : null;
    },

    previousBucketSuggestions() {
      if (!this.previousBucket) {
        return [];
      }
      const seen = new Map();
      for (const block of this.previousBucket.blocks) {
        if (!seen.has(block.name)) {
          seen.set(block.name, {name: block.name, points: block.points});
        }
      }
      return [...seen.values()];
    },

    previousBucketAggregate() {
      if (!this.previousBucket) {
        return null;
      }
      const bucket = this.getBucketObject();
      for (const block of this.previousBucket.blocks) {
        bucket[block.points.toString()] += block.points;
        bucket.points += block.points;
      }
      return bucket;
    },
  },

  methods: {
    getBucketObject() {
      return {'points': 0, '1': 0, '2': 0, '3': 0, '4': 0, items: []};
    },

    addSuggestedBlock(item) {
      this.blocks.push({name: item.name, points: item.points, id: Date.now(), isEditing: false});
    },

    startEditingBlockName(block) {
      block.isEditing = true;
      this.$nextTick(() => {
        const inputs = this.$refs.blockNameInput;
        const input = Array.isArray(inputs) ? inputs[inputs.length - 1] : inputs;
        if (input) {
          input.focus();
        }
      });
    },

    updateManifestLink(locale) {
      const link = document.querySelector('link[rel="manifest"]');
      if (link) {
        link.setAttribute('href', locale === 'nl' ? '/manifest.nl.json' : '/manifest.en.json');
      }
    },

    completeOnboarding() {
      Storage.set('onboarded', true);
      // Explicitly persist the pending settings even if the user left them
      // at their default, so this prompt doesn't reappear on next launch.
      for (const key of this.pendingOnboardingSettings) {
        Storage.set(key, this[key]);
      }
      this.isFullOnboarding = false;
      this.pendingOnboardingSettings = [];
      Modal.getOrCreateInstance(this.$refs.onboardingModal).hide();
    },

    async startOver() {
      if (await this.confirm(Locale.get('StartOverConfirm'))) {
        // Clear current blocks but keep the saved history
        this.blocks = [];
        this.closeMobileMenu();
      }
    },

    confirm(message) {
      this.confirmMessage = message;
      Modal.getOrCreateInstance(this.$refs.confirmModal).show();
      return new Promise(resolve => {
        this.confirmResolve = resolve;
      });
    },

    resolveConfirm(result) {
      Modal.getOrCreateInstance(this.$refs.confirmModal).hide();
      if (this.confirmResolve) {
        this.confirmResolve(result);
        this.confirmResolve = null;
      }
    },

    addBlock() {
      this.blocks.push({...this.newBlock, id: Date.now(), isEditing: false});
      this.newBlock.name = '';
      this.newBlock.points = 1;
    },

    getBlockClass(points) {
      switch (points) {
        case 1:
          return 'bg-success text-white';
        case 2:
          return 'bg-info text-black';
        case 3:
          return 'bg-warning text-black';
        case 4:
          return 'bg-danger text-white';
      }
    },

    changeBlockScore(block, newScore) {
      block.points = newScore;
    },

    async deleteBlock(block) {
      if (await this.confirm(Locale.get('DeleteBlockConfirm'))) {
        const index = this.blocks.indexOf(block);
        this.blocks.splice(index, 1);
      }
    },

    saveBucket() {
      const bucket = {blocks: JSON.parse(JSON.stringify(this.blocks)), date: new Date().toLocaleString()};
      this.storedBuckets.push(bucket);
      this.enforceHistoryLimit();
    },

    async deleteBucket(index) {
      if (await this.confirm(Locale.get('DeleteBucketConfirm'))) {
        this.storedBuckets.splice(index, 1);
      }
    },

    enforceHistoryLimit() {
      if (!this.limitHistoryItems) {
        return;
      }
      const excess = this.storedBuckets.length - this.maxHistoryItems;
      if (excess > 0) {
        this.storedBuckets.splice(0, excess);
      }
    },

    isDifferentDay(a, b) {
      const dateA = new Date(a);
      const dateB = new Date(b);
      return dateA.getFullYear() !== dateB.getFullYear()
          || dateA.getMonth() !== dateB.getMonth()
          || dateA.getDate() !== dateB.getDate();
    },

    handleVisibilityChange() {
      if (document.visibilityState === 'visible') {
        this.checkAutoSaveOnNewDay();
      }
    },

    checkAutoSaveOnNewDay() {
      if (!this.autoSaveOnNewDay || !this.blocks.length) {
        return;
      }
      if (!this.lastModifiedAt) {
        // Blocks from before this feature existed have no recorded
        // modification time; there's no "old day" to compare against, so
        // start tracking from now instead of silently never triggering.
        this.lastModifiedAt = Date.now();
        Storage.set('blocksLastModifiedAt', this.lastModifiedAt);
        return;
      }
      if (this.isDifferentDay(this.lastModifiedAt, Date.now())) {
        const bucket = {blocks: JSON.parse(JSON.stringify(this.blocks)), date: new Date(this.lastModifiedAt).toLocaleString()};
        this.storedBuckets.push(bucket);
        this.enforceHistoryLimit();
        this.blocks = [];
      }
    },

    loadBucket(bucket) {
      this.blocks = JSON.parse(JSON.stringify(bucket.blocks));
      this.closeMobileMenu();
    },

    closeMobileMenu() {
      const navbarCollapse = document.getElementById('navbarSupportedContent');
      if (navbarCollapse) {
        Collapse.getOrCreateInstance(navbarCollapse).hide();
      }
    },

    openBucketSizeModal() {
      Modal.getOrCreateInstance(this.$refs.bucketSizeModal).show();
    },

    async clearHistory() {
      if (await this.confirm(Locale.get('ClearHistoryConfirm'))) {
        this.storedBuckets = [];
        Storage.remove('buckets');
        Storage.remove('maxPoints');
        this.maxPoints = DEFAULT_MAX_POINTS;
      }
    },

    exportConfig() {
      this.configModalMode = 'export';
      this.configText = Storage.export();
      this.configCopied = false;
      Modal.getOrCreateInstance(this.$refs.configModal).show();
    },

    copyConfigText() {
      navigator.clipboard.writeText(this.configText);
      this.configCopied = true;
    },

    importConfig() {
      this.configModalMode = 'import';
      this.configText = '';
      this.configCopied = false;
      Modal.getOrCreateInstance(this.$refs.configModal).show();
    },

    applyImportConfig() {
      Storage.import(this.configText);
      window.location.reload();
    },
  },
};
</script>

<style>
.bucket-size-preview {
  max-height: 60vh;
  overflow: auto;
  display: flex;
  justify-content: center;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.previous-bucket-preview {
  opacity: 0.6;
  filter: grayscale(50%);
  pointer-events: none;
}
.accordion-header .accordion-button:focus {
  box-shadow: none;
}
</style>
