import { createClient } from '@supabase/supabase-js'
class Connection{
database(){
const url='https://xlkyvfzyvgfttnxcdtej.supabase.co';
const key='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhsa3l2Znp5dmdmdHRueGNkdGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxODU4NzksImV4cCI6MjA2NDc2MTg3OX0.NTlM19q0UquLZgAdXMvMxxHhE77FAApcsEr0rK6lwS4';
// Create a single supabase client for interacting with your database
const supabase = createClient(url,key);
return supabase;
}
}

export default Connection;