import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "../ui/separator";

type DocumentData = {
  title: string;
  content: string;
}

type Props = {
  documents: Array<DocumentData>;
}

export function ProjectDocumentsTabs({ documents }: Props) {
  return (
    <Tabs defaultValue={documents.at(0)?.title}>
      <TabsList className="bg-zinc-800/50 rounded-t-lg rounded-b-none">
        {documents.map((doc) => (
          <TabsTrigger
            key={doc.title} 
            value={doc.title}
            className="text-base"
          >
            {doc.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <Separator orientation="horizontal" />
      {documents.map((doc) => (
        <TabsContent key={doc.title} value={doc.title}>
          <div className="prose dark:prose-invert prose-p:text-[#d3d3d4] prose-h2:leading-[0]">
            <div dangerouslySetInnerHTML={{ __html: doc.content }} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
