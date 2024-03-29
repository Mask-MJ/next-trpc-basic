import { authOptions } from '~/server/auth'
import { getServerSession } from 'next-auth/next'

export async function getCurrentUser() {
  const session = await getServerSession(authOptions)
  console.log(session)

  return session?.user
}
