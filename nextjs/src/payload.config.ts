import path from 'path'
import { fileURLToPath } from 'url'

import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { SiteSettings } from './globals/SiteSettings'
import { Header } from './globals/Header'
import { Footer } from './globals/Footer'
import { HomePage } from './globals/HomePage'
import { AboutPage } from './globals/AboutPage'
import { AngebotPage } from './globals/AngebotPage'
import { FussballcampPage } from './globals/FussballcampPage'
import { IndoorPage } from './globals/IndoorPage'
import { BuchenPage } from './globals/BuchenPage'
import { ErfolgPage } from './globals/ErfolgPage'
import { LegalPages } from './globals/LegalPages'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const usePostgres = !!process.env.POSTGRES_URL

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' — Amzi Legacy CMS',
    },
  },
  collections: [Users, Media],
  globals: [
    SiteSettings,
    Header,
    Footer,
    HomePage,
    AboutPage,
    AngebotPage,
    FussballcampPage,
    IndoorPage,
    BuchenPage,
    ErfolgPage,
    LegalPages,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'dev-secret-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: usePostgres
    ? vercelPostgresAdapter({
        pool: { connectionString: process.env.POSTGRES_URL },
      })
    : sqliteAdapter({
        client: {
          url: process.env.DATABASE_URI || 'file:./payload.db',
        },
      }),
  sharp,
  plugins: [],
})
