import { createClient } from "@supabase/supabase-js";

// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9tcWRjZGt2Z25tZG1mcW1xbWFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwODMxMzcsImV4cCI6MjA3NjY1OTEzN30.mEyxE1-5NyawIuGcymqy8JR7kE9DK1j8ul6urdIakaI";
// const supabaseUrl = "https://omqdcdkvgnmdmfqmqmad.supabase.co";
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
