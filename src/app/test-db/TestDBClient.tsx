"use client" // خیلی مهم

import { supabase } from '@/lib/supabaseClient'

export default function TestDBClient() {
  async function checkDB() {
    const { data, error } = await supabase.from('users').select('*')
    if (error) console.log('Error:', error)
    else console.log('Data:', data)
  }

  return (
    <button
      onClick={checkDB}
      className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
    >
      Test Connection
    </button>
  )
}
