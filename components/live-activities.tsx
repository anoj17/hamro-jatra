import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Users, MapPin, Clock } from "lucide-react";

const liveActivities = [
  {
    id: 1,
    title: "इन्द्रजात्रा प्रत्यक्ष प्रसारण",
    location: "हनुमानढोका, काठमाडौं",
    viewers: "५,२३४",
    status: "प्रत्यक्ष",
    startTime: "१०:३० बजे",
    image: "/indra-jatra-live-hanuman-dhoka-kathmandu.png",
    description:
      "इन्द्रजात्राको मुख्य कार्यक्रम हनुमानढोकाबाट प्रत्यक्ष प्रसारण",
  },
  {
    id: 2,
    title: "गाईजात्रा तयारी",
    location: "बसन्तपुर दरबार क्षेत्र",
    viewers: "२,१०१",
    status: "प्रत्यक्ष",
    startTime: "११:०० बजे",
    image: "/gai-jatra-preparation-basantapur-durbar-square.png",
    description: "गाईजात्राको तयारी र सहभागीहरूको अभ्यास",
  },
  {
    id: 3,
    title: "तीज गीत प्रतियोगिता",
    location: "पशुपतिनाथ मन्दिर",
    viewers: "३,४५६",
    status: "आगामी",
    startTime: "२:०० बजे",
    image: "/teej-song-competition-pashupatinath-temple.png",
    description: "महिलाहरूको तीज गीत प्रतियोगिता पशुपतिनाथमा",
  },
];

export function LiveActivities() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span className="text-primary">प्रत्यक्ष</span> कार्यक्रमहरू
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            अहिले नै हेर्नुहोस् नेपालभरका जात्रा र सांस्कृतिक कार्यक्रमहरू
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveActivities.map((activity) => (
            <Card
              key={activity.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />

                {/* Live indicator */}
                <div className="absolute top-3 left-3">
                  <Badge
                    className={`${
                      activity.status === "प्रत्यक्ष"
                        ? "bg-red-500 text-white animate-pulse"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {activity.status === "प्रत्यक्ष" && (
                      <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse"></div>
                    )}
                    {activity.status}
                  </Badge>
                </div>

                {/* Viewers count */}
                <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded-full text-xs flex items-center space-x-1">
                  <Users className="w-3 h-3" />
                  <span>{activity.viewers}</span>
                </div>

                {/* Play button overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    <Play className="w-6 h-6 mr-2" />
                    हेर्नुहोस्
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {activity.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {activity.description}
                </p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{activity.startTime}</span>
                  </div>
                </div>

                <Button
                  className="w-full mt-4"
                  variant={
                    activity.status === "प्रत्यक्ष" ? "default" : "outline"
                  }
                >
                  <Play className="w-4 h-4 mr-2" />
                  {activity.status === "प्रत्यक्ष"
                    ? "अहिले हेर्नुहोस्"
                    : "सम्झना सेट गर्नुहोस्"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
