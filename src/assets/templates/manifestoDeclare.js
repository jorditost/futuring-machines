//import prompts from '@/assets/prompts'
import systemManifesto from '@/assets/prompts/systemManifesto'
import continueWriting from '@/assets/prompts/continueWriting'
import continueWritingManifesto from '@/assets/prompts/continueWritingManifesto'
import continueWithToneManifesto from '@/assets/prompts/continueWithToneManifestoGame'
import questionManifesto from '@/assets/prompts/questionManifesto'
//import setupStory from '@/assets/prompts/setupStory'

export default {
  id: 'manifesto-declare',
  prompts: [continueWritingManifesto, continueWithToneManifesto, questionManifesto],
  name: {
    en: 'WE DECLARE',
    de: 'WE DECLARE'
  },
  description: {
    en: '',
    de: ''
  },
  template: {
    en: 'We declare ',
    de: 'We declare '
  },
  start: continueWriting,
  system: systemManifesto
}
