//import prompts from '@/assets/prompts'
import systemManifesto from '@/assets/prompts/systemManifesto'
import continueWriting from '@/assets/prompts/continueWriting'
import continueWritingManifesto from '@/assets/prompts/continueWritingManifesto'
import continueWithToneManifesto from '@/assets/prompts/continueWithToneManifestoGame'
import questionManifesto from '@/assets/prompts/questionManifesto'
//import setupStory from '@/assets/prompts/setupStory'

export default {
  id: 'manifesto-setup',
  prompts: [continueWritingManifesto, continueWithToneManifesto, questionManifesto],
  name: {
    en: 'New AI Manifesto 📢',
    de: 'Neues KI-Manifest 📢'
  },
  description: {
    en: 'Setup your manifesto first',
    de: 'Setup your manifesto first'
  },
  template: {
    en: "<br><code>/////////////////////////////////<br><br>Let's setup the manifesto first:<br><br>🦄 The metaphor: <br>🌐 The tone: <br>🌟 The orientation: <br><br>/////////////////////////////////</code><br><br><br><start>→ Let AI start! 🔮✍️</start>",
    de: ''
  },
  start: continueWriting,
  system: systemManifesto
}
