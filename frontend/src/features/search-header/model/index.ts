import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCatalogRoute } from '../../../shared/config'

export function useHeaderSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const handleIconClick = () => {
    if (!open) {
      setOpen(true)
      setTimeout(() => inputRef.current?.focus(), 0)
      return
    }
    if (query.trim()) {
      navigate(getCatalogRoute({ q: query.trim() }))
      setOpen(false)
      setQuery('')
    } else {
      setOpen(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      navigate(getCatalogRoute({ q: query.trim() }))
      setOpen(false)
      setQuery('')
    }
  }

  return { open, query, setQuery, inputRef, handleIconClick, handleSubmit }
}
