import { useEffect } from 'react';
import {useState} from 'react';
import { IoSunny } from 'react-icons/io5';
import { TbMoonFilled } from 'react-icons/tb';

const themes = ['light', 'dark'];

export default function ThemeToggle() {
    const [isMounted, setIsMounted] = useState(false);
    const [theme, setTheme] = useState(()=> {
        if (import.meta.env.SSR){
            return undefined;
        }
        if(typeof localStorage !== undefined && localStorage.getItem('theme')){
            return localStorage.getItem('theme')
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark'
        }
        return 'light'
    })

    const toggleTheme = () => {
        const t = theme === 'light' ? 'dark' : 'light'
        localStorage.setItem('theme', t)
        setTheme(t)
    }
    
    useEffect(() => {
        const root = document.documentElement
        
      if(theme === 'light'){
        root.classList.remove('dark')
      } 
      else{
        root.classList.add('dark')
      }
    }, [theme])

    useEffect(() => {
        setIsMounted(true)
    }, [])

   
    return isMounted ? (
        <div className='inline-flex fixed items-center bg-amber-400 dark:bg-zinc-600 rounded-3xl'>
            {themes.map(t => {
                const checked = t === theme
                return(
                    <button key={t} className={`${checked ? 'bg-zinc-100 text-black ' : ''} cursor-pointer p-2 rounded-full `} onClick={toggleTheme} 
                    aria-label='ThemeToggle'>{t === 'light' ? <IoSunny /> : <TbMoonFilled />}</button>
                )
            })}
        </div>
    ) : (<div />)
}