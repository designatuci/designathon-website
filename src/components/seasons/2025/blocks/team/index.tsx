import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import DOTImage from "@components/common/dot-image";
import { LinkedinIconFill } from "@components/icons/linkedin";
import { corporate } from "@components/seasons/2025/blocks/team/tabs/corporate";
import { design } from "@components/seasons/2025/blocks/team/tabs/design";
import { directors } from "@components/seasons/2025/blocks/team/tabs/directors";
import { finance } from "@components/seasons/2025/blocks/team/tabs/finance";
import { marketing } from "@components/seasons/2025/blocks/team/tabs/marketing";
import { operations } from "@components/seasons/2025/blocks/team/tabs/operations";
import { cubicBezier, motion } from "motion/react";
import Link from "next/link";
import { ComponentProps } from "react";

export interface Profile {
  name: string;
  position: string;
  linkedInURL: string;
  imageURL: string;
}

function Team() {
  return (
    <section
      id="team"
      className="noise flex min-h-screen flex-col items-center gap-4 bg-(--blue) py-20 lg:py-32"
    >
      <div className="container text-white">
        <h2 className="text-center font-title text-3xl leading-tight font-bold sm:text-left sm:text-4xl lg:text-5xl xl:text-6xl">
          Meet the Team
        </h2>
        <p className="mb-8 text-center text-lg font-medium sm:text-left lg:text-2xl">
          Introducing the 2025 Design-a-thon Team!
        </p>
        <Tabs defaultValue="directors">
          <TabsList className="grid h-fit w-full grid-cols-2 bg-transparent sm:grid-cols-3 lg:flex lg:justify-start">
            <TeamTabTrigger value="directors">Directors</TeamTabTrigger>
            <TeamTabTrigger value="design">Design</TeamTabTrigger>
            <TeamTabTrigger value="operations">Operations</TeamTabTrigger>
            <TeamTabTrigger value="corporate">Corporate</TeamTabTrigger>
            <TeamTabTrigger value="finance">Finance</TeamTabTrigger>
            <TeamTabTrigger value="marketing">Marketing</TeamTabTrigger>
          </TabsList>
          <TabsContent value="directors">
            <TeamSection profiles={directors} />
          </TabsContent>
          <TabsContent value="design">
            <TeamSection profiles={design} />
          </TabsContent>
          <TabsContent value="operations">
            <TeamSection profiles={operations} />
          </TabsContent>
          <TabsContent value="corporate">
            <TeamSection profiles={corporate} />
          </TabsContent>
          <TabsContent value="finance">
            <TeamSection profiles={finance} />
          </TabsContent>
          <TabsContent value="marketing">
            <TeamSection profiles={marketing} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Team;

function TeamTabTrigger({
  children,
  ...props
}: ComponentProps<typeof TabsTrigger>) {
  return (
    <TabsTrigger
      className={cn(
        "rounded-full border-0 px-8 py-3 text-lg !text-white lg:w-fit lg:flex-none",
      )}
      {...props}
    >
      {children}
    </TabsTrigger>
  );
}

type TeamSectionProps = {
  profiles: Profile[];
};

function TeamSection({ profiles }: TeamSectionProps) {
  return (
    <div className="py-8 text-white">
      <div className="grid grid-cols-2 justify-items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-y-16 3xl:grid-cols-6">
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
              ease: cubicBezier(0.165, 0.84, 0.44, 1),
            }}
            className="flex flex-col items-center gap-2"
          >
            <div className="relative size-32 lg:size-40">
              <DOTImage
                src={
                  profile.imageURL || "/images/seasons/2025/landing/star.svg"
                }
                alt={profile.name}
                className="rounded-full border-[1px] border-white object-cover"
                sizes="25vw"
                fill
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-center text-xl font-semibold">
                {profile.name}
              </h3>
              <p className="text-center text-sm text-zinc-100">
                {profile.position}
              </p>
              <Link
                href={profile.linkedInURL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex w-fit items-center justify-center gap-2 rounded-md bg-[#E8F4FFCC] px-2 py-1 text-sm font-bold text-(--blue) [&_svg]:inline-block [&_svg]:size-4 [&_svg]:fill-(--blue)"
              >
                <LinkedinIconFill />
                Linkedin
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
