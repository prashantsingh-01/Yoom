"use client";

import { Call, CallRecording } from "@stream-io/video-react-sdk";
import Loader from "./Loader";
import { useGetCalls } from "@/hooks/useGetCalls";
import MeetingCard from "./MeetingCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
  const router = useRouter();
  const { endedCalls, upcomingCalls, callRecordings, isLoading } =
    useGetCalls();
  const [recordings, setRecordings] = useState<CallRecording[]>([]);

  useEffect(() => {
    const fetchRecordings = async () => {
      try {
        const callData = await Promise.all(
          (callRecordings ?? [])
            .filter((meeting) => !!meeting)
            .map((meeting) => meeting.queryRecordings())
        );

        const recordings = callData
          .filter((call) => call.recordings.length > 0)
          .flatMap((call) => call.recordings);

        setRecordings(recordings);
      } catch (error) {
        console.log(error);
        toast.error("Try again later.");
      }
    };

    if (type === "recordings") {
      fetchRecordings();
    }
  }, [type, callRecordings]);

  if (isLoading) return <Loader />;

  const calls = (() => {
    switch (type) {
      case "ended":
        return endedCalls;
      case "upcoming":
        return upcomingCalls;
      case "recordings":
        return recordings;
      default:
        return [];
    }
  })();

  const noCallsMessage = (() => {
    switch (type) {
      case "ended":
        return "No Previous Calls";
      case "upcoming":
        return "No Upcoming Calls";
      case "recordings":
        return "No Recordings";
      default:
        return "";
    }
  })();

  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
      {calls && calls.length > 0 ? (
        type === "recordings" ? (
          (calls as CallRecording[]).map((recording) => (
            <MeetingCard
              key={recording.url}
              icon="/icons/recordings.svg"
              title={recording.filename?.substring(0, 26) || "No Description"}
              date={new Date(recording.start_time).toLocaleString()}
              isPreviousMeeting={false}
              link={recording.url}
              buttonIcon1="/icons/play.svg"
              buttonText="Play"
              handleClick={() => router.push(recording.url)}
            />
          ))
        ) : (
          (calls as Call[]).map((call) => (
            <MeetingCard
              key={call.id}
              icon={
                type === "ended" ? "/icons/previous.svg" : "/icons/upcoming.svg"
              }
              title={call.state?.custom?.description || "No Description"}
              date={
                call.state?.startsAt
                  ? new Date(call.state.startsAt).toLocaleString()
                  : "Unknown Date"
              }
              isPreviousMeeting={type === "ended"}
              link={`${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${call.id}`}
              buttonText="Start"
              handleClick={() => router.push(`/meeting/${call.id}`)}
            />
          ))
        )
      ) : (
        <h1 className="text-2xl font-bold text-white">{noCallsMessage}</h1>
      )}
    </div>
  );
};

export default CallList;
