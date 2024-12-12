//import prompts from '@/assets/prompts'
import systemManifesto from '@/assets/prompts/systemManifesto'
import continueWriting from '@/assets/prompts/continueWriting'
import continueWritingManifesto from '@/assets/prompts/continueWritingManifesto'
import continueWithToneManifesto from '@/assets/prompts/continueWithToneManifestoGame'
import questionManifesto from '@/assets/prompts/questionManifesto'
//import setupStory from '@/assets/prompts/setupStory'

export default {
  id: 'manifesto-untilnow',
  prompts: [continueWritingManifesto, continueWithToneManifesto, questionManifesto],
  name: {
    en: 'UNTIL NOW',
    de: 'UNTIL NOW'
  },
  description: {
    en: '',
    de: ''
  },
  template: {
    en: 'Imagine ',
    de: 'Imagine '
  },
  start: continueWriting,
  system: systemManifesto
}
