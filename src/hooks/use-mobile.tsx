
import { useState, useEffect } from "react"

/**
 * Hook to determine if the current viewport is considered mobile
 * @returns {boolean} True if the viewport width is less than 768px
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === "undefined") return false
    return window.innerWidth < 768
  })

  useEffect(() => {
    if (typeof window === "undefined") return

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener("resize", checkMobile)
    
    // Initial check
    checkMobile()

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
