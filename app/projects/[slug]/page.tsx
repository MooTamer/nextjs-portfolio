import axios from 'axios';
import { notFound } from "next/navigation";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

async function getProjectsFromGithub(username: string) {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  return response.data.map(repo => ({
    slug: repo.name,
    body: { code: repo.description || '' },
    published: true,
  }));
}

export async function generateStaticParams(): Promise<Props["params"][]> {
  const allProjects = await getProjectsFromGithub('MooTamer');
  return allProjects
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const allProjects = await getProjectsFromGithub('MooTamer');
  const slug = params?.slug;
  const project = allProjects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header project={project} />
      <ReportView slug={project.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={project.body.code} />
      </article>
    </div>
  );
}