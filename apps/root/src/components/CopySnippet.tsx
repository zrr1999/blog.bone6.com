import { toast } from "sonner";
import { copyText } from "@/lib/clipboard";

interface Props {
  text: string;
}

export default function CopySnippet({ text }: Props) {
  async function handleClick() {
    const ok = await copyText(text);
    if (ok) {
      toast.success("已复制");
    } else {
      toast.error("复制失败，请手动选择");
    }
  }

  return (
    <button
      type="button"
      aria-label="复制代码"
      className="mono text-xs text-(--subtle) transition-colors hover:text-(--accent)"
      onClick={handleClick}
    >
      复制
    </button>
  );
}
