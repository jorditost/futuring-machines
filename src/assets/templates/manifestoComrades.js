//import prompts from '@/assets/prompts'
import systemManifesto from '@/assets/prompts/systemManifesto'
import continueWriting from '@/assets/prompts/continueWriting'
import continueWritingManifesto from '@/assets/prompts/continueWritingManifesto'
import continueWithToneManifesto from '@/assets/prompts/continueWithToneManifestoGame'
import questionManifesto from '@/assets/prompts/questionManifesto'
//import setupStory from '@/assets/prompts/setupStory'

export default {
  id: 'manifesto-comrades',
  prompts: [continueWritingManifesto, continueWithToneManifesto, questionManifesto],
  name: {
    en: 'COME, COMRADES',
    de: 'COME, COMRADES'
  },
  description: {
    en: '',
    de: ''
  },
  template: {
    en: 'Come, comrades ',
    de: 'Come, comrades '
  },
  start: continueWriting,
  system: systemManifesto
}
