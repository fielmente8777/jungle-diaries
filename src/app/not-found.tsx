import { Button, Container, Eyebrow, Lead, Note, Section } from "@/components/ui";

export default function NotFound() {
  return (
    <Section tone="deep" className="min-h-[60vh]">
      <Container>
        <Eyebrow>Page not found</Eyebrow>
        <h1 className="max-w-[16ch] text-page">This trail doesn&apos;t lead anywhere</h1>
        <Lead className="mt-[22px]">The page you were looking for has moved or never existed.</Lead>
        <Note className="mt-[22px]">Even the best naturalists take a wrong turn.</Note>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/plan-a-trip" variant="ghost">
            Plan a trip
          </Button>
        </div>
      </Container>
    </Section>
  );
}
