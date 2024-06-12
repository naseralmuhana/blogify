import { EditorHeader } from "./_components/editor-header"

interface EditorLayoutProps {
  children: React.ReactNode
}

export default function EditorLayout({ children }: EditorLayoutProps) {
  return (
    <>
      <EditorHeader />
      <main className="min-h-cover container">{children}</main>
    </>
  )
}
