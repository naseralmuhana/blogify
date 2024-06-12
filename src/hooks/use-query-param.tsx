import { useSearchParams } from "next/navigation"

/**
 * Custom hook to retrieve a specified search parameter from the URL.
 * Defaults to "callbackUrl" if no parameter name is provided.
 * @param {string} paramName - The name of the search parameter to retrieve.
 * @returns {string | null} The value of the specified search parameter, or null if it doesn't exist.
 */
export const useQueryParam = (
  paramName: string = "callbackUrl",
): string | null => {
  const searchParams = useSearchParams()
  return searchParams.get(paramName)
}
