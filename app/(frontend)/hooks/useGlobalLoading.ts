"use client"

import { useState, useCallback } from "react"

interface LoadingState {
  isLoading: boolean
  message?: string
}

export function useGlobalLoading() {
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
    message: undefined,
  })

  const startLoading = useCallback((message?: string) => {
    setLoadingState({ isLoading: true, message })
  }, [])

  const stopLoading = useCallback(() => {
    setLoadingState({ isLoading: false, message: undefined })
  }, [])

  const setLoadingMessage = useCallback((message: string) => {
    setLoadingState((prev) => ({ ...prev, message }))
  }, [])

  return {
    isLoading: loadingState.isLoading,
    message: loadingState.message,
    startLoading,
    stopLoading,
    setLoadingMessage,
  }
}
