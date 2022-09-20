import React, {useState} from 'react'
import { useForm } from '@inertiajs/inertia-react'

export default function MyForm() {
  const {data, setData, post, processing, errors, reset} = useForm({
    content: ""
  })

  const submit = async (e) => {
    e.preventDefault();
    console.log("Submitting");
    const token = document.querySelector('meta[name="csrf-token"]').content
    post("/tweets", {
      headers: {
        'X-CSRF-Token': token
      },
      onSuccess: () => reset('content')
    })
  }

  return (
    <div>
      <form onSubmit={submit}>
        <textarea onChange={e => setData({ tweet: { content: e.target.value }})}></textarea>
        <button>Tweet</button>
      </form>
    </div>
  )
}
