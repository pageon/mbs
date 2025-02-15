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
      MentalBucketSystem: 'Mental Bucket System',
      History: 'History',
      SavedBuckets: 'Saved buckets',
      ClearHistory: 'Clear history',
      ClearHistoryConfirm: 'Are you sure you want to clear all history?',
      StartOverConfirm: 'Are you sure you want to start over? This will clear the current bucket but not saved history.',
      DeleteBlockConfirm: 'Are you sure you want to delete this block?',
      MaxPoints: 'Max points',
      Buffer: 'Buffer',
      points: 'points',
      BlockName: 'What\'s on your mind?',
      AddBlock: 'Add block',
      Add: 'Add',
      Bucket: 'Bucket',
      Overflow: 'Overflow',
      nl: 'Nederlands',
      en: 'English',
      BucketSize: 'Bucket size',
      ShowIndicator: 'Show bucket content indicator',
      Language: 'Language',
      ExportConfig: 'Export settings',
      ConfigCopied: 'Settings copied to clipboard',
      ImportConfigConfirm: 'Are you sure you want to overwrite the current settings?',
      ImportConfigPrompt: 'Paste settings here',
    },
    nl: {
      Settings: 'Instellingen',
      Print: 'Printen',
      EmptyBucket: 'Emmer leeg maken',
      SaveBucket: 'Emmer opslaan',
      MentalBucketSystem: 'Mentaal Emmersysteem',
      History: 'Geschiedenis',
      SavedBuckets: 'Opgeslagen emmers',
      ClearHistory: 'Geschiedenis wissen',
      ClearHistoryConfirm: 'Ben je zeker dat je alle geschiedenis wilt wissen?',
      StartOverConfirm: 'Ben je zeker dat je opnieuw wilt beginnen? Dit zal de huidige emmer wissen maar niet de opgeslagen geschiedenis.',
      DeleteBlockConfirm: 'Ben je zeker dat je deze block wilt verwijderen?',
      MaxPoints: 'Maximum punten',
      Buffer: 'Buffer',
      points: 'punten',
      BlockName: 'Waar denk je aan?',
      AddBlock: 'Blok toevoegen',
      Add: 'Toevoegen',
      Bucket: 'Emmer',
      Overflow: 'Overloop',
      nl: 'Nederlands',
      en: 'English',
      BucketSize: 'Emmergrootte',
      ShowIndicator: 'Toon indicator inhoud emmer',
      Language: 'Taal',
      ExportConfig: 'Instellingen exporteren',
      ConfigCopied: 'Instellingen gekopieerd naar klembord',
      ImportConfigConfirm: 'Ben je zeker dat je de huidige instellingen wilt overschrijven?',
      ImportConfigPrompt: 'Plak hier de instellingen',
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
