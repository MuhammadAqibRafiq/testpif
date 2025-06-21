import Typography from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import ThemeDebug from '@/components/ui/ThemeDebug';

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-[var(--background)] transition-colors duration-200">
      <ThemeDebug />
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="text-center py-16">
          <Typography variant="h1" color="primary" gutterBottom>
            Welcome to Our Design System
          </Typography>
          <Typography variant="h4" color="textSecondary" gutterBottom>
            A MUI-inspired theming system built with Next.js and Tailwind CSS
          </Typography>
          <Typography variant="body1" color="textSecondary" className="max-w-2xl mx-auto mb-8">
            Experience a comprehensive design system with dynamic theming, consistent typography, 
            and beautiful components that adapt seamlessly between light and dark modes.
          </Typography>
          <div className="flex gap-4 justify-center">
            <Button variant="contained" color="primary" size="large">
              Get Started
            </Button>
            <Button variant="outlined" color="secondary" size="large">
              Learn More
            </Button>
          </div>
        </section>

        {/* Typography Showcase */}
        <section className="py-16">
          <Typography variant="h2" color="textPrimary" gutterBottom>
            Typography System
          </Typography>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
            </div>
            <div className="space-y-4">
              <Typography variant="subtitle1">Subtitle 1</Typography>
              <Typography variant="subtitle2">Subtitle 2</Typography>
              <Typography variant="body1">Body 1 - This is the main body text used for paragraphs and general content.</Typography>
              <Typography variant="body2">Body 2 - This is secondary body text, slightly smaller than body 1.</Typography>
              <Typography variant="button">Button Text</Typography>
              <Typography variant="caption">Caption Text</Typography>
              <Typography variant="overline">Overline Text</Typography>
            </div>
          </div>
        </section>

        {/* Color System */}
        <section className="py-16">
          <Typography variant="h2" color="textPrimary" gutterBottom>
            Color System
          </Typography>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Primary Colors */}
            <div className="space-y-2">
              <Typography variant="h6" color="primary">Primary Colors</Typography>
              <div className="grid grid-cols-5 gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div
                    key={shade}
                    className={`h-12 rounded bg-primary-${shade} border border-grey-200 dark:border-grey-700`}
                    title={`Primary ${shade}`}
                  />
                ))}
              </div>
            </div>

            {/* Secondary Colors */}
            <div className="space-y-2">
              <Typography variant="h6" color="secondary">Secondary Colors</Typography>
              <div className="grid grid-cols-5 gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div
                    key={shade}
                    className={`h-12 rounded bg-secondary-${shade} border border-grey-200 dark:border-grey-700`}
                    title={`Secondary ${shade}`}
                  />
                ))}
              </div>
            </div>

            {/* Success Colors */}
            <div className="space-y-2">
              <Typography variant="h6" color="success">Success Colors</Typography>
              <div className="grid grid-cols-5 gap-1">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
                  <div
                    key={shade}
                    className={`h-12 rounded bg-success-${shade} border border-grey-200 dark:border-grey-700`}
                    title={`Success ${shade}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Button Showcase */}
        <section className="py-16">
          <Typography variant="h2" color="textPrimary" gutterBottom>
            Button Components
          </Typography>
          
          {/* Contained Buttons */}
          <div className="mb-8">
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contained Buttons
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button variant="contained" color="primary">Primary</Button>
              <Button variant="contained" color="secondary">Secondary</Button>
              <Button variant="contained" color="success">Success</Button>
              <Button variant="contained" color="error">Error</Button>
              <Button variant="contained" color="warning">Warning</Button>
              <Button variant="contained" color="info">Info</Button>
            </div>
          </div>

          {/* Outlined Buttons */}
          <div className="mb-8">
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Outlined Buttons
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button variant="outlined" color="primary">Primary</Button>
              <Button variant="outlined" color="secondary">Secondary</Button>
              <Button variant="outlined" color="success">Success</Button>
              <Button variant="outlined" color="error">Error</Button>
              <Button variant="outlined" color="warning">Warning</Button>
              <Button variant="outlined" color="info">Info</Button>
            </div>
          </div>

          {/* Text Buttons */}
          <div className="mb-8">
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Text Buttons
            </Typography>
            <div className="flex flex-wrap gap-4">
              <Button variant="text" color="primary">Primary</Button>
              <Button variant="text" color="secondary">Secondary</Button>
              <Button variant="text" color="success">Success</Button>
              <Button variant="text" color="error">Error</Button>
              <Button variant="text" color="warning">Warning</Button>
              <Button variant="text" color="info">Info</Button>
            </div>
          </div>

          {/* Button Sizes */}
          <div>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Button Sizes
            </Typography>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="contained" color="primary" size="small">Small</Button>
              <Button variant="contained" color="primary" size="medium">Medium</Button>
              <Button variant="contained" color="primary" size="large">Large</Button>
            </div>
          </div>
        </section>

        {/* Theme Information */}
        <section className="py-16 bg-grey-50 dark:bg-grey-900 rounded-lg p-8">
          <Typography variant="h3" color="textPrimary" gutterBottom>
            Theme Features
          </Typography>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <Typography variant="h6" color="primary" gutterBottom>
                Dynamic Theming
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Switch between light and dark modes with a beautiful animated toggle. 
                The theme persists across sessions and respects system preferences.
              </Typography>
            </div>
            <div>
              <Typography variant="h6" color="secondary" gutterBottom>
                Consistent Design
              </Typography>
              <Typography variant="body2" color="textSecondary">
                MUI-inspired design tokens ensure consistency across colors, typography, 
                spacing, and shadows throughout your application.
              </Typography>
            </div>
            <div>
              <Typography variant="h6" color="success" gutterBottom>
                TypeScript Support
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Full TypeScript support with proper type definitions for all components 
                and theme values, ensuring type safety and better developer experience.
              </Typography>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
