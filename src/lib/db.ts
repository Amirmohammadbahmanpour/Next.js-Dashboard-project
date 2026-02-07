import { createClient } from "@supabase/supabase-js";



const supabaseUrl ="https://cjvbxinpvddkqohdzcxx.supabase.co"
const supabaseKey = "sb_publishable_z9rj92pfjT6Mib_QV7NdDQ_LEpqdhGL"

export const supabase = createClient(supabaseUrl , supabaseKey)

export async function getUsers() {
    const {data , error} = await supabase.from("users").select("*")
    if (error) throw error
    return data
}

export async function getInvoices() {
    const { data , error } = await supabase.from("invoices").select("*")
    if (error) throw error
    return data
}

export async function getDashboardCounts() {
    // هر دو درخواست به صورت همزمان
    const [usersRes, invoicesRes] = await Promise.all([
      supabase.from("users").select("*", { count: "exact" }),
      supabase.from("invoices").select("*", { count: "exact" })
    ]);
  
    if (usersRes.error) throw usersRes.error;
    if (invoicesRes.error) throw invoicesRes.error;
  
    return {
      usersCount: usersRes.count ?? 0,
      invoicesCount: invoicesRes.count ?? 0
    };
  }
  
export async function getLatestInvoices() {
  const { data , error } = await supabase
  .from("invoices")
  .select("*")
  .order("created_at", {ascending: false})
  .limit(5)

  if (error) throw error
  console.log("Latest invoices:", data);
  return data
}

export async function getInvoicesTotal() {
  const { data , error } = await supabase
  .from("invoices")
  .select("amount" , {count: "exact"});

  if (error) throw error;
  console.log("Invoices total data:", data);


  const total = data?.reduce((sum, invoices) => sum + (invoices.amount || 0),0) ?? 0;
  return total;
}