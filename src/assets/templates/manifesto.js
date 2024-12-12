//import prompts from '@/assets/prompts'
import systemManifesto from '@/assets/prompts/systemManifestoProvocative'
import continueWriting from '@/assets/prompts/continueWriting'
import continueWritingManifesto from '@/assets/prompts/continueWritingManifesto'
import continueWithToneManifesto from '@/assets/prompts/continueWithToneManifestoGame'
import questionManifesto from '@/assets/prompts/questionManifesto'
//import setupStory from '@/assets/prompts/setupStory'

export default {
  id: 'manifesto',
  prompts: [continueWritingManifesto, continueWithToneManifesto, questionManifesto],
  name: {
    en: 'New AI Manifesto 📢',
    de: 'Neues KI-Manifest 📢'
  },
  description: {
    en: 'Empty manifesto',
    de: 'Empty manifesto'
  },
  template: {
    en: '',
    de: ''
  },
  start: continueWriting,
  system: systemManifesto
}