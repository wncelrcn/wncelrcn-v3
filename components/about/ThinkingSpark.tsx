import { FrameMark } from "@/components/about/FrameMark";
import { thinkingFrames, thinkingViewBox } from "@/components/about/thinking-frames";

export function ThinkingSpark() {
  return <FrameMark frames={thinkingFrames} viewBox={thinkingViewBox} motionClass="mark-spark" />;
}
