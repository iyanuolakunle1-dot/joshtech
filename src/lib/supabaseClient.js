import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// supabase will be null if env vars aren't set — the app works fine without it.
// Only needed if you want to write directly to Supabase from the client
// (e.g. storing contact messages) instead of going through the Express API.
export const supabase =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null
