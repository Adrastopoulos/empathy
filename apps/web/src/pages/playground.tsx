import { NextPage } from "next";
import Head from "next/head";
import { api } from "~/utils/api";
import { Emotion } from "~/utils/types";

const Playground: NextPage = () => {
  const emotions = api.emotion.get.useQuery();
  return (
    <>
      <Head>
        <title>Empathy Playground</title>
        <meta name="description" content="The Empathy Playground" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            See your <span className="text-[hsl(280,100%,70%)]">Emotions!</span>
          </h1>
          <progress className="progress w-56 progress-primary"></progress>
          <progress className="progress w-56 progress-primary"></progress>
          <progress className="progress w-56 progress-primary"></progress>
          <progress className="progress w-56 progress-primary"></progress>
          <progress className="progress w-56 progress-primary"></progress>
          <progress className="progress w-56 progress-primary"></progress>
          <progress className="progress w-56 progress-primary"></progress>
        </div>
        <p>
          {emotions.data?.faces.map((face, index) => (
            <div key={index}>
              {face.map((emotion, index) => (
                <div key={index}>
                  <p>{Emotion[index]}</p>
                  <p>{emotion}</p>
                </div>
              ))}
            </div>
          ))}
        </p>
      </main>
    </>
  );
};

export default Playground;
