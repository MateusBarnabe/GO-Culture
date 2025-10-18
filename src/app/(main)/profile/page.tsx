import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-4 mb-8">
        <User className="h-8 w-8 text-primary" />
        <h1 className="text-3xl font-bold font-headline">Meu Perfil</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Em Breve!</CardTitle>
          <CardDescription>
            Seu perfil de usuário está em construção. Em breve você poderá ver sua coleção, emblemas e subir de nível!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center text-center p-8 border-2 border-dashed rounded-lg">
            <User className="h-16 w-16 text-muted-foreground" />
            <p className="mt-4 text-muted-foreground">Sua coleção e conquistas serão exibidas aqui.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
