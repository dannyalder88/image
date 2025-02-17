import type { IPXOptions } from 'ipx'
import type { ImageOptions, CreateImageOptions } from './image'

// eslint-disable-next-line no-use-before-define
export type ProviderSetup = (providerOptions: ImageModuleProvider, moduleOptions: ModuleOptions, nuxt: any)
  => void | Promise<void>

export interface InputProvider<T = any> {
  name?: string
  provider?: string
  options?: T
  setup?: ProviderSetup
}

export interface ImageProviders {
  cloudinary?: any
  fastly?: any
  imagekit?: any
  imgix?: any
  prismic?: any
  twicpics?: any
  storyblok?: any,
  ipx?: Partial<IPXOptions>
  static?: Partial<IPXOptions>
}

// TODO: use types from CreateImageOptions
export interface ModuleOptions extends ImageProviders {
  staticFilename: string,
  provider: CreateImageOptions['provider']
  presets: { [name: string]: ImageOptions }
  dir: string
  domains: string[]
  sharp: {}
  screens: CreateImageOptions['screens'],
  densities: CreateImageOptions['densities'],
  internalUrl: string
  providers: { [name: string]: InputProvider | any } & ImageProviders
  [key: string]: any
}

export interface ImageModuleProvider {
  name: string
  importName: string
  options: any
  provider: string
  runtime: string
  runtimeOptions: any
  setup: ProviderSetup
}
