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
      <TabsList className="px-0.5 bg-zinc-800/50 rounded-t-lg rounded-b-none">
        {documents.map((doc) => (
          <TabsTrigger
            key={doc.title} 
            value={doc.title}
            className="text-base px-4"
          >
            {doc.title}
          </TabsTrigger>
        ))}
      </TabsList>
      <Separator orientation="horizontal" />
      {documents.map((doc) => (
        <TabsContent key={doc.title} value={doc.title}>
          <div className="prose prose-zinc dark:prose-invert prose-p:text-[#d3d3d4] prose-h2:leading-[0] prose-h3:mt-5 prose-h3:mb-2 prose-ul:pl-5 prose-ul:mb-0 prose-ul:mt-0 prose-li:pl-0.5 prose-li:my-1">
            <div dangerouslySetInnerHTML={{ __html: doc.content }} />
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
