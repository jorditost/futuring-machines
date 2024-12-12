//import prompts from '@/assets/prompts'
import systemManifesto from '@/assets/prompts/systemManifesto'
import continueWriting from '@/assets/prompts/continueWriting'
import continueWritingManifesto from '@/assets/prompts/continueWritingManifesto'
import continueWithToneManifesto from '@/assets/prompts/continueWithToneManifestoGame'
import questionManifesto from '@/assets/prompts/questionManifesto'
//import setupStory from '@/assets/prompts/setupStory'

export default {
  id: 'manifesto-future',
  prompts: [continueWritingManifesto, continueWithToneManifesto, questionManifesto],
  name: {
    en: 'IN THE FUTURE',
    de: 'IN THE FUTURE'
  },
  description: {
    en: '',
    de: ''
  },
  template: {
    en: 'In the future ',
    de: 'In the future '
  },
  start: continueWriting,
  system: systemManifesto
}
