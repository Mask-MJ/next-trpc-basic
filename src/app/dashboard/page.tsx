import { redirect } from 'next/navigation'
// import { Post } from '@prisma/client'
import { EmptyPlaceholder } from '~/components/common/empty-placeholder'
import { getCurrentUser } from '~/lib/session'
import { authOptions } from '~/server/auth'
import { api } from '~/trpc/server'

import { DashboardHeader } from './_components/header'
import { PostCreateButton } from './_components/post-create-button'
import { PostItem } from './_components/post-item'
import { DashboardShell } from './_components/shell'

export const metadata = {
  title: 'Dashboard',
}

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }

  // const posts = await api.post.getPosts.query()
  const posts = await api.post.getPosts.query()

  return (
    <DashboardShell>
      <DashboardHeader heading="Posts" text="Create and manage posts.">
        <PostCreateButton />
      </DashboardHeader>
      <div>
        {posts?.length ? (
          <div className="divide-border divide-y rounded-md border">
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyPlaceholder>
            <EmptyPlaceholder.Icon name="FileText" />
            <EmptyPlaceholder.Title>No posts created</EmptyPlaceholder.Title>
            <EmptyPlaceholder.Description>
              You don&apos;t have any posts yet. Start creating content.
            </EmptyPlaceholder.Description>
            <PostCreateButton variant="outline" />
          </EmptyPlaceholder>
        )}
      </div>
    </DashboardShell>
  )
}
