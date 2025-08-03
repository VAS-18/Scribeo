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
    <div className="p-4 bg-background border-t">
      <div className="max-w-3xl mx-auto">
        <form className="relative" onSubmit={handleSubmit}>
          <TextareaAutosize
            placeholder="Write Your Prompt here"
            rows={1}
            maxRows={6}
            value={input as string}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 pr-12 resize-none rounded-lg border shadow-sm focus:outline-none"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute top-1/2 right-3 transform -translate-y-1/2"
            disabled={!input.trim()}
          >
            <CaretCircleUpIcon size={24} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default InputArea;
