interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <div className="flex min-h-[calc(100vh-90px)] items-center justify-center">
        {children}
      </div>
    </>
  )
}

// min-height here is the min-h-cover value + the it's padding
