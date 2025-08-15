import { Button } from "@/components/ui/button";
import { CaretCircleUpIcon } from "@phosphor-icons/react";
import TextareaAutosize from "react-textarea-autosize";

interface InputAreaProps {
  input: String;
  setInput: (e: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputArea: React.FC<InputAreaProps> = ({
  input,
  setInput,
  handleSubmit,
}) => {
  return (
      <div className="p-4 min-w-2xl">
        <form className="relative" onSubmit={handleSubmit}>
          <TextareaAutosize
            placeholder="What are we scribing today?"
            rows={1}
            maxRows={6}
            value={input as string}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-5 resize-none rounded-full border shadow-sm focus:outline-none bg-background/80 backdrop-blur-3xl supports-[backdrop-filter]:bg-background/30 font-main font-bold"/>

          <Button
            type="submit"
            size="icon"
            className="absolute top-4 rounded-full right-4  bg-white backdrop-blur-3xl "
            disabled={!input.trim()}
          >
            <CaretCircleUpIcon size={30} />
          </Button>
        </form>
      </div>
  );
};

export default InputArea;
