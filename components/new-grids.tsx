import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Eye, MessageCircle } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "इन्द्रजात्रामा यस वर्ष विशेष कार्यक्रम",
    excerpt:
      "काठमाडौंको इन्द्रजात्रामा यस वर्ष नयाँ परम्परा थपिने भएको छ। सांस्कृतिक समितिले...",
    image: "/indra-jatra-festival-kathmandu-traditional-celebra.png",
    category: "जात्रा",
    time: "२ घण्टा अगाडि",
    views: "१,२३४",
    comments: "४५",
  },
  {
    id: 2,
    title: "दशैं तिहारको तयारी सुरु",
    excerpt:
      "नेपालभरका मन्दिरहरूमा दशैं तिहारको तयारी सुरु भएको छ। विशेष गरी...",
    image: "/dashain-tihar-preparation-nepal-temples-decoration.png",
    category: "पर्व",
    time: "४ घण्टा अगाडि",
    views: "८९०",
    comments: "२३",
  },
  {
    id: 3,
    title: "गाईजात्रामा नयाँ कलाकारहरू",
    excerpt:
      "यस वर्षको गाईजात्रामा युवा कलाकारहरूले विशेष प्रस्तुति दिने भएका छन्...",
    image: "/gai-jatra-festival-young-artists-performance-nepal.png",
    category: "कला",
    time: "६ घण्टा अगाडि",
    views: "५६७",
    comments: "१८",
  },
  {
    id: 4,
    title: "तीजको गीत संग्रह सार्वजनिक",
    excerpt:
      "प्रसिद्ध गायकहरूको तीजका गीतहरूको नयाँ संग्रह सार्वजनिक भएको छ...",
    image: "/teej-songs-collection-nepali-women-traditional-dre.png",
    category: "संगीत",
    time: "८ घण्टा अगाडि",
    views: "२,१०१",
    comments: "६७",
  },
  {
    id: 5,
    title: "छठ पर्वको विशेष व्यवस्था",
    excerpt:
      "तराईका सबै जिल्लामा छठ पर्वको लागि विशेष सुरक्षा व्यवस्था मिलाइएको छ...",
    image: "/chhath-puja-festival-terai-nepal-river-worship.png",
    category: "पर्व",
    time: "१० घण्टा अगाडि",
    views: "१,४५६",
    comments: "३४",
  },
  {
    id: 6,
    title: "लोसारको रंगारंग कार्यक्रम",
    excerpt:
      "हिमाली क्षेत्रमा लोसारको रंगारंग कार्यक्रम आयोजना गरिने भएको छ...",
    image: "/losar-festival-himalayan-region-colorful-celebrati.png",
    category: "संस्कृति",
    time: "१२ घण्टा अगाडि",
    views: "७८९",
    comments: "२९",
  },
];

export function NewsGrid() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            आजका <span className="text-primary">समाचारहरू</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            नेपालभरका जात्रा, पर्व र सांस्कृतिक कार्यक्रमहरूका ताजा समाचारहरू
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                  {item.category}
                </Badge>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{item.comments}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            थप समाचारहरू हेर्नुहोस्
          </Button>
        </div>
      </div>
    </section>
  );
}
