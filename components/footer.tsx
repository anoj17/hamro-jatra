import Link from "next/link";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">
                  हज
                </span>
              </div>
              <span className="text-xl font-bold">हाम्रो जात्रा</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              नेपालका सबै जात्रा र पर्वहरूको प्रत्यक्ष प्रसारण र समाचारहरू।
              हाम्रो संस्कृति र परम्परालाई जीवन्त राख्दै।
            </p>
            <div className="flex space-x-3">
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent"
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent"
              >
                <Youtube className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-primary-foreground hover:bg-primary-foreground/10 hover:text-accent"
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">
              द्रुत लिङ्कहरू
            </h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                गृहपृष्ठ
              </Link>
              <Link
                href="/live"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                प्रत्यक्ष जात्रा
              </Link>
              <Link
                href="/news"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                समाचारहरू
              </Link>
              <Link
                href="/events"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                कार्यक्रमहरू
              </Link>
              <Link
                href="/about"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                हाम्रो बारेमा
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">श्रेणीहरू</h3>
            <div className="space-y-2">
              <Link
                href="/category/jatra"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                जात्राहरू
              </Link>
              <Link
                href="/category/parva"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                पर्वहरू
              </Link>
              <Link
                href="/category/culture"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                संस्कृति
              </Link>
              <Link
                href="/category/music"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                संगीत
              </Link>
              <Link
                href="/category/art"
                className="block text-primary-foreground/80 hover:text-accent transition-colors"
              >
                कला
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-accent">सम्पर्क</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-accent" />
                <span>काठमाडौं, नेपाल</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Phone className="w-4 h-4 text-accent" />
                <span>+९७७-१-४२३४५६७</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@hamrojatra.com</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="space-y-2">
              <h4 className="font-medium text-accent">समाचारपत्र</h4>
              <div className="flex space-x-2">
                <Input
                  placeholder="तपाईंको इमेल"
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button
                  size="sm"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  सदस्यता
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              © २०८१ हाम्रो जात्रा। सबै अधिकार सुरक्षित।
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                गोपनीयता नीति
              </Link>
              <Link
                href="/terms"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                सेवाका सर्तहरू
              </Link>
              <Link
                href="/contact"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                सम्पर्क
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
