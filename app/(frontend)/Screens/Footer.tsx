import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Course Builder</h3>
            <p className="text-sm text-muted-foreground">Build amazing course pages with our intuitive platform.</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Product</h4>
            <div className="space-y-2 text-sm">
              <Link href="#features" className="block hover:text-primary">
                Features
              </Link>
              <Link href="#pricing" className="block hover:text-primary">
                Pricing
              </Link>
              <Link href="#templates" className="block hover:text-primary">
                Templates
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Company</h4>
            <div className="space-y-2 text-sm">
              <Link href="#about" className="block hover:text-primary">
                About
              </Link>
              <Link href="#contact" className="block hover:text-primary">
                Contact
              </Link>
              <Link href="#careers" className="block hover:text-primary">
                Careers
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Legal</h4>
            <div className="space-y-2 text-sm">
              <Link href="/privacy" className="block hover:text-primary">
                Privacy
              </Link>
              <Link href="/terms" className="block hover:text-primary">
                Terms
              </Link>
              <Link href="/cookies" className="block hover:text-primary">
                Cookies
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Course Builder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
