import {createI18n} from "vue-i18n";
import storage from './storage.js';

const DEFAULT_LOCALE = 'nl';
const I18N = createI18n({
  locale: storage.get('locale', DEFAULT_LOCALE),
  fallbackLocale: DEFAULT_LOCALE,
  messages: {
    en: {
      Settings: 'Settings',
      EmptyBucket: 'Empty bucket',
      SaveBucket: 'Save bucket',
      MentalBucketSystem: 'Stress Bucket',
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
      nl: 'Dutch / Nederlands',
      en: 'English / Engels',
      BucketSize: 'Bucket size',
      ChangeBucketSize: 'Change bucket size',
      ShowIndicator: 'Show bucket content indicator',
      Language: 'Language',
      ExportConfig: 'Export settings',
      ImportConfig: 'Import settings',
      ConfigCopied: 'Settings copied to clipboard',
      ImportConfigPrompt: 'Paste settings here',
      Confirm: 'Confirm',
      Cancel: 'Cancel',
      Copy: 'Copy',
      WelcomeTitle: 'Welcome',
      OnboardingExplanation: 'Add anything that\'s on your mind as a block worth between 1 and 4 points - 1 for something small, 4 for something that weighs heavily. Choose how many points your bucket can hold before it\'s full, then start adding what\'s on your mind.',
      GetStarted: 'Get started',
      UnnamedBlock: '(unnamed)',
      AutoSaveOnNewDay: 'Start every new day with a new bucket after saving the old one',
      Delete: 'Delete',
      DeleteBucketConfirm: 'Are you sure you want to delete this saved bucket?',
      LimitHistoryItems: 'Limit the number of saved buckets',
      MaxHistoryItems: 'Maximum number of saved buckets',
      ShowBlockLabels: 'Show block names inside the bucket',
      ShowPreviousBucketSuggestions: 'Show suggestions and the previous bucket',
      PreviousBucket: 'Previous bucket',
    },
    nl: {
      Settings: 'Instellingen',
      EmptyBucket: 'Emmer leeg maken',
      SaveBucket: 'Emmer opslaan',
      MentalBucketSystem: 'Stressemmer',
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
      nl: 'Nederlands / Dutch',
      en: 'Engels / English',
      BucketSize: 'Emmergrootte',
      ChangeBucketSize: 'Emmergrootte aanpassen',
      ShowIndicator: 'Toon indicator inhoud emmer',
      Language: 'Taal',
      ExportConfig: 'Instellingen exporteren',
      ImportConfig: 'Instellingen importeren',
      ConfigCopied: 'Instellingen gekopieerd naar klembord',
      ImportConfigPrompt: 'Plak hier de instellingen',
      Confirm: 'Bevestigen',
      Cancel: 'Annuleren',
      Copy: 'Kopiëren',
      WelcomeTitle: 'Welkom',
      OnboardingExplanation: 'Voeg alles toe wat je bezighoudt als een blok van 1 tot 4 punten - 1 voor iets kleins, 4 voor iets dat zwaar weegt. Kies hoeveel punten je emmer kan bevatten voordat hij vol is, en begin dan met toevoegen wat je bezighoudt.',
      GetStarted: 'Aan de slag',
      UnnamedBlock: '(naamloos)',
      AutoSaveOnNewDay: 'Elke nieuwe dag de oude emmer opslaan en met een nieuwe emmer starten',
      Delete: 'Verwijderen',
      DeleteBucketConfirm: 'Ben je zeker dat je deze opgeslagen emmer wilt verwijderen?',
      LimitHistoryItems: 'Beperk het aantal opgeslagen emmers',
      MaxHistoryItems: 'Maximum aantal opgeslagen emmers',
      ShowBlockDividers: 'Toon dunne lijnen tussen blokken',
      ShowBlockLabels: 'Toon bloknamen in de emmer',
      ShowPreviousBucketSuggestions: 'Toon suggesties en de vorige emmer',
      PreviousBucket: 'Vorige emmer',
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
