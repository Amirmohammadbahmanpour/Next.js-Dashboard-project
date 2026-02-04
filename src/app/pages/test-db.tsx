import { supabase } from '@/lib/supabaseClient'

export default function TestDB() {
  async function checkDB() {
    const { data, error } = await supabase.from('users').select('*')
    if (error) console.log('Error:', error)
    else console.log('Data:', data)
  }

  return (
    <div className="p-4">
      <h1>Test Supabase DB</h1>
      <button onClick={checkDB} className="px-4 py-2 bg-blue-500 text-white rounded">
        Test Connection
      </button>
    </div>
  )
}
