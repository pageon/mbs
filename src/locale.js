import {createI18n} from "vue-i18n";
import storage from './storage.js';

const DEFAULT_LOCALE = 'nl';
const I18N = createI18n({
  locale: storage.get('locale', DEFAULT_LOCALE),
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    en: {
      Settings: 'Settings',
      Print: 'Print',
      EmptyBucket: 'Empty bucket',
      SaveBucket: 'Save bucket',
      MBS: 'MBS',
      MentalBucketSystem: 'Mental Bucket System',
      History: 'History',
      SavedBuckets: 'Saved buckets',
      ClearHistory: 'Clear history',
      ClearHistoryConfirm: 'Are you sure you want to clear all history?',
      StartOverConfirm: 'Are you sure you want to start over? This will clear the current bucket but not saved history.',
      MaxPoints: 'Max points',
      Buffer: 'Buffer',
      points: 'points',
      BlockName: 'What\'s on your mind?',
      AddBlock: 'Add block',
      Add: 'Add',
      Bucket: 'Bucket',
    },
    nl: {
      Settings: 'Instellingen',
      Print: 'Printen',
      EmptyBucket: 'Emmer leeg maken',
      SaveBucket: 'Emmer opslaan',
      MBS: 'MES',
      MentalBucketSystem: 'Mentale Emmer Systeem',
      History: 'Geschiedenis',
      SavedBuckets: 'Opgeslagen emmers',
      ClearHistory: 'Geschiedenis wissen',
      ClearHistoryConfirm: 'Ben je zeker dat je alle geschiedenis wilt wissen?',
      StartOverConfirm: 'Ben je zeker dat je opnieuw wilt beginnen? Dit zal de huidige emmer wissen maar niet de opgeslagen geschiedenis.',
      MaxPoints: 'Maximum punten',
      Buffer: 'Buffer',
      points: 'punten',
      BlockName: 'Waar denk je aan?',
      AddBlock: 'Blok toevoegen',
      Add: 'Toevoegen',
      Bucket: 'Emmer',
    }
  }
})
export default class Locale {
  static load(app) {
    app.use(I18N)
  }

  static get(key) {
    return I18N.global.t(key)
  }

  static defaultLocale() {
    return storage.get('locale', DEFAULT_LOCALE)
  }

  static changeLocale(locale) {
    storage.set('locale', locale)
    I18N.global.locale = locale
  }
}
