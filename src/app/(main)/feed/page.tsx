import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

export default function FeedPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-8">
        <Newspaper className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Feed Social</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Em Breve!</CardTitle>
          <CardDescription>
            O feed social está em construção. Em breve você poderá ver e comentar as capturas de outros exploradores!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
            <Newspaper className="h-16 w-16 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">Um feed de descobertas culturais aparecerá aqui.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
