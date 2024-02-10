import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'dyphackathon',

  projectId: 'r1rigoz1',
  dataset: 'events',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
