import { cookies } from 'next/headers'

import { Copyright } from '@/components/Copyright'
import { EmptyMemories } from '@/components/EmptyMemoreis'
import { Herosection } from '@/components/Herosection'
import { Sign } from '@/components/Sign'
import { Profile } from '@/components/Profile'
export default function Home() {
  const isAuthenticate = cookies().has('token')
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* left */}
      <div className="relative flex  flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-start.svg)] bg-cover px-28 py-16">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2  bg-stripes  " />

        {isAuthenticate ? <Profile /> : <Sign />}

        <Herosection />

        <Copyright />
      </div>
      {/* right */}
      <div className="flex flex-col bg-[url(../assets/bg-start.svg)] bg-cover p-16">
        <EmptyMemories />
      </div>
    </main>
  )
}
