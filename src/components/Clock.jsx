/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

export const Clock = () => {
  const [date, setDate] = useState(null)
  const [timezone, setTimezone] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const updateTime = (zone) => {
      const now = new Date()
      setDate(now)
    }

    const getTimezone = (lat, lon) => {
      const zone = Intl.DateTimeFormat().resolvedOptions().timeZone
      setTimezone(zone)
      updateTime(zone)
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getTimezone(position.coords.latitude, position.coords.longitude)
        },
        () => {
          setError("No se pudo obtener la ubicación.")
        }
      )
    } else {
      setError("Tu navegador no soporta geolocalización.")
    }

    const interval = setInterval(() => {
      if (timezone) updateTime(timezone)
    }, 1000)
    return () => clearInterval(interval)
  }, [timezone])

  if (error) {
    return <p className="text-red-500">{error}</p>
  }

  return (
    <div className="p-4  text-white text-center shadow-md w-fit mx-auto font-inter">
      {date && timezone ? (
        <>
          <p className="text-6xl">
            {date.toLocaleTimeString("default", { timeZone: timezone })}
          </p>
          <p className="text-sm mt-1">
            {date.toLocaleDateString("default", { timeZone: timezone })}
          </p>
          <p className="text-xs mt-1 opacity-30">{timezone}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  )
}
