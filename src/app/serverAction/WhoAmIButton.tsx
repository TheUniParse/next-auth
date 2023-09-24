'use client'

import { useState } from 'react'

export function WhoAmIButton({
  whoAmIAction,
}: {
  whoAmIAction: () => Promise<string>
}) {
  const [name, setName] = useState<string>()

  return (
    <div>
      <button
        onClick={async () => setName(await whoAmIAction())}>
        Who Am I?
      </button>
      {name && <p>you are {name}</p>}
    </div>
  )
}
