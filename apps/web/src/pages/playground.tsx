import { NextPage } from "next";
import { PropsWithChildren } from "react";
import { FaCircleNotch } from "react-icons/fa";
import { BarGraph } from "~/components/BarGraph";
import { DoughnutGraph } from "~/components/DougnutGraph";
import { HistoryLineGraph } from "~/components/HistoryLineGraph";
import { Layout } from "~/components/Layout";
import { LineGraph } from "~/components/LineGraph";
import { Progress } from "~/components/Progress";
import { RadarGraph } from "~/components/RadarGraph";
import { Top } from "~/components/Top";
import { api } from "~/utils/api";

const Playground: NextPage<PropsWithChildren> = ({ children }) => {
  const emotions = api.emotion.get.useQuery(undefined, {
    refetchInterval: 2000,
  });

  if (emotions.isLoading)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <FaCircleNotch className="animate-spin" />
      </div>
    );

  if (emotions.isError)
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <h1 className="text-xl font-extrabold tracking-tight text-white ">
          Error
        </h1>
      </div>
    );

  return (
    <Layout>
      <div className="flex flex-col items-center w-full justify-center gap-12">
        <div className="w-full space-y-8 flex flex-col">
          <div className="flex flex-wrap space-x-8">
            <div className="flex-1 basis-3/5">
              <Progress emotions={emotions.data} />
            </div>
            <div className="flex-1 basis-1/5">
              <Top emotions={emotions.data} />
            </div>
          </div>
          <div className="flex flex-wrap space-x-8 items-center">
            <div className="flex-1">
              <DoughnutGraph emotions={emotions.data} />
            </div>
            <div className="flex-1 flex flex-col space-y-8">
              <BarGraph emotions={emotions.data} />
              <LineGraph emotions={emotions.data} />
            </div>
            <div className="flex-1">
              <RadarGraph emotions={emotions.data} />
            </div>
          </div>
          <div className="flex flex-wrap space-x-8">
            <HistoryLineGraph emotions={emotions.data} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Playground;
