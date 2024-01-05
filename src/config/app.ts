type AppConfig = {
  name: string
  description: string
  url: string
  links: {
    github: string
  }
}

export const appConfig: AppConfig = {
  name: 'Masj-Mj',
  description: 'An app about chat-gpt with Next.js.',
  url: 'https://moyaojun.cn',
  links: {
    github: 'https://github.com/Mask-MJ/next-trpc-basic',
  },
}
