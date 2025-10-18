import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="relative h-[calc(100vh-4rem)] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15288.22840904421!2d-49.247107653494886!3d-16.6740257455424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef18203645af1%3A0x38e558f13d41f9a7!2sSt.%20Leste%20Universitario%2C%20Goi%C3%A2nia%20-%20GO%2C%2074610-300!5e0!3m2!1spt-BR!2sbr!4v1760810353805!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="absolute top-4 left-4 z-10">
        <Card>
          <CardContent className="p-4">
            <h1 className="text-xl font-headline font-bold">
              Explore a Cultura
            </h1>
            <p className="text-muted-foreground">
              Encontre e capture pontos de interesse!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
