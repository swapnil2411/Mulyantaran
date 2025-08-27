"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-mulyantaran-black flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Animation */}
        <div className="relative mb-8">
          <div className="text-8xl font-bold text-mulyantaran-gold opacity-20">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-mulyantaran-gold/30 rounded-full animate-rotate">
              <div
                className="w-full h-full border-4 border-transparent border-t-mulyantaran-gold rounded-full animate-rotate"
                style={{ animationDirection: "reverse", animationDuration: "2s" }}
              ></div>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-mulyantaran-white mb-4">Page Not Found</h1>

        <p className="text-mulyantaran-text-gray mb-8">
          The page you're looking for doesn't exist or has been moved to a different location.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            className="bg-mulyantaran-gold hover:bg-mulyantaran-gold-dark text-mulyantaran-black font-semibold"
          >
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="border-mulyantaran-gold text-mulyantaran-gold hover:bg-mulyantaran-gold hover:text-mulyantaran-black bg-transparent"
            onClick={() => window.history.back()}
          >
            <button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </Button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-mulyantaran-gold rounded-full animate-float opacity-60"></div>
        <div
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-mulyantaran-accent rounded-full animate-float opacity-40"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/6 w-1 h-1 bg-mulyantaran-success rounded-full animate-float opacity-50"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  )
}
