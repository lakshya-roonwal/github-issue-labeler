'use client'

import HomePage from "@/components/HomePage"
import MainDashboard from "@/components/MainDashboard";
import { createBrowserClient } from "@supabase/ssr"
import { useEffect, useState } from "react"


export default function Home() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
  
  async function signInWithGithub(){
    const {error} = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options:{
          redirectTo:'/profile'
      }
    })
    if (error){
      console.error(error)
    }
  }
  
  async function signOut(){
    const {error} = await supabase.auth.signOut();
    if (error){
      console.error(error)
    }
  }
  

  useEffect(() => {
    async function getSession(){
      const {data} = await supabase.auth.getSession();
      if (data?.session){
        setUser(data.session.user)
        setLoading(false)
      } else {
        setUser(null)
        setLoading(false);

      }
    }
    getSession()
  }, [])

  console.log({user})

  if (loading){
    return <h1>loading..</h1>
}


  return (

    <div className="">
      {user?
      <MainDashboard 
      signInWithGithub={signInWithGithub}
      signOut={signOut}
      setUser={setUser}
      user={user}
      />
  :
  <HomePage signInWithGithub={signInWithGithub}/>
  }
    </div>
  )
}