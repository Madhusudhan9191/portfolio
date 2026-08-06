"use client";
import { Moon, Sun } from "lucide-react"; import { useState } from "react";
export default function ThemeToggle(){const [light,setLight]=useState(false);function toggle(){const next=!light;setLight(next);document.documentElement.dataset.theme=next?"light":"dark";}return <button onClick={toggle} aria-label="Toggle color theme" className="rounded-lg border p-2" style={{borderColor:"var(--border)",color:"var(--text-dim)"}}>{light?<Moon size={15}/>:<Sun size={15}/>}</button>}
