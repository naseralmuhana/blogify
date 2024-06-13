import { z } from "zod"
import { initEdgeStore } from "@edgestore/server"
import { createEdgeStoreNextHandler } from "@edgestore/server/adapters/next/app"
import { initEdgeStoreClient } from "@edgestore/server/core"

const es = initEdgeStore.create()

const edgeStoreRouter = es.router({
  publicImages: es
    .imageBucket() /**
     * return `true` to allow delete
     * This function must be defined if you want to delete files directly from the client.
     */
    .beforeDelete(() => {
      return true // allow delete
    })
    // this input will be required for every upload request
    .input(z.object({ type: z.enum(["blog-banner", "blog-body"]) }))
    .path(({ input }) => [{ type: input.type }]),
})

export const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
})

// For using it in server component or server action
export const backendClient = initEdgeStoreClient({
  router: edgeStoreRouter,
})

/**
 * This type is used to create the type-safe client for the frontend.
 */
export type EdgeStoreRouter = typeof edgeStoreRouter
