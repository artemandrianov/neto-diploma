import { useState, useEffect, useCallback } from 'react'
import { productApi } from '../../../entities/product'
import { categoryApi } from '../../../entities/category'
import type { ProductPreview, Category } from '../../../shared/types'
import { PAGE_SIZE } from '../../../shared/config'

export function useProductCatalog(initialQuery = '') {
  // Categories
  const [categories, setCategories] = useState<Category[]>([])
  const [catStatus, setCatStatus] = useState<'idle' | 'loading' | 'error'>(
    'idle',
  )

  // Filters
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [inputValue, setInputValue] = useState(initialQuery)

  // Items
  const [items, setItems] = useState<ProductPreview[]>([])
  const [itemsStatus, setItemsStatus] = useState<'idle' | 'loading' | 'error'>(
    'idle',
  )
  const [itemsError, setItemsError] = useState('')
  const [hasMore, setHasMore] = useState(false)
  const [offset, setOffset] = useState(0)
  const [moreLoading, setMoreLoading] = useState(false)

  useEffect(() => {
    setCatStatus('loading')
    categoryApi
      .getAll()
      .then((data) => {
        setCategories(data)
        setCatStatus('idle')
      })
      .catch(() => setCatStatus('error'))
  }, [])

  const loadItems = useCallback(async (cat: number, q: string) => {
    setItemsStatus('loading')
    setItemsError('')
    setItems([])
    setOffset(0)
    setHasMore(false)
    try {
      const data = await productApi.getItems({
        categoryId: cat || undefined,
        q: q || undefined,
      })
      setItems(data)
      setOffset(data.length)
      setHasMore(data.length === PAGE_SIZE)
    } catch {
      setItemsError('Не удалось загрузить товары')
      setItemsStatus('error')
      return
    }
    setItemsStatus('idle')
  }, [])

  useEffect(() => {
    loadItems(selectedCategory, searchQuery)
  }, [selectedCategory, searchQuery, loadItems])

  useEffect(() => {
    setSearchQuery(initialQuery)
    setInputValue(initialQuery)
  }, [initialQuery])

  const loadMore = async () => {
    setMoreLoading(true)
    try {
      const data = await productApi.getItems({
        categoryId: selectedCategory || undefined,
        q: searchQuery || undefined,
        offset,
      })
      setItems((prev) => [...prev, ...data])
      setOffset((prev) => prev + data.length)
      if (data.length < PAGE_SIZE) setHasMore(false)
    } catch {
      setItemsError('Не удалось загрузить товары')
    } finally {
      setMoreLoading(false)
    }
  }

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchQuery(inputValue)
  }

  return {
    categories,
    catStatus,
    selectedCategory,
    setSelectedCategory,
    inputValue,
    setInputValue,
    submitSearch,
    items,
    itemsStatus,
    itemsError,
    hasMore,
    moreLoading,
    loadMore,
    retryItems: () => loadItems(selectedCategory, searchQuery),
  }
}
