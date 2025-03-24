import DOTImage from "@components/common/dot-image";
import { Judge } from "@components/seasons/2025/blocks/judges";
import { Card, CardContent, CardHeader } from "@components/ui/card";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

type Props = {
  judge: Judge;
};

function JudgeCard({ judge }: Props) {
  return (
    <Card className="h-full w-full max-w-[350px] rounded-full border-0 bg-white/80 p-8">
      <CardHeader className="relative aspect-square overflow-hidden rounded-full bg-[#FEFCEB] p-0">
        <DOTImage
          alt={judge.name}
          src={judge.imageURL}
          fill
          sizes="(min-width: 0px) 50vw, (min-width: 768px) 25vw"
        />
      </CardHeader>
      <CardContent className="flex flex-grow flex-col items-center justify-between gap-6 pb-4 text-center text-[#824A32]">
        <div className="space-y-2">
          <h3 className="text-2xl leading-[1.1] font-bold">{judge.name}</h3>
          <p className="text-sm font-medium">{judge.position}</p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={judge.websiteURL}
            className="rounded-full bg-[#654A3F] p-2 text-white"
          >
            <LinkIcon />
          </Link>
          <Link
            href={judge.linkedInURL}
            className="rounded-full bg-[#654A3F] p-2 text-white"
          >
            <LinkIcon />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default JudgeCard;
