import { Button } from "@/components/ui/button";
import { Play, Calendar, Users } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative bg-white text-black py-20 overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-accent rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-accent rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border-2 border-accent rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 border-2 border-accent rounded-full"></div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance">
                नेपालका <span className="text-primary">जात्राहरू</span>{" "}
                प्रत्यक्ष हेर्नुहोस्
              </h1>
              <p className="text-xl text-black leading-relaxed text-pretty">
                नेपालभरका सबै जात्रा र पर्वहरूको प्रत्यक्ष प्रसारण, समाचार र
                जानकारी एकै ठाउँमा। हाम्रो संस्कृति र परम्परालाई जीवन्त राख्दै।
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary cursor-pointer text-accent-foreground"
              >
                <Play className="w-5 h-5 mr-2" />
                प्रत्यक्ष हेर्नुहोस्
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border cursor-pointer text-black hover:bg-primary"
              >
                <Calendar className="w-5 h-5 mr-2" />
                आजका कार्यक्रमहरू
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-black">५०+</div>
                <div className="text-sm text-black">जात्राहरू</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">२४/७</div>
                <div className="text-sm text-primary-black">
                  प्रत्यक्ष प्रसारण
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-black">१०,०००+</div>
                <div className="text-sm text-primary-black">दर्शकहरू</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/nepali-jatra-festival-celebration-with-traditional.png"
                alt="नेपाली जात्रा उत्सव"
                className="w-full h-full object-cover"
                width={1200}
                height={1200}
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              <Users className="w-4 h-4 inline mr-1" />
              प्रत्यक्ष: ५,२३४
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card text-card-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              🎭 इन्द्रजात्रा २०८१
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
