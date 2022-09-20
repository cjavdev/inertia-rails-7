import React from 'react'
import Form from './Form'

export default function Index({tweets}) {
  return (
    <div>
      <Form />
      <h1 className="text-3xl">Tweets</h1>
      {tweets.map(t => <div key={t.id}>{t.content}</div>)}
    </div>
  )
}
